je dois creer une application web qui permet a plusieurs utilisateurs de gerer une liste de courses collaboratrice. Tous les utilisateurs peuvent:
Ajouter des articles
Marquer des articles comme achetes
Supprimer des artic
Visualiser une liste partagee
Chaque action (ajouter, supprimer, marquer acheté) sera suivie et enregistree

D'accord, pour un projet avec plus de collaboration et d'interaction sur GitHub, nous pouvons ajoute
des éléments qui nécessitent une gestion plus structurée du code, des foctionnalités à diviser en plusieurs étapes, des issues, des Pull Requests (PR), et une approche plus agnostique du projet, en per
deux collaborateurs de s’impliquer plus activement dans la gestion de version


# Gestion de Liste de Courses

## Fonctionnalité : Ajouter un article

Cette fonctionnalité permet d'ajouter un article à la liste de courses.

### Utilisation

1. Envoyer une requête POST à `/api/items` avec un corps JSON contenant le nom de l'article :
   ```json
   {
     "name": "Pommes"
   }