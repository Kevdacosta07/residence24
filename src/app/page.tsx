import Image from "next/image";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Header } from "@/components/header";
import { HomeSections } from "@/components/home-sections";
import { Reveal } from "@/components/reveal";
import { residence24Schema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(residence24Schema).replace(/</g, "\\u003c") }} />
      <Header />
      <main id="contenu">
        <section className="hero" id="accueil" aria-labelledby="hero-title">
          <div className="hero__canvas">
            <div className="hero__copy">
              <div className="hero__content">
                <div className="hero__index hero__reveal hero__reveal--1">
                  <strong>01</strong>
                  <p>Intendance privée<br /><span>Genève · Suisse</span></p>
                </div>
                <h1 id="hero-title" className="hero__reveal hero__reveal--2"><span>Vous partez.</span><em>Rien ne s’arrête.</em></h1>
                <div className="hero__manifesto hero__reveal hero__reveal--3">
                  <p>Votre résidence continue de vivre, même en votre absence.</p>
                  <span>Un intendant dédié veille, coordonne et vous tient informé.</span>
                </div>
                <a className="hero__phone hero__reveal hero__reveal--4" href="tel:+41765534154">
                  <Phone size={18} />
                  <span><small>Appeler Residence24</small><strong>+41 76 553 41 54</strong></span>
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <a className="hero__corner-link" href="#intendance"><span>Découvrir<br />notre approche</span><ArrowUpRight size={18} /></a>
              <p className="hero__vertical-mark" aria-hidden="true">Residence24 · Présence locale</p>
            </div>
            <div className="hero__visual">
              <Image
                src="/images/hero-villa.jpg"
                alt="Villa contemporaine illuminée suivie par Residence24"
                fill
                priority
                sizes="100vw"
                className="hero__image"
              />
              <p className="hero__location"><span /> Genève et alentours</p>
              <div className="hero__brand-panel" aria-hidden="true">
                <span>Residence</span>
                <strong>24</strong>
                <i>Genève</i>
              </div>
            </div>
          </div>
        </section>

        <HomeSections />
      </main>
      <footer className="footer">
        <Reveal className="container footer__top">
          <div className="footer__brand">
            <BrandLogo />
            <p>Une présence de confiance pour veiller sur votre résidence à Genève pendant vos absences.</p>
          </div>
          <nav className="footer__column" aria-label="Navigation footer">
            <span>Explorer</span>
            <a href="#intendance">L’intendance</a>
            <a href="#services">Nos prestations</a>
            <a href="#avis">Retours clients</a>
            <a href="#faq">Questions fréquentes</a>
          </nav>
          <div className="footer__column footer__details">
            <span>Nous contacter</span>
            <a href="mailto:contact@residence24.ch"><Mail size={15} /> contact@residence24.ch</a>
            <a href="tel:+41765534154"><Phone size={15} /> +41 76 553 41 54</a>
            <p>Genève · Suisse</p>
          </div>
          <div className="footer__contact">
            <span>Premier échange confidentiel</span>
            <a href="#contact">Parler de votre résidence <ArrowUpRight size={17} /></a>
          </div>
        </Reveal>
        <div className="container footer__bottom">
          <nav aria-label="Navigation secondaire">
            <a href="#intendance">L’intendance</a>
            <a href="#services">Prestations</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="footer__developer" href="https://helveit.ch" target="_blank" rel="noreferrer">Développé par <strong>Helveit</strong><ArrowUpRight size={13} /></a>
          <div className="footer__meta">
            <span>© {new Date().getFullYear()} Residence24</span>
            <span>Genève · Suisse</span>
          </div>
          <a className="footer__top-link" href="#accueil" aria-label="Retour en haut"><ArrowUpRight size={15} /></a>
        </div>
      </footer>
    </>
  );
}
