import React, { useState, useRef, useEffect } from 'react';
import { MessageSquareCode, X } from 'lucide-react';

interface DevNoteProps {
  note: string;
  title?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const DevNote: React.FC<DevNoteProps> = ({ note, title = 'Developer Note', position = 'top-right' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const positionClasses: Record<string, string> = {
    'top-left': 'top-2 left-2',
    'top-right': 'top-2 right-2',
    'bottom-left': 'bottom-2 left-2',
    'bottom-right': 'bottom-2 right-2',
  };

  const popupPositionClasses: Record<string, string> = {
    'top-left': 'top-10 left-0',
    'top-right': 'top-10 right-0',
    'bottom-left': 'bottom-10 left-0',
    'bottom-right': 'bottom-10 right-0',
  };

  return (
    <div className={`absolute ${positionClasses[position]} z-40`}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110 ${
          isOpen
            ? 'bg-amber-500 text-white'
            : 'bg-amber-400 text-white hover:bg-amber-500'
        }`}
        title={title}
      >
        <MessageSquareCode className="w-4 h-4" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white" />
      </button>

      {isOpen && (
        <div
          ref={popupRef}
          className={`absolute ${popupPositionClasses[position]} w-72 sm:w-80 bg-gray-900 text-gray-100 rounded-xl shadow-2xl border border-gray-700 overflow-hidden animate-in fade-in zoom-in-95 duration-200`}
        >
          <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <MessageSquareCode className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-400">{title}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md hover:bg-gray-700 transition-colors"
            >
              <X className="w-3.5 h-3.5 text-gray-400" />
            </button>
          </div>
          <div className="px-4 py-3 max-h-64 overflow-y-auto">
            <p className="text-sm leading-relaxed whitespace-pre-wrap">{note}</p>
          </div>
          <div className="px-4 py-2 bg-gray-800/50 border-t border-gray-700">
            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Dev Only</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevNote;
