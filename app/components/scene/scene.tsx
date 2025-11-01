"use client";

import React, { useState } from "react";
import { CAMERA_POSITIONS } from "@/constants/camera_positions";
import SceneContent from "./sceneContent";
import { cn } from "@/lib/cn";
import { playSound } from "@/utils/sounds";
import { sceneSounds } from "@/constants/scene";
import { SceneControls } from "./sceneControls";

interface Props {
  getActiveBlockIndex: (scrollProgress: number) => number | null;
  scrollProgress: number;
}

export const Scene: React.FC<Props> = ({
  getActiveBlockIndex,
  scrollProgress,
}) => {
  const [showContent, setShowContent] = useState(true);
  const previousScene = React.useRef<number | null>(null);

  React.useEffect(() => {
    const activeScene = getActiveBlockIndex(scrollProgress);
    if (
      activeScene !== null &&
      activeScene !== previousScene.current &&
      sceneSounds[activeScene + 1]
    ) {
      Object.values(sceneSounds).forEach((sound) => sound.stop());
      playSound(sceneSounds[activeScene + 1]);
      previousScene.current = activeScene;
    }
  }, [scrollProgress, getActiveBlockIndex]);

  return (
    <div className="relative">
      <SceneControls
        showContent={showContent}
        setShowContent={setShowContent}
      />

      {CAMERA_POSITIONS.map((_, index) => (
        <div key={index} className="h-[300vh]">
          <div className="fixed translate-y-40 inset-0 flex items-center justify-center">
            {getActiveBlockIndex(scrollProgress) !== null && (
              <div className="relative">
                <SceneContent
                  current={getActiveBlockIndex(scrollProgress)!}
                  className={cn(showContent ? "opacity-100" : "opacity-0")}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
