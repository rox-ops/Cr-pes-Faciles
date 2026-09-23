import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, Twitter, Facebook, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface ShareBarProps {
  language: Language;
}

export const ShareBar: React.FC<ShareBarProps> = ({ language }) => {
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = language === 'fr'
    ? 'Recette Facile Pâte à Crêpes : Inratable, Rapide et Sans Grumeaux'
    : 'Easy French Crepe Batter Recipe: Foolproof & Lump-Free';

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: 'Découvrez la meilleure recette de pâte à crêpes inratable en 5 min !',
          url: currentUrl
        });
      } catch {
        // User cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      color: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' ' + currentUrl)}`,
      icon: MessageCircle
    },
    {
      name: 'Facebook',
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      icon: Facebook
    },
    {
      name: 'X (Twitter)',
      color: 'bg-stone-900 hover:bg-stone-800 text-white',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(currentUrl)}`,
      icon: Twitter
    },
    {
      name: 'Pinterest',
      color: 'bg-rose-600 hover:bg-rose-700 text-white',
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&description=${encodeURIComponent(shareTitle)}`,
      icon: Sparkles
    }
  ];

  return (
    <div className="share-buttons bg-white border border-amber-200/80 rounded-2xl p-4 sm:p-5 shadow-xs my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-stone-700">
          <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
            <Share2 className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-sm block text-stone-900">
              {language === 'fr' ? 'Partager cette recette' : 'Share this recipe'}
            </span>
            <span className="text-xs text-stone-500">
              {language === 'fr'
                ? 'Régalez vos proches pour la Chandeleur ou le goûter'
                : 'Treat your friends and family with homemade crepes'}
            </span>
          </div>
        </div>

        {/* Share buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {shareLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${item.color} shadow-xs`}
              title={`Partager sur ${item.name}`}
            >
              <item.icon className="w-3.5 h-3.5" />
              <span>{item.name}</span>
            </a>
          ))}

          {/* Copy link button */}
          <button
            onClick={handleCopyLink}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 border transition cursor-pointer ${
              copied
                ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                : 'bg-stone-50 border-stone-300 text-stone-700 hover:bg-stone-100'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>{language === 'fr' ? 'Lien copié !' : 'Link copied!'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{language === 'fr' ? 'Copier le lien' : 'Copy link'}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
