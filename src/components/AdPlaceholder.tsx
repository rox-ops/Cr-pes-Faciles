import React from 'react';
import { Megaphone } from 'lucide-react';

interface AdPlaceholderProps {
  slotId: string;
  slotName: string;
  format: 'leaderboard' | 'rectangle' | 'banner' | 'sidebar';
  className?: string;
  isFrench: boolean;
}

/**
 * =========================================================================
 * EMPLACEMENT PUBLICITAIRE / ADVERTISING SLOT COMPONENT
 * =========================================================================
 * Pour intégrer Google AdSense, Ezoic ou votre régie publicitaire :
 * Remplacez le contenu interne de ce composant par votre balise <ins class="adsbygoogle" ...>
 * et le script d'appel associé.
 * =========================================================================
 */
export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  slotId,
  slotName,
  format,
  className = '',
  isFrench
}) => {
  const getDimensions = () => {
    switch (format) {
      case 'leaderboard':
        return 'h-24 max-w-4xl mx-auto'; // 728x90 desktop / responsive
      case 'rectangle':
        return 'h-64 max-w-sm mx-auto'; // 300x250
      case 'banner':
        return 'h-20 max-w-xl mx-auto';
      case 'sidebar':
        return 'h-80 w-full';
      default:
        return 'h-28 w-full';
    }
  };

  return (
    <div
      id={`ad-slot-${slotId}`}
      className={`ad-banner-slot my-8 w-full transition-all ${className}`}
      data-ad-slot={slotId}
    >
      {/* <!-- [DEBUT ESPACE PUBLICITAIRE: ${slotName} - ${format}] --> */}
      <div
        className={`w-full ${getDimensions()} rounded-xl border border-dashed border-stone-300 bg-gradient-to-br from-amber-50/50 to-stone-100/70 p-4 flex flex-col items-center justify-center text-center shadow-xs select-none`}
      >
        <div className="flex items-center gap-2 text-stone-400 mb-1">
          <Megaphone className="w-4 h-4 text-amber-600/70" />
          <span className="text-xs uppercase tracking-widest font-semibold text-stone-500">
            {isFrench ? 'Espace Publicitaire' : 'Advertisement Space'}
          </span>
        </div>
        <p className="text-xs text-stone-400 font-mono">
          {/* Tag for developer integration */}
          Slot: {slotId} ({slotName})
        </p>
        <span className="text-[10px] text-stone-400 mt-1 hidden sm:inline">
          {isFrench
            ? 'Prêt pour intégration Google AdSense (728x90 / 300x250)'
            : 'Ready for Google AdSense / Header Bidding integration'}
        </span>
      </div>
      {/* <!-- [FIN ESPACE PUBLICITAIRE: ${slotName}] --> */}
    </div>
  );
};
