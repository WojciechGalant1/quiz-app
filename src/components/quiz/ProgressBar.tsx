interface ProgressBarProps {
    currentQuestion: number;
    totalQuestions: number;
}

const ProgressBar = ({ currentQuestion, totalQuestions }: ProgressBarProps) => {
    const progress = Math.round(((currentQuestion + 1) / totalQuestions) * 100);

    return (
        <div className="mb-10 group">
            <div className="flex justify-between items-end mb-3">
                <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.2em]">Postęp nauki</span>
                <span className="text-white font-black text-xl">{progress}%</span>
            </div>
            <div className="w-full bg-white/5 rounded-full h-4 p-1 border border-white/10 backdrop-blur-md">
                <div
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 h-2 rounded-full transition-all duration-700 ease-out shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
