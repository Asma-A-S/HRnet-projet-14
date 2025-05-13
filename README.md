# HRnet - Application de gestion des employés

Bienvenue dans HRnet, une application React permettant de gérer les dossiers des employés au sein d'une entreprise. Ce projet a été réalisé dans le cadre de ma formation OpenClassrooms (parcours Développeur Front-End).

## 📋 Installation et lancement

### Cloner le projet

-   git clone https://github.com/Asma-A-S/HRnet-projet-14.git
-   cd hrnet-react

### Installer les dépendances

npm install

### Lancer l'application en mode développement

npm run dev

### Créer un build de production

npm run build

## 🚀 Fonctionnalités principales

-   Création de nouveaux employés via un formulaire
-   Affichage de la liste des employés sous forme de tableau
-   Fonctionnalités de recherche, tri et pagination
-   Performance optimisée (remplacement de modal par une modale React maison)
-   Respect des bonnes pratiques d’accessibilité

## 📦 Stack technique

-   React
-   React Router
-   CSS
-   Lighthouse pour l'audit
-   ESLint / Prettier pour la qualité de code

## 🧪 Audits Lighthouse

Les audits ont été réalisés avec l’outil Lighthouse dans Chrome DevTools, sur la version **build** de l'application.

| Audit       | Score |
| ----------- | ----- |
| Performance | 100   |

📌 _Les 4 rapports Lighthouse sont disponibles dans le dossier `/docs/lighthouse-reports`._

## 🔍 Améliorations apportées

-   Le plugin jQuery **DataTables** a été remplacé par un composant React personnalisé pour améliorer les performances.
-   Le plugin jQuery **sélection de date** a été remplacé par la balise native html <input type='date'>
-   Le plugin jQuery **menu déroulant** a été remplacé par la balise native html <select>
-   Le plugin jQuery **fenêtre de modale** a été par la **Création d’un plugin Modal React personnalisé**, publié sur npm pour le rendre réutilisable dans d’autres projets.
