import { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import { quizData, type QuizQuestion } from './quizData';

// Sub-components
import Navbar from './quiz/Navbar';
import LibraryModal from './quiz/LibraryModal';
import ProgressBar from './quiz/ProgressBar';
import QuestionCard from './quiz/QuestionCard';
import ResultsView from './quiz/ResultsView';

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

    if (shuffledQuestions.length === 0) {
        return <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">Ładowanie quizu...</div>;
    }

    return (
        <div className="min-h-screen bg-indigo-900 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center relative overflow-x-hidden">
            <Navbar
                activePoolName={activePoolName}
                loadPool={loadPool}
                startRandomTest={startRandomTest}
                setShowLibraryModal={setShowLibraryModal}
            />

            <LibraryModal
                isOpen={showLibraryModal}
                onClose={() => setShowLibraryModal(false)}
                activePoolName={activePoolName}
                loadPool={loadPool}
                savedPools={savedPools}
                externalPools={externalPools}
                downloadPoolAsJSON={downloadPoolAsJSON}
                deletePool={deletePool}
            />

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
                        <ResultsView
                            score={score}
                            totalQuestions={shuffledQuestions.length}
                            shuffledQuestions={shuffledQuestions}
                            getUserAnswerStatus={getUserAnswerStatus}
                            selectedAnswers={selectedAnswers}
                            newPoolName={newPoolName}
                            setNewPoolName={setNewPoolName}
                            onSavePool={savePool}
                            onResetQuiz={resetQuiz}
                            onExportPool={exportPoolToJSON}
                            onResetToFull={resetToFullPool}
                        />
                    ) : (
                        <>
                            <ProgressBar
                                currentQuestion={currentQuestion}
                                totalQuestions={shuffledQuestions.length}
                            />
                            <QuestionCard
                                questionData={shuffledQuestions[currentQuestion]}
                                userAnswers={selectedAnswers[currentQuestion] || []}
                                onToggleAnswer={handleAnswerToggle}
                                currentQuestionIndex={currentQuestion}
                                totalQuestions={shuffledQuestions.length}
                                onPrev={prevQuestion}
                                onNext={nextQuestion}
                                onCalculate={calculateScore}
                            />
                        </>
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
