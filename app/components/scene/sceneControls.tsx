import { cn } from "@/lib/cn";
import { useSoundStore } from "@/store/useSoundStore";
import { ChevronLeft, Eye, EyeOff, Volume1, Volume2 } from "lucide-react";
import { useState } from "react";

export const SceneControls: React.FC<{
  showContent: boolean;
  setShowContent: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ showContent, setShowContent }) => {
  const increaseVolume = useSoundStore((state) => state.increaseVolume);
  const decreaseVolume = useSoundStore((state) => state.decreaseVolume);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div
      className={cn(
        "fixed top-4 right-4 flex flex-col gap-2 transform translate-x-[80%] hover:translate-x-[60%] transition-transform duration-300 z-50",
        showButtons && "translate-x-[60%]"
      )}
    >
      <button
        onClick={() => setShowButtons((p) => !p)}
        className="bg-white/20 hover:bg-white/40 rounded-l-lg p-2 cursor-pointer w-20"
        title={showButtons ? "Hide buttons" : "Show buttons"}
      >
        <ChevronLeft
          size={24}
          className={
            showButtons
              ? "rotate-180 transition-transform"
              : "transition-transform"
          }
        />
      </button>

      {showButtons && (
        <div className="flex flex-col gap-2 mt-2 w-10 translate-x-[0%]">
          <button
            onClick={increaseVolume}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer transition-colors"
            title="Increase volume"
          >
            <Volume2 />
          </button>
          <button
            onClick={decreaseVolume}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg cursor-pointer transition-colors"
            title="Decrease volume"
          >
            <Volume1 />
          </button>
          <button
            onClick={() => setShowContent((p) => !p)}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer"
            title={showContent ? "Hide scene content" : "Show scene content"}
          >
            {showContent ? <Eye size={24} /> : <EyeOff size={24} />}
          </button>
        </div>
      )}
    </div>
  );
};
