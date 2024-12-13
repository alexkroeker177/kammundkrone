"use client";

import { Button } from '@/components/ui/button';
import { Scissors } from 'lucide-react';
import VideoBackground from '@/components/ui/VideoBackground';

export default function Hero() {
  return (
    <VideoBackground videoUrl="https://videos.pexels.com/video-files/4178342/4178342-hd_1920_1080_30fps.mp4">
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Willkommen bei Kamm & Krone
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Ihr exklusiver Friseursalon für stilvolle und individuelle Looks
          </p>
          <Button 
            size="lg"
            className="bg-[#C5A572] hover:bg-[#B39362] text-white"
          >
            <Scissors className="mr-2 h-4 w-4" />
            Jetzt Termin buchen
          </Button>
        </div>
      </div>
    </VideoBackground>
  );
}