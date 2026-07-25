"use client";

import { ArrowUpRight, Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "./brand-logo";

const links = [
  ["L’agence", "#intendance"],
  ["Services", "#services"],
  ["Avis", "#avis"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <div className="site-header__inner">
        <a className="header-brand" href="#accueil" aria-label="Residence24, accueil">
          <BrandLogo />
          <span className="header-brand__descriptor">Intendance privée<br />Genève</span>
        </a>
        <nav id="navigation-mobile" className={open ? "nav nav--open" : "nav"} aria-label="Navigation principale">
          <span className="nav__label">Navigation</span>
          {links.map(([label, href], index) => <a key={href} href={href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{label}<ArrowUpRight size={18} /></a>)}
          <div className="nav__mobile-footer">
            <a className="nav__mobile-phone" href="tel:+41765534154"><PhoneCall size={17} /> +41 76 553 41 54</a>
            <a className="nav__mobile-cta" href="#contact" onClick={() => setOpen(false)}>Organiser un entretien <ArrowUpRight size={17} /></a>
          </div>
        </nav>
        <div className="header-actions">
          <span className="header-status"><i /> Disponible à Genève</span>
          <a className="header-phone" href="tel:+41765534154"><PhoneCall size={14} /> <span>+41 76 553 41 54</span></a>
          <a className="header-cta" href="#contact">Parler de votre résidence <ArrowUpRight size={14} /></a>
          <button className="icon-button menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="navigation-mobile" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
