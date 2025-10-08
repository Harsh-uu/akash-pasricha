// src/components/BookTrailer.tsx
"use client";

import React, { useRef, useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export const BookTrailer = () => {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Load YouTube API
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      if (containerRef.current) {
        playerRef.current = new window.YT.Player(containerRef.current, {
          height: '100%',
          width: '100%',
          videoId: 'ekVUUKsWZig',
          playerVars: {
            autoplay: 0,
            mute: 1,
            loop: 1,
            playlist: 'ekVUUKsWZig',
            controls: 1,
            showinfo: 0,
            rel: 0,
            modestbranding: 1,
            iv_load_policy: 3,
          },
          events: {
            onReady: () => {
              setPlayerReady(true);
            },
          },
        });
      }
    };

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasPlayedOnce && playerReady && playerRef.current) {
          setIsVisible(true);
          setHasPlayedOnce(true);
          // Small delay to ensure smooth playback
          setTimeout(() => {
            if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
              playerRef.current.playVideo();
            }
          }, 100);
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasPlayedOnce, playerReady]);

  const toggleMute = () => {
    if (playerRef.current && playerReady) {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-semibold text-gray-900 mb-4">
            Book <span className="text-[#e9343b]">Trailer</span>
          </h2>
          <p className="text-lg text-gray-600">
            Get a glimpse into the thrilling world of Lost Secret
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="bg-white shadow-2xl overflow-hidden border relative">
            <div className="aspect-video bg-black shadow-lg overflow-hidden">
              <div 
                ref={containerRef}
                className="w-full h-full"
                id="youtube-player"
              />
            </div>
            
            {/* Unmute Button */}
            {playerReady && (
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 z-10 backdrop-blur-sm"
                title={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};