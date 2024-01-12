
# API NestJS avec Monitoring et Logging

Ce projet est une API NestJS intégrant des fonctionnalités avancées de monitoring et de logging. Il utilise MongoDB pour la persistance des données, Winston et Morgan pour le logging, et Prometheus couplé à Grafana pour le suivi des métriques et la visualisation.

## Description

L'API fournit une interface pour gérer des données utilisateur avec des fonctionnalités CRUD (Créer, Lire, Mettre à jour, Supprimer). Elle inclut une intégration personnalisée avec Winston pour le logging détaillé, Morgan pour le logging des requêtes HTTP, et Prometheus pour collecter des métriques sur les performances et l'utilisation de l'API.

## Technologies Utilisées

- NestJS : Cadre de développement back-end
- MongoDB : Base de données NoSQL
- Winston : Gestion du logging
- Morgan : Logging des requêtes HTTP
- Prometheus : Collecte de métriques
- Grafana : Visualisation et dashboard des métriques

## Installation

Clonez le dépôt et installez les dépendances :

```bash
git clone https://votre-depot.git
cd votre-projet
npm install
```

## Configuration

- **MongoDB** : Configurez la chaîne de connexion MongoDB dans `src/app.module.ts`.
- **Winston** : Winston est configuré dans `src/main.ts` pour le logging général.
- **Morgan** : Morgan est intégré avec Winston dans `src/main.ts` pour le logging des requêtes HTTP.
- **Prometheus** : Les métriques sont collectées via un middleware personnalisé et disponibles à l'endpoint `/metrics`.

## Lancement de l'Application

Démarrez l'application avec :

```bash
npm run start
```

## Utilisation

L'API est accessible localement à `http://localhost:3000`. Utilisez les endpoints `/users` pour gérer les utilisateurs et `/metrics` pour accéder aux métriques Prometheus.

## Monitoring et Logs

- **Logs** : Les logs sont stockés dans `logs/` et affichés dans la console.
- **Prometheus** : Les métriques sont accessibles via `http://localhost:3000/metrics`.
- **Grafana** : Configurez Grafana pour visualiser les métriques en ajoutant Prometheus comme source de données.

