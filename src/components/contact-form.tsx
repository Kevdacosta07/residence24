"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Merci d’indiquer votre nom."),
  email: z.email("Saisissez une adresse e-mail valide."),
  phone: z.string().optional(),
  residence: z.string().min(2, "Indiquez la commune de la résidence."),
  message: z.string().min(20, "Précisez votre demande en quelques mots."),
  consent: z.literal(true, { error: "Votre accord est nécessaire pour vous répondre." }),
});

type ContactData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactData>({ resolver: zodResolver(contactSchema) });

  function submit(data: ContactData) {
    const subject = encodeURIComponent(`Demande d’entretien privé — ${data.name}`);
    const body = encodeURIComponent(`Nom: ${data.name}\nE-mail: ${data.email}\nTéléphone: ${data.phone || "Non renseigné"}\nRésidence: ${data.residence}\n\n${data.message}`);
    window.location.assign(`mailto:contact@residence24.ch?subject=${subject}&body=${body}`);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit(submit)} noValidate>
      <div className="form-grid">
        <Field label="Nom complet" error={errors.name?.message}><input autoComplete="name" {...register("name")} /></Field>
        <Field label="E-mail" error={errors.email?.message}><input type="email" autoComplete="email" {...register("email")} /></Field>
        <Field label="Téléphone (facultatif)" error={errors.phone?.message}><input type="tel" autoComplete="tel" {...register("phone")} /></Field>
        <Field label="Commune de la résidence" error={errors.residence?.message}><input autoComplete="address-level2" {...register("residence")} /></Field>
      </div>
      <Field label="Comment pouvons-nous veiller sur votre résidence?" error={errors.message?.message}>
        <textarea rows={5} {...register("message")} />
      </Field>
      <label className="consent"><input type="checkbox" {...register("consent")} /><span>J’accepte que Residence24 utilise ces informations uniquement pour répondre à ma demande.</span></label>
      {errors.consent && <p className="field-error" role="alert">{errors.consent.message}</p>}
      <Button type="submit">Demander un entretien <ArrowUpRight size={17} /></Button>
      <p className="form-note">Votre demande est traitée personnellement et en toute confidentialité.</p>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactElement }) {
  return (
    <label className="field"><span>{label}</span>{children}{error && <small role="alert">{error}</small>}</label>
  );
}