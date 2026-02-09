import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import type { QuizQuestion } from '../quizData';

interface QuestionCardProps {
    questionData: QuizQuestion;
    userAnswers: number[];
    onToggleAnswer: (index: number) => void;
    currentQuestionIndex: number;
    totalQuestions: number;
    onPrev: () => void;
    onNext: () => void;
    onCalculate: () => void;
}

const QuestionCard = ({
    questionData,
    userAnswers,
    onToggleAnswer,
    currentQuestionIndex,
    totalQuestions,
    onPrev,
    onNext,
    onCalculate
}: QuestionCardProps) => {
    const isFirst = currentQuestionIndex === 0;
    const isLast = currentQuestionIndex === totalQuestions - 1;

    return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Question Card */}
            <div className="mb-12">
                <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="h-1 w-8 bg-purple-500 rounded-full" />
                        <span className="text-purple-300 font-bold text-xs uppercase tracking-widest">Question Details</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white leading-tight min-h-[4rem]">
                        {questionData.question}
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {questionData.options.map((option, index) => (
                        <button
                            key={`${questionData.id}-${index}`}
                            onClick={() => onToggleAnswer(index)}
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
                        onClick={onPrev}
                        disabled={isFirst}
                        className="px-8 py-4 bg-white/5 text-white rounded-2xl font-bold hover:bg-white/10 transition-all disabled:opacity-20 disabled:cursor-not-allowed flex items-center justify-center gap-3 border border-white/10"
                    >
                        <ChevronLeft className="w-6 h-6" />
                        <span className="hidden sm:inline">Poprzednie</span>
                    </button>

                    {isLast ? (
                        <button
                            onClick={onCalculate}
                            className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-2xl font-black text-xl hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl"
                        >
                            <Check className="w-7 h-7" />
                            Zakończ i oceń
                        </button>
                    ) : (
                        <button
                            onClick={onNext}
                            className="flex-1 bg-white text-purple-900 py-4 rounded-2xl font-black text-xl hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl"
                        >
                            Kontynuuj
                            <ChevronRight className="w-7 h-7" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
