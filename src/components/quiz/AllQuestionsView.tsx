import { Check, X } from 'lucide-react';
import type { QuizQuestion } from '../quizData';

interface AllQuestionsViewProps {
    questions: QuizQuestion[];
    onBack: () => void;
}

const AllQuestionsView = ({ questions, onBack }: AllQuestionsViewProps) => {
    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-8 gap-4 flex-wrap">
                <div className="flex flex-col">
                    <span className="text-[10px] text-purple-200/40 font-black uppercase tracking-[0.2em] mb-1">Widok nauki</span>
                    <h2 className="text-xl font-bold text-white tracking-tight">Wszystkie pytania z odpowiedziami</h2>
                </div>
                <button
                    onClick={onBack}
                    className="px-6 py-3 bg-white/10 text-white rounded-xl font-bold hover:bg-white/20 transition-all border border-white/10"
                >
                    Wróć do quizu
                </button>
            </div>

            <div className="space-y-8">
                {questions.map((q, qIndex) => (
                    <div key={q.id} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-1 w-6 bg-purple-500 rounded-full" />
                            <span className="text-purple-300 font-bold text-xs uppercase tracking-widest">Pytanie {qIndex + 1}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-6">
                            {q.question}
                        </h3>

                        <div className="grid grid-cols-1 gap-3">
                            {q.options.map((option, oIndex) => {
                                const isCorrect = q.correct.includes(oIndex);
                                return (
                                    <div
                                        key={`${q.id}-${oIndex}`}
                                        className={`flex items-start gap-4 p-4 rounded-xl border ${
                                            isCorrect
                                                ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-500/30'
                                                : 'bg-white/5 border-white/5'
                                        }`}
                                    >
                                        <div className={`mt-0.5 w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center ${
                                            isCorrect ? 'bg-green-500/20 text-green-400' : 'bg-white/5 text-white/30'
                                        }`}>
                                            {isCorrect ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
                                        </div>
                                        <span className={`text-base ${isCorrect ? 'text-green-100 font-medium' : 'text-white/60'}`}>
                                            {option}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        
                        {q.explanation && (
                            <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                                <span className="block text-xs font-bold text-blue-300 uppercase mb-1">Wyjaśnienie</span>
                                <p className="text-blue-100/80 text-sm">{q.explanation}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                <button
                    onClick={onBack}
                    className="px-8 py-4 bg-white text-purple-900 rounded-2xl font-black text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95 transition-all"
                >
                    Wróć do quizu
                </button>
            </div>
        </div>
    );
};

export default AllQuestionsView;
