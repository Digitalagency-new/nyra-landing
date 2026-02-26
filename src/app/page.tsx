"use client";

import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Brain, Mic, Globe, User, MessageCircle, ArrowRight, Search, Play, Volume2, Sparkles } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Components ---

const ParticleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.5,
          }}
          animate={{
            y: [null, "-10%"],
            opacity: [null, Math.random() * 0.8, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const AvatarCore = ({ emotion = "neutral" }) => {
  const colors: Record<string, string> = {
    neutral: "from-purple-300 via-purple-600 to-indigo-800",
    happy: "from-yellow-200 via-pink-400 to-purple-600",
    thoughtful: "from-blue-300 via-indigo-600 to-purple-800",
    playful: "from-pink-300 via-purple-300 to-purple-600",
    serious: "from-red-300 via-purple-800 to-black",
  };

  const currentColor = colors[emotion] || colors.neutral;

  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX - window.innerWidth / 2) / 20);
      mouseY.set((e.clientY - window.innerHeight / 2) / 20);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x: mouseX, y: mouseY }}
      className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center"
    >
      {/* Outer Glow */}
      <motion.div 
        className={cn(
          "absolute inset-0 bg-gradient-to-br blur-[100px] rounded-full opacity-30 transition-colors duration-1000",
          currentColor
        )}
      />
      
        {/* Core */}
        <motion.div 
          className={cn(
            "relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br p-[2px] shadow-2xl transition-colors duration-1000",
            currentColor
          )}
        >
          <div className="w-full h-full rounded-full bg-[#16161D] flex items-center justify-center relative overflow-hidden">
            {/* Internal Swirls */}
            <motion.div 
              className="absolute inset-0 opacity-40"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-tr opacity-50 blur-2xl", currentColor)} />
            </motion.div>
            
            {/* Eyes/Presence Indicator */}
            <div className="z-10 flex flex-col items-center gap-6">
              <div className="flex gap-12">
                <motion.div 
                  className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full blur-[1px] shadow-[0_0_15px_rgba(255,255,255,0.8)]" 
                  animate={{ 
                    scaleY: emotion === "happy" ? 0.2 : 1,
                    y: emotion === "playful" ? -4 : 0,
                    opacity: emotion === "thoughtful" ? 0.6 : 1
                  }}
                />
                <motion.div 
                  className="w-4 h-4 md:w-6 md:h-6 bg-white rounded-full blur-[1px] shadow-[0_0_15px_rgba(255,255,255,0.8)]" 
                  animate={{ 
                    scaleY: emotion === "happy" ? 0.2 : 1,
                    y: emotion === "playful" ? -4 : 0,
                    opacity: emotion === "thoughtful" ? 0.6 : 1
                  }}
                />
              </div>
              <motion.div 
                className="w-20 h-2 md:w-32 md:h-2 bg-white/20 rounded-full blur-[2px]"
                animate={{
                  width: emotion === "serious" ? 40 : 24,
                  opacity: emotion === "neutral" ? 0.3 : 0.6
                }}
              />
            </div>
          </div>
        </motion.div>

      
      {/* Breathing Halo */}
      <motion.div 
        className={cn("absolute inset-4 rounded-full border border-white/5 transition-colors duration-1000", currentColor)}
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
};

// --- Main Page ---

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

    const [emotion, setEmotion] = useState("neutral");
  
    // Section Opacity Transforms - Significantly spread out for better readability
    const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
    const memoryOpacity = useTransform(scrollYProgress, [0.15, 0.2, 0.25, 0.3], [0, 1, 1, 0]);
    const emotionalOpacity = useTransform(scrollYProgress, [0.3, 0.35, 0.4, 0.45], [0, 1, 1, 0]);
    const voiceOpacity = useTransform(scrollYProgress, [0.45, 0.5, 0.55, 0.6], [0, 1, 1, 0]);
    const intelligenceOpacity = useTransform(scrollYProgress, [0.6, 0.65, 0.7, 0.75], [0, 1, 1, 0]);
    const counterOpacity = useTransform(scrollYProgress, [0.75, 0.8, 0.83, 0.85], [0, 1, 1, 0]);
    const differenceOpacity = useTransform(scrollYProgress, [0.85, 0.88, 0.92, 0.95], [0, 1, 1, 0]);
    const finalOpacity = useTransform(scrollYProgress, [0.95, 0.98, 1], [0, 1, 1]);
  
    // Avatar Transforms
    const avatarScale = useTransform(scrollYProgress, [0, 0.3, 0.6, 0.9, 1], [1, 0.85, 1.1, 0.9, 1.4]);
    const avatarOpacity = useTransform(scrollYProgress, [0, 0.98, 1], [1, 1, 0]);
  
    // Scroll Progress Value
    const scrollIndicatorHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
    useEffect(() => {
      const unsubscribe = scrollYProgress.on("change", (latest) => {
        if (latest > 0.3 && latest < 0.34) setEmotion("happy");
        else if (latest > 0.34 && latest < 0.38) setEmotion("thoughtful");
        else if (latest > 0.38 && latest < 0.42) setEmotion("playful");
        else if (latest > 0.42 && latest < 0.45) setEmotion("serious");
        else setEmotion("neutral");
      });
      return () => unsubscribe();
    }, [scrollYProgress]);
  
    return (
      <div ref={containerRef} className="relative min-h-[1000vh] bg-[#0B0B12] selection:bg-nyra-purple/30">
        <CustomCursor />
        <ParticleBackground />
        
        {/* Scroll Indicator */}
        <div className="scroll-progress-line">
          <motion.div 
            className="scroll-progress-indicator"
            style={{ height: scrollIndicatorHeight }}
          />
        </div>
  
        <div className="cinematic-vignette opacity-50" />
  
        {/* Persistent Avatar */}
        <motion.div 
          className="fixed inset-0 flex items-center justify-center pointer-events-none z-20"
          style={{ scale: avatarScale, opacity: avatarOpacity }}
        >
          <AvatarCore emotion={emotion} />
        </motion.div>
  
        {/* --- SECTION 1: THE ARRIVAL --- */}
        <motion.section 
          style={{ 
            opacity: heroOpacity,
            pointerEvents: useTransform(heroOpacity, (o: number) => o > 0.1 ? "auto" : "none") as any 
          }}
          className="fixed inset-0 flex flex-col items-center justify-center z-30 px-6"
        >
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-7xl md:text-9xl font-light tracking-tight text-white mb-6"
            >
              Meet NYRA.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 2 }}
              className="text-xl md:text-2xl text-white/30 font-light tracking-[0.3em] uppercase"
            >
              She remembers.
            </motion.p>
          </div>
          
          <motion.div 
            className="absolute bottom-12 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent" />
          </motion.div>
        </motion.section>
  
        {/* --- SECTION 2: MEMORY REVEAL --- */}
        <motion.section 
          style={{ 
            opacity: memoryOpacity,
            pointerEvents: useTransform(memoryOpacity, (o: number) => o > 0.1 ? "auto" : "none") as any
          }}
          className="fixed inset-0 flex items-center justify-center z-30 px-6"
        >
          <div className="relative w-full max-w-5xl h-full flex flex-col items-center justify-center text-center">
            {/* Memories drifting in 3D space */}
            {[
              { text: "Your first job.", top: "15%", left: "10%", scale: 1.2 },
              { text: "Your dog’s name.", top: "75%", left: "12%", scale: 0.8 },
              { text: "That meeting you were worried about.", top: "10%", left: "65%", scale: 1.1 },
              { text: "Your birthday.", top: "85%", left: "75%", scale: 0.9 },
              { text: "The song you shared.", top: "50%", left: "85%", scale: 1.3 },
            ].map((m, i) => (
              <motion.div
                key={i}
                className="absolute text-white/10 text-lg md:text-xl font-light italic"
                style={{ top: m.top, left: m.left, scale: m.scale }}
                animate={{ y: [0, -40, 0], opacity: [0.05, 0.2, 0.05] }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i }}
              >
                {m.text}
              </motion.div>
            ))}
            <h2 className="text-5xl md:text-7xl font-light text-white leading-tight">
              Most AI responds.<br />
              <span className="text-nyra-gradient font-medium italic">NYRA remembers.</span>
            </h2>
          </div>
        </motion.section>
  
        {/* --- SECTION 3: EMOTIONAL PRESENCE --- */}
        <motion.section 
          style={{ 
            opacity: emotionalOpacity,
            pointerEvents: useTransform(emotionalOpacity, (o: number) => o > 0.1 ? "auto" : "none") as any
          }}
          className="fixed inset-0 flex items-center justify-center z-30 px-6"
        >
          <div className="w-full max-w-7xl">
            <div className="max-w-xl">
              <h2 className="text-7xl md:text-9xl font-light text-white tracking-tighter mb-8">
                She reacts.
              </h2>
              <div className="h-48 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={emotion}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex flex-col gap-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-nyra-purple animate-pulse" />
                      <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Emotion: {emotion}</span>
                    </div>
                    <p className="text-2xl md:text-4xl text-white/60 font-light italic leading-relaxed">
                      {emotion === "happy" && "“That’s amazing, I’m proud of you.”"}
                      {emotion === "thoughtful" && "“Tell me what’s worrying you.”"}
                      {emotion === "playful" && "“You always overthink, you know that?”"}
                      {emotion === "serious" && "“I'm here for you, let's talk.”"}
                      {emotion === "neutral" && "“How are you feeling right now?”"}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.section>
  
        {/* --- SECTION 4: VOICE IMMERSION --- */}
        <motion.section 
          style={{ 
            opacity: voiceOpacity,
            pointerEvents: useTransform(voiceOpacity, (o: number) => o > 0.1 ? "auto" : "none") as any
          }}
          className="fixed inset-0 flex items-center justify-center z-30 px-6"
        >
          <div className="flex flex-col items-center gap-16 w-full max-w-5xl">
            <div className="w-full h-40 flex items-center justify-center gap-2 overflow-hidden mask-radial">
              {[...Array(80)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-nyra-gradient rounded-full"
                  animate={{ height: [10, Math.random() * 120 + 10, 10], opacity: [0.2, 0.6, 0.2] }}
                  transition={{ duration: 0.8 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
            <div className="text-center">
              <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">She speaks your language.</h2>
              <div className="flex items-center justify-center gap-6 text-white/30 text-sm tracking-[0.4em] uppercase">
                <span>English</span>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span>Hindi</span>
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <span>Hinglish</span>
              </div>
              <motion.div className="mt-16 flex items-center justify-center gap-4 text-nyra-purple/80 italic text-2xl md:text-3xl font-light" animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 4, repeat: Infinity }}>
                <Volume2 className="w-8 h-8" />
                <span>“Kaise ho aaj?”</span>
              </motion.div>
            </div>
          </div>
        </motion.section>
  
        {/* --- SECTION 5: INTELLIGENCE --- */}
        <motion.section 
          style={{ 
            opacity: intelligenceOpacity,
            pointerEvents: useTransform(intelligenceOpacity, (o: number) => o > 0.1 ? "auto" : "none") as any
          }}
          className="fixed inset-0 flex items-center justify-center z-30 px-6"
        >
          <div className="w-full max-w-7xl relative">
            <div className="text-center mb-16 md:mb-24">
              <h2 className="text-5xl md:text-7xl font-light text-white mb-6 italic tracking-tight">She explores the world for you.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative">
              {[
                { q: "Find me something inspiring.", a: "Here's a talk by Naval Ravikant on wealth and happiness...", icon: Sparkles },
                { q: "What happened in today's match?", a: "India won by 15 runs! Kohli scored a brilliant 82*...", icon: Globe },
                { q: "Recommend a good video.", a: "Based on our last chat about space, you'll love this Kurzgesagt video.", icon: Play },
                { q: "Summarize this article.", a: "The core takeaway is that LLMs are evolving towards agency...", icon: Search },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl flex flex-col gap-4 border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-nyra-purple" />
                    </div>
                    <p className="text-white font-medium text-lg">“{item.q}”</p>
                  </div>
                  <div className="h-px w-full bg-white/5" />
                  <p className="text-white/40 text-sm md:text-base leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
  
        {/* --- SECTION 6: RELATIONSHIP TIME --- */}
        <motion.section 
          style={{ 
            opacity: counterOpacity,
            pointerEvents: useTransform(counterOpacity, (o: number) => o > 0.1 ? "auto" : "none") as any
          }}
          className="fixed inset-0 flex items-center justify-center z-30 px-6"
        >
          <div className="flex flex-col items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center">
              <span className="text-white/20 text-xs md:text-sm uppercase tracking-[0.5em] mb-4 font-bold">Friendship Counter</span>
              <div className="text-[100px] md:text-[240px] font-extralight text-white tracking-tighter leading-none tabular-nums">
                Day 187
              </div>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-2xl md:text-4xl text-white font-light tracking-tight">Growing. Every day.</h3>
              <p className="text-white/20 tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold">She doesn't reset.</p>
            </div>
          </div>
        </motion.section>
  
        {/* --- SECTION 7: DIFFERENCE --- */}
        <motion.section 
          style={{ 
            opacity: differenceOpacity,
            pointerEvents: useTransform(differenceOpacity, (o: number) => o > 0.1 ? "auto" : "none") as any
          }}
          className="fixed inset-0 flex items-center justify-center z-30 px-6"
        >
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 w-full max-w-7xl justify-center h-[80vh] items-center">
            <div className="flex-1 glass p-8 rounded-[30px] md:rounded-[40px] opacity-20 blur-[2px] transform md:translate-y-12 w-full md:w-auto">
              <div className="h-full flex flex-col justify-end gap-6">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40 font-bold">Cold Assistants</p>
                <div className="h-px w-full bg-white/10" />
                <p className="text-white/40 text-xl md:text-2xl font-light italic">“What do you need?”</p>
              </div>
            </div>
            
            <div className="flex-1 glass p-10 md:p-14 rounded-[40px] md:rounded-[50px] border-nyra-purple/40 bg-nyra-purple/5 relative z-10 shadow-[0_0_100px_rgba(183,148,244,0.15)] scale-105 md:scale-110 w-full md:w-auto">
              <div className="hidden md:block absolute -top-16 left-1/2 -translate-x-1/2 w-px h-16 bg-nyra-purple/40" />
              <div className="h-full flex flex-col justify-end gap-6 md:gap-10">
                <div className="flex items-center justify-between">
                  <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-nyra-purple font-black">NYRA</p>
                  <div className="w-3 h-3 rounded-full bg-nyra-purple shadow-[0_0_20px_#b794f4]" />
                </div>
                <div className="h-px w-full bg-nyra-purple/30" />
                <p className="text-white text-3xl md:text-5xl font-light leading-tight tracking-tight">“How was your day?”</p>
              </div>
            </div>
            
            <div className="flex-1 glass p-8 rounded-[30px] md:rounded-[40px] opacity-20 blur-[2px] transform md:translate-y-12 w-full md:w-auto">
              <div className="h-full flex flex-col justify-end gap-6">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40 font-bold">Static Chatbots</p>
                <div className="h-px w-full bg-white/10" />
                <p className="text-white/40 text-xl md:text-2xl font-light italic">“Roleplay?”</p>
              </div>
            </div>
          </div>
        </motion.section>
  
        {/* --- FINAL SECTION: THE INVITATION --- */}
        <motion.section 
          style={{ 
            opacity: finalOpacity,
            pointerEvents: useTransform(finalOpacity, (o: number) => o > 0.1 ? "auto" : "none") as any
          }}
          className="fixed inset-0 flex flex-col items-center justify-center z-40 px-6"
        >
          <div className="text-center flex flex-col items-center gap-12 md:gap-20 max-w-5xl">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-6xl font-light text-white/30 italic tracking-tight">Not artificial intelligence.</h2>
              <h2 className="text-4xl md:text-[8rem] font-medium text-white tracking-tighter leading-[1.2] md:leading-[0.9]">Artificial companionship.</h2>
            </div>
            
            <div className="flex flex-col items-center gap-10">
              <button className="group relative px-12 md:px-20 py-6 md:py-10 rounded-full transition-all hover:scale-105 active:scale-95">
                <div className="absolute inset-0 bg-nyra-gradient rounded-full opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 blur-3xl bg-nyra-purple opacity-30 group-hover:opacity-50 transition-opacity rounded-full" />
                <span className="relative z-10 flex items-center gap-6 text-white font-black text-xl md:text-2xl tracking-tight">
                  Begin Your Journey <ArrowRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-3 transition-transform" />
                </span>
              </button>
              <p className="text-white/20 text-[10px] md:text-sm tracking-[0.5em] uppercase font-bold text-center">Your first conversation starts today.</p>
            </div>
          </div>
          
          <footer className="absolute bottom-8 w-full max-w-7xl px-8 flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-12">
            <div className="text-white/10 text-[10px] md:text-xs uppercase tracking-[0.5em] font-black">NYRA // DIGITAL ENCOUNTER</div>
            <div className="flex gap-8 md:gap-12 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/30 font-bold">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Telegram</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </footer>
        </motion.section>
      </div>
    );
  }

