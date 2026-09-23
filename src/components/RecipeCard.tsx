import React from 'react';
import { Printer, Star, Clock, ChefHat, Flame, Award, Heart, CheckCircle2 } from 'lucide-react';
import { INGREDIENTS_DATA, RECIPE_STEPS } from '../data/recipeContent';
import { Language } from '../types';

interface RecipeCardProps {
  language: Language;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ language }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="fiche-recette-imprimable"
      className="recipe-card bg-amber-50/70 border-2 border-amber-300 rounded-3xl p-6 sm:p-9 my-12 shadow-md relative overflow-hidden"
    >
      {/* Decorative background circle */}
      <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-amber-200/30 blur-2xl pointer-events-none" />

      {/* Top action bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-amber-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-800 bg-amber-200/60 px-2.5 py-1 rounded-full">
              {language === 'fr' ? 'Fiche Recette Officielle' : 'Official Recipe Card'}
            </span>
            <div className="flex items-center text-amber-500 text-xs font-bold gap-1">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.9 / 5 (1 482 avis)</span>
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-2 font-serif-heading">
            {language === 'fr'
              ? 'Pâte à Crêpes Facile, Rapide & Sans Grumeaux'
              : 'Easy, Fast & Lump-Free Crepe Batter'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            {language === 'fr'
              ? 'La méthode traditionnelle de grand-mère revisitée par les chefs pâtissiers.'
              : 'The traditional grandmother method revisited by modern pastry chefs.'}
          </p>
        </div>

        {/* Print Recipe Button */}
        <button
          onClick={handlePrint}
          className="no-print flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-300 font-semibold px-4 py-2.5 rounded-xl text-sm transition shadow-sm self-start sm:self-center cursor-pointer shrink-0"
        >
          <Printer className="w-4 h-4" />
          <span>{language === 'fr' ? 'Imprimer la fiche' : 'Print Recipe'}</span>
        </button>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 my-6 text-center">
        <div className="p-3 bg-white rounded-xl border border-amber-200/80">
          <Clock className="w-5 h-5 text-amber-600 mx-auto mb-1" />
          <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
            {language === 'fr' ? 'Préparation' : 'Prep Time'}
          </span>
          <span className="font-bold text-stone-800 text-sm">5 minutes</span>
        </div>

        <div className="p-3 bg-white rounded-xl border border-amber-200/80">
          <Flame className="w-5 h-5 text-orange-600 mx-auto mb-1" />
          <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
            {language === 'fr' ? 'Cuisson' : 'Cook Time'}
          </span>
          <span className="font-bold text-stone-800 text-sm">15 minutes</span>
        </div>

        <div className="p-3 bg-white rounded-xl border border-amber-200/80">
          <ChefHat className="w-5 h-5 text-amber-700 mx-auto mb-1" />
          <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
            {language === 'fr' ? 'Repos' : 'Resting'}
          </span>
          <span className="font-bold text-stone-800 text-sm">30 minutes</span>
        </div>

        <div className="p-3 bg-white rounded-xl border border-amber-200/80">
          <Award className="w-5 h-5 text-emerald-600 mx-auto mb-1" />
          <span className="text-[11px] uppercase tracking-wider text-stone-400 font-semibold block">
            {language === 'fr' ? 'Difficulté' : 'Difficulty'}
          </span>
          <span className="font-bold text-emerald-700 text-sm">
            {language === 'fr' ? 'Très Facile' : 'Very Easy'}
          </span>
        </div>
      </div>

      {/* Ingredients list for printing / reference */}
      <div className="bg-white rounded-2xl p-5 border border-amber-200 my-6">
        <h3 className="font-bold text-stone-900 text-base mb-3 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-amber-600" />
          <span>{language === 'fr' ? 'Ingrédients essentiels (Base pour ~18 crêpes)' : 'Essential Ingredients (Yield ~18 crepes)'}</span>
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-700">
          {INGREDIENTS_DATA.map((item) => (
            <li key={item.id} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
              <span>
                <strong>{item.baseAmount} {item.unit}</strong> - {item.name[language]}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Instructions list */}
      <div className="space-y-4">
        <h3 className="font-bold text-stone-900 text-lg font-serif-heading">
          {language === 'fr' ? 'Instructions condensées' : 'Condensed Instructions'}
        </h3>
        {RECIPE_STEPS.map((step) => (
          <div key={step.id} className="flex items-start gap-3 text-sm">
            <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              {step.id}
            </span>
            <div>
              <h4 className="font-bold text-stone-900">{step.title[language]}</h4>
              <p className="text-stone-600 mt-0.5 leading-relaxed">{step.instruction[language]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
