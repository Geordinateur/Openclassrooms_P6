# Construisez une API sécurisée pour une application d'avis gastronomiques
## Configuration connexion a la base de donnée
```Création d'un fichier .env et renseigner:
DB_URI=mongodb+srv://cluster0.nnzle.mongodb.net/
DB_NAME=MyFirstDatabase
DB_USER=
DB_PASS=```

## Contraintes - Règles :

Utiliser des pratiques de codes écurisées :

l'API doit respecter le RGPD et les standards OWASP
Les données sensibles doivent impérativement protégées (même l'adresse e-mail ?)

les mots de passe sont stockés de manière sécurisée (hash avec bcrypt)
l'authentification est renforcée sur les routes requises

Technologies à utiliser

framework : Express ;
serveur : NodeJS ;
base de données : MongoDB ;
toutes les opérations de la base de données doivent utiliser le pack Mongoose avec des schémas de données stricts.
l'API doit fonctionner parfaitement avec notre frontend (Pas de régression côté front)

2 types de droits administrateur à la base de données doivent être définis : un accès pour supprimer ou modifier des tables, et un accès pour éditer le contenu de la base de données ;

la sécurité de la base de données MongoDB (à partir d’un service tel que MongoDB Atlas) doit être faite de telle sorte que le validateur puisse lancer l’application depuis sa machine ;

Toute erreur doit être renvoyée telle quelle, sans aucune modification ni ajout. Si nécessaire,utiliser une nouvelle Erreur()

Toutes les routes relatives à la sauce doivent exiger une demande authentifiée (contenant un jeton valide dans son en-tête d'autorisation : "Bearer ").

Modèle de données pour :

Sauce
User
