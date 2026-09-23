import React, { useState } from 'react';
import { Users, CheckSquare, Square, ChefHat, Sparkles, Scale } from 'lucide-react';
import { INGREDIENTS_DATA, BASE_SERVINGS } from '../data/recipeContent';
import { Language } from '../types';

interface ServingsCalculatorProps {
  language: Language;
}

export const ServingsCalculator: React.FC<ServingsCalculatorProps> = ({ language }) => {
  const [servings, setServings] = useState<number>(4);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const scaleFactor = servings / BASE_SERVINGS;
  const estimatedCrepes = Math.round(servings * 4.5);

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const formatAmount = (baseAmount: number, unit: string) => {
    const rawVal = baseAmount * scaleFactor;
    if (unit === 'pincée(s)') {
      return servings <= 4 ? (language === 'fr' ? '1 pincée' : '1 pinch') : (language === 'fr' ? '2 pincées' : '2 pinches');
    }
    if (unit === 'pièces') {
      const eggs = Math.round(rawVal);
      return `${eggs} ${eggs > 1 ? (language === 'fr' ? 'œufs' : 'eggs') : (language === 'fr' ? 'œuf' : 'egg')}`;
    }
    if (unit === 'c. à soupe') {
      const tbsp = (rawVal).toFixed(rawVal % 1 === 0 ? 0 : 1);
      return `${tbsp} ${language === 'fr' ? 'c. à soupe' : 'tbsp'}`;
    }
    if (unit === 'c. à café') {
      const tsp = (rawVal).toFixed(rawVal % 1 === 0 ? 0 : 1);
      return `${tsp} ${language === 'fr' ? 'c. à café' : 'tsp'}`;
    }
    return `${Math.round(rawVal)} ${unit}`;
  };

  const presetServings = [2, 4, 6, 8, 12];

  return (
    <div
      id="calculateur-ingredients"
      className="bg-white rounded-2xl border border-amber-200 p-5 sm:p-7 shadow-sm my-8"
    >
      {/* Header & Servings Control */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-100">
        <div>
          <div className="flex items-center gap-2 text-amber-700 font-semibold text-xs tracking-wider uppercase">
            <Scale className="w-4 h-4" />
            <span>
              {language === 'fr'
                ? 'Calculateur Réactif & Liste de courses'
                : 'Reactive Calculator & Shopping List'}
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mt-1 font-serif-heading">
            {language === 'fr'
              ? 'Ingrédients pour une pâte inratable'
              : 'Ingredients for Foolproof Crepes'}
          </h3>
          <p className="text-sm text-stone-500 mt-0.5">
            {language === 'fr'
              ? `Rendement : ~${estimatedCrepes} délicieuses crêpes de 24 cm de diamètre`
              : `Yield: ~${estimatedCrepes} delicious 9.5-inch crepes`}
          </p>
        </div>

        {/* Portion Selector Buttons */}
        <div className="flex flex-col items-end gap-1.5 self-stretch sm:self-auto">
          <div className="flex items-center gap-1 bg-amber-50 p-1 rounded-xl border border-amber-200">
            <div className="flex items-center px-2 py-1 text-xs font-semibold text-amber-900 gap-1.5">
              <Users className="w-3.5 h-3.5 text-amber-700" />
              <span className="hidden sm:inline">
                {language === 'fr' ? 'Personnes :' : 'Servings:'}
              </span>
            </div>
            {presetServings.map(num => (
              <button
                key={num}
                onClick={() => setServings(num)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  servings === num
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'text-amber-950 hover:bg-amber-100'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <span className="text-[11px] text-stone-400">
            {language === 'fr'
              ? 'Ajustez pour recalculer automatiquement'
              : 'Adjust to recalculate automatically'}
          </span>
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {INGREDIENTS_DATA.map((item) => {
          const isChecked = !!checkedItems[item.id];
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                isChecked
                  ? 'bg-stone-50 border-stone-200 opacity-60'
                  : 'bg-amber-50/40 hover:bg-amber-50 border-amber-200/80 hover:border-amber-300'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 text-amber-700 shrink-0 focus:outline-hidden"
              >
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-emerald-600" />
                ) : (
                  <Square className="w-5 h-5 text-stone-400 hover:text-amber-600" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-sm font-semibold ${
                      isChecked ? 'line-through text-stone-500' : 'text-stone-900'
                    }`}
                  >
                    {item.name[language]}
                  </span>
                  <span className="font-mono text-sm font-bold text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded-md shrink-0">
                    {formatAmount(item.baseAmount, item.unit)}
                  </span>
                </div>
                {item.notes && (
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    {item.notes[language]}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pro Ratio Tip */}
      <div className="mt-5 p-3.5 rounded-xl bg-gradient-to-r from-amber-100/70 to-orange-50 border border-amber-200 flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-800 shrink-0">
          <ChefHat className="w-5 h-5" />
        </div>
        <p className="text-xs text-amber-950 leading-relaxed">
          <strong className="font-semibold">
            {language === 'fr'
              ? 'La règle mnémotechnique des chefs (1-2-3-4) :'
              : 'The French Chef ratio mnemonic (1-2-3-4):'}
          </strong>{' '}
          {language === 'fr'
            ? '1 pincée de sel, 2 cuillères de sucre, 3 verres de lait (500ml), 4 œufs, et 250g de farine. Impossible de se tromper !'
            : '1 pinch of salt, 2 spoons of sugar, 3 cups of milk (500ml), 4 eggs, and 250g flour. Virtually impossible to fail!'}
        </p>
      </div>
    </div>
  );
};
