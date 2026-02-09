import React from 'react';
import { X, Layers, BookOpen, Check, Download, Trash2 } from 'lucide-react';
import { quizData, type QuizQuestion } from '../quizData';

interface LibraryModalProps {
    isOpen: boolean;
    onClose: () => void;
    activePoolName: string;
    loadPool: (name: string, isExternal?: boolean) => void;
    savedPools: Record<string, number[]>;
    externalPools: { name: string, filename: string }[];
    downloadPoolAsJSON: (name: string, pool: QuizQuestion[]) => void;
    deletePool: (name: string, e: React.MouseEvent) => void;
}

const LibraryModal = ({
    isOpen,
    onClose,
    activePoolName,
    loadPool,
    savedPools,
    externalPools,
    downloadPoolAsJSON,
    deletePool
}: LibraryModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
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
                        onClick={onClose}
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
                                                    onClick={(e) => deletePool(name, e)}
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
    );
};

export default LibraryModal;
