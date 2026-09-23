import React, { useState, useEffect } from 'react';
import { ChefHat, Globe, Printer, BookOpen, Volume2, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  language: Language;
  onToggleLanguage: () => void;
  readingProgress: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onToggleLanguage,
  readingProgress
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-200/80 transition-all shadow-xs">
      {/* Top Reading Progress Bar */}
      <div className="w-full bg-stone-100 h-1 overflow-hidden reading-progress">
        <div
          className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
          role="progressbar"
          aria-valuenow={Math.round(readingProgress)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-stone-900 group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <ChefHat className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-base sm:text-lg leading-tight block font-serif-heading">
              {language === 'fr' ? 'L’Atelier Crêpes' : 'The French Crepe'}
            </span>
            <span className="text-[10px] text-amber-700 font-semibold tracking-wider uppercase block">
              {language === 'fr' ? 'Cuisine & Tradition' : 'Tradition & Gourmet'}
            </span>
          </div>
        </a>

        {/* Quick Actions & Language Conversion Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick jump to recipe button */}
          <a
            href="#calculateur-ingredients"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 transition"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>{language === 'fr' ? 'Aller aux ingrédients' : 'Jump to recipe'}</span>
          </a>

          {/* Print Recipe Button */}
          <button
            onClick={() => window.print()}
            className="no-print hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 transition cursor-pointer"
            title={language === 'fr' ? 'Imprimer la recette' : 'Print recipe'}
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{language === 'fr' ? 'Imprimer' : 'Print'}</span>
          </button>

          {/* FRENCH TO ENGLISH CONVERSION BUTTON */}
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 border border-amber-600/30 transition shadow-xs cursor-pointer active:scale-95"
            title={
              language === 'fr'
                ? 'Traduire la page en Anglais (Switch to English)'
                : 'Revenir en Français (Switch to French)'
            }
          >
            <Globe className="w-3.5 h-3.5" />
            <span className="uppercase">{language === 'fr' ? 'EN / English' : 'FR / Français'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
