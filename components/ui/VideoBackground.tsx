"use client";

interface VideoBackgroundProps {
  videoUrl: string;
  children: React.ReactNode;
}

export default function VideoBackground({ videoUrl, children }: VideoBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      {children}
    </div>
  );
}