import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, 
  Repeat, Shuffle, Music, Disc, FileText, Sparkles, 
  ListMusic, Info, CheckCircle, X, Sliders, Shield, Radio, Flame
} from 'lucide-react';

// Fepar Records Sonic Catalog
const TRACK_CATALOG = [
  {
    id: 'FPR-2026-001',
    title: 'Ancestral Waves Vol. 1',
    artist: 'Sage on the Beat x HammerGeek',
    genre: 'Afro-Rave / Deep Sonic',
    bpm: 122,
    key: 'F# Minor',
    duration: 225, // in seconds (3:45)
    coverColor: 'from-amber-600 via-red-800 to-amber-900',
    lyrics: `[Intro - Talking Drum & Synth Rise]
(Echoing) Wake the drums of Festac...
From Lagos edge to the world stage.

[Verse 1 - Sage on the Beat]
Polyrhythm in the pulse, digital iron,
Crafting soundscapes under golden horizon.
Ochre threads tied tight to the bassline,
We own the master, sovereign inside time.

[Drop - HammerGeek]
(Heavy Sub-Bass & Synth Brass)
Resonance! Heritage!
(Afro-futurist synth breakdown)

[Outro]
Fepar Records sound sovereignty.
Master Publishing Reserved 2026.`,
    isSyncAvailable: true
  },
  {
    id: 'FPR-2026-002',
    title: 'Sovereign Rhythm',
    artist: 'HammerGeek',
    genre: 'Afro-Tech / Cyber-Highlife',
    bpm: 126,
    key: 'A Minor',
    duration: 248, // 4:08
    coverColor: 'from-emerald-800 via-neutral-900 to-amber-600',
    lyrics: `[Intro - Highlife Guitar & Cyber Synth]
Analog strings meet the optical wire,
Hammer on the key set the grid on fire.

[Chorus]
We ride the sovereign rhythm,
No middleman in the algorithm.
From Festac Town to the global portal,
The sound of the diaspora is immortal!

[Guitar Solo]
(Electrified Highlife Riff)

[Outro]
Catalog: FPR-2026-002
Fepar Records Ltd.`,
    isSyncAvailable: true
  },
  {
    id: 'FPR-2026-003',
    title: 'Indigo Nights in Festac',
    artist: 'Sage on the Beat',
    genre: 'Ambient Afro-Fusion',
    bpm: 110,
    key: 'D Minor',
    duration: 198, // 3:18
    coverColor: 'from-indigo-900 via-purple-950 to-amber-700',
    lyrics: `[Atmospheric Intro]
Night breeze over 23rd Road,
Stories written in binary code.

[Verse]
Ochre lights reflecting on the black asphalt,
Pure creation, no single fault.
Sync the audio, claim the crown,
This is the heartbeat of Festac Town.`,
    isSyncAvailable: true
  }
];

export default function App() {
  // Audio state management
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [isMuted, setIsMuted] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  
  // UI Panels
  const [activeTab, setActiveTab] = useState('catalog'); // 'catalog' | 'lyrics' | 'specs'
  const [isSyncModalOpen, setIsSyncModalOpen] = useState(false);
  const [syncSuccess, setSyncSuccess] = useState(false);

  const currentTrack = TRACK_CATALOG[currentTrackIndex];
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  // Audio simulation timer
  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= currentTrack.duration) {
            if (isRepeat) return 0;
            handleNextTrack();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentTrackIndex, isRepeat]);

  // Audio Visualizer Canvas Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const bars = 36;
    let phase = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const barWidth = (width / bars) - 3;

      for (let i = 0; i < bars; i++) {
        // Dynamic amplitude based on playback state
        const factor = isPlaying ? Math.sin(phase + i * 0.2) * 0.5 + 0.5 : 0.08;
        const barHeight = (Math.sin(i * 0.3 + phase) * 0.4 + 0.6) * height * factor * 0.85 + 4;
        
        // Pan-African Color Gradients for Visualizer
        const gradient = ctx.createLinearGradient(0, height, 0, 0);
        if (i % 3 === 0) {
          gradient.addColorStop(0, '#A0301B'); // Terracotta
          gradient.addColorStop(1, '#D4AF37'); // Gold
        } else if (i % 3 === 1) {
          gradient.addColorStop(0, '#0B4234'); // Emerald
          gradient.addColorStop(1, '#D4AF37'); // Gold
        } else {
          gradient.addColorStop(0, '#121A42'); // Indigo
          gradient.addColorStop(1, '#A0301B'); // Terracotta
        }

        ctx.fillStyle = gradient;
        ctx.shadowColor = '#D4AF37';
        ctx.shadowBlur = isPlaying ? 6 : 0;
        
        const x = i * (barWidth + 3);
        const y = height - barHeight;
        
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barHeight, [4, 4, 0, 0]);
        ctx.fill();
      }

      phase += isPlaying ? 0.08 : 0.01;
      animFrameRef.current = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [isPlaying]);

  // Handlers
  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleNextTrack = () => {
    if (isShuffle) {
      const randomIdx = Math.floor(Math.random() * TRACK_CATALOG.length);
      setCurrentTrackIndex(randomIdx);
    } else {
      setCurrentTrackIndex((prev) => (prev + 1) % TRACK_CATALOG.length);
    }
    setCurrentTime(0);
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + TRACK_CATALOG.length) % TRACK_CATALOG.length);
    setCurrentTime(0);
  };

  const handleSeek = (e) => {
    const newTime = Number(e.target.value);
    setCurrentTime(newTime);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSyncSubmit = (e) => {
    e.preventDefault();
    setSyncSuccess(true);
    setTimeout(() => {
      setSyncSuccess(false);
      setIsSyncModalOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F7F3E9] font-sans antialiased selection:bg-[#D4AF37] selection:text-[#0A0A0B] p-4 sm:p-8 flex items-center justify-center">
      {/* Background Adinkra-styled Decorative Radial Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,#121A42_0%,#0A0A0B_70%)] opacity-80 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-5xl bg-[#141416]/90 border-2 border-[#D4AF37]/30 backdrop-blur-2xl rounded-3xl shadow-[0_0_50px_rgba(212,175,55,0.15)] overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="bg-[#0A0A0B] px-6 py-4 border-b border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#0A0A0B] border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] shadow-lg">
              <Disc className={`w-5 h-5 ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            </div>
            <div>
              <h1 className="font-extrabold text-lg tracking-widest text-[#D4AF37] uppercase flex items-center gap-2">
                FEPAR RECORDS <span className="text-[10px] bg-[#A0301B] text-[#F7F3E9] px-2 py-0.5 rounded-full tracking-normal">LTD</span>
              </h1>
              <p className="text-[10px] text-[#F7F3E9]/60 uppercase tracking-wider">Sonic Rights & Master Publishing Publishing Hub</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B4234]/40 border border-[#0B4234] text-[#D4AF37]">
              <Shield className="w-3.5 h-3.5 text-[#0B4234]" /> 100% African IP Owned
            </span>
            <button 
              onClick={() => setIsSyncModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#A0301B] text-[#0A0A0B] font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-1.5 shadow-md"
            >
              <FileText className="w-3.5 h-3.5" /> Request Sync Clearance
            </button>
          </div>
        </div>

        {/* Core Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Column: Main Player & Visualizer (7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#D4AF37]/20 bg-gradient-to-b from-[#141416] to-[#0A0A0B]">
            
            {/* Track Artwork & Badge */}
            <div className="relative mb-6">
              <div className={`w-full h-56 sm:h-64 rounded-2xl bg-gradient-to-br ${currentTrack.coverColor} p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden border border-[#D4AF37]/30 group`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] pointer-events-none" />
                
                <div className="flex items-center justify-between relative z-10">
                  <span className="px-3 py-1 rounded-full bg-[#0A0A0B]/80 text-[#D4AF37] font-mono text-xs border border-[#D4AF37]/40">
                    CAT: {currentTrack.id}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#A0301B] text-[#F7F3E9] text-[10px] font-bold uppercase tracking-wider">
                    {currentTrack.genre}
                  </span>
                </div>

                <div className="relative z-10">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#D4AF37]/80 block mb-1">
                    Featured Master Release
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F7F3E9] drop-shadow-md">
                    {currentTrack.title}
                  </h2>
                  <p className="text-sm text-[#D4AF37] font-medium mt-1">
                    {currentTrack.artist}
                  </p>
                </div>
              </div>
            </div>

            {/* Canvas Frequency Visualizer */}
            <div className="mb-6 bg-[#0A0A0B]/90 p-4 rounded-2xl border border-[#D4AF37]/20 shadow-inner">
              <div className="flex items-center justify-between text-[11px] text-[#F7F3E9]/60 mb-2 font-mono">
                <span className="flex items-center gap-1 text-[#D4AF37]">
                  <Radio className={`w-3.5 h-3.5 ${isPlaying ? 'text-[#A0301B] animate-pulse' : ''}`} /> 
                  POLYRHYTHMIC SUB-BASS SPECTRUM
                </span>
                <span>24-Bit / 96kHz WAV</span>
              </div>
              <canvas ref={canvasRef} width={450} height={60} className="w-full h-14 rounded-lg" />
            </div>

            {/* Time Scrub Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-mono text-[#F7F3E9]/70 mb-1.5">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(currentTrack.duration)}</span>
              </div>
              <input
                type="range"
                min="0"
                max={currentTrack.duration}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-2 bg-[#141416] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
            </div>

            {/* Transport Controls & Volume */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#D4AF37]/10">
              
              {/* Secondary Controls (Shuffle/Repeat) */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsShuffle(!isShuffle)}
                  className={`p-2 rounded-xl border transition-all ${isShuffle ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]' : 'border-transparent text-[#F7F3E9]/50 hover:text-[#F7F3E9]'}`}
                  title="Shuffle Track List"
                >
                  <Shuffle className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setIsRepeat(!isRepeat)}
                  className={`p-2 rounded-xl border transition-all ${isRepeat ? 'bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]' : 'border-transparent text-[#F7F3E9]/50 hover:text-[#F7F3E9]'}`}
                  title="Repeat Track"
                >
                  <Repeat className="w-4 h-4" />
                </button>
              </div>

              {/* Main Playback Buttons */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={handlePrevTrack}
                  className="w-10 h-10 rounded-full bg-[#141416] border border-[#D4AF37]/30 text-[#F7F3E9] hover:text-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-all"
                >
                  <SkipBack className="w-5 h-5" />
                </button>
                
                <button 
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#A0301B] via-[#D4AF37] to-[#D4AF37] text-[#0A0A0B] flex items-center justify-center font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 transition-all"
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
                </button>
                
                <button 
                  onClick={handleNextTrack}
                  className="w-10 h-10 rounded-full bg-[#141416] border border-[#D4AF37]/30 text-[#F7F3E9] hover:text-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-all"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>

              {/* Volume Slider */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="text-[#F7F3E9]/60 hover:text-[#D4AF37]"
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-[#A0301B]" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(Number(e.target.value));
                    setIsMuted(false);
                  }}
                  className="w-20 h-1.5 bg-[#141416] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
              </div>

            </div>

          </div>

          {/* Right Column: Catalog, Lyrics & Tech Specs Tabs (5 Cols) */}
          <div className="lg:col-span-5 p-6 bg-[#0A0A0B]/60 flex flex-col justify-between">
            
            {/* Tab Navigation */}
            <div>
              <div className="flex items-center gap-2 border-b border-[#D4AF37]/20 pb-3 mb-4">
                <button
                  onClick={() => setActiveTab('catalog')}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activeTab === 'catalog' 
                      ? 'bg-[#D4AF37] text-[#0A0A0B]' 
                      : 'text-[#F7F3E9]/60 hover:text-[#F7F3E9]'
                  }`}
                >
                  <ListMusic className="w-3.5 h-3.5" /> Catalog
                </button>
                <button
                  onClick={() => setActiveTab('lyrics')}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activeTab === 'lyrics' 
                      ? 'bg-[#D4AF37] text-[#0A0A0B]' 
                      : 'text-[#F7F3E9]/60 hover:text-[#F7F3E9]'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5" /> Lyrics & Notes
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`px-3 py-1.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    activeTab === 'specs' 
                      ? 'bg-[#D4AF37] text-[#0A0A0B]' 
                      : 'text-[#F7F3E9]/60 hover:text-[#F7F3E9]'
                  }`}
                >
                  <Sliders className="w-3.5 h-3.5" /> Rights Spec
                </button>
              </div>

              {/* Tab 1: Track Catalog List */}
              {activeTab === 'catalog' && (
                <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                  {TRACK_CATALOG.map((track, idx) => {
                    const isSelected = idx === currentTrackIndex;
                    return (
                      <div
                        key={track.id}
                        onClick={() => {
                          setCurrentTrackIndex(idx);
                          setCurrentTime(0);
                          setIsPlaying(true);
                        }}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#D4AF37]/15 border-[#D4AF37] text-[#F7F3E9]'
                            : 'bg-[#141416]/80 border-transparent hover:border-[#D4AF37]/30 text-[#F7F3E9]/80'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs ${
                            isSelected ? 'bg-[#D4AF37] text-[#0A0A0B]' : 'bg-[#0A0A0B] text-[#D4AF37] border border-[#D4AF37]/20'
                          }`}>
                            {isSelected && isPlaying ? <Flame className="w-5 h-5 animate-bounce" /> : `0${idx + 1}`}
                          </div>
                          <div>
                            <h4 className="font-bold text-sm leading-tight text-[#F7F3E9]">{track.title}</h4>
                            <p className="text-xs text-[#D4AF37] font-medium mt-0.5">{track.artist}</p>
                          </div>
                        </div>

                        <div className="text-right">
                          <span className="text-[10px] font-mono block text-[#F7F3E9]/50">{formatTime(track.duration)}</span>
                          <span className="text-[9px] bg-[#0B4234]/60 text-[#D4AF37] px-2 py-0.5 rounded font-mono mt-1 inline-block">
                            {track.bpm} BPM
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Tab 2: Lyrics & Sonic Notes */}
              {activeTab === 'lyrics' && (
                <div className="bg-[#141416] p-4 rounded-2xl border border-[#D4AF37]/20 max-h-[360px] overflow-y-auto font-mono text-xs text-[#F7F3E9]/90 whitespace-pre-line leading-relaxed">
                  <div className="text-[#D4AF37] font-bold uppercase tracking-wider mb-2 pb-2 border-b border-[#D4AF37]/20 flex items-center justify-between">
                    <span>{currentTrack.title}</span>
                    <span className="text-[10px] text-[#F7F3E9]/50">Lyrics & Production Sheet</span>
                  </div>
                  {currentTrack.lyrics}
                </div>
              )}

              {/* Tab 3: Technical Rights & Master Specs */}
              {activeTab === 'specs' && (
                <div className="space-y-3 text-xs bg-[#141416] p-4 rounded-2xl border border-[#D4AF37]/20">
                  <h4 className="font-bold text-[#D4AF37] uppercase tracking-wider pb-2 border-b border-[#D4AF37]/20 flex items-center gap-2">
                    <Info className="w-4 h-4" /> Master Rights Clearance Sheet
                  </h4>
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div>
                      <span className="text-[#F7F3E9]/50 block">Publisher</span>
                      <span className="font-bold text-[#F7F3E9]">Fepar Records Ltd</span>
                    </div>
                    <div>
                      <span className="text-[#F7F3E9]/50 block">Territory</span>
                      <span className="font-bold text-[#F7F3E9]">Worldwide (AfCFTA)</span>
                    </div>
                    <div>
                      <span className="text-[#F7F3E9]/50 block">Musical Key</span>
                      <span className="font-bold text-[#D4AF37]">{currentTrack.key}</span>
                    </div>
                    <div>
                      <span className="text-[#F7F3E9]/50 block">Tempo</span>
                      <span className="font-bold text-[#D4AF37]">{currentTrack.bpm} BPM</span>
                    </div>
                    <div>
                      <span className="text-[#F7F3E9]/50 block">ISRC Code</span>
                      <span className="font-mono text-[#F7F3E9]">NG-FPR-26-00091</span>
                    </div>
                    <div>
                      <span className="text-[#F7F3E9]/50 block">Sync Availability</span>
                      <span className="text-[#0B4234] font-bold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Pre-Cleared
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Production Credit Card */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-[#A0301B]/20 via-[#141416] to-[#0B4234]/20 border border-[#D4AF37]/20 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#D4AF37] uppercase font-bold tracking-widest block">Producers Roster</span>
                <p className="text-xs font-bold text-[#F7F3E9] mt-0.5">Sage on the Beat & HammerGeek</p>
              </div>
              <button 
                onClick={() => setIsSyncModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] font-bold text-[11px] hover:bg-[#D4AF37] hover:text-[#0A0A0B] transition-all"
              >
                License Sound
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* SYNC LICENSING CLEARANCE MODAL */}
      {isSyncModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0A0A0B]/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#141416] border-2 border-[#D4AF37] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <button 
              onClick={() => setIsSyncModalOpen(false)}
              className="absolute top-4 right-4 text-[#F7F3E9]/50 hover:text-[#D4AF37]"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#A0301B]/20 border border-[#A0301B] flex items-center justify-center text-[#D4AF37]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#F7F3E9]">Sync Licensing Request</h3>
                <p className="text-xs text-[#D4AF37]">Fepar Records Master & Publishing Clearance Desk</p>
              </div>
            </div>

            {syncSuccess ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-[#0B4234] mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-[#F7F3E9]">Clearance Brief Transmitted!</h4>
                <p className="text-xs text-[#F7F3E9]/70 max-w-xs mx-auto">
                  Our sync administration desk will review your media project specification within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSyncSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-[#F7F3E9] mb-1">Target Master Track</label>
                  <input
                    type="text"
                    readOnly
                    value={`${currentTrack.title} (${currentTrack.id}) - ${currentTrack.artist}`}
                    className="w-full bg-[#0A0A0B] border border-[#D4AF37]/30 rounded-xl p-3 text-[#D4AF37] font-mono font-bold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-[#F7F3E9] mb-1">Project Type</label>
                    <select className="w-full bg-[#0A0A0B] border border-[#F7F3E9]/20 rounded-xl p-3 text-[#F7F3E9]">
                      <option>Feature Film / Cinema</option>
                      <option>TV / Streaming Series</option>
                      <option>Commercial / Ad Campaign</option>
                      <option>Video Game / Immersive</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-[#F7F3E9] mb-1">Territory</label>
                    <select className="w-full bg-[#0A0A0B] border border-[#F7F3E9]/20 rounded-xl p-3 text-[#F7F3E9]">
                      <option>Worldwide / All Media</option>
                      <option>Pan-African Continental</option>
                      <option>North America & Europe</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#F7F3E9] mb-1">Production Company / Applicant Email</label>
                  <input
                    type="email"
                    required
                    placeholder="licensing@productionhouse.com"
                    className="w-full bg-[#0A0A0B] border border-[#F7F3E9]/20 rounded-xl p-3 text-[#F7F3E9] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#A0301B] to-[#D4AF37] text-[#0A0A0B] font-extrabold uppercase tracking-wider hover:opacity-90 transition-all shadow-lg mt-2"
                >
                  Submit Sync Brief
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}