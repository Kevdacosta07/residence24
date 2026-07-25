import Image from "next/image";
import { ArrowUpRight, Check, CheckCircle2, ClipboardCheck, CreditCard, PhoneCall, Quote, Route, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { ContactForm } from "./contact-form";
import { FaqList } from "./faq-list";
import { Reveal } from "./reveal";
import { services, values } from "@/lib/content";

const serviceImages = ["/images/residence-interior.jpg", "/images/dog.jpg", "/images/kitchen.jpg"];

const clientJourney = [
  { icon: PhoneCall, title: "Premier échange", text: "Vous nous appelez et nous échangeons en toute confidentialité sur votre résidence." },
  { icon: ClipboardCheck, title: "Recueil de vos demandes", text: "Nous précisons vos requêtes, vos priorités et les particularités de votre quotidien." },
  { icon: Route, title: "Plan d’action sur mesure", text: "Nous organisons les interventions, leur fréquence et les consignes à respecter." },
  { icon: SlidersHorizontal, title: "Présentation du protocole", text: "Nous vous présentons une proposition claire, détaillée et ajustable avec vous." },
  { icon: CreditCard, title: "Validation & règlement", text: "Vous validez le plan d’action et réglez le montant convenu en toute transparence." },
  { icon: CheckCircle2, title: "Mise en œuvre", text: "Votre intendant intervient selon le protocole et vous tient informé après chaque passage." },
];

const testimonials = [
  {
    quote: "Le professionnalisme de Residence24 nous a immédiatement rassurés. Chaque passage est rigoureux, chaque demande est anticipée et les comptes rendus sont toujours clairs.",
    profile: "Propriétaire d’une résidence secondaire",
    location: "Cologny",
    theme: "Professionnalisme",
  },
  {
    quote: "Nous apprécions particulièrement leur discrétion. Notre vie privée est respectée sans compromis et les échanges restent simples, directs et strictement confidentiels.",
    profile: "Famille résidant à l’étranger",
    location: "Collonge-Bellerive",
    theme: "Discrétion",
  },
  {
    quote: "Confier nos clés demandait une confiance totale. Nous savons aujourd’hui que notre maison et nos animaux sont entre de bonnes mains à chacune de nos absences.",
    profile: "Propriétaire d’une villa privée",
    location: "Vandœuvres",
    theme: "Confiance",
  },
  {
    quote: "Nous retrouvons notre résidence exactement comme nous l’avons laissée. La préparation avant chaque arrivée nous apporte une vraie tranquillité.",
    profile: "Couple propriétaire d’un appartement",
    location: "Genève-Ville",
    theme: "Tranquillité",
  },
  {
    quote: "La coordination des différents intervenants est devenue beaucoup plus simple. Nous avons un seul contact et une vision claire de ce qui a été fait.",
    profile: "Propriétaire d’une résidence familiale",
    location: "Bellevue",
    theme: "Coordination",
  },
  {
    quote: "Même à distance, nous avons le sentiment d’une présence attentive. Les informations sont précises, les échanges rapides et toujours mesurés.",
    profile: "Propriétaire résidant à l’étranger",
    location: "Anières",
    theme: "Présence",
  },
];

export function HomeSections() {
  return (
    <>
      <section className="section journey" id="intendance">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Comment ça fonctionne</p>
            <h2>De votre demande à<br /><em>notre intervention.</em></h2>
            <p>Un échange, un protocole clair, une présence fiable pendant votre absence.</p>
          </Reveal>
          <div className="journey-grid">
            {clientJourney.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal className="journey-step" delay={index * 0.05} key={step.title}>
                  <div className="journey-step__top">
                    <span>0{index + 1}</span>
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="journey-note"><Check size={14} /> Un interlocuteur unique, du premier appel à chaque visite.</Reveal>
          <Reveal className="section-cta" delay={0.1}><a className="text-cta" href="tel:+41765534154"><PhoneCall size={16} /> Commencer par un échange <span>+41 76 553 41 54</span><ArrowUpRight size={15} /></a></Reveal>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <Reveal className="section-head section-head--center">
            <p className="eyebrow">Nos services</p>
            <h2>Tout ce qui compte,<br /><em>pris en charge.</em></h2>
            <p>Votre résidence, ses extérieurs et ses prestataires suivis par une même personne.</p>
          </Reveal>
          <div className="service-showcase">
            {services.slice(0, 3).map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal className="service-tile" delay={index * 0.06} key={service.title}>
                  <div className="service-tile__media">
                    <Image src={serviceImages[index]} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />
                    <span>0{index + 1}</span>
                  </div>
                  <div className="service-tile__body">
                    <Icon size={22} strokeWidth={1.6} />
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <ul>{service.details.map((detail) => <li key={detail}><Check size={13} />{detail}</li>)}</ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="service-lineup">
            {services.slice(3).map((service) => {
              const Icon = service.icon;
              return <div key={service.title}><Icon size={20} /><span>{service.title}</span></div>;
            })}
          </Reveal>
          <Reveal className="section-cta" delay={0.1}><a className="text-cta" href="#contact">Décrire vos besoins <ArrowUpRight size={15} /></a></Reveal>
        </div>
      </section>

      <section className="section trust-section">
        <div className="container trust-section__grid">
          <Reveal className="trust-section__media">
            <Image src="/images/architecture.jpg" alt="Architecture contemporaine d’une résidence privée à Genève" fill sizes="(max-width: 900px) 100vw, 46vw" />
            <div className="trust-section__shade" />
            <div className="trust-section__statement">
              <ShieldCheck size={28} />
              <p className="eyebrow">Confidentialité absolue</p>
              <h3>Votre résidence reste strictement privée.</h3>
              <p>Aucune adresse, aucun intérieur et aucun nom de client ne sont utilisés comme vitrine commerciale.</p>
            </div>
          </Reveal>
          <div className="trust-section__content">
            <Reveal>
              <p className="eyebrow">Pourquoi Residence24</p>
              <h2>La sérénité repose sur des <em>engagements concrets.</em></h2>
              <p className="trust-section__intro">Une présence régulière, des consignes suivies et un compte rendu après chaque passage.</p>
            </Reveal>
            <div className="trust-list">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div className="trust-item" key={value.title}>
                    <div className="trust-item__icon"><Icon size={20} /></div>
                    <div><span>0{index + 1}</span><h3>{value.title}</h3><p>{value.text}</p></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials" id="avis">
        <div className="container">
          <Reveal className="section-head section-head--left">
            <div>
              <p className="eyebrow">Retours clients confidentiels</p>
              <h2>La confiance se construit<br />dans <em>la durée.</em></h2>
            </div>
            <p>Des retours partagés avec discrétion. Les profils sont volontairement anonymisés afin de préserver la vie privée de nos clients.</p>
          </Reveal>
          <div className="testimonials-viewport">
            <div className="testimonials-track">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
              <article className="testimonial" aria-hidden={index >= testimonials.length} key={`${testimonial.theme}-${index}`}>
                <div className="testimonial__top">
                  <Quote size={24} />
                  <span>0{(index % testimonials.length) + 1}</span>
                </div>
                <blockquote>« {testimonial.quote} »</blockquote>
                <div className="testimonial__footer">
                  <div><strong>{testimonial.profile}</strong><span>{testimonial.location} · Genève</span></div>
                  <span className="testimonial__theme">{testimonial.theme}</span>
                </div>
              </article>
              ))}
            </div>
          </div>
          <Reveal className="testimonials__privacy"><ShieldCheck size={14} /> Identités et propriétés protégées conformément à notre engagement de confidentialité.</Reveal>
          <Reveal className="section-cta" delay={0.1}><a className="text-cta" href="tel:+41765534154"><PhoneCall size={16} /> Échanger en toute discrétion <span>+41 76 553 41 54</span><ArrowUpRight size={15} /></a></Reveal>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="container faq__grid">
          <Reveal><p className="eyebrow">Questions fréquentes</p><h2>Avant de nous<br /><em>appeler.</em></h2><p>Les réponses essentielles avant de nous confier votre résidence.</p><a className="faq-phone" href="tel:+41765534154"><PhoneCall size={16} /><span>+41 76 553 41 54</span></a></Reveal>
          <Reveal delay={0.08}><FaqList /></Reveal>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact__grid">
          <Reveal className="contact__intro">
            <p className="eyebrow">Premier entretien confidentiel</p>
            <h2>Parlons de votre<br /><em>résidence.</em></h2>
            <p>Un premier échange suffit pour comprendre votre résidence et vos priorités.</p>
            <a className="contact__phone" href="tel:+41765534154"><PhoneCall size={20} /><span><small>Appelez-nous directement</small>+41 76 553 41 54</span><ArrowUpRight size={18} /></a>
            <a className="contact__mail" href="mailto:contact@residence24.ch">contact@residence24.ch</a>
          </Reveal>
          <Reveal className="contact__form-wrap" delay={0.08}><ContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}