import type { Wallpaper } from "@/pages/api/pictures/wallpaper";
import { useEffect, useCallback } from "react";
import { Icons } from "@/icons";

interface WallpaperPreviewModalProps {
    isOpen: boolean;
    onClose: () => void;
    wallpaper: Wallpaper;
    onNext: () => void;
    onPrev: () => void;
    isMobile?: boolean; // Determines which device shell to show
}

export function WallpaperPreviewModal({
    isOpen,
    onClose,
    wallpaper,
    onNext,
    onPrev,
    isMobile,
}: WallpaperPreviewModalProps) {
    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") onNext();
            if (e.key === "ArrowLeft") onPrev();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose, onNext, onPrev]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300" onClick={onClose}>

            {/* Close Button - Floating top right */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
            >
                <Icons.Close className="w-8 h-8" />
            </button>

            <div
                className="relative flex flex-col md:flex-row w-full max-w-7xl h-full md:h-[90vh] items-center justify-center gap-8"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
            >

                {/* Left Side: Device Preview */}
                <div
                    className={`flex-1 flex items-center justify-center w-full h-full relative p-8 rounded-2xl border border-white/10 ${isMobile ? '' : 'bg-black/40 backdrop-blur-xl'}`}
                >
                    {isMobile ? (
                        <MobileDeviceShell wallpaper={wallpaper} />
                    ) : (
                        <LaptopDeviceShell wallpaper={wallpaper} />
                    )}
                </div>

                {/* Right Side: Info & Actions - Floating Glass Card */}
                <div className="w-full md:w-80 lg:w-96 flex flex-col p-6 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 text-white shadow-2xl overflow-y-auto max-h-[40vh] md:max-h-full">
                    <h2 className="text-xl md:text-2xl font-bold mb-3 text-white">{wallpaper.title}</h2>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {wallpaper.keywords.split(",").map((tag) => (
                            <span key={tag} className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/90 border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="space-y-4 text-sm text-gray-300">
                        <div className="flex items-center justify-between py-2 border-b border-white/10">
                            <span className="text-gray-400">ID</span>
                            <span className="font-mono">{wallpaper.id}</span>
                        </div>
                    </div>

                    <div className="mt-8 space-y-3">
                        {wallpaper.origin_url && (
                            <a
                                href={wallpaper.origin_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-full px-4 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-xl transition-all shadow-lg shadow-pink-500/20"
                            >
                                <Icons.Download className="w-5 h-5 mr-2" />
                                Download Original
                            </a>
                        )}
                        <a
                            href={wallpaper.origin_site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full px-4 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all border border-white/10"
                        >
                            <Icons.ExternalLink className="w-5 h-5 mr-2" />
                            Visit Source
                        </a>
                    </div>

                    <div className="mt-auto pt-8 flex justify-between items-center gap-4">
                        <button
                            onClick={onPrev}
                            className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                        >
                            <Icons.ArrowLeft className="w-5 h-5 mr-2" /> Prev
                        </button>
                        <button
                            onClick={onNext}
                            className="flex-1 flex items-center justify-center px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                        >
                            Next <Icons.ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MobileDeviceShell({ wallpaper }: { wallpaper: Wallpaper }) {
    return (
        <div className="relative mx-auto border-gray-100 bg-gray-100 border-[12px] rounded-[3rem] h-[80vh] max-h-[850px] aspect-[9/19] shadow-2xl shadow-black/50 ring-1 ring-gray-900/10">
            <div className="w-[40%] h-[24px] bg-gray-100 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            {/* Side buttons - Light Gray */}
            <div className="h-[46px] w-[3px] bg-gray-200 absolute -left-[15px] top-[100px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-200 absolute -left-[15px] top-[160px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-200 absolute -right-[15px] top-[130px] rounded-r-lg"></div>

            <div className="rounded-[2.2rem] overflow-hidden w-full h-full bg-black relative">
                <img
                    src={wallpaper.thumb_url}
                    alt={wallpaper.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
        </div>
    )
}


function LaptopDeviceShell({ wallpaper }: { wallpaper: Wallpaper }) {
    return (
        <div className="relative mx-auto w-full max-w-4xl flex flex-col items-center">
            {/* Screen - Silver/Gray Border */}
            <div className="relative w-full bg-[#e0e0e0] rounded-t-xl border-[10px] border-b-0 border-[#d1d1d1] aspect-[16/10] shadow-2xl shadow-black/50 ring-1 ring-white/20">
                {/* Black Bezel */}
                <div className="rounded-sm overflow-hidden w-full h-full bg-black p-[2px]">
                    <img
                        src={wallpaper.thumb_url}
                        alt={wallpaper.title}
                        className="w-full h-full object-cover rounded-[1px]"
                        loading="lazy"
                    />
                </div>
            </div>
            {/* Base - Silver */}
            <div className="relative w-[110%] h-[24px] bg-[#d1d1d1] rounded-b-xl rounded-t-sm shadow-xl flex justify-center items-start border-t border-[#b0b0b0]">
                {/* Thumb notch */}
                <div className="w-[120px] h-[8px] bg-[#b0b0b0] rounded-b-lg opacity-50"></div>
            </div>
        </div>
    );
}
