import React, { useState, useEffect } from 'react';
import { Timer, Play, Pause, RotateCcw, Bell, CheckCircle2, Flame, Moon } from 'lucide-react';
import { playChimeAlert } from '../utils/audioAlert';
import { Language } from '../types';

interface CookingTimerProps {
  language: Language;
}

export const CookingTimer: React.FC<CookingTimerProps> = ({ language }) => {
  // Mode: 'rest' (30 mins = 1800s) or 'flip' (60s)
  const [mode, setMode] = useState<'rest' | 'flip'>('rest');
  const [timeLeft, setTimeLeft] = useState<number>(1800);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const totalTime = mode === 'rest' ? 1800 : 60;

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsFinished(true);
            playChimeAlert();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft]);

  const switchMode = (newMode: 'rest' | 'flip') => {
    setIsRunning(false);
    setIsFinished(false);
    setMode(newMode);
    setTimeLeft(newMode === 'rest' ? 1800 : 60);
  };

  const handleTogglePlay = () => {
    if (isFinished) {
      setTimeLeft(totalTime);
      setIsFinished(false);
      setIsRunning(true);
    } else {
      setIsRunning(!isRunning);
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsFinished(false);
    setTimeLeft(totalTime);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = ((totalTime - timeLeft) / totalTime) * 100;

  return (
    <div
      id="minuteur-repos-cuisson"
      className="bg-stone-900 text-stone-100 rounded-2xl p-5 sm:p-7 shadow-lg border border-stone-800 my-8"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-800">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <Timer className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-lg sm:text-xl text-stone-100">
              {language === 'fr'
                ? 'Minuteur Interactif de Cuisine'
                : 'Interactive Kitchen Cooking Timer'}
            </h3>
            <p className="text-xs text-stone-400">
              {language === 'fr'
                ? 'Avec alerte sonore automatique à la fin du chrono'
                : 'With automatic sound alert when time expires'}
            </p>
          </div>
        </div>

        {/* Mode switcher tabs */}
        <div className="flex items-center bg-stone-800 p-1 rounded-xl border border-stone-700">
          <button
            onClick={() => switchMode('rest')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              mode === 'rest'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Moon className="w-3.5 h-3.5" />
            <span>{language === 'fr' ? 'Repos Pâte (30 min)' : 'Batter Rest (30m)'}</span>
          </button>
          <button
            onClick={() => switchMode('flip')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              mode === 'flip'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>{language === 'fr' ? 'Cuisson crêpe (60s)' : 'Crepe Flip (60s)'}</span>
          </button>
        </div>
      </div>

      {/* Main Timer Display */}
      <div className="mt-6 flex flex-col items-center justify-center">
        {/* Digital display */}
        <div className="text-5xl sm:text-6xl font-mono font-black tracking-wider text-amber-400 drop-shadow-md">
          {formatTime(timeLeft)}
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md h-2 bg-stone-800 rounded-full mt-4 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Status Message */}
        <p className="text-xs text-stone-400 mt-2">
          {isFinished ? (
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <Bell className="w-3.5 h-3.5" />
              {mode === 'rest'
                ? language === 'fr'
                  ? 'Le temps de repos est terminé ! Votre pâte est prête à cuire.'
                  : 'Resting complete! Your crepe batter is ready to cook.'
                : language === 'fr'
                ? 'C’est le moment de retourner la crêpe !'
                : 'Time to flip your crepe!'}
            </span>
          ) : isRunning ? (
            language === 'fr'
              ? 'Chronomètre en cours... Vous pouvez continuer à lire l’article.'
              : 'Timer running... Feel free to continue reading.'
          ) : (
            language === 'fr'
              ? 'Prêt à lancer le décompte'
              : 'Ready to start countdown'
          )}
        </p>

        {/* Control Buttons */}
        <div className="flex items-center gap-3 mt-5">
          <button
            onClick={handleTogglePlay}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-6 py-2.5 rounded-xl text-sm transition transform active:scale-95 cursor-pointer shadow-md"
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4 fill-stone-950" />
                <span>{language === 'fr' ? 'Pause' : 'Pause'}</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-stone-950" />
                <span>
                  {isFinished
                    ? language === 'fr'
                      ? 'Recommencer'
                      : 'Restart'
                    : language === 'fr'
                    ? 'Démarrer'
                    : 'Start'}
                </span>
              </>
            )}
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 text-sm font-semibold transition cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{language === 'fr' ? 'Réinitialiser' : 'Reset'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
