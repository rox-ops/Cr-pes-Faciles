import React, { useState, useEffect } from 'react';
import { 
  ChefHat, 
  Sparkles, 
  Flame, 
  Clock, 
  Heart, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  Utensils, 
  Lightbulb, 
  Coffee, 
  Star,
  Layers,
  ArrowUp
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { TableOfContents } from './components/TableOfContents';
import { ServingsCalculator } from './components/ServingsCalculator';
import { CookingTimer } from './components/CookingTimer';
import { AudioPlayer } from './components/AudioPlayer';
import { ShareBar } from './components/ShareBar';
import { RecipeCard } from './components/RecipeCard';
import { FaqSection } from './components/FaqSection';
import { AdPlaceholder } from './components/AdPlaceholder';
import { CrepeStackIllustration } from './components/CulinaryIllustrations';
import { RECIPE_STEPS } from './data/recipeContent';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const calculateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setReadingProgress(progress);
      }
      setShowScrollTop(scrollTop > 400);
    };

    window.addEventListener('scroll', calculateProgress, { passive: true });
    calculateProgress();
    return () => window.removeEventListener('scroll', calculateProgress);
  }, []);

  const toggleLanguage = () => {
    const nextLang = language === 'fr' ? 'en' : 'fr';
    setLanguage(nextLang);
    // Update HTML lang attribute dynamically
    document.documentElement.lang = nextLang;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isFr = language === 'fr';

  return (
    <div className="min-h-screen bg-stone-50/50 text-stone-800 selection:bg-amber-200 selection:text-amber-950 font-sans">
      {/* Top Navbar with Reading Progress Bar and FR/EN Toggle */}
      <Navbar
        language={language}
        onToggleLanguage={toggleLanguage}
        readingProgress={readingProgress}
      />

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-20">
        
        {/* ========================================================================= */}
        {/* <!-- [ESPACE PUBLICITAIRE / AD SLOT 1 - TOP LEADERBOARD 728x90] --> */}
        {/* ========================================================================= */}
        <AdPlaceholder
          slotId="header-leaderboard"
          slotName="Bannière Haute Page (Leaderboard)"
          format="leaderboard"
          isFrench={isFr}
        />

        {/* Article Header & Hero Section */}
        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-xs mb-8">
          
          {/* Breadcrumb for SEO */}
          <nav aria-label="Fil d'Ariane" className="text-xs text-stone-400 mb-4 flex items-center gap-2">
            <span>{isFr ? 'Accueil' : 'Home'}</span>
            <span>/</span>
            <span>{isFr ? 'Recettes Faciles' : 'Easy Recipes'}</span>
            <span>/</span>
            <span className="text-amber-800 font-semibold">{isFr ? 'Pâte à crêpes' : 'Crepe Batter'}</span>
          </nav>

          {/* Badge & Publication Metadata */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1 text-xs uppercase font-extrabold tracking-wider bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              {isFr ? 'Recette Traditionnelle Inratable' : 'Foolproof Traditional Recipe'}
            </span>
            <span className="text-xs text-stone-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {isFr ? '5 min de préparation • 5 min de lecture' : '5 min prep • 5 min read'}
            </span>
            <span className="text-xs text-stone-400">
              • {isFr ? 'Mis à jour pour la Chandeleur' : 'Updated for Candlemas'}
            </span>
          </div>

          {/* Main H1 - High-Value French SEO Keyword Focus */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight font-serif-heading">
            {isFr
              ? 'Recette Facile de Pâte à Crêpes : Inratable, Rapide et Sans Grumeaux'
              : 'Easy French Crepe Batter Recipe: Foolproof, Fast and Lump-Free'}
          </h1>

          {/* Editorial Lead Paragraph */}
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
            {isFr ? (
              <>
                Vous cherchez la <strong>recette facile de pâte à crêpes</strong> pour régaler toute la famille en moins de 5 minutes chrono ? Fini les grumeaux tenaces et les crêpes cartonneuses ! Grâce à des proportions d’or testées par les chefs, à des ingrédients du placard et à 3 gestes techniques simplissimes, réussissez à tous les coups des crêpes fines, moelleuses, délicatement dorées et parfumées.
              </>
            ) : (
              <>
                Looking for the quintessential <strong>easy French crepe batter recipe</strong> to delight your family in under 5 minutes flat? Say goodbye to stubborn lumps and rubbery crepes. With golden baker ratios, pantry staples, and 3 simple chef techniques, prepare paper-thin, soft, and fragrant French crepes every single time.
              </>
            )}
          </p>

          {/* High-Fidelity Hero Visual */}
          <div className="my-8 rounded-2xl overflow-hidden border border-amber-200/60 shadow-inner bg-amber-50/30">
            <CrepeStackIllustration />
            <div className="p-3 bg-amber-100/50 text-center text-xs text-stone-600 italic">
              {isFr
                ? 'Une pile de crêpes dorées et moelleuses, prêtes à être dégustées avec du beurre fondu et un voile de sucre.'
                : 'A stack of golden tender French crepes ready to be savored with melting butter and dusted sugar.'}
            </div>
          </div>

          {/* Social Share Bar */}
          <ShareBar language={language} />

          {/* Text-To-Speech Audio Player (Web Speech API) */}
          <AudioPlayer language={language} />

          {/* Table of Contents with jump-on-page links */}
          <TableOfContents language={language} />

          {/* Section 1: Pourquoi cette recette */}
          <section id="pourquoi-cette-recette" className="my-10 pt-4 border-t border-stone-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 font-serif-heading flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-sans font-bold text-base">
                1
              </span>
              <span>{isFr ? 'Pourquoi cette recette est-elle 100% inratable ?' : 'Why is this recipe 100% foolproof?'}</span>
            </h2>

            <div className="space-y-4 text-stone-700 leading-relaxed text-base">
              <p>
                {isFr ? (
                  <>
                    La pâte à crêpes est l’un des plus grands classiques du patrimoine culinaire français. Pourtant, beaucoup de cuisiniers amateurs rencontrent les mêmes déconvenues : pâte trop épaisse qui colle à la poêle, présence de grumeaux désagréables ou crêpes caoutchouteuses.
                  </>
                ) : (
                  <>
                    Crepes are an undisputed monument of French culinary culture. Yet home cooks often face the same frustrating hurdles: batter too thick, stubborn lumps, or leathery texture.
                  </>
                )}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <div className="text-amber-800 font-bold text-base mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    {isFr ? 'Le Ratio 1-2-3-4' : 'The 1-2-3-4 Ratio'}
                  </div>
                  <p className="text-xs text-stone-600">
                    {isFr
                      ? 'Un équilibre parfait entre farine, œufs et liquide pour une texture souple et légère.'
                      : 'The ultimate balance of flour, eggs, and liquids for a light and tender texture.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <div className="text-amber-800 font-bold text-base mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    {isFr ? 'Sans Grumeaux Garanti' : 'Zero Lumps Guaranteed'}
                  </div>
                  <p className="text-xs text-stone-600">
                    {isFr
                      ? 'L’incorporation du lait tiède en filet évite le choc thermique avec la farine et les matières grasses.'
                      : 'Whisking warm milk gradually prevents thermal shock with flour starches.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <div className="text-amber-800 font-bold text-base mb-1 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    {isFr ? 'Prête en 5 Minutes' : '5-Minute Prep'}
                  </div>
                  <p className="text-xs text-stone-600">
                    {isFr
                      ? 'Pas besoin de robot sophistiqué : un simple saladier et un fouet suffisent largement.'
                      : 'No fancy stand mixer required: a simple bowl and handheld whisk get it done.'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Ingrédients & Calculateur de portions */}
          <ServingsCalculator language={language} />

          {/* ========================================================================= */}
          {/* <!-- [ESPACE PUBLICITAIRE / AD SLOT 2 - MID-CONTENT RECTANGLE 300x250] --> */}
          {/* ========================================================================= */}
          <AdPlaceholder
            slotId="mid-content-rectangle"
            slotName="Pavé Milieu d'Article (MPU 300x250)"
            format="rectangle"
            isFrench={isFr}
          />

          {/* Section 3: Le Matériel Requis */}
          <section id="materiel-requis" className="my-10 pt-4 border-t border-stone-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 font-serif-heading flex items-center gap-3">
              <span className="w-8 h-8 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-sans font-bold text-base">
                2
              </span>
              <span>{isFr ? 'Le matériel de cuisine recommandé' : 'Recommended Kitchen Tools'}</span>
            </h2>

            <p className="text-stone-700 leading-relaxed mb-6 text-base">
              {isFr
                ? 'Pour réussir votre pâte sans effort, vous n’avez besoin que de 4 ustensiles basiques que vous possédez très certainement déjà dans vos tiroirs :'
                : 'To execute your batter effortlessly, you only need 4 basic utensils you likely already have in your kitchen:'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-stone-200 bg-white flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">
                    {isFr ? 'Un grand cul-de-poule ou saladier' : 'A large mixing bowl'}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    {isFr
                      ? 'Avec des parois hautes pour pouvoir fouetter énergiquement sans éclabousser votre plan de travail.'
                      : 'Deep bowl allows vigorous whisking without spilling batter across your counters.'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">
                    {isFr ? 'Une poêle à crêpes antiadhésive' : 'A non-stick crepe pan or billig'}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    {isFr
                      ? 'À fond plat et bords très bas (24 à 28 cm) pour glisser la spatule sous la crêpe facilement.'
                      : 'Flat bottom and low edges (9.5 to 11 inches) to slip the spatula under with ease.'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <ChefHat className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">
                    {isFr ? 'Un fouet manuel en inox' : 'A stainless steel wire whisk'}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    {isFr
                      ? 'Préférable à la fourchette pour émulsionner parfaitement les œufs avec la farine.'
                      : 'Much better than a fork for creating an emulsion and velvety smooth consistency.'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl border border-stone-200 bg-white flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-900 text-sm">
                    {isFr ? 'Une spatule longue et une louche' : 'A long spatula & standard ladle'}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    {isFr
                      ? 'La louche assure un dosage régulier et la spatule en bois ou silicone permet un retournement net.'
                      : 'The ladle gives consistent crepe thickness; spatula flips cleanly without tearing.'}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Étapes de préparation */}
          <section id="etapes-preparation" className="my-10 pt-4 border-t border-stone-100">
            <div className="flex items-center gap-2 text-amber-700 font-semibold text-xs tracking-wider uppercase mb-1">
              <ChefHat className="w-4 h-4" />
              <span>{isFr ? 'Guide Pas à Pas' : 'Step-by-Step Guide'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2 font-serif-heading">
              {isFr ? 'La préparation détaillée étape par étape' : 'Detailed Step-by-Step Preparation'}
            </h2>
            <p className="text-stone-600 text-sm mb-6">
              {isFr
                ? 'Suivez scrupuleusement l’ordre d’incorporation des ingrédients pour une émulsion parfaite sans le moindre grumeau.'
                : 'Follow the ingredient addition order precisely for a seamless emulsion without a single lump.'}
            </p>

            <div className="space-y-6">
              {RECIPE_STEPS.map((step) => (
                <div
                  key={step.id}
                  className="bg-stone-50/60 hover:bg-stone-50 border border-stone-200/80 rounded-2xl p-5 sm:p-6 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-xl bg-amber-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {step.id}
                      </span>
                      <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                        {step.title[language]}
                      </h3>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 shrink-0">
                      ⏱ {step.duration}
                    </span>
                  </div>

                  <p className="text-stone-700 text-sm sm:text-base leading-relaxed pl-10">
                    {step.instruction[language]}
                  </p>

                  {step.proTip && (
                    <div className="mt-3 ml-10 p-3 rounded-xl bg-amber-100/60 border border-amber-200/70 text-xs text-amber-950 flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>
                        <strong className="font-bold">{isFr ? 'Astuce du Chef : ' : "Chef's Tip: "}</strong>
                        {step.proTip[language]}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Minuteur Repos & Cuisson */}
          <CookingTimer language={language} />

          {/* Section 6: Astuces de Chef */}
          <section id="astuces-de-chef" className="my-10 pt-4 border-t border-stone-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3 font-serif-heading">
              {isFr ? 'Les 5 secrets de chefs pour des crêpes sublimes' : '5 Pastry Chef Secrets for Unforgettable Crepes'}
            </h2>
            <p className="text-stone-600 text-sm mb-6">
              {isFr
                ? 'Ces petits détails font toute la différence entre une crêpe ordinaire et les crêpes gourmandes des meilleures crêperies de Bretagne.'
                : 'These subtle adjustments make the difference between ordinary crepes and the sublime taste of authentic Breton creperies.'}
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                  <span className="text-amber-600 font-extrabold">1.</span>
                  {isFr ? 'Le beurre noisette pour une saveur envoûtante' : 'Brown butter (beurre noisette) for nutty richness'}
                </h3>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  {isFr
                    ? 'Au lieu de faire fondre le beurre simplement, laissez-le chanter dans une petite casserole jusqu’à ce qu’il prenne une belle teinte ambrée et dégage un parfum de noisette grillée. Vos crêpes auront un goût digne d’un palace.'
                    : 'Instead of simply melting butter, let it sizzle gently in a saucepan until it turns amber and develops a roasted hazelnut aroma.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                  <span className="text-amber-600 font-extrabold">2.</span>
                  {isFr ? 'L’astuce de la bière blonde ou de l’eau gazeuse' : 'A splash of light beer or sparkling water'}
                </h3>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  {isFr
                    ? 'Remplacez 50 à 100 ml de lait par de la bière blonde ou de l’eau minérale gazeuse. Le gaz carbonique et les levures apportent une légèreté incroyable et créent une dentelle croustillante sur les pourtours.'
                    : 'Replace 2 to 3 fluid ounces of milk with light blond beer or carbonated water. Bubbles aerate the batter and create delicate crispy lace edges.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                  <span className="text-amber-600 font-extrabold">3.</span>
                  {isFr ? 'Le test de la goutte d’eau pour la poêle' : 'The water droplet test for pan heat'}
                </h3>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  {isFr
                    ? 'Pour savoir si votre poêle est à la bonne température, jetez une goutte d’eau : si elle grésille et s’évapore instantanément en billes, la poêle est prête. Si la poêle n’est pas assez chaude, la pâte va coller et absorber le gras.'
                    : 'Flick a droplet of water onto the pan: if it sizzles and beads up immediately, the temperature is spot on.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                  <span className="text-amber-600 font-extrabold">4.</span>
                  {isFr ? 'Graisser au tampon plutôt que verser l’huile' : 'Wipe pan with oiled paper towel rather than pouring'}
                </h3>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  {isFr
                    ? 'Pliez un papier essuie-tout en quatre, trempez-le dans une coupelle d’huile neutre et frottez légèrement la poêle toutes les 3 ou 4 crêpes. Cela évite les flaques d’huile qui graissent les crêpes.'
                    : 'Fold paper towel into a pad, dip in vegetable oil, and wipe pan every 3-4 crepes to avoid greasy pooling.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-stone-200">
                <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                  <span className="text-amber-600 font-extrabold">5.</span>
                  {isFr ? 'Garder les crêpes chaudes et moelleuses' : 'Keep crepes warm and soft with steam tenting'}
                </h3>
                <p className="text-sm text-stone-600 mt-1 leading-relaxed">
                  {isFr
                    ? 'Posez une assiette au-dessus d’une casserole d’eau chaude frémissante. Déposez-y vos crêpes au fur et à mesure et recouvrez d’une feuille d’aluminium ou d’une cloche. La vapeur maintient une tendreté absolue.'
                    : 'Place your serving plate over a pot of steaming water and tent with foil. The steam ensures every single crepe stays tender and warm.'}
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Idées de garnitures */}
          <section id="idees-garnitures" className="my-10 pt-4 border-t border-stone-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-3 font-serif-heading">
              {isFr ? 'Les meilleures garnitures sucrées et salées' : 'The Best Sweet & Savory Toppings'}
            </h2>
            <p className="text-stone-600 text-sm mb-6">
              {isFr
                ? 'Une bonne crêpe se suffit à elle-même, mais voici nos associations favorites pour faire chavirer les papilles :'
                : 'A great crepe is wonderful plain, but these topping pairings will elevate your taste experience:'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
                <h3 className="font-bold text-amber-900 text-base mb-2">
                  🍓 {isFr ? 'Garnitures Sucrées Festives' : 'Festive Sweet Toppings'}
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                  <li><strong>Beurre-sucre :</strong> {isFr ? 'Beurre demi-sel breton et cassonade croustillante.' : 'Breton salted butter and crunchy brown sugar.'}</li>
                  <li><strong>Chocolat & Noisettes :</strong> {isFr ? 'Pâte à tartiner maison, éclats de noisettes grillées et bananes.' : 'Hazelnut chocolate spread, toasted nuts and sliced bananas.'}</li>
                  <li><strong>Caramel Beurre Salé :</strong> {isFr ? 'Coulis de caramel à la fleur de sel de Guérande.' : 'Guérande sea salt caramel drizzle.'}</li>
                  <li><strong>Suzette express :</strong> {isFr ? 'Zeste d’orange, sucre et une cuillère de Grand Marnier tiédi.' : 'Orange zest, sugar, and warm Grand Marnier flame.'}</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-stone-100/70 border border-stone-200">
                <h3 className="font-bold text-stone-900 text-base mb-2">
                  🧀 {isFr ? 'Variations Salées Gourmandes' : 'Gourmet Savory Variations'}
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                  <li><strong>La Complète :</strong> {isFr ? 'Jambon blanc supérieur, œuf coulant et emmental râpé fondant.' : 'Cooked ham, sunny side egg, and melted Emmental.'}</li>
                  <li><strong>La Norvégienne :</strong> {isFr ? 'Saumon fumé, crème fraîche épaisse, aneth et filet de citron.' : 'Smoked salmon, crème fraîche, dill, and fresh lemon.'}</li>
                  <li><strong>La Chèvre-Miel :</strong> {isFr ? 'Bûche de chèvre chaud, noix concassées et filet de miel de fleurs.' : 'Warm goat cheese, crushed walnuts, and acacia honey.'}</li>
                  <li><strong>Forestière :</strong> {isFr ? 'Poêlée de champignons de Paris à l’ail, persil et crème.' : 'Sautéed garlic mushrooms with parsley and cream.'}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ========================================================================= */}
          {/* <!-- [ESPACE PUBLICITAIRE / AD SLOT 3 - BEFORE RECIPE CARD 728x90] --> */}
          {/* ========================================================================= */}
          <AdPlaceholder
            slotId="pre-recipe-banner"
            slotName="Bannière Avant Fiche Recette"
            format="banner"
            isFrench={isFr}
          />

          {/* Section 8: Fiche Recette Imprimable */}
          <RecipeCard language={language} />

          {/* Section 9: FAQ */}
          <FaqSection language={language} />

          {/* ========================================================================= */}
          {/* <!-- [ESPACE PUBLICITAIRE / AD SLOT 4 - FOOTER BOTTOM 728x90] --> */}
          {/* ========================================================================= */}
          <AdPlaceholder
            slotId="footer-bottom-ad"
            slotName="Bannière Bas de Page (Footer Leaderboard)"
            format="leaderboard"
            isFrench={isFr}
          />

          {/* Author Bio Section */}
          <div className="mt-12 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-16 h-16 rounded-full bg-amber-200 text-amber-900 flex items-center justify-center font-bold text-xl shrink-0 font-serif-heading border-2 border-amber-400">
              CM
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-stone-900 text-base">Chef Marie</h4>
                <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
                  {isFr ? 'Passionnée de cuisine française' : 'French Culinary Expert'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                {isFr
                  ? 'Formatrice culinaire et amoureuse de la gastronomie de nos terroirs. Cette recette de pâte à crêpes est le résultat de plusieurs années d’expérimentations pour obtenir une texture ultra aérienne sans aucun robot ménager.'
                  : 'Pastry instructor and French gastronomy enthusiast. This crepe recipe is the fruit of years of home trials to achieve optimal lightness without complex appliances.'}
              </p>
            </div>
          </div>
        </article>
      </main>

      {/* Back to top floating button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-stone-900 text-amber-300 shadow-xl hover:bg-stone-800 border border-amber-400/30 transition transform active:scale-95 cursor-pointer z-40"
          title={isFr ? 'Retour en haut de page' : 'Back to top'}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-10 border-t border-stone-800 text-center text-xs">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-sm font-serif-heading">
            <ChefHat className="w-4 h-4" />
            <span>Recette Facile Pâte à Crêpes © {new Date().getFullYear()}</span>
          </div>
          <p className="text-stone-500 max-w-lg mx-auto">
            {isFr
              ? 'Le guide culinaire dédié à la préparation de la pâte à crêpes maison traditionnelle, inratable et sans grumeaux. Conçu pour les amoureux de la Chandeleur et des goûters gourmands.'
              : 'The culinary guide dedicated to traditional homemade French crepe batter, foolproof and lump-free. Made for Candlemas and gourmet treats.'}
          </p>
          <div className="text-stone-600 pt-2 flex items-center justify-center gap-4 text-[11px]">
            <span>{isFr ? 'Sans balise canonique (Page Unique)' : 'Single Page Site'}</span>
            <span>•</span>
            <span>{isFr ? 'Optimisation SEO & Web Speech API' : 'SEO & Web Speech API'}</span>
            <span>•</span>
            <span>{isFr ? 'Monétisation AdSense Ready' : 'AdSense Ready'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
