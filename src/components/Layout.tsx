import React from 'react'
import { Link, useLocation } from 'react-router-dom'

type Props = {
  title?: string
  subtitle?: React.ReactNode
  hero?: React.ReactNode
  children: React.ReactNode
}

export default function Layout({ title, subtitle, hero, children }: Props) {
  const { pathname } = useLocation()

  const nav = [
    { href: '/team', label: 'TEAM' },
    { href: '/overview', label: 'PROJECT' },
    { href: '/wetlab', label: 'WET LAB' },
    { href: '/drylab', label: 'DRY LAB' },
    { href: '/discussion', label: 'DISCUSSION' },
    { href: '/future', label: 'FUTURE' },
    { href: '/references', label: 'REFERENCES' },
  ]

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b border-base-line bg-base-card/85 backdrop-blur">
        <div className="container-xl h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-brand-600"></div>
            <span className="font-semibold">McMaster BioDesign</span>
            <span className="text-zinc-400">• iDEC 2025</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {nav.map(n => (
              <Link
                key={n.href}
                to={n.href}
                className={`nav-link ${pathname === n.href ? 'nav-active' : ''}`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-brand-600 via-accent-purple to-brand-600"></div>
      </header>

      {hero}

      {(title || subtitle) && (
        <div className="container-xl mt-6">
          <div className="card px-6 py-5">
            {title && <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>}
            {subtitle && <p className="mt-1 text-zinc-400">{subtitle}</p>}
          </div>
        </div>
      )}

      <main className="container-xl py-6">
        {children}
      </main>

      <footer className="mt-12 border-t border-base-line">
        <div className="container-xl py-8 text-xs text-zinc-500">
          © 2025 McMaster BioDesign
        </div>
      </footer>
    </div>
  )
}