import React, { useState, useEffect } from 'react';
import { ListOrdered, ChevronRight, CheckCircle2, Bookmark } from 'lucide-react';
import { Language } from '../types';

interface TableOfContentsProps {
  language: Language;
}

interface TocItem {
  id: string;
  title: { fr: string; en: string };
  badge?: { fr: string; en: string };
}

const TOC_ITEMS: TocItem[] = [
  {
    id: 'pourquoi-cette-recette',
    title: {
      fr: 'Pourquoi cette recette est inratable ?',
      en: 'Why is this recipe foolproof?'
    }
  },
  {
    id: 'calculateur-ingredients',
    title: {
      fr: 'Les ingrédients & Calculateur de portions',
      en: 'Ingredients & Servings Calculator'
    },
    badge: { fr: 'Interactif', en: 'Interactive' }
  },
  {
    id: 'materiel-requis',
    title: {
      fr: 'Le matériel de cuisine indispensable',
      en: 'Essential Kitchen Tools'
    }
  },
  {
    id: 'etapes-preparation',
    title: {
      fr: 'Préparation étape par étape (en 5 min)',
      en: 'Step-by-step preparation (in 5 min)'
    },
    badge: { fr: 'Guide pas à pas', en: 'Step-by-step' }
  },
  {
    id: 'minuteur-repos-cuisson',
    title: {
      fr: 'Minuteur : Repos (30 min) & Cuisson express',
      en: 'Timers: Resting (30 min) & Fast Cooking'
    },
    badge: { fr: 'Chrono', en: 'Timer' }
  },
  {
    id: 'astuces-de-chef',
    title: {
      fr: 'Les 5 secrets du chef (zéro grumeau garanti)',
      en: "Chef's 5 secrets (100% lump-free guarantee)"
    }
  },
  {
    id: 'idees-garnitures',
    title: {
      fr: 'Idées de garnitures sucrées & salées',
      en: 'Sweet & savory topping ideas'
    }
  },
  {
    id: 'fiche-recette-imprimable',
    title: {
      fr: 'Fiche recette imprimable',
      en: 'Printable Recipe Card'
    }
  },
  {
    id: 'questions-frequentes',
    title: {
      fr: 'Foire Aux Questions (FAQ Crêpes)',
      en: 'Frequently Asked Questions (FAQ)'
    }
  }
];

export const TableOfContents: React.FC<TableOfContentsProps> = ({ language }) => {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpenMobile, setIsOpenMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = TOC_ITEMS.length - 1; i >= 0; i--) {
        const item = TOC_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveId(item.id);
          return;
        }
      }
      if (TOC_ITEMS.length > 0 && window.scrollY < 200) {
        setActiveId(TOC_ITEMS[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAnchor = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveId(id);
      setIsOpenMobile(false);
    }
  };

  return (
    <nav
      aria-label="Table des matières"
      className="bg-white rounded-2xl border border-amber-200/80 p-5 shadow-sm transition-all mb-8"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-amber-900 font-bold text-lg">
          <ListOrdered className="w-5 h-5 text-amber-600" />
          <span>
            {language === 'fr' ? 'Table des Matières' : 'Table of Contents'}
          </span>
        </div>

        <button
          onClick={() => setIsOpenMobile(!isOpenMobile)}
          className="lg:hidden text-xs font-semibold px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 transition"
        >
          {isOpenMobile
            ? language === 'fr'
              ? 'Masquer'
              : 'Hide'
            : language === 'fr'
            ? 'Afficher (9 étapes)'
            : 'Show (9 steps)'}
        </button>
      </div>

      <div
        className={`${
          isOpenMobile ? 'block' : 'hidden'
        } lg:block mt-4 pt-3 border-t border-amber-100 space-y-1.5`}
      >
        {TOC_ITEMS.map((item, idx) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToAnchor(item.id, e)}
              className={`group flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all duration-200 ${
                isActive
                  ? 'bg-amber-100/90 text-amber-950 font-bold shadow-xs'
                  : 'text-stone-600 hover:bg-amber-50/70 hover:text-stone-900'
              }`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span
                  className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-bold shrink-0 transition ${
                    isActive
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-100 text-stone-500 group-hover:bg-amber-200 group-hover:text-amber-900'
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="truncate text-left">
                  {item.title[language]}
                </span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                {item.badge && (
                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-amber-200/60 text-amber-800 hidden sm:inline-block">
                    {item.badge[language]}
                  </span>
                )}
                <ChevronRight
                  className={`w-3.5 h-3.5 transition-transform ${
                    isActive
                      ? 'text-amber-600 translate-x-0.5'
                      : 'text-stone-300 group-hover:text-stone-500'
                  }`}
                />
              </div>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
