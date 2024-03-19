# REK'T (Backend)

REK'T is a backend interface that hosts data to communicate with REK'T.

 REK'T is an app where the users review and log videogames!

With this interface we can create a full experience for our users where we can store and access their data. Who better to get an opinion on games your interested in playing than other gamers!?


## Installation

Download the API by forking and cloning this repository.

```bash
~ git clone (url)
~ cd api-project
~ npm i
```
In your **package.json** add the below to use updated import syntax.
```bash
"type":"module",
```

## ROUTES

Open **Postman** to test the API and its full **CRUD** functionality. Below you will find examples of the routes availble and how to access them.

View games and their data
```bash
GET localhost:3000/api/games
```
View a single game and its data.
```bash
GET localhost:3000/api/games/:game id
```
**Full CRUD routes are for user functionality**

They require authorization by using Bearer and an authorization key in your header when making request.

Post a review
```bash
STEP 1:
POST localhost3000/api/reviews
```
body required
```bash
STEP 2:
{
userId: user id,
gameId: game id,
comment: "this game is good but it's no Battletoads",
rating: 4-- (number 1-5)
}
```
Edit review
```bash
STEP 1:
PUT localhost3000/api/reviews/:review id
```
full body or desired object that is being edited required.
```bash
STEP 2:
{
comment:"on second thought, this game sucks",
rating: 2
}
```
Delete a review.
```bash
DELETE localhost3000/api/games/: review id
```
## Features

- Full functionality through routes and controllers.
- Full authentication.
- Password protection.


## Run Locally

Go to the project directory

```bash
  cd my-project
```
Seed data to MongoDB
```bash
npm run db:seed
```
Start the server

```bash
  npm run dev
```



## Tech Stack

**Database:** MongoDB

**Framework** Mongoose

**Server:** Node, Express

**Dependencies** Morgan, Chalk, CORS, JWT


## Authors

- [Jennifer Bourke](https://github.com/jbourke16)
- [Grace Clower](https://github.com/geclower)
- [Abdul Rehman](https://github.com/arehmanlatif1)
- [Eric Howington](https://github.com/erichowington)

