"use client";

import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export function SearchInput() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const expandedInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search/${encodeURIComponent(searchQuery.trim())}`);
      setIsExpanded(false);
      setSearchQuery("");
    }
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  // Focus input when expanded
  useEffect(() => {
    if (isExpanded && expandedInputRef.current) {
      expandedInputRef.current.focus();
    }
  }, [isExpanded]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isExpanded &&
        !(event.target as Element).closest(".search-container")
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded]);

  return (
    <div className="search-container">
      <button
        type="button"
        onClick={handleToggle}
        className="lg:hidden flex items-center gap-2 p-2 sm:px-4 sm:py-2 rounded-full sm:bg-secondary/80 sm:hover:bg-secondary hover:bg-secondary/80 transition-colors"
        aria-label="Search"
      >
        <span className="md:hidden">
          {isExpanded ? (
            <X className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Search className="h-5 w-5 text-muted-foreground" />
          )}
        </span>

        <Search className="hidden md:block h-4 w-4 text-muted-foreground" />
        <span className="hidden md:block text-sm text-muted-foreground">Search</span>
      </button>

      {/* Expanded search - full width overlay (for small & medium screens) */}
      {isExpanded && (
        <form
          onSubmit={handleSubmit}
          className="lg:hidden absolute left-0 right-0 top-full bg-background border-b border-border p-4 shadow-lg"
        >
          <div className="relative container mx-auto">
            <input
              ref={expandedInputRef}
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full bg-secondary/80 px-4 py-3 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </form>
      )}

      {/* Large desktop: Full search input always visible */}
      <form
        onSubmit={handleSubmit}
        className="hidden lg:block relative w-full flex-1 max-w-[300px]"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-full bg-secondary/80 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      </form>
    </div>
  );
}
