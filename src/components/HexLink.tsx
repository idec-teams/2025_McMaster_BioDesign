import React from 'react'
import { Link } from 'react-router-dom'

type HexProps = { to: string; icon?: string; label: string }

export default function HexLink({ to, icon = '/img/hex-dna.svg', label }: HexProps) {
  return (
    <Link to={to} className="group relative w-36 h-40">
      <div className="absolute inset-0 rotate-6 blur-xl bg-brand-600/20 rounded-3xl"></div>
      <div className="relative w-full h-full clip-hex border border-base-line bg-base-card rounded-2xl flex flex-col items-center justify-center transition group-hover:border-brand-500">
        <img src={icon} alt="" className="h-10 opacity-90" />
        <span className="mt-3 font-medium">{label}</span>
      </div>
    </Link>
  )
}