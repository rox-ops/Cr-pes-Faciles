import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQ_DATA } from '../data/recipeContent';
import { Language } from '../types';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true
  });

  const toggleFaq = (id: string) => {
    setOpenIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="questions-frequentes" className="my-12">
      <div className="flex items-center gap-2.5 mb-2">
        <span className="p-2 rounded-xl bg-amber-100 text-amber-800">
          <HelpCircle className="w-5 h-5" />
        </span>
        <span className="text-xs uppercase font-bold tracking-wider text-amber-800">
          {language === 'fr' ? 'Réponses d’experts' : 'Expert Answers'}
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 font-serif-heading">
        {language === 'fr'
          ? 'Foire Aux Questions : Tout savoir sur la pâte à crêpes'
          : 'Frequently Asked Questions: Mastering French Crepes'}
      </h2>

      <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
        {language === 'fr'
          ? 'Les réponses précises aux interrogations les plus fréquentes pour ne plus jamais rater vos crêpes du dimanche ou de la Chandeleur.'
          : 'Detailed answers to the most common questions to ensure your Sunday or Candlemas crepes are always a masterpiece.'}
      </p>

      <div className="mt-6 space-y-3">
        {FAQ_DATA.map((item) => {
          const isOpen = !!openIds[item.id];
          return (
            <div
              key={item.id}
              className="border border-amber-200/70 bg-white rounded-2xl overflow-hidden transition shadow-xs"
            >
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-amber-50/50 transition cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-stone-900 text-sm sm:text-base pr-2">
                  {item.question[language]}
                </span>
                <span
                  className={`w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-amber-200' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-amber-100/50">
                  <p>{item.answer[language]}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
