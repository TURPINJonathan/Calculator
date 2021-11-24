# Calculator
A calculator with which you can record your results.

## Goal

Create a simple calculator, wich allows to save the results.  
As the customer wants, the result is not save automatically. In fact, the button *save* allows to save the result.  

## Process

After cloning the repository, you can open a terminal command and writte this command:
```bash
php -S localhost:8080
```
This one allows to open a local serve on the port 8080. This serve open the file `index.php` by default.

## How it work

The file `app.js` allows to set up the different event listener. So, when the user click on a button, the information can be relay.  
In fact, the operation's calculation is making directly in this file.

The file `index.php` allows to setting up the pages's render (I use *Bootstrap* to style it), and it allows to setting up the histories's save.

The fille `historyResult.txt` allows to save the all records which want the user.

## Technologies and sources used
- HTML
- Bootstrap
- [icones8.fr](https://icones8.fr/)
- [pexels.com](https://www.pexels.com/fr-fr/)
- [unicode-table.com](https://unicode-table.com/fr/)

<details>
    <summary>En français</summary>

# Calculatrice
Une calculatrice avec laquelle vous pouvez enregistrer vos résultats.

## Objectif
Créer une calculatrice simple, permettant de sauvegarder les résultats obtenus.  
Suivant la demande, la sauvegarde du résultat n'est pas automatique. Ainsi, le bouton *sauvegarder* permettra d'enregistrer le résultat.

## Procédure

Après avoir cloner le repository, ouvrir un terminal de commande et y insérer la commande suivante:
```bash
php -S localhost:8080
```
Ceci permettra d'ouvrir un serveur local sur le port 8080. Ce serveur ouvrira par défaut le fichier `index.php`.

## Comment ca fonctionne

Le fichier `app.js` permet de mettre en place les différents écouteurs d'évênements. Ainsi, lorsqu'on clique sur un bouton, l'information peut être relayée.  
De même, le calcul de l'opération se fait directement dans ce fichier.  
  
Le fichier `index.php` permet non seulement de mettre en place le rendu de la page (l'utilisation de *Bootstrap* permet de styliser ce rendu), mais également de mettre en place l'enregistrement des historiques.

Le fichier `historyResult.txt` permet d'enregistrer l'ensemble des résultats souhaités par l'utilisateur.

## Technologies et sources utilisées
- HTML
- Bootstrap
- [icones8.fr](https://icones8.fr/)
- [pexels.com](https://www.pexels.com/fr-fr/)
- [unicode-table.com](https://unicode-table.com/fr/)

</details>