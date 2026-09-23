import { Ingredient, RecipeStep, FaqItem } from '../types';

export const BASE_SERVINGS = 4; // produces ~16-18 standard 24cm crêpes

export const INGREDIENTS_DATA: Ingredient[] = [
  {
    id: 'farine',
    name: {
      fr: 'Farine de blé fluide (T45 ou T55)',
      en: 'All-purpose wheat flour (French T45 or T55)'
    },
    baseAmount: 250,
    unit: 'g',
    notes: {
      fr: 'Tamisez-la pour éliminer les risques de grumeaux.',
      en: 'Sift to eliminate any risk of lumps.'
    },
    category: 'base'
  },
  {
    id: 'oeufs',
    name: {
      fr: 'Gros œufs frais bio ou plein air',
      en: 'Large fresh eggs (free-range)'
    },
    baseAmount: 4,
    unit: 'pièces',
    notes: {
      fr: 'À température ambiante pour une meilleure émulsion.',
      en: 'At room temperature for a silkier batter.'
    },
    category: 'base'
  },
  {
    id: 'lait',
    name: {
      fr: 'Lait entier ou demi-écrémé',
      en: 'Whole or semi-skimmed milk'
    },
    baseAmount: 500,
    unit: 'ml',
    notes: {
      fr: 'Légèrement tiédi (tiède) pour éviter de figer le beurre.',
      en: 'Lukewarm (never cold) to prevent melted butter from seizing.'
    },
    category: 'liquide'
  },
  {
    id: 'beurre',
    name: {
      fr: 'Beurre doux fondu (ou beurre noisette)',
      en: 'Melted sweet butter (or brown butter)'
    },
    baseAmount: 50,
    unit: 'g',
    notes: {
      fr: 'Donne ce goût authentique et évite que les crêpes n’attachent.',
      en: 'Adds signature pastry flavor and prevents sticking.'
    },
    category: 'gras'
  },
  {
    id: 'sel',
    name: {
      fr: 'Pincée de sel fin (ou fleur de sel)',
      en: 'Pinch of fine salt (or sea salt)'
    },
    baseAmount: 1,
    unit: 'pincée(s)',
    notes: {
      fr: 'Véritable exhausteur de goût naturel indispensable.',
      en: 'Essential natural flavor enhancer.'
    },
    category: 'base'
  },
  {
    id: 'sucre',
    name: {
      fr: 'Sucre en poudre fin (optionnel)',
      en: 'Granulated sugar (optional)'
    },
    baseAmount: 2,
    unit: 'c. à soupe',
    notes: {
      fr: 'À omettre si vous préparez des crêpes salées.',
      en: 'Omit if you are preparing savory crepes.'
    },
    category: 'arome'
  },
  {
    id: 'vanille',
    name: {
      fr: 'Extrait de vanille Bourbon ou sucre vanillé',
      en: 'Bourbon vanilla extract or vanilla sugar'
    },
    baseAmount: 1,
    unit: 'c. à café',
    notes: {
      fr: 'Alternative : 1 c. à soupe de rhum ambré ou d’eau de fleur d’oranger.',
      en: 'Alternative: 1 tbsp amber rum or orange blossom water.'
    },
    category: 'arome'
  }
];

export const RECIPE_STEPS: RecipeStep[] = [
  {
    id: 1,
    title: {
      fr: 'Le tamisage et le puits',
      en: 'Sifting and making the well'
    },
    duration: '1 min',
    instruction: {
      fr: 'Dans un grand cul-de-poule ou saladier, versez la farine tamisée avec la pincée de sel fin (et le sucre si vous faites des crêpes sucrées). À l’aide d’une cuillère en bois ou du dos de votre fouet, creusez un large puits au centre.',
      en: 'In a large mixing bowl, sift the flour together with the salt (and sugar if making sweet crepes). Using a wooden spoon or whisk, form a wide well in the center.'
    },
    proTip: {
      fr: 'Le tamisage aère la farine et divise par deux le risque de formation de grumeaux.',
      en: 'Sifting aerates the flour and cuts lump formation risk in half.'
    }
  },
  {
    id: 2,
    title: {
      fr: 'L’incorporation délicate des œufs',
      en: 'Gently incorporating the eggs'
    },
    duration: '2 min',
    instruction: {
      fr: 'Cassez les 4 œufs entiers au centre du puits. À l’aide d’un fouet manuel, battez les œufs en commençant par le centre et en décrivant de petits cercles concentriques. Incorporez petit à petit la farine des bords sans forcer. La pâte va devenir épaisse.',
      en: 'Crack all 4 eggs into the center of the well. Whisk gently starting from the middle in small concentric circles, gradually drawing in flour from the edges. The batter will become thick and smooth.'
    },
    proTip: {
      fr: 'Ne cherchez pas à mélanger toute la farine d’un coup pour éviter d’emprisonner des poches d’air farineuses.',
      en: 'Do not blend all flour at once; concentric circles prevent dry pockets.'
    }
  },
  {
    id: 3,
    title: {
      fr: 'Le délayage au lait tiédi',
      en: 'Gradually whisking in warm milk'
    },
    duration: '2 min',
    instruction: {
      fr: 'Faites tiédir légèrement votre lait au micro-ondes (environ 25-30 secondes : il doit être tiède au doigt, jamais brûlant). Versez-le en filet continu tout en fouettant énergiquement. La pâte va se fluidifier pour devenir veloutée et homogène.',
      en: 'Warm milk slightly until lukewarm (never boiling hot). Pour it slowly in a continuous stream while whisking vigorously until the batter turns silky smooth.'
    },
    proTip: {
      fr: 'Le lait tiède est le secret N°1 des chefs pour dissoudre instantanément les micros-grumeaux.',
      en: 'Lukewarm milk is the top pastry chef trick to dissolve micro-lumps instantly.'
    }
  },
  {
    id: 4,
    title: {
      fr: 'L’ajout de la matière grasse et des arômes',
      en: 'Adding melted butter & flavorings'
    },
    duration: '1 min',
    instruction: {
      fr: 'Faites fondre le beurre doux puis laissez-le tiédir. Versez-le dans la pâte avec la vanille (ou le rhum ambré). Mélangez une dernière fois. Le beurre va apporter du soyeux et rendra inutile le graissage répétitif de la poêle.',
      en: 'Melt the butter, let it cool slightly, then whisk it into the batter along with vanilla or amber rum. Melted butter in the batter means no need to grease the pan every single time.'
    },
    proTip: {
      fr: 'Pour un goût sublime, préparez un beurre noisette : chauffez le beurre jusqu’à ce qu’il crépite et sente la noisette grillée !',
      en: 'For an exquisite nutty note, brown the butter slightly (beurre noisette) before adding.'
    }
  },
  {
    id: 5,
    title: {
      fr: 'Le temps de repos magique',
      en: 'The magical resting time'
    },
    duration: '30 min',
    instruction: {
      fr: 'Recouvrez le saladier d’un torchon propre et laissez reposer à température ambiante pendant 30 minutes (ou 1 heure au réfrigérateur si la pièce est chaude).',
      en: 'Cover the bowl with a clean towel and rest for 30 minutes at room temperature (or 1 hour in the fridge if it’s hot).'
    },
    proTip: {
      fr: 'Pendant le repos, l’amidon gonfle et le gluten se détend : vos crêpes seront d’une finesse et d’un moelleux incomparables.',
      en: 'Resting lets flour starches swell and relaxes gluten, making crepes exceptionally tender.'
    }
  },
  {
    id: 6,
    title: {
      fr: 'La cuisson dorée à la poêle',
      en: 'Golden frying in the hot pan'
    },
    duration: '15 min',
    instruction: {
      fr: 'Chauffez une poêle à crêpes à feu moyen-vif. Graissez-la légèrement avec un papier absorbant imbibé d’huile ou de beurre. Versez 3/4 de louche de pâte en effectuant une rotation rapide du poignet pour napper tout le fond. Cuisez 1 minute jusqu’à ce que les bords se détachent, retournez avec une spatule et cuisez 30 à 45 secondes sur l’autre face.',
      en: 'Heat a crepe pan over medium-high heat. Lightly grease with an oiled paper towel. Pour 3/4 ladle of batter and swirl quickly to coat the bottom. Cook for 60 seconds until edges loosen, flip with a spatula, and cook 30-45 seconds more.'
    },
    proTip: {
      fr: 'Empilez les crêpes cuites sur une assiette chaude et couvrez-les d’une feuille d’aluminium pour qu’elles restent ultra-moelleuses.',
      en: 'Stack cooked crepes on a warm plate and tent with foil to keep them soft and steamy.'
    }
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: {
      fr: 'Comment faire une pâte à crêpes facile et garantie sans grumeaux ?',
      en: 'How do you make an easy crepe batter guaranteed 100% lump-free?'
    },
    answer: {
      fr: 'Deux règles d’or : premièrement, utilisez du lait tiédi (environ 30°C) plutôt que du lait glacé sorti du frigo. Deuxièmement, versez le lait très progressivement en fouettant en partant du centre. Si malgré tout vous observez des grumeaux, pas de panique : passez un coup de mixeur plongeant pendant 15 secondes ou filtrez la pâte à travers une passoire fine (chinois).',
      en: 'Two golden rules: first, use lukewarm milk rather than cold milk straight from the fridge. Second, pour the milk very gradually while whisking from center outwards. If lumps still appear, simply use an immersion blender for 15 seconds or strain through a fine mesh sieve.'
    }
  },
  {
    id: 'faq-2',
    question: {
      fr: 'Pourquoi est-il crucial de laisser reposer la pâte à crêpes ?',
      en: 'Why is it crucial to let crepe batter rest?'
    },
    answer: {
      fr: 'Le temps de repos (30 minutes minimum) permet aux grains d’amidon d’absorber complètement les liquides et au gluten développé lors du mélange de se détendre. Sans repos, les crêpes risquent d’avoir une texture caoutchouteuse et de se déchirer lors du retournement.',
      en: 'Resting (at least 30 minutes) allows flour starches to hydrate and gluten to relax. Without resting, crepes tend to turn rubbery and tear easily during flipping.'
    }
  },
  {
    id: 'faq-3',
    question: {
      fr: 'Quelle est la meilleure farine pour réussir ses crêpes ?',
      en: 'What is the best flour for perfect French crepes?'
    },
    answer: {
      fr: 'La farine de blé blanche T45 ou T55 est idéale. La T45 (farine pâtissière) donne des crêpes plus légères et fines. Vous pouvez également remplacer 20% de la farine par de la fécule de maïs (Maïzena) pour un résultat encore plus aérien !',
      en: 'Standard wheat flour T45 (pastry flour) or T55 is ideal. T45 yields lighter and thinner crepes. You can also replace 20% of the flour with cornstarch (Maïzena) for an extra airy texture!'
    }
  },
  {
    id: 'faq-4',
    question: {
      fr: 'Beurre fondu ou huile : quelle matière grasse choisir ?',
      en: 'Melted butter or oil: which fat is best in crepe batter?'
    },
    answer: {
      fr: 'Le beurre doux fondu confère cette saveur gourmande et noisettée inimitable de la crêpe bretonne traditionnelle. L’huile végétale neutre (tournesol ou pépins de raisin) a l’avantage de garder les crêpes plus souples lorsqu’elles refroidissent. L’astuce de chef : 40g de beurre fondu dans la pâte + un léger coup de tampon huilé sur la poêle.',
      en: 'Melted sweet butter gives the unforgettable rich, nutty aroma of classic Brittany crepes. Neutral vegetable oil keeps them slightly softer when cold. Pro tip: 40g melted butter in batter + lightly oiled pan.'
    }
  },
  {
    id: 'faq-5',
    question: {
      fr: 'Combien de temps peut-on conserver la pâte à crêpes crue ?',
      en: 'How long can raw crepe batter be stored in the fridge?'
    },
    answer: {
      fr: 'Vous pouvez conserver votre pâte crue jusqu’à 48 heures au réfrigérateur, hermétiquement couverte de film étirable ou dans une bouteille en verre. Comme elle s’épaissit au froid, allongez-la simplement avec 2 à 3 cuillères à soupe de lait ou un filet de bière blonde avant de cuire.',
      en: 'Raw batter keeps up to 48 hours refrigerated in a sealed container or glass bottle. Because it thickens in the fridge, simply whisk in 2 to 3 tablespoons of milk or light beer before cooking.'
    }
  },
  {
    id: 'faq-6',
    question: {
      fr: 'Peut-on utiliser cette pâte pour des crêpes salées (galettes) ?',
      en: 'Can this batter be used for savory crepes?'
    },
    answer: {
      fr: 'Oui, tout à fait ! Ne mettez simplement pas de sucre ni de vanille dans la recette de base, et ajoutez une pincée supplémentaire de poivre ou d’herbes de Provence. Pour la véritable galette bretonne traditionnelle, on utilise de la farine de sarrasin (blé noir) et de l’eau.',
      en: 'Yes! Simply leave out sugar, vanilla, or alcohol, and add a pinch of black pepper or herbs. For authentic traditional Breton galettes, buckwheat flour (farine de sarrasin) and water are used instead.'
    }
  }
];

export const FULL_TEXT_FOR_SPEECH = {
  fr: `Recette facile de pâte à crêpes inratable, rapide et sans grumeaux. 
Bienvenue dans ce guide complet pour réussir des crêpes traditionnelles françaises ultra moelleuses. 
Pour environ 18 crêpes, il vous faut 250 grammes de farine de blé, 4 œufs frais, 500 millilitres de lait entier ou demi-écrémé, 50 grammes de beurre fondu, une pincée de sel, et deux cuillères de sucre avec un soupçon de vanille.
Première étape : dans un saladier, tamisez la farine avec le sel et le sucre, puis creusez un puits.
Deuxième étape : cassez les quatre œufs au milieu et fouettez doucement du centre vers les bords.
Troisième étape : versez le lait tiédi progressivement en fouettant pour chasser tout grumeau.
Quatrième étape : ajoutez le beurre fondu et les arômes.
Cinquième étape : laissez reposer trente minutes pour détendre le gluten.
Enfin, faites chauffer une poêle huilée et faites dorer chaque crêpe une minute de chaque côté. Bon appétit !`,
  en: `Easy French Crepe Batter Recipe: Foolproof, Fast and Lump-Free.
Welcome to this comprehensive guide to making soft, authentic traditional French crepes.
For about 18 crepes, you will need 250 grams of flour, 4 large eggs, 500 milliliters of milk, 50 grams of melted butter, a pinch of salt, 2 tablespoons of sugar, and vanilla.
Step 1: In a bowl, sift flour with salt and sugar, then make a well in the center.
Step 2: Crack 4 eggs into the center and whisk gently in small concentric circles.
Step 3: Pour lukewarm milk in gradually while whisking to dissolve any lumps.
Step 4: Whisk in the melted butter and vanilla.
Step 5: Let the batter rest for 30 minutes.
Finally, cook in a hot oiled pan for 1 minute on the first side and 30 seconds on the second. Enjoy your homemade French crepes!`
};
