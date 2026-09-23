import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, FastForward, Sparkles } from 'lucide-react';
import { FULL_TEXT_FOR_SPEECH } from '../data/recipeContent';
import { Language } from '../types';

interface AudioPlayerProps {
  language: Language;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ language }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState<number>(1);
  const [supported, setSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setSupported(false);
    }
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // When language changes while playing, stop speech
  useEffect(() => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
    }
  }, [language]);

  const handleStartPlay = () => {
    if (!('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();

    const textToRead = FULL_TEXT_FOR_SPEECH[language];
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utteranceRef.current = utterance;

    utterance.lang = language === 'fr' ? 'fr-FR' : 'en-US';
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Pick appropriate voice if available
    const voices = window.speechSynthesis.getVoices();
    const targetLang = language === 'fr' ? 'fr' : 'en';
    const matchedVoice = voices.find(v => v.lang.toLowerCase().startsWith(targetLang));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (!('speechSynthesis' in window)) return;
    if (isPlaying && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  };

  const handleResume = () => {
    if (!('speechSynthesis' in window)) return;
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      handleStartPlay();
    }
  };

  const handleStop = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  const toggleSpeed = () => {
    const nextRate = rate === 1 ? 1.25 : rate === 1.25 ? 1.5 : 1;
    setRate(nextRate);
    if (isPlaying && !isPaused) {
      // Re-trigger with new rate
      handleStartPlay();
    }
  };

  if (!supported) return null;

  return (
    <div className="bg-gradient-to-r from-amber-900 to-stone-900 text-white rounded-2xl p-4 sm:p-5 shadow-lg border border-amber-800/40 my-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* Left: Info */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            {isPlaying && !isPaused ? (
              <div className="flex items-end gap-0.5 h-5">
                <span className="w-1 bg-amber-400 rounded-full animate-bounce [animation-delay:0ms] h-4"></span>
                <span className="w-1 bg-amber-400 rounded-full animate-bounce [animation-delay:150ms] h-6"></span>
                <span className="w-1 bg-amber-400 rounded-full animate-bounce [animation-delay:300ms] h-3"></span>
                <span className="w-1 bg-amber-400 rounded-full animate-bounce [animation-delay:450ms] h-5"></span>
              </div>
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Web Speech API
              </span>
              <span className="text-xs text-stone-400">
                {language === 'fr' ? 'Audio ~2 min' : 'Audio ~2 min'}
              </span>
            </div>
            <h3 className="font-semibold text-stone-100 text-base sm:text-lg">
              {language === 'fr'
                ? "Écouter l'article complet (Synthèse Vocale)"
                : 'Listen to the full recipe (Text-to-Speech)'}
            </h3>
            <p className="text-xs text-stone-400 mt-0.5">
              {language === 'fr'
                ? 'Idéal pour cuisiner les mains libres sans avoir à lire !'
                : 'Perfect for hands-free cooking without reading your screen!'}
            </p>
          </div>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-2 self-end sm:self-center">
          {/* Speed Toggle */}
          <button
            onClick={toggleSpeed}
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition flex items-center gap-1 cursor-pointer"
            title={language === 'fr' ? 'Vitesse de lecture' : 'Playback speed'}
          >
            <FastForward className="w-3 h-3 text-amber-400" />
            {rate}x
          </button>

          {/* Play / Pause / Resume */}
          {!isPlaying || isPaused ? (
            <button
              onClick={handleResume}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold px-4 py-2 rounded-xl text-sm shadow-md transition transform active:scale-95 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-stone-950" />
              <span>{isPaused ? (language === 'fr' ? 'Reprendre' : 'Resume') : (language === 'fr' ? 'Écouter' : 'Listen')}</span>
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="flex items-center gap-2 bg-amber-400/20 hover:bg-amber-400/30 text-amber-300 font-bold px-4 py-2 rounded-xl text-sm border border-amber-400/40 transition cursor-pointer"
            >
              <Pause className="w-4 h-4 fill-amber-300" />
              <span>{language === 'fr' ? 'Pause' : 'Pause'}</span>
            </button>
          )}

          {/* Stop button */}
          {(isPlaying || isPaused) && (
            <button
              onClick={handleStop}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white border border-stone-700 transition cursor-pointer"
              title={language === 'fr' ? 'Arrêter la lecture' : 'Stop playback'}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
