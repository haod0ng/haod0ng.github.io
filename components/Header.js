'use client';

import { RiSunLine, RiMoonLine } from '@remixicon/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { navigations } from '@/website.config';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';
  const themeLabel = `Switch to ${isDark ? 'light' : 'dark'} theme`;

  return (
    <header className="page-container site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      {navigations.length > 0 && (
        <nav className="site-navigation" aria-label="Main navigation">
          {navigations.map((navigation) => (
            <Link href={navigation.route} key={navigation.name}>
              {navigation.name}
            </Link>
          ))}
        </nav>
      )}
      <button
        type="button"
        className="theme-toggle"
        aria-label={themeLabel}
        title={themeLabel}
        disabled={!mounted}
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      >
        {isDark ? <RiSunLine size={20} aria-hidden="true" /> : <RiMoonLine size={20} aria-hidden="true" />}
      </button>
    </header>
  );
}
