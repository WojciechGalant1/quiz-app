import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Check, X, RotateCcw, BookOpen, Download, Trash2, Save, Plus, Layers } from 'lucide-react';
import { quizData, type QuizQuestion } from './quizData';

const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const QuizApp = () => {
    // Pool Library State
    const [savedPools, setSavedPools] = useState<Record<string, number[]>>(() => {
        const saved = localStorage.getItem('quiz_library');
        return saved ? JSON.parse(saved) : {};
    });
    const [externalPools, setExternalPools] = useState<{ name: string, filename: string }[]>([]);
    const [activePoolName, setActivePoolName] = useState<string>(() => {
        return localStorage.getItem('active_pool_name') || 'Wszystkie pytania';
    });

    const [currentPool, setCurrentPool] = useState<QuizQuestion[]>(() => {
        const savedIds = localStorage.getItem('quiz_pool_ids');
        if (savedIds) {
            try {
                const ids = JSON.parse(savedIds) as number[];
                const persisted = quizData.filter(q => ids.includes(q.id));
                return persisted.length > 0 ? persisted : quizData;
            } catch (e) {
                return quizData;
            }
        }
        return quizData;
    });

    const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number[]>>({});
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [newPoolName, setNewPoolName] = useState('');
    const [showLibraryModal, setShowLibraryModal] = useState(false);

    const prepareQuiz = (pool: QuizQuestion[]) => {
        const randomized = shuffleArray(pool).map(q => {
            const optionsWithIndices = q.options.map((option, idx) => ({
                text: option,
                isCorrect: q.correct.includes(idx)
            }));
            const shuffledOptions = shuffleArray(optionsWithIndices);

            return {
                ...q,
                options: shuffledOptions.map(o => o.text),
                correct: shuffledOptions
                    .map((o, idx) => o.isCorrect ? idx : -1)
                    .filter(idx => idx !== -1)
            };
        });
        setShuffledQuestions(randomized);
    };

    // Persistence Effects
    useEffect(() => {
        localStorage.setItem('quiz_library', JSON.stringify(savedPools));
    }, [savedPools]);

    useEffect(() => {
        localStorage.setItem('active_pool_name', activePoolName);
    }, [activePoolName]);

    useEffect(() => {
        const ids = currentPool.map(q => q.id);
        localStorage.setItem('quiz_pool_ids', JSON.stringify(ids));
    }, [currentPool]);

    useEffect(() => {
        prepareQuiz(currentPool);
    }, []);

    // Fetch external registry on mount
    useEffect(() => {
        fetch('/pools/registry.json')
            .then(res => res.json())
            .then(data => {
                if (data.externalPools) setExternalPools(data.externalPools);
            })
            .catch(() => console.log('Brak zewnętrznej bazy pul (registry.json)'));
    }, []);

    // Pool Management
    const savePool = (name: string, ids: number[]) => {
        if (!name.trim()) return;
        setSavedPools(prev => ({ ...prev, [name]: ids }));
        setActivePoolName(name);
        setNewPoolName('');
    };

    const deletePool = (name: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setSavedPools(prev => {
            const next = { ...prev };
            delete next[name];
            return next;
        });
        if (activePoolName === name) {
            resetToFullPool();
        }
    };

    const loadPool = async (name: string, isExternal: boolean = false) => {
        let poolToLoad = quizData;

        if (name !== 'Wszystkie pytania') {
            if (isExternal) {
                const ext = externalPools.find(p => p.name === name);
                if (ext) {
                    try {
                        const res = await fetch(`/pools/${ext.filename}`);
                        const data = await res.json();
                        poolToLoad = data;
                    } catch (e) {
                        alert('Błąd wczytywania pliku puli!');
                        return;
                    }
                }
            } else {
                const ids = savedPools[name];
                poolToLoad = quizData.filter(q => ids.includes(q.id));
            }
        }

        setActivePoolName(name);
        setCurrentPool(poolToLoad);
        prepareQuiz(poolToLoad);
        setCurrentQuestion(0);
        setSelectedAnswers({});
        setShowResults(false);
        setScore(0);
        setShowLibraryModal(false);
    };

    const startRandomTest = () => {
        const shuffled = shuffleArray(quizData);
        const random40 = shuffled.slice(0, 40);

        setActivePoolName('Losowe 40 pytań');
        setCurrentPool(random40);
        prepareQuiz(random40);
        setCurrentQuestion(0);
        setSelectedAnswers({});
        setShowResults(false);
        setScore(0);
        setShowLibraryModal(false);
    };

    const downloadPoolAsJSON = (name: string, pool: QuizQuestion[]) => {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(pool, null, 2));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", `${name.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.json`);
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    };

    const exportPoolToJSON = () => {
        downloadPoolAsJSON(activePoolName, currentPool);
    };

    if (shuffledQuestions.length === 0) {
        return <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Ładowanie quizu...</div>;
    }

    const currentQData = shuffledQuestions[currentQuestion];
    const userAnswers = selectedAnswers[currentQuestion] || [];

    const handleAnswerToggle = (optionIndex: number) => {
        const current = selectedAnswers[currentQuestion] || [];
        const newSelected = current.includes(optionIndex)
            ? current.filter(i => i !== optionIndex)
            : [...current, optionIndex];

        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestion]: newSelected
        });
    };

    const nextQuestion = () => {
        if (currentQuestion < shuffledQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const prevQuestion = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const calculateScore = () => {
        let correctCount = 0;
        shuffledQuestions.forEach((q, index) => {
            const userAnswer = selectedAnswers[index] || [];
            const correctAnswer = q.correct;

            if (userAnswer.length === correctAnswer.length &&
                userAnswer.every(a => correctAnswer.includes(a))) {
                correctCount++;
            }
        });
        setScore(correctCount);
        setShowResults(true);
    };

    const resetQuiz = () => {
        const failedIds = shuffledQuestions
            .filter((_, index) => getUserAnswerStatus(index) !== 'correct')
            .map(q => q.id);

        if (failedIds.length > 0) {
            const newPool = quizData.filter(q => failedIds.includes(q.id));
            setCurrentPool(newPool);
            prepareQuiz(newPool);
            setActivePoolName(`Błędy z ${new Date().toLocaleTimeString()}`);
        } else {
            resetToFullPool();
        }

        setCurrentQuestion(0);
        setSelectedAnswers({});
        setShowResults(false);
        setScore(0);
    };

    const resetToFullPool = () => {
        loadPool('Wszystkie pytania');
    };

    const getUserAnswerStatus = (questionIndex: number) => {
        const userAnswer = selectedAnswers[questionIndex] || [];
        const correctAnswer = shuffledQuestions[questionIndex].correct;

        if (userAnswer.length === 0 && correctAnswer.length > 0) return 'unanswered';

        if (userAnswer.length === correctAnswer.length &&
            userAnswer.every(a => correctAnswer.includes(a))) {
            return 'correct';
        }
        return 'incorrect';
    };

    return (
        <div className="min-h-screen bg-indigo-900 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center relative overflow-x-hidden">
            {/* Navbar */}
            <nav className="w-full bg-black/40 backdrop-blur-md border-b border-white/10 p-4 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 shrink-0">
                        <BookOpen className="w-7 h-7 text-purple-400" />
                        <h1 className="text-xl font-bold text-white tracking-tight hidden sm:block">Quiz SI</h1>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                        <button
                            onClick={() => loadPool('Wszystkie pytania')}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activePoolName === 'Wszystkie pytania'
                                ? 'bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            Główna
                        </button>

                        <button
                            onClick={startRandomTest}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activePoolName === 'Losowe 40 pytań'
                                ? 'bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]'
                                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            Szybki test
                        </button>

                        <button
                            onClick={() => setShowLibraryModal(true)}
                            className="px-4 py-2 rounded-xl text-sm font-bold bg-white/10 text-white hover:bg-white/20 transition-all flex items-center gap-2 whitespace-nowrap"
                        >
                            <Layers className="w-4 h-4" />
                            Biblioteka
                        </button>
                    </div>
                </div>
            </nav>

            {/* Library Modal */}
            {showLibraryModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setShowLibraryModal(false)}
                    />
                    <div className="bg-slate-900 border border-white/10 w-full max-w-3xl rounded-3xl shadow-2xl z-10 flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-300">
                        {/* Modal Header */}
                        <div className="p-6 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-purple-500/20 rounded-xl">
                                    <Layers className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-tight">Biblioteka Pytań</h3>
                                    <p className="text-xs text-white/30 uppercase font-black tracking-widest leading-none mt-1">Wybierz zestaw do nauki</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowLibraryModal(false)}
                                className="p-2 hover:bg-white/5 rounded-full text-white/40 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                            <div className="space-y-8">
                                {/* Base Pool */}
                                <div>
                                    <h4 className="text-[10px] uppercase font-black text-white/20 mb-3 px-1 tracking-widest">Główna baza pytań</h4>
                                    <button
                                        onClick={() => loadPool('Wszystkie pytania')}
                                        className={`w-full p-5 rounded-2xl text-left border-2 transition-all flex items-center justify-between group ${activePoolName === 'Wszystkie pytania'
                                            ? 'bg-purple-500/20 border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.1)]'
                                            : 'bg-white/5 border-white/5 hover:border-white/10'
                                            }`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`p-3 rounded-xl transition-colors ${activePoolName === 'Wszystkie pytania' ? 'bg-purple-500 text-white' : 'bg-white/5 text-white/40'}`}>
                                                <BookOpen className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-white text-lg">Wszystkie pytania</p>
                                                <p className="text-white/30 text-xs">Pełna baza z quizData.tsx (~155 pytań)</p>
                                            </div>
                                        </div>
                                        {activePoolName === 'Wszystkie pytania' && <Check className="w-6 h-6 text-purple-400" />}
                                    </button>
                                </div>

                                {/* Saved Pools */}
                                <div>
                                    <h4 className="text-[10px] uppercase font-black text-white/20 mb-3 px-1 tracking-widest">Twoje Zapisane Pule (Local Storage)</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {Object.keys(savedPools).map(name => (
                                            <button
                                                key={name}
                                                onClick={() => loadPool(name)}
                                                className={`p-4 rounded-xl text-left border-2 transition-all flex items-center justify-between group ${activePoolName === name
                                                    ? 'bg-blue-500/20 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.1)]'
                                                    : 'bg-white/5 border-white/5 hover:border-white/10'
                                                    }`}
                                            >
                                                <div className="flex flex-col">
                                                    <span className="text-white font-bold">{name}</span>
                                                    <span className="text-white/30 text-xs">{savedPools[name].length} pytań</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    {activePoolName === name && <Check className="w-4 h-4 text-blue-400 mr-1" />}
                                                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                const ids = savedPools[name];
                                                                const poolToExport = quizData.filter(q => ids.includes(q.id));
                                                                downloadPoolAsJSON(name, poolToExport);
                                                            }}
                                                            className="p-1.5 hover:bg-white/10 rounded-lg text-blue-400"
                                                            title="Eksportuj"
                                                        >
                                                            <Download className="w-4 h-4" />
                                                        </button>
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                deletePool(name, e);
                                                            }}
                                                            className="p-1.5 hover:bg-white/10 rounded-lg text-red-400"
                                                            title="Usuń"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </button>
                                        ))}
                                        {Object.keys(savedPools).length === 0 && (
                                            <div className="md:col-span-2 py-8 text-center border-2 border-dashed border-white/5 rounded-2xl text-white/20 text-sm">
                                                Brak zapisanych pul
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* External Pools */}
                                {externalPools.length > 0 && (
                                    <div>
                                        <h4 className="text-[10px] uppercase font-black text-white/20 mb-3 px-1 tracking-widest">Pliki Serwera (public/pools)</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {externalPools.map(pool => (
                                                <button
                                                    key={pool.filename}
                                                    onClick={() => loadPool(pool.name, true)}
                                                    className={`p-4 rounded-xl text-left border-2 transition-all flex items-center justify-between group ${activePoolName === pool.name
                                                        ? 'bg-emerald-500/20 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.1)]'
                                                        : 'bg-white/5 border-white/5 hover:border-white/10'
                                                        }`}
                                                >
                                                    <div className="flex flex-col">
                                                        <span className="text-white font-bold">{pool.name}</span>
                                                        <span className="text-white/30 text-xs">Gotowy zestaw zadań</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        {activePoolName === pool.name && <Check className="w-4 h-4 text-emerald-400" />}
                                                        <button
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                fetch(`/pools/${pool.filename}`)
                                                                    .then(res => res.json())
                                                                    .then(data => downloadPoolAsJSON(pool.name, data));
                                                            }}
                                                            className="p-1.5 hover:bg-white/10 rounded-lg text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                                            title="Eksportuj"
                                                        >
                                                            <Download className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Background elements */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-500/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Main Content Area */}
            <main className="max-w-4xl w-full z-10 p-6 flex-1 flex flex-col justify-center">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-purple-200/40 font-black uppercase tracking-[0.2em] mb-1">Aktualna Pula</span>
                            <h2 className="text-xl font-bold text-white tracking-tight truncate max-w-[250px] sm:max-w-md">{activePoolName}</h2>
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                onClick={resetToFullPool}
                                className="text-white/40 hover:text-white transition-colors group p-2 bg-white/5 rounded-xl border border-white/10"
                                title="Resetuj do pełnej puli"
                            >
                                <RotateCcw className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform" />
                            </button>
                            <div className="text-white/90 font-bold bg-white/10 px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md">
                                {currentQuestion + 1} <span className="text-white/40 font-normal">/</span> {shuffledQuestions.length}
                            </div>
                        </div>
                    </div>

                    {showResults ? (
                        <div className="animate-in fade-in zoom-in-95 duration-500">
                            <div className="text-center mb-10">
                                <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">Wyniki Quizu</h1>
                                <div className="inline-block relative">
                                    <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-2">
                                        {score}<span className="text-4xl text-white/20 mx-2">/</span>{shuffledQuestions.length}
                                    </div>
                                    <div className="absolute -top-4 -right-8 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        {Math.round((score / shuffledQuestions.length) * 100)}%
                                    </div>
                                </div>
                                <p className="text-white/60 font-medium">
                                    {score === shuffledQuestions.length ? 'Doskonale! Wszystko poprawnie.' : 'Dobra robota, ćwicz dalej!'}
                                </p>
                            </div>

                            <div className="space-y-4 mb-10 max-h-[35vh] overflow-y-auto pr-4 custom-scrollbar">
                                {shuffledQuestions.map((q, index) => {
                                    const status = getUserAnswerStatus(index);
                                    const userAnswer = selectedAnswers[index] || [];
                                    return (
                                        <div
                                            key={`${q.id}-${index}`}
                                            className={`p-6 rounded-2xl border-2 transition-all ${status === 'correct'
                                                ? 'bg-green-500/10 border-green-500/30'
                                                : status === 'incorrect'
                                                    ? 'bg-red-500/10 border-red-500/30'
                                                    : 'bg-white/5 border-white/10'
                                                }`}
                                        >
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="mt-1">
                                                    {status === 'correct' ? <Check className="w-6 h-6 text-green-400" /> : <X className="w-6 h-6 text-red-400" />}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex justify-between items-center mb-1">
                                                        <h3 className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Pytanie {index + 1}</h3>
                                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${status === 'correct' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                                            {status === 'correct' ? 'OK' : 'BŁĄD'}
                                                        </span>
                                                    </div>
                                                    <p className="text-white font-bold leading-relaxed">{q.question}</p>
                                                </div>
                                            </div>

                                            <div className="space-y-2 ml-10">
                                                {q.options.map((option, optIdx) => {
                                                    const isCorrect = q.correct.includes(optIdx);
                                                    const isSelected = userAnswer.includes(optIdx);

                                                    let borderClass = 'border-white/5';
                                                    let bgClass = 'bg-white/5';
                                                    let textClass = 'text-white/60';
                                                    let Icon = null;

                                                    if (isCorrect) {
                                                        bgClass = 'bg-green-500/20';
                                                        borderClass = 'border-green-500/30';
                                                        textClass = 'text-green-300 font-semibold';
                                                        Icon = Check;
                                                    } else if (isSelected && !isCorrect) {
                                                        bgClass = 'bg-red-500/20';
                                                        borderClass = 'border-red-500/30';
                                                        textClass = 'text-red-300';
                                                        Icon = X;
                                                    }

                                                    return (
                                                        <div key={optIdx} className={`p-3 rounded-xl border-2 flex items-center justify-between text-sm transition-all ${bgClass} ${borderClass} ${textClass}`}>
                                                            <span>{option}</span>
                                                            {Icon && <Icon className="w-4 h-4 flex-shrink-0 ml-2" />}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="space-y-6">
                                {/* Save section if there are errors */}
                                {score < shuffledQuestions.length && (
                                    <div className="p-6 bg-white/5 rounded-2xl border border-white/10 ring-1 ring-purple-500/20">
                                        <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                            <Save className="w-4 h-4 text-purple-400" />
                                            Zapisz trudne pytania
                                        </h4>
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="Nazwa puli (np. Kolokwium 1)..."
                                                value={newPoolName}
                                                onChange={(e) => setNewPoolName(e.target.value)}
                                                className="flex-1 bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 transition-all"
                                            />
                                            <button
                                                onClick={() => {
                                                    const failedIds = shuffledQuestions
                                                        .filter((_, index) => getUserAnswerStatus(index) !== 'correct')
                                                        .map(q => q.id);
                                                    savePool(newPoolName, failedIds);
                                                }}
                                                disabled={!newPoolName.trim()}
                                                className="bg-purple-600 hover:bg-purple-500 text-white px-6 rounded-xl font-bold transition-all disabled:opacity-50 disabled:grayscale flex items-center gap-2"
                                            >
                                                <Plus className="w-5 h-5" />
                                                Zapisz
                                            </button>
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <button
                                        onClick={resetQuiz}
                                        className="bg-white text-purple-900 py-4 rounded-2xl font-black text-lg hover:scale-[1.03] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 lg:col-span-1"
                                    >
                                        <RotateCcw className="w-6 h-6" />
                                        {score === shuffledQuestions.length ? 'Jeszcze raz' : 'Powtórz błędy'}
                                    </button>

                                    <button
                                        onClick={exportPoolToJSON}
                                        className="bg-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center gap-3"
                                    >
                                        <Download className="w-5 h-5" />
                                        Eksportuj (.json)
                                    </button>

                                    <button
                                        onClick={resetToFullPool}
                                        className="bg-red-500/20 text-red-300 py-4 rounded-2xl font-bold hover:bg-red-500/30 transition-all border border-red-500/20 flex items-center justify-center gap-3 md:col-span-2 lg:col-span-1"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                        Główna baza
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Progress bar */}
                            <div className="mb-10 group">
                                <div className="flex justify-between items-end mb-3">
                                    <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">Postęp nauki</span>
                                    <span className="text-white font-black text-xl">{Math.round(((currentQuestion + 1) / shuffledQuestions.length) * 100)}%</span>
                                </div>
                                <div className="w-full bg-white/5 rounded-full h-4 p-1 border border-white/10 backdrop-blur-md">
                                    <div
                                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 h-2 rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                                        style={{ width: `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%` }}
                                    />
                                </div>
                            </div>

                            {/* Question Card */}
                            <div className="mb-12">
                                <div className="mb-8">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="h-1 w-8 bg-purple-500 rounded-full" />
                                        <span className="text-purple-300 font-bold text-xs uppercase tracking-widest">Question Details</span>
                                    </div>
                                    <h2 className="text-3xl font-bold text-white leading-tight min-h-[4rem]">
                                        {currentQData.question}
                                    </h2>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {currentQData.options.map((option, index) => (
                                        <button
                                            key={`${currentQData.id}-${index}`}
                                            onClick={() => handleAnswerToggle(index)}
                                            className={`group relative w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${userAnswers.includes(index)
                                                ? 'bg-gradient-to-r from-purple-600/40 to-pink-600/40 border-purple-400/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] scale-[1.01]'
                                                : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                                                }`}
                                        >
                                            <div className="flex items-start gap-5">
                                                <div className={`mt-1 w-7 h-7 rounded-xl border-2 flex-shrink-0 flex items-center justify-center transition-all duration-300 ${userAnswers.includes(index)
                                                    ? 'bg-white border-white'
                                                    : 'border-white/20 group-hover:border-white/40'
                                                    }`}>
                                                    {userAnswers.includes(index) && <Check className="w-4 h-4 text-purple-600" />}
                                                </div>
                                                <span className={`text-lg transition-colors border-white/40 ${userAnswers.includes(index) ? 'text-white font-bold' : 'text-white/80'
                                                    }`}>
                                                    {option}
                                                </span>
                                            </div>
                                            {/* Subtle hover indicator */}
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Footer Navigation */}
                            <div className="pt-8 border-t border-white/10">
                                <div className="flex items-center justify-center mb-6">
                                    <span className="text-white/40 text-sm font-medium">
                                        Wybierz poprawne odpowiedzi
                                    </span>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={prevQuestion}
                                        disabled={currentQuestion === 0}
                                        className="px-8 py-4 bg-white/5 text-white rounded-2xl font-bold hover:bg-white/10 transition-all disabled:opacity-20 disabled:cursor-not-allowed flex items-center justify-center gap-3 border border-white/10"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                        <span className="hidden sm:inline">Poprzednie</span>
                                    </button>

                                    {currentQuestion === shuffledQuestions.length - 1 ? (
                                        <button
                                            onClick={calculateScore}
                                            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-2xl font-black text-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl"
                                        >
                                            <Check className="w-7 h-7" />
                                            Zakończ i oceń
                                        </button>
                                    ) : (
                                        <button
                                            onClick={nextQuestion}
                                            className="flex-1 bg-white text-purple-900 py-4 rounded-2xl font-black text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl"
                                        >
                                            Kontynuuj
                                            <ChevronRight className="w-7 h-7" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer simple info */}
                <div className="mt-8 text-center">
                    <p className="text-white/30 text-xs font-bold uppercase tracking-[0.3em]">AI Quiz Master Pro v2.0</p>
                </div>
            </main>

            {/* Global Scrollbar Customization */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.3); }
            `}} />
        </div>
    );
};

export default QuizApp;
