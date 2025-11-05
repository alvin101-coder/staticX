"use client";

import { useRef, useState, useEffect } from "react";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  // Load saved mute state on mount
  useEffect(() => {
    const savedMute = localStorage.getItem("bg-music-muted");
    if (savedMute === "true") {
      setIsMuted(true);
    }

    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false; // handle volume manually
    audio.volume = savedMute === "true" ? 0 : 1;

    const tryPlay = async () => {
      try {
        await audio.play();
        console.log("Autoplay started");
      } catch (err) {
        console.warn("Autoplay blocked, waiting for user interaction");
      }
    };

    tryPlay();
  }, []);

  // Smooth fade function
  const fadeVolume = (targetVolume, duration = 500) => {
    const audio = audioRef.current;
    if (!audio) return;

    const steps = 20;
    const stepTime = duration / steps;
    const volumeStep = (targetVolume - audio.volume) / steps;

    let currentStep = 0;
    const fadeInterval = setInterval(() => {
      if (!audio) return;
      audio.volume = Math.min(1, Math.max(0, audio.volume + volumeStep));
      currentStep++;
      if (currentStep >= steps) {
        clearInterval(fadeInterval);
        audio.volume = targetVolume;
      }
    }, stepTime);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    const newMuteState = !isMuted;
    setIsMuted(newMuteState);

    if (newMuteState) {
      fadeVolume(0); // fade out
    } else {
      fadeVolume(1); // fade in
    }

    // Save preference
    localStorage.setItem("bg-music-muted", newMuteState);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50"> 
      {/* Hidden audio element */}
      <audio ref={audioRef} loop preload="auto" className="hidden">
        <source src="/bad-times.mp3" type="audio/mpeg" />
      </audio>

      {/* Mute button */}
      <button
        onClick={toggleMute}
        className="bg-gray-800 text-white p-3 rounded-full shadow-lg text-2xl"
        aria-label={isMuted ? "Unmute background music" : "Mute background music"}
      >
        {isMuted ? <BsFillVolumeMuteFill /> : <BsFillVolumeUpFill />}
      </button>
    </div>
  );
};

export default BackgroundMusic;
