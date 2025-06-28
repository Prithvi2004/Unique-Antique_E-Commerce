import React from 'react';
import { Crown, Star, Gem, Sparkles } from 'lucide-react';

interface RarityBadgeProps {
  rarity: 'common' | 'rare' | 'legendary' | 'exclusive';
  className?: string;
}

const RarityBadge: React.FC<RarityBadgeProps> = ({ rarity, className = '' }) => {
  const rarityConfig = {
    common: {
      icon: Star,
      label: 'Premium',
      colors: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
    },
    rare: {
      icon: Gem,
      label: 'Rare',
      colors: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
    },
    legendary: {
      icon: Crown,
      label: 'Legendary',
      colors: 'bg-gold-100 text-gold-800 dark:bg-gold-900/20 dark:text-gold-400',
    },
    exclusive: {
      icon: Sparkles,
      label: 'Exclusive',
      colors: 'bg-pink-100 text-pink-800 dark:bg-pink-900/20 dark:text-pink-400',
    },
  };

  const config = rarityConfig[rarity];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${config.colors} ${className}`}>
      <Icon className="h-3 w-3" />
      <span>{config.label}</span>
    </span>
  );
};

export default RarityBadge;