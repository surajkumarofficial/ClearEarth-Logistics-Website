"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";

const TOTAL_FRAMES = 1283;
// Phase 1: 1 - 300
// Phase 2: 301 - 570
// Phase 3: 571 - 840
// Phase 4: 841 - 1110
// Phase 5: 1111 - 1283

function getFramePath(index: number) {
  let path = "";
  if (index <= 300) {
    path = `/Phase 1 - The Origin/frame-${index.toString().padStart(3, "0")}.jpg`;
  } else if (index <= 570) {
    const localIndex = index - 300;
    path = `/Phase 2 - The Integration/frame-${localIndex.toString().padStart(3, "0")}.jpg`;
  } else if (index <= 840) {
    const localIndex = index - 570;
    path = `/Phase 3 - The Transit/frame-${localIndex.toString().padStart(3, "0")}.jpg`;
  } else if (index <= 1110) {
    const localIndex = index - 840;
    path = `/Phase 4 - The Elevation/frame-${localIndex.toString().padStart(3, "0")}.jpg`;
  } else {
    const localIndex = index - 1110;
    path = `/Phase 5 - The Voyage/frame-${localIndex.toString().padStart(3, "0")}.jpg`;
  }
  return path;
}

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Keep a loaded image cache
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [loadErrors, setLoadErrors] = useState<string[]>([]);

  // Smooth the scroll progress so the scrub is buttery smooth (lerp equivalent)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [1, TOTAL_FRAMES]);

  useEffect(() => {
    let active = true;

    const loadFrame = (i: number): Promise<HTMLImageElement | null> => {
      return new Promise((resolve) => {
        if (!active) {
          resolve(null);
          return;
        }
        const img = new Image();
        img.src = getFramePath(i);
        img.onload = () => {
          if (active) {
            imagesRef.current.set(i, img);
            setImagesLoaded((prev: number) => prev + 1);
          }
          resolve(img);
        };
        img.onerror = () => {
          console.error("Failed to load image:", i, img.src);
          if (active) {
            setLoadErrors((prev) => [...prev.slice(-9), `Frame ${i} failed: ${img.src}`]);
          }
          resolve(null);
        };
      });
    };

    const preload = async () => {
      // 1. Load the first 100 frames in parallel immediately (Hero/Initial Scroll)
      const firstBatchSize = Math.min(100, TOTAL_FRAMES);
      const firstBatchPromises = [];
      for (let i = 1; i <= firstBatchSize; i++) {
        firstBatchPromises.push(loadFrame(i));
      }
      
      // Wait for the first batch to be ready so the initial experience is loaded
      await Promise.all(firstBatchPromises);
      if (active) {
        setIsReady(true);
      }

      // 2. Load the rest of the frames in parallel in background without blocking sequentially
      for (let i = firstBatchSize + 1; i <= TOTAL_FRAMES; i++) {
        if (!active) break;
        loadFrame(i);
        // Add a tiny delay every 10 frames to avoid blocking the main thread
        if (i % 10 === 0) {
          await new Promise((resolve) => setTimeout(resolve, 4));
        }
      }
    };

    preload();

    return () => {
      active = false;
    };
  }, []);

  // Set up canvas and render loop
  const lastRenderedFrameRef = useRef<HTMLImageElement | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const currentFrame = Math.round(frameIndex.get());
      let img = imagesRef.current.get(currentFrame);

      if (!img) {
        // Fallback to the last successfully rendered frame to avoid flickering/black screens
        img = lastRenderedFrameRef.current;
      }

      if (img) {
        lastRenderedFrameRef.current = img;

        // Handle canvas sizing to keep image aspect ratio while covering screen
        const canvasAspect = canvas.width / canvas.height;
        const imgAspect = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasAspect > imgAspect) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspect;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgAspect;
          offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      } else {
        // Fallback or loading state for missed frames if no frames have been rendered yet
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Attempt to immediately render latest frame on resize so it doesn't blink
      const currentFrame = Math.round(frameIndex.get());
      let img = imagesRef.current.get(currentFrame) || lastRenderedFrameRef.current;
      if (img && ctx) {
         ctx.drawImage(img, 0, 0, canvas.width, canvas.height); // simple fallback
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [frameIndex]);

  // Overlay fade ranges, mapping progress from 0 to 1
  // Phase 1: 0 - 0.2
  // Phase 2: 0.2 - 0.4
  // Phase 3: 0.4 - 0.6
  // Phase 4: 0.6 - 0.8
  // Phase 5: 0.8 - 1.0

  return (
    <div ref={containerRef} className="relative w-full h-[15000px] bg-white">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-white relative">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />

        {/* --- UI Overlays linked to Scroll Progress --- */}
        
        {/* Phase 1: The Origin */}
        <OverlayBlock 
          scrollYProgress={smoothProgress} 
          start={0.01} peak={0.1} end={0.19} 
          position="left-4 md:left-10 top-1/2 -translate-y-1/2"
          align="text-left"
          heading="PRECISION AT THE SOURCE"
          subheading="Your Cargo, Our Commitment."
          copy="Great journeys begin with meticulous preparation. We optimize every cubic inch for safety and stability."
        />

        {/* Phase 2: The Integration */}
        <OverlayBlock 
          scrollYProgress={smoothProgress} 
          start={0.21} peak={0.3} end={0.39} 
          position="left-4 md:left-auto md:right-10 bottom-10 md:bottom-20"
          align="text-left md:text-right"
          heading="SEAMLESS SYNERGY"
          headingColor="text-black"
          subheading="Bridging Land and Sea."
          copy="A synchronized handoff of trust. Our fleet integrates perfectly with your production schedule."
        />

        {/* Phase 3: The Transit */}
        <OverlayBlock 
          scrollYProgress={smoothProgress} 
          start={0.41} peak={0.5} end={0.59} 
          position="left-4 md:left-10 top-20 md:top-32"
          align="text-left"
          heading="THE ARTERY OF COMMERCE"
          subheading="Navigating the Last Mile."
          copy="Real-time GPS tracking and route optimization keep your shipment moving toward the global horizon."
        />

        {/* Phase 4: The Elevation */}
        <OverlayBlock 
          scrollYProgress={smoothProgress} 
          start={0.61} peak={0.7} end={0.79} 
          position="left-4 md:left-auto md:right-20 top-1/2 -translate-y-1/2"
          align="text-left md:text-right"
          heading="ENGINEERED ASCENT"
          headingColor="text-black"
          subheading="Where Infrastructure Meets Ambition."
          copy="Watch as we transition from road to vessel. Millimeter precision ensured by port-side experts."
        />

        {/* Phase 5: The Voyage */}
        <OverlayBlock 
          scrollYProgress={smoothProgress} 
          start={0.81} peak={0.95} end={1.0} 
          position="left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2"
          align="text-center"
          heading="BEYOND THE HORIZON"
          subheading="End-to-End Excellence, Delivered."
          copy="We manage the tide of paperwork and customs so you can focus on growth. The world is waiting."
        />

        {/* Loading Indicator */}
        {!isReady && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50 text-xs md:text-sm font-medium tracking-widest z-50 whitespace-nowrap text-center">
            LOADING EXPERIENCE... {Math.min(100, Math.round((imagesLoaded / 100) * 100))}%
          </div>
        )}

        {/* Visual Debug Console */}
        {loadErrors.length > 0 && (
          <div className="absolute bottom-4 left-4 right-4 bg-red-950/90 border border-red-500 p-4 rounded-xl z-50 text-red-200 text-xs font-mono max-h-40 overflow-y-auto pointer-events-auto">
            <div className="font-bold mb-2">Image Load Errors:</div>
            {loadErrors.map((err, idx) => (
              <div key={idx}>{err}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Helper to render fade-in / fade-out copy blocks based on scroll
function OverlayBlock({ 
  scrollYProgress, 
  start, 
  peak, 
  end, 
  position, 
  align,
  heading, 
  headingColor = "text-white",
  subheading, 
  copy 
}: { 
  scrollYProgress: any; 
  start: number; 
  peak: number; 
  end: number; 
  position: string;
  align: string;
  heading: string; 
  headingColor?: string;
  subheading: string; 
  copy: string; 
}) {
  const opacity = useTransform(scrollYProgress, [start, peak, end], [0, 1, 0]);
  const y = useTransform(scrollYProgress, [start, peak, end], [50, 0, -50]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className={`absolute w-full max-w-[calc(100vw-2rem)] md:w-[480px] p-6 md:p-8 ${position} ${align} z-10 pointer-events-none`}
    >
      <div className="absolute inset-0 bg-glow-light -z-10 rounded-full blur-3xl opacity-60" />
      <h2 className={`text-2xl md:text-5xl font-bold mb-2 text-glow-light tracking-tight leading-tight ${headingColor}`}>
        {heading}
      </h2>
      <h3 className="text-lg md:text-2xl font-semibold text-[#0090FF] mb-4 tracking-wide">
        {subheading}
      </h3>
      <p className="text-sm md:text-lg text-slate-700 leading-relaxed font-light">
        {copy}
      </p>
    </motion.div>
  );
}
