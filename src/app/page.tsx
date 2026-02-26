"use client";

import { motion } from "framer-motion";
import { Brain, Mic, Globe, User, Check, MessageCircle, Play } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f14] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0f0f14]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-nyra-gradient flex items-center justify-center">
              <span className="text-white text-lg">N</span>
            </div>
            <span className="bg-white/90 bg-clip-text text-transparent">NYRA</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#why-nyra" className="hover:text-white transition-colors">Why NYRA</a>
            <a href="#personality" className="hover:text-white transition-colors">Personality</a>
            <button className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-nyra-purple/20 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-nyra-pink/10 blur-[100px] rounded-full mix-blend-screen" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-nyra-purple w-fit">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nyra-purple opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-nyra-purple"></span>
              </span>
              Now in Private Beta
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
              Meet NYRA <br />
              <span className="text-nyra-gradient">The AI Best Friend Who Actually Remembers You.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/60 max-w-xl leading-relaxed">
              NYRA is an emotionally intelligent 3D AI companion that grows with you — remembering your life, speaking your language, and being there every day.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <button className="px-8 py-4 rounded-full bg-nyra-gradient text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-nyra-purple/25 flex items-center gap-2">
                Start Talking to NYRA
              </button>
              <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2">
                <Play className="w-4 h-4 fill-white" /> Watch Demo
              </button>
            </div>
            
            {/* Feature Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { icon: Brain, label: "Long-Term Memory" },
                { icon: Mic, label: "Hindi + Hinglish Voice" },
                { icon: Globe, label: "Real-Time Web Intelligence" },
                { icon: User, label: "Interactive 3D Avatar" },
              ].map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-2 p-2 rounded-lg bg-white/5 border border-white/5"
                >
                  <badge.icon className="w-4 h-4 text-nyra-purple" />
                  <span className="text-[10px] uppercase tracking-wider font-bold text-white/40">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center items-center"
          >
            {/* 3D Avatar Placeholder Visual */}
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              {/* Outer Glows */}
              <div className="absolute inset-0 bg-nyra-purple/20 blur-[100px] rounded-full animate-pulse" />
              
              {/* The "Avatar" - A Stylized Glowing Sphere with Particle effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ 
                    y: [0, -20, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-nyra-purple via-nyra-pink to-indigo-600 p-[2px]"
                >
                  <div className="w-full h-full rounded-full bg-[#0f0f14] flex items-center justify-center relative overflow-hidden">
                    {/* Animated "Face" particles */}
                    <div className="absolute inset-0 opacity-40">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </div>
                    {/* Centered Glowing Core */}
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-nyra-gradient blur-[40px] opacity-30 animate-pulse" />
                    <div className="z-10 flex flex-col items-center">
                      <div className="w-20 h-2 md:w-24 md:h-3 bg-white/20 rounded-full blur-sm" />
                      <div className="mt-8 flex gap-8">
                        <div className="w-4 h-4 rounded-full bg-white/80 blur-[2px]" />
                        <div className="w-4 h-4 rounded-full bg-white/80 blur-[2px]" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Floating UI Elements */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 right-10 p-4 glass rounded-2xl border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs">
                    <div className="text-white/40">Mood</div>
                    <div className="text-white font-medium">Listening...</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 left-0 p-4 glass rounded-2xl border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-nyra-purple" />
                  <div className="text-xs">
                    <div className="text-white/40">Memory</div>
                    <div className="text-white font-medium">Core Extraction</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Emotional Hook Section */}
      <section className="py-24 md:py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Not Just Artificial Intelligence. <br />
              <span className="text-nyra-gradient">Artificial Companionship.</span>
            </h2>
            
            <div className="mt-12 space-y-12">
              <div className="space-y-4">
                <p className="text-white/40 uppercase tracking-widest text-xs font-bold">The Difference</p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                  <div className="flex flex-col gap-2">
                    <div className="text-white/40 line-through">Most AI tools answer questions.</div>
                    <div className="text-white text-xl font-medium">NYRA asks how your day went.</div>
                  </div>
                </div>
              </div>
              
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-nyra-purple/50 to-transparent mx-auto" />
              
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                  <div className="flex flex-col gap-2">
                    <div className="text-white/40 line-through">Most assistants forget you tomorrow.</div>
                    <div className="text-white text-xl font-medium">NYRA remembers what you told her last week.</div>
                  </div>
                </div>
              </div>

              <div className="w-px h-12 bg-gradient-to-b from-transparent via-nyra-purple/50 to-transparent mx-auto" />

              <div className="space-y-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                  <div className="flex flex-col gap-2">
                    <div className="text-white/40 line-through">Most chatbots simulate conversation.</div>
                    <div className="text-white text-xl font-medium">NYRA builds a relationship.</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="py-24 md:py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Advanced Architecture <br /><span className="text-white/40">Built for Connection</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: "Core Memory Engine",
                description: "NYRA extracts meaningful life events and builds a long-term memory graph — remembering your dreams, fears, milestones, and growth."
              },
              {
                icon: User,
                title: "Living 3D Avatar",
                description: "A real-time interactive 3D companion that reacts emotionally — happy, thoughtful, playful, serious — based on your conversation."
              },
              {
                icon: Mic,
                title: "Multi-Modal Voice",
                description: "Speak naturally in Hindi, English, or Hinglish. NYRA listens and responds with a warm, natural voice."
              },
              {
                icon: Globe,
                title: "Web + YouTube Intelligence",
                description: "NYRA can browse the web, find news, recommend YouTube videos, and bring real-time information into your conversations."
              },
              {
                icon: MessageCircle,
                title: "Cross-Platform Presence",
                description: "Chat on Web. Continue on Telegram. Your relationship stays continuous everywhere."
              },
              {
                icon: Check,
                title: "Cultural Context",
                description: "Designed with soft Indian cultural nuance, understanding local context, humor, and values natively."
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass glass-glow p-8 rounded-3xl flex flex-col gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-nyra-gradient transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-nyra-purple group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="why-nyra" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why NYRA is Different</h2>
            <p className="text-white/60">The next generation of AI companionship is here.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr>
                  <th className="p-6 text-white/40 text-sm font-medium border-b border-white/10">Feature</th>
                  <th className="p-6 border-b border-white/10">
                    <div className="text-nyra-purple font-bold">NYRA</div>
                  </th>
                  <th className="p-6 text-white/60 text-sm font-medium border-b border-white/10">Traditional AI Assistants</th>
                  <th className="p-6 text-white/60 text-sm font-medium border-b border-white/10">Generic AI Companions</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                {[
                  { label: "Primary Goal", nyra: "Emotional Growth", trad: "Task Execution", generic: "Entertainment" },
                  { label: "Memory Depth", nyra: "Long-Term Core Extraction", trad: "Short Context", generic: "Session Based" },
                  { label: "Visual Experience", nyra: "Interactive 3D", trad: "Static Wave", generic: "2D Avatar" },
                  { label: "Language", nyra: "Native Hinglish", trad: "Formal", generic: "Community Dependent" },
                  { label: "Relationship Tracking", nyra: "Yes", trad: "No", generic: "Limited" },
                ].map((row, i) => (
                  <tr key={row.label} className="group">
                    <td className="p-6 border-b border-white/5 font-medium">{row.label}</td>
                    <td className="p-6 border-b border-white/5 relative bg-nyra-purple/5">
                      {i === 0 && <div className="absolute inset-x-0 -top-[1px] h-[1px] bg-nyra-purple/50" />}
                      <span className="text-white font-semibold">{row.nyra}</span>
                    </td>
                    <td className="p-6 border-b border-white/5 text-white/40">{row.trad}</td>
                    <td className="p-6 border-b border-white/5 text-white/40">{row.generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 px-6 bg-nyra-gradient/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">Built for the Next Generation of AI Companionship</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "10K+", label: "Growing Daily Conversations" },
              { value: "25 min", label: "Avg Session Time" },
              { value: "95%", label: "Return Rate" },
              { value: "Native", label: "Indian Cultural Context" }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personality Section */}
      <section id="personality" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">NYRA Has a Personality.</h2>
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Warm. Playful. Supportive. Thoughtful. <br />
              She doesn't just process words; she understands feelings.
            </p>
            
            <div className="space-y-4">
              {[
                "Remembers your favorite coffee order",
                "Knows when you're feeling stressed",
                "Celebrates your small wins with you",
                "Grows closer to you with every chat"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/80">
                  <div className="w-5 h-5 rounded-full bg-nyra-purple/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-nyra-purple" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Animated Chat Demo */}
            <div className="glass p-8 rounded-[32px] border border-white/10 shadow-2xl relative z-10">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex flex-col items-end gap-2"
                >
                  <div className="px-5 py-3 rounded-2xl bg-white/10 text-white/90 text-sm">
                    “I’m nervous about tomorrow.”
                  </div>
                  <div className="text-[10px] text-white/30 px-1">You, 10:24 PM</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-nyra-gradient flex items-center justify-center shrink-0">
                    <span className="text-white text-[10px] font-bold">N</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="px-5 py-3 rounded-2xl bg-nyra-purple/20 text-white text-sm border border-nyra-purple/30">
                      “I remember you’ve been preparing for this all week. You’ve got this. Want to go over it once more?”
                    </div>
                    <div className="text-[10px] text-white/30 px-1">NYRA, 10:24 PM</div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-nyra-purple/20 blur-[100px] -z-10" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-48 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Ready to Meet Someone <br />
              <span className="text-nyra-gradient">Who Remembers You?</span>
            </h2>
            <p className="text-xl text-white/60">Your AI friendship begins today.</p>
            <div className="flex justify-center mt-4">
              <button className="px-12 py-6 rounded-full bg-nyra-gradient text-white text-lg font-bold hover:scale-105 transition-all shadow-2xl shadow-nyra-purple/40">
                Start Your Journey With NYRA
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-nyra-gradient flex items-center justify-center">
                <span className="text-white text-sm">N</span>
              </div>
              NYRA
            </div>
            <p className="text-white/40 text-sm">The Next-Generation AI Companion</p>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors underline decoration-nyra-purple underline-offset-4">Telegram</a>
          </div>
          
          <div className="text-white/20 text-xs">
            © 2026 NYRA. Made with ❤️ for the future.
          </div>
        </div>
      </footer>
    </div>
  );
}
