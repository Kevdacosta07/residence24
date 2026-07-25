# Residence24

Landing page de Residence24, maison suisse d’intendance privée pour résidences haut de gamme à Genève.

## Stack

- Next.js 16.2 et App Router
- React 19.2 et TypeScript strict
- Tailwind CSS 4
- Motion for React
- React Hook Form et Zod
- Primitive UI inspirée de shadcn/ui avec CVA
- Lucide React
- Metadata API, JSON-LD et routes SEO natives Next.js

Le brief mentionnait Next.js 15, mais ce dépôt est volontairement maintenu sur Next.js 16 conformément à `AGENTS.md` et aux conventions locales installées. Le fichier demandé `middleware.ts` est devenu `src/proxy.ts`, car `middleware` est officiellement déprécié dans Next.js 16.

## Lancer le projet

Prérequis: Node.js 20.9 ou plus récent et npm.

```bash
npm install
npm run dev
```

Ouvrir `http://localhost:3000`.

Contrôles avant mise en production:

```bash
npm run lint
npm run build
npm start
```

## Architecture

```text
src/
  app/
    layout.tsx              Shell, langue et typographies
    metadata.ts            SEO, canonical, Open Graph et Twitter
    page.tsx                Hero et composition serveur
    opengraph-image.tsx     Image sociale générée
    robots.ts               Directives robots
    sitemap.ts              Sitemap XML
    manifest.ts             Web App Manifest
  components/
    home-sections.tsx       Sections éditoriales serveur
    header.tsx              Navigation, thème et menu mobile
    contact-form.tsx        Formulaire validé avec Zod
    faq-list.tsx            Accordéon accessible
    reveal.tsx              Mouvement avec reduced motion
    ui/button.tsx           Primitive UI locale
  lib/
    content.ts              Contenu structuré
    schema.ts               Graphe Schema.org
    utils.ts                Fusion de classes
  proxy.ts                  Redirection vers le domaine canonique
public/
  images/                   Photographies locales optimisées
  logo-*.svg                Variantes de marque
  icon.svg                  Favicon
  app-icon*.svg             Icônes d’application
docs/
  brand-guide.md            Identité et design system
  image-prompts.md          Prompts IA de production
  seo-strategy.md           Stratégie SEO locale suisse
```

## Formulaire

Le formulaire valide réellement les données et ouvre un e-mail prérempli vers `contact@residence24.ch`. Il ne simule pas un envoi serveur.

Avant une campagne, brancher un transport transactionnel sécurisé:

1. Créer une Server Action dédiée dans `src/app/actions.ts`.
2. Revalider le payload avec le même schéma Zod côté serveur.
3. Utiliser Resend, Postmark ou le SMTP de l’entreprise via variables Vercel.
4. Ajouter limitation de débit, honeypot et journalisation minimale.
5. Ne jamais exposer de clé API avec le préfixe `NEXT_PUBLIC_`.
6. Mettre à jour le message de confirmation et la politique de confidentialité.

## Déploiement Vercel

1. Pousser le dépôt vers GitHub, GitLab ou Bitbucket.
2. Importer le dépôt dans Vercel.
3. Framework Preset: Next.js; Build Command: `npm run build`.
4. Déployer, puis rattacher `residence24.ch` et `www.residence24.ch`.
5. Définir `residence24.ch` comme domaine principal. Le proxy redirige `www` en 308 vers ce domaine.
6. Vérifier les enregistrements DNS indiqués par Vercel et attendre la validation SSL.
7. Tester `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest` et `/opengraph-image`.
8. Soumettre le sitemap dans Google Search Console et Bing Webmaster Tools.

## Déploiement VPS avec Docker

Le dépôt contient désormais une pile de self-hosting pour VPS Linux avec Docker et Nginx reverse proxy.

Fichiers fournis:

- `Dockerfile`: image Next.js 16 en mode `output: "standalone"`
- `docker-compose.yml`: service `residence24` exposé uniquement sur `127.0.0.1:3000`
- `.github/workflows/deploy.yml`: build CI, transfert `rsync`, puis `docker compose up -d --build --remove-orphans`
- `deploy/nginx/residence24.conf`: exemple de vhost Nginx pour `residence24.ch` et `www.residence24.ch`

Arborescence VPS attendue:

```text
/srv/residence24/
  Dockerfile
  docker-compose.yml
  package.json
  package-lock.json
  next.config.ts
  public/
  src/
```

Le workflow reste piloté par le secret GitHub `VPS_TARGET_DIR`. Si votre projet vit ailleurs, utilisez simplement ce chemin.

Secrets GitHub requis:

- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_PRIVATE_KEY`
- `VPS_TARGET_DIR`
- `VPS_PORT` optionnel, sinon `22`

Exemple de mise en place sur le VPS:

```bash
sudo mkdir -p /srv/residence24
sudo chown -R $USER:$USER /srv/residence24
cp deploy/nginx/residence24.conf /etc/nginx/sites-available/residence24.conf
sudo ln -s /etc/nginx/sites-available/residence24.conf /etc/nginx/sites-enabled/residence24.conf
sudo nginx -t
sudo systemctl reload nginx
```

Le reverse proxy Nginx envoie le trafic vers `127.0.0.1:3000`, ce qui correspond au `docker-compose.yml` fourni. Le fichier `src/proxy.ts` redirige `www.residence24.ch` vers le domaine canonique `residence24.ch`.

## Checklist avant publication

- Remplacer les photographies éditoriales actuelles par les images propriétaires générées avec `docs/image-prompts.md`, puis conserver les mêmes noms ou mettre à jour les imports.
- Confirmer que `contact@residence24.ch` existe et reçoit les messages.
- Ajouter les coordonnées légales vérifiées, la raison sociale exacte, les mentions légales et la politique de confidentialité.
- Faire valider les conditions de prestation, assurances et limites liées à la sécurité par un conseil suisse.
- Ne publier une adresse, un téléphone, un nom de dirigeant, des références ou des avis qu’après vérification.
- Mesurer Lighthouse sur l’URL de production en navigation privée, puis vérifier les Core Web Vitals réels dans Search Console.
- Valider le JSON-LD avec Rich Results Test et Schema Markup Validator.
- Effectuer un audit clavier, lecteur d’écran, contrastes et zoom à 200 %.

## Identité et contenu

Le guide de marque se trouve dans `docs/brand-guide.md`. La stratégie locale et l’architecture SEO future sont décrites dans `docs/seo-strategy.md`. Les prompts 8K couvrant les treize scènes du brief sont dans `docs/image-prompts.md`.

## Sécurité et confidentialité

Les en-têtes `nosniff`, `SAMEORIGIN`, Referrer Policy et Permissions Policy sont configurés dans `next.config.ts`. La page ne charge aucun tracker tiers. Les données du formulaire ne sont ni stockées ni transmises à un service tiers dans l’implémentation actuelle.
