import { Check, X, Save, Plus, RotateCcw, Download, Trash2 } from 'lucide-react';
import type { QuizQuestion } from '../quizData';

interface ResultsViewProps {
    score: number;
    totalQuestions: number;
    shuffledQuestions: QuizQuestion[];
    getUserAnswerStatus: (index: number) => string;
    selectedAnswers: Record<number, number[]>;
    newPoolName: string;
    setNewPoolName: (name: string) => void;
    onSavePool: (name: string, ids: number[]) => void;
    onResetQuiz: () => void;
    onExportPool: () => void;
    onResetToFull: () => void;
}

const ResultsView = ({
    score,
    totalQuestions,
    shuffledQuestions,
    getUserAnswerStatus,
    selectedAnswers,
    newPoolName,
    setNewPoolName,
    onSavePool,
    onResetQuiz,
    onExportPool,
    onResetToFull
}: ResultsViewProps) => {
    return (
        <div className="animate-in fade-in zoom-in-95 duration-500">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-black text-white mb-6 tracking-tighter">Wyniki Quizu</h1>
                <div className="inline-block relative">
                    <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-2">
                        {score}<span className="text-4xl text-white/20 mx-2">/</span>{totalQuestions}
                    </div>
                    <div className="absolute -top-4 -right-8 bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        {Math.round((score / totalQuestions) * 100)}%
                    </div>
                </div>
                <p className="text-white/60 font-medium">
                    {score === totalQuestions ? 'Doskonale! Wszystko poprawnie.' : 'Dobra robota, ćwicz dalej!'}
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
                {score < totalQuestions && (
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
                                    onSavePool(newPoolName, failedIds);
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
                        onClick={onResetQuiz}
                        className="bg-white text-purple-900 py-4 rounded-2xl font-black text-lg hover:scale-[1.03] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 lg:col-span-1"
                    >
                        <RotateCcw className="w-6 h-6" />
                        {score === totalQuestions ? 'Jeszcze raz' : 'Powtórz błędy'}
                    </button>

                    <button
                        onClick={onExportPool}
                        className="bg-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/20 transition-all border border-white/10 flex items-center justify-center gap-3"
                    >
                        <Download className="w-5 h-5" />
                        Eksportuj (.json)
                    </button>

                    <button
                        onClick={onResetToFull}
                        className="bg-red-500/20 text-red-300 py-4 rounded-2xl font-bold hover:bg-red-500/30 transition-all border border-red-500/20 flex items-center justify-center gap-3 md:col-span-2 lg:col-span-1"
                    >
                        <Trash2 className="w-5 h-5" />
                        Główna baza
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultsView;
