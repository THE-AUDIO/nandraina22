# Design détaillé — Portfolio de Nandraina THE Audio (Développeur Full Stack | Data | AI)

> **Référence de style analysée :** Zynic (agence digitale premium)
> **Objectif de ce document :** adapter la direction artistique, la structure et **toutes les animations** de la référence à un **portfolio personnel de développeur full stack**, en remplaçant le narratif "agence" par un narratif "profil individuel" basé sur le CV fourni.

---

## 1. Direction artistique globale

### 1.1 Positionnement visuel

Le portfolio adopte une esthétique **studio créatif premium appliquée à un profil tech individuel**. L'impression recherchée :

- moderne et technique, mais jamais froide ;
- minimaliste ;
- éditoriale, orientée typographie ;
- premium sans être chargée ;
- dynamique grâce aux mouvements ;
- fortement centrée sur les réalisations (projets, stack, distinctions) ;
- construite autour de grandes sections aérées.

L'objectif : donner l'impression d'un développeur qui maîtrise autant le code que le produit fini — un site qui **prouve** la compétence UX/UI revendiquée dans le profil ("passion pour la création d'expériences UX/UI modernes et centrées sur l'utilisateur"), pas seulement qui l'affirme.

### 1.2 Principe de composition

Alternance entre :

1. grandes zones textuelles (positionnement, pitch) ;
2. galeries de projets (FeoSync, RAG bot, PoC CI/CD, apps mobiles) ;
3. séparateurs graphiques ;
4. blocs structurés (stack technique, expériences, formation) ;
5. cartes interactives (compétences, distinctions) ;
6. sections à défilement horizontal (logos de technos, marquee) ;
7. appels à l'action visibles (contact, CV, GitHub).

L'objectif n'est pas de tout montrer, mais de créer un **rythme visuel** qui raconte : *étudiant rigoureux → développeur polyvalent → orienté DevOps/IA → prêt pour l'entreprise*.

---

# 2. Navigation principale

## 2.1 Structure

Navigation supérieure épurée.

À gauche :

- logo / monogramme "TA" (THE Audio) ou nom court "Nandraina".

Au centre :

- Work
- Stack
- Expérience
- Distinctions
- Contact

À droite :

- bouton **Me contacter** (ou **Voir mon CV**).

## 2.2 Style

- fond principalement clair (ou dark mode technique — à trancher selon préférence, cohérent sur tout le site) ;
- texte sombre/contrasté ;
- typographie moderne, sans-serif ;
- petites capitales pour les liens ;
- beaucoup d'espace autour des liens ;
- bouton CTA contrasté ;
- hauteur compacte.

## 2.3 Animation au chargement

1. le logo/monogramme apparaît en fondu ;
2. les liens de navigation arrivent avec un léger décalage horizontal ou vertical ;
3. le bouton CTA apparaît ensuite ;
4. l'ensemble rapide et subtil.

**Durée recommandée :** 400–700 ms par groupe.
**Courbe :** `ease-out`.

## 2.4 Interaction au survol

Chaque lien :

- changement de couleur ;
- soulignement animé ;
- déplacement très léger ;
- ou apparition d'une petite ligne.

Le CTA :

- légère augmentation de taille ;
- changement de contraste ;
- déplacement du contenu de quelques pixels ;
- flèche qui avance légèrement.

---

# 3. Hero Section

## 3.1 Structure

### Titre principal

Un très grand titre, ligne de positionnement personnelle :

> **Développeur Full Stack qui conçoit, code et déploie — de l'UI à la CI/CD**

Le titre occupe une grande partie de la largeur disponible.

### Sous-titre

Un paragraphe court, basé sur le pitch du CV :

> Spécialisé Angular, Spring Boot et FastAPI. Je conçois des expériences UX/UI modernes, je les industrialise avec Docker, Kubernetes et des pipelines CI/CD, et j'intègre l'IA dans mes workflows pour aller plus vite, sans sacrifier la qualité.

### CTA principal

**Voir mes projets**

### CTA secondaire

**Télécharger mon CV**

### Phrase de renforcement

Sous les CTA :

> Étudiant en dernière année à l'ISPM, déjà en production sur des projets réels. Discutons de votre besoin.

---

# 4. Animation du Hero

## 4.1 Animation du titre

Le titre apparaît :

1. ligne par ligne (ou mot par mot) ;
2. avec translation verticale ;
3. combinée à une apparition progressive.

```text
position initiale : translateY(60px)
opacité initiale : 0

position finale : translateY(0)
opacité finale : 1
```

Chaque ligne arrive légèrement après la précédente.

**Stagger recommandé :** 60–120 ms.

## 4.2 Animation du paragraphe

Après le titre :

- fade-in ;
- légère montée verticale ;
- délai de 150–250 ms.

## 4.3 Animation des CTA

Apparition ensuite. Au survol :

- légère translation ;
- changement de fond ;
- mouvement de la flèche ;
- éventuel effet de remplissage progressif.

## 4.4 Animation de la phrase finale

Apparaît progressivement lorsque le Hero termine son animation.

---

# 5. Bandeau technologies / Marquee

Marquee horizontal infini affichant la **stack technique** au lieu de logos de marques clients.

Contenu du marquee (extrait du CV) :

```text
Angular · Spring Boot · FastAPI · Python · Java · TypeScript
Docker · Kubernetes · Helm · GitHub Actions · CI/CD
PostgreSQL · MySQL · scikit-learn · Matplotlib · Ansible
```

## 5.1 Principe

Déplacement continu de droite vers gauche :

- lent ;
- parfaitement continu ;
- linéaire ;
- sans saut visible ;
- indépendant du scroll vertical.

## 5.2 Boucle infinie

Contenu dupliqué pour que la fin d'une série soit immédiatement suivie par son début — impression de flux infini.

## 5.3 Interaction

Au survol :

- ralentissement ou arrêt ;
- augmentation légère de l'opacité ;
- mise en évidence de la techno survolée (ex. tooltip "3 projets" quand on survole Docker).

---

# 6. Section Portfolio / Work

Présentation des réalisations, organisées en grandes cartes visuelles. Projets suggérés à partir du contexte connu :

- **FeoSync** — SaaS multi-tenant de planification de posts et génération de contenu IA (FastAPI / Next.js / Kubernetes) ;
- **RAG Bot documentaire** — assistant RAG (FastAPI + Angular) indexant la documentation d'infrastructure ;
- **Pipeline CI/CD** — PoC de mémoire de fin d'études (GitHub Actions, SonarQube, Docker, Ansible, séparation staging/production) ;
- **App e-commerce mobile** — contribution React Native (fiches produits, panier, commande) ;
- **Dashboard de suivi d'activités** — stage chez Connecteo.

Chaque carte contient :

- image / capture principale ;
- nom du projet ;
- catégories (SaaS, DevOps, Mobile App, IA/RAG) ;
- rôle et stack utilisée ;
- tags techniques.

## 6.1 Composition

- grandes images ;
- marges importantes ;
- titres courts ;
- informations secondaires discrètes (stack, année).

## 6.2 Animation au survol d'un projet

- l'image effectue un léger zoom ;
- le contenu se déplace subtilement ;
- les tags techniques deviennent plus visibles ;
- une flèche "Voir le projet" apparaît ;
- un overlay léger peut apparaître.

```text
scale(1) → scale(1.03 à 1.06)
```

---

# 7. Séparateurs graphiques

Entre les grandes sections : ligne, motif géométrique discret, ou élément abstrait (ex. inspiré de terminal/code).

## Animation

À l'entrée dans le viewport :

- apparition progressive ;
- extension horizontale ;
- rotation très légère possible ;
- révélation progressive du contenu.

L'animation reste secondaire par rapport au contenu.

---

# 8. Section Stack technique ("Ce que je maîtrise")

Titre :

> **Une stack pensée pour aller du prototype à la production**

Sous-titre :

> De l'interface utilisateur à l'infrastructure, je couvre l'ensemble de la chaîne.

Puis une question :

> Sur quoi voulez-vous échanger ?

Compétences présentées comme liste typographique interactive, regroupées par catégorie (fidèle au CV) :

- ANGULAR
- SPRING BOOT
- FASTAPI
- PYTHON / JAVA / TYPESCRIPT
- DOCKER & KUBERNETES
- CI/CD & GITHUB ACTIONS
- POSTGRESQL / MYSQL
- IA & LLM APPLIQUÉS AU DEV

## 8.1 Interaction

Au survol d'une compétence :

- le texte gagne en importance visuelle ;
- une image/illustration ou mini-projet associé apparaît ;
- les autres éléments perdent légèrement en opacité ;
- une icône peut suivre le curseur ;
- la compétence active change de poids typographique.

## 8.2 Animation de révélation

- le titre apparaît ;
- les compétences apparaissent progressivement, en cascade, lignes légèrement décalées.

---

# 9. Section "Comment je travaille"

Titre :

> **De l'idée au déploiement, une méthode claire**

Quatre étapes (adaptées de la pratique full stack + DevOps du profil) :

1. Cadrer le besoin et l'architecture
2. Concevoir l'UI/UX et l'API
3. Développer et tester
4. Conteneuriser et déployer (CI/CD)

Chaque étape : titre, explication courte, illustration/icône.

## Animation

Apparition progressive au scroll, alternée :

- Étape 1 : illustration arrive depuis la droite.
- Étape 2 : contenu arrive depuis la gauche.
- Étape 3 : mouvement inversé.
- Étape 4 : les deux éléments se rapprochent.

Cette alternance crée un rythme vertical.

---

# 10. Section "Mes domaines de force"

Expertises principales, adaptées du CV :

- Développement Full Stack (Angular / Spring Boot / FastAPI)
- DevOps & Conteneurisation (Docker, Kubernetes, Helm, CI/CD)
- Data & IA (scikit-learn, Matplotlib, intégration LLM)
- UX/UI centré utilisateur

Chaque domaine : image, icône, titre, description.

## 10.1 Animation au survol

- l'image effectue un zoom lent ;
- l'icône se déplace ;
- le titre change légèrement de position ;
- la carte se soulève de quelques pixels ;
- une bordure ou un contraste apparaît.

## 10.2 Animation au scroll

```text
opacity: 0 → 1
translateY: 40px → 0
```

avec effet de cascade.

---

# 11. Section Distinctions ("Awards")

Titre :

> **Je ne cours pas après les concours. Mais j'aime les gagner.**

Section crédibilité, liste éditoriale reprenant les distinctions du CV :

- 2025 — Stupid Hackathon, **Gagnant**
- 2024 — DevFest 2024, **Gagnant du Coding Challenge**
- 2022 — Participation HiU ISPM

## Animation

Apparition une par une (ou défilement vertical léger).

Au survol :

- le contexte du concours peut être révélé (image, courte anecdote) ;
- la ligne active devient plus contrastée ;
- petite translation horizontale.

---

# 12. Section "Ils m'ont fait confiance" (Expériences)

Remplace les témoignages clients par les **expériences professionnelles** du CV, présentées comme des mini-cas :

```text
STAGE — CONNECTEO (09/2025 – 11/2025)

DASHBOARD · CI/CD · POSTGRESQL DISTRIBUÉ

"Conception d'un tableau de bord de suivi d'activités,
initiation aux pipelines CI/CD, découverte de Citus."

Connecteo
Développeur Stagiaire
```

Idem pour RanDevTeam (React Native, e-commerce) et NextRocket (freelance JS, web scraping).

## 12.1 Animation

Slider entre les expériences :

1. l'expérience précédente disparaît ;
2. la nouvelle arrive latéralement ;
3. contenu synchronisé ;
4. informations avec léger délai.

```text
opacity + translateX
```

Durée : **500–800 ms.**

---

# 13. Section Formation

Titre :

> **Une base académique solide, doublée de pratique terrain**

Présentée comme deux cartes chronologiques :

- Licence en Informatique — ISPM (12/2022 – aujourd'hui)
- Année préparatoire — SESAME (11/2021 – 09/2022)

## 13.1 Animation

Apparition en cascade au scroll, timeline verticale avec point animé qui "remonte" au fil du scroll.

---

# 14. Comparaison de profil ("Pourquoi moi")

Titre :

> **Ce que j'apporte, par rapport à un profil junior classique**

Comparaison (positionnement, pas de tableau commercial) :

- Autonomie du besoin à la prod (vs code seul)
- Culture DevOps dès le début de carrière (vs découverte tardive)
- Intégration IA dans le workflow quotidien (vs usage ponctuel)
- Adaptabilité démontrée par la diversité des missions (stage, freelance, hackathon)

## Animation

Apparition progressive ligne par ligne.

```text
scale(0.8) → scale(1)
opacity(0) → opacity(1)
```

avec léger délai entre chaque ligne.

---

# 15. Section Soft Skills ("Au-delà du code")

Titre :

> **Ce qui ne se voit pas sur un dépôt Git**

Éléments numérotés :

```text
001
002
```

- Adaptabilité et apprentissage rapide
- Esprit compétitif et dépassement de soi

## 15.1 Direction artistique

Aspect éditorial, numéro très visible, contenu compact, liste verticale interactive.

## 15.2 Animation

```text
Numéro → Titre → Description → Visuel
```

---

# 16. Réseaux et présence en ligne

Section :

> **Me retrouver ailleurs**

Liens :

- GitHub (THE-AUDIO)
- LinkedIn
- Portfolio / site précédent
- Email

## Animation

Au survol d'un lien :

- le nom se déplace légèrement ;
- une icône apparaît ;
- une flèche peut se déplacer ;
- la couleur évolue ;
- les autres liens perdent légèrement en opacité.

---

# 17. FAQ

Titre :

> **Questions fréquentes**

Exemples adaptés à un profil recruteur/client :

- Quel type de projet peux-tu prendre en charge ?
- Es-tu disponible en stage, alternance ou freelance ?
- Travailles-tu seul ou en équipe ?
- Peux-tu gérer le déploiement en plus du développement ?
- Utilises-tu l'IA dans ton travail, et comment ?

## Animation d'ouverture

1. la réponse se déploie verticalement ;
2. la hauteur du bloc augmente ;
3. l'icône + tourne vers × ;
4. les autres questions restent compactes.

Durée recommandée : **300–450 ms.**

## Animation de fermeture

Même principe en sens inverse. Jamais d'apparition instantanée.

---

# 18. CTA final

Reprend le message principal :

> **Discutons de votre projet**

Puis :

> Réponse sous 48h, que ce soit pour un stage, une mission freelance ou une opportunité en entreprise.

Deux boutons :

- Me contacter
- Voir mes projets

Phrase :

> Étudiant en dernière année à l'ISPM, déjà en production sur des projets réels.

réapparaît pour créer une boucle narrative avec le Hero.

## Animation

- titre avec reveal vertical ;
- paragraphe en fade-in ;
- boutons en stagger ;
- éléments graphiques avec mouvement lent.

---

# 19. Footer

Plus visuel que le reste de la page. Contient :

- branding (nom, monogramme) ;
- liens de navigation ;
- réseaux sociaux ;
- contact direct (email, téléphone) ;
- mentions légales / copyright.

## Animation

Au scroll vers le bas :

- éléments du footer apparaissent progressivement ;
- logo avec animation légère ;
- éléments graphiques se déplacent très lentement ;
- liens réagissent au hover.

---

# 20. Système d'animations global

## 20.1 Règle principale

Toutes les animations doivent être **fluides et premium**.

Éviter :

- animations rapides excessives ;
- bounce important ;
- rotations agressives ;
- effets flashy ;
- transitions trop longues ;
- multiplication des animations simultanées.

## 20.2 Animations d'entrée au scroll

```text
opacity: 0
transform: translateY(40px)
        ↓
opacity: 1
transform: translateY(0)
```

Durée : **600–900 ms.**
Easing : **ease-out / cubic-bezier doux.**

## 20.3 Stagger

Pour les listes :

```text
élément 1 : 0 ms
élément 2 : 80 ms
élément 3 : 160 ms
élément 4 : 240 ms
```

Impression de mouvement naturel.

---

# 21. Animation des images

Technique de révélation premium :

1. conteneur masqué ;
2. image légèrement agrandie ;
3. révélation du conteneur ;
4. image revient doucement à sa taille normale.

```text
Image initiale : scale(1.08)
Image finale   : scale(1)
```

---

# 22. Effets au survol

### Boutons

- translation de 2–4 px ;
- changement de contraste ;
- déplacement de la flèche.

### Images

- zoom 3–6 %.

### Cartes

- translation verticale de 4–8 px ;
- ombre légèrement renforcée.

### Liens

- soulignement animé ;
- translation horizontale très faible.

---

# 23. Effets liés au curseur

Certains éléments suivent légèrement le curseur (effet "magnetic cursor") :

- image associée à une compétence survolée ;
- petite flèche ;
- tooltip (ex. stack utilisée sur un projet) ;
- élément décoratif.

Mouvement retardé de quelques millisecondes. Ne pas généraliser à tous les éléments (nuit à la lisibilité).

---

# 24. Scroll horizontal

Défilement horizontal contrôlé par le scroll vertical, adapté à :

- portfolio (projets) ;
- expériences professionnelles ;
- distinctions ;
- marquee technologies.

```text
Scroll vertical
      ↓
translation horizontale
      ↓
éléments qui défilent horizontalement
```

Doit rester fluide, sans donner d'impression de blocage.

---

# 25. Marquee infini

Structure conceptuelle :

```text
[Angular] [Spring Boot] [FastAPI] [Docker]
[Angular] [Spring Boot] [FastAPI] [Docker]
```

Le deuxième groupe reconstruit continuellement le premier.

Vitesse : lente, constante, sans accélération ni ralentissement.

---

# 26. Micro-interactions

À prévoir :

- boutons réactifs ;
- flèches animées ;
- accordéons fluides (FAQ) ;
- cartes qui se soulèvent (projets, compétences) ;
- images qui zooment ;
- liens avec underline animé ;
- éléments qui apparaissent au scroll ;
- changement de focus lors des hover ;
- transitions entre expériences professionnelles.

Chaque interaction doit fournir un **feedback immédiat**.

---

# 27. Hiérarchie typographique

### Niveau 1 — Hero

Très grande taille. Objectif : attirer immédiatement l'attention sur le positionnement.

### Niveau 2 — Titres de section

Grandes tailles, nettement inférieures au Hero.

### Niveau 3 — Titres de cartes (projet, compétence)

Taille moyenne.

### Niveau 4 — Texte descriptif

Plus petit, confortable à lire.

### Niveau 5 — Métadonnées

Très discrètes : catégories, tags techniques, dates, numéros.

---

# 28. Espacement

Entre deux grandes sections : **120–220 px** environ sur desktop.
Entre titre et paragraphe : **20–40 px.**
Entre paragraphe et CTA : **30–50 px.**

Sections suffisamment espacées pour créer une sensation de qualité professionnelle.

---

# 29. Responsive Design

## Desktop

- grands titres ;
- compositions asymétriques ;
- grands visuels de projets ;
- espaces généreux ;
- animations complètes.

## Tablet

Réduire : taille des titres, marges, largeur des cartes, vitesse des animations si nécessaire.

## Mobile

Structure verticale. Navigation : logo + bouton menu.

Animations simplifiées. Éviter les interactions dépendantes du hover — les remplacer par des interactions au tap (ex. tap sur une carte projet pour révéler les tags).

---

# 30. Accessibilité des animations

Prévoir une version avec animations réduites (`prefers-reduced-motion`) :

- supprimer les grands déplacements ;
- désactiver le parallax ;
- réduire les zooms ;
- conserver les changements d'opacité simples ;
- éviter les animations infinies inutiles (marquee peut rester statique ou très lent).

Le contenu doit rester parfaitement utilisable sans animation.

---

# 31. Séquence d'expérience utilisateur idéale

```text
NAVIGATION
    ↓
HERO IMPACTANT (qui es-tu ?)
    ↓
MARQUEE STACK TECHNIQUE (preuve de compétence)
    ↓
PORTFOLIO (que sais-tu faire ?)
    ↓
STACK DÉTAILLÉE (comment tu le fais)
    ↓
MÉTHODE DE TRAVAIL
    ↓
DOMAINES DE FORCE
    ↓
DISTINCTIONS (crédibilité)
    ↓
EXPÉRIENCES PROFESSIONNELLES
    ↓
FORMATION
    ↓
POSITIONNEMENT / DIFFÉRENCIATION
    ↓
SOFT SKILLS
    ↓
RÉSEAUX
    ↓
FAQ
    ↓
CTA FINAL (comment te contacter ?)
    ↓
FOOTER
```

Cette progression fait passer le visiteur de **"Qui es-tu ?"** à **"Que sais-tu faire ?"**, puis à **"Pourquoi te faire confiance ?"**, et enfin à **"Comment te contacter ?"**.

---

# 32. Principes UX à respecter

## Règle 1 — Un message principal

Le Hero doit communiquer immédiatement : full stack + DevOps + IA, prêt à produire.

## Règle 2 — Un CTA dominant

Le bouton "Me contacter" ou "Voir mes projets" doit toujours être identifiable.

## Règle 3 — Le mouvement accompagne le contenu

Les animations ne doivent jamais être présentes uniquement pour faire joli.

## Règle 4 — Le scroll raconte une histoire

Chaque section apporte une nouvelle preuve de compétence.

## Règle 5 — Les images doivent avoir une fonction

Une image doit démontrer, crédibiliser, expliquer ou renforcer la mémorisation du profil.

## Règle 6 — Les interactions doivent être prévisibles

Le visiteur doit comprendre immédiatement ce qui est cliquable.

---

# 33. Résumé du style à reproduire

> **Minimalisme éditorial + typographie massive + grandes images de projets + espaces généreux + mouvements horizontaux + micro-interactions + transitions fluides + forte hiérarchie visuelle + storytelling de profil individuel.**

L'objectif n'est pas de copier littéralement le site de référence, mais de reprendre ses **principes de direction artistique et d'expérience utilisateur** pour produire un portfolio personnel original, premium et dynamique, qui prouve visuellement la compétence UX/UI revendiquée dans le CV.

---

# 34. Checklist finale du design

- [ ] Navigation minimaliste
- [ ] Hero avec très grande typographie (positionnement personnel)
- [ ] Animation d'entrée du Hero
- [ ] CTA principal clairement identifiable (Voir mes projets)
- [ ] CTA secondaire (Télécharger mon CV)
- [ ] Marquee horizontal infini (stack technique)
- [ ] Portfolio visuel (FeoSync, RAG bot, PoC CI/CD, apps mobiles)
- [ ] Hover zoom sur les images de projets
- [ ] Section Stack interactive
- [ ] Révélation des contenus au scroll
- [ ] Méthode de travail en plusieurs étapes
- [ ] Section domaines de force
- [ ] Section Distinctions (Stupid Hackathon, DevFest)
- [ ] Expériences professionnelles animées (slider)
- [ ] Section Formation (timeline)
- [ ] Section positionnement / différenciation
- [ ] Section Soft Skills numérotée
- [ ] Réseaux interactifs (GitHub, LinkedIn)
- [ ] FAQ accordéon animé
- [ ] CTA final
- [ ] Footer graphique
- [ ] Responsive mobile
- [ ] Version avec mouvements réduits
- [ ] Transitions cohérentes
- [ ] Micro-interactions sur les éléments cliquables
- [ ] Aucun mouvement inutile
- [ ] Aucun effet visuel ne doit nuire à la lisibilité

---

## Conclusion

La force de cette direction artistique ne vient pas d'un seul effet visuel, mais de la **coordination de dizaines de petits mouvements** : apparition progressive des contenus, révélations au scroll, zooms d'images de projets, marquee infini de technologies, transitions de cartes, interactions au survol, accordéon FAQ fluide et slider d'expériences animé.

Le résultat recherché est un portfolio qui paraît **vivant dès le premier scroll**, tout en restant suffisamment sobre pour renforcer — et non diluer — le message professionnel : un développeur full stack capable de concevoir, coder et déployer.
