import { BookOpen, Layers } from 'lucide-react';

interface NavbarProps {
    activePoolName: string;
    loadPool: (name: string) => void;
    startRandomTest: () => void;
    setShowLibraryModal: (show: boolean) => void;
}

const Navbar = ({ activePoolName, loadPool, startRandomTest, setShowLibraryModal }: NavbarProps) => {
    return (
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
    );
};

export default Navbar;
