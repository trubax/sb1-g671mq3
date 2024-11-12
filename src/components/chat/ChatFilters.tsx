import React from 'react';
import { MessageCircle, Users } from 'lucide-react';

type ChatFilter = 'all' | 'direct' | 'groups';

interface ChatFiltersProps {
  activeFilter: ChatFilter;
  onFilterChange: (filter: ChatFilter) => void;
  counts: {
    all: number;
    direct: number;
    groups: number;
  };
}

export default function ChatFilters({ activeFilter, onFilterChange, counts }: ChatFiltersProps) {
  const filters: { id: ChatFilter; label: string; icon: typeof MessageCircle }[] = [
    { id: 'all', label: 'Tutte', icon: MessageCircle },
    { id: 'direct', label: 'Chat dirette', icon: MessageCircle },
    { id: 'groups', label: 'Gruppi', icon: Users }
  ];

  return (
    <div className="sticky top-0 z-10 px-4 py-2 theme-bg border-b theme-divide">
      <div className="flex gap-2">
        {filters.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onFilterChange(id)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
              activeFilter === id
                ? 'theme-bg-accent theme-text'
                : 'theme-bg-secondary theme-text opacity-70 hover:opacity-100'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
            <span className="text-sm opacity-80">({counts[id]})</span>
          </button>
        ))}
      </div>
    </div>
  );
}