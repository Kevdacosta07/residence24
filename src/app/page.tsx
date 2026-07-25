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
          <div className="hero__media">
            <Image
              src="/images/residence-interior.jpg"
              alt="Intérieur lumineux d’une résidence privée entretenue avec soin"
              fill
              priority
              sizes="100vw"
              className="hero__image"
            />
            <div className="hero__shade" />
          </div>
          <div className="container hero__inner">
            <div className="hero__content">
              <p className="hero__eyebrow hero__reveal hero__reveal--1">Intendance privée · Genève</p>
              <h1 id="hero-title" className="hero__reveal hero__reveal--2">Votre résidence,<br /><em>entre de bonnes mains.</em></h1>
              <p className="hero__lead hero__reveal hero__reveal--3">Residence24 veille personnellement sur votre propriété pendant vos absences, avec une présence régulière et un interlocuteur unique.</p>
              <div className="hero__actions hero__reveal hero__reveal--4">
                <a className="hero__phone" href="tel:+41765534154"><Phone size={16} /> +41 76 553 41 54</a>
              </div>
            </div>
            <a className="hero__scroll hero__reveal hero__reveal--5" href="#intendance"><span />Découvrir notre accompagnement</a>
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
        <Reveal className="container footer__bottom" delay={0.08}>
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
        </Reveal>
      </footer>
    </>
  );
}
