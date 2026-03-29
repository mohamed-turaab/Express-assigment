# API-ga CRUD ee Express

Project-tigaan waa API fudud oo lagu dhisay `Express.js`.

API-gu wuxuu isticmaalaa saddex qaybood:

- `users`
- `posts`
- `comments`

Server-ku wuxuu ku shaqaynayaa port `8000`.

## Qaab Dhismeedka project-tigeyga

```text
express-assigment/
|-- src/
|   |-- server.js
|-- package.json
`-- README.md
```

## Waxa Uu Code-kani Sameeyo

Faylka ugu muhiimsan waa [`src/server.js`](./src/server.js).

Gudaha faylkan waxaa ku jira:

- `Express` oo la soo import gareeyay
- app-ka oo lagu sameeyay `express()`
- server-ka oo lagu bilaabay `app.listen(port)`
- xogta `users`, `posts`, iyo `comments` oo lagu kaydiyay arrays
- routes loo sameeyay CRUD dhamaystiran



## Sida Loo run gareeyo projuct-tiga

1. Fur folder-ka mashruuca adigoo adeegsanaya VS Code ama terminal.
2. run command-kan:

```
npm start
```

3. Browser  ka fur:

```text
http://localhost:8000/
http://localhost:8000/users
http://localhost:8000/posts
http://localhost:8000/comments
```

## Route-ka Hore

Markaad furto:

```qoraal
http://localhost:8000/
```

waxaad arki doontaa:

```qoraal
Hello world ,I am  Mr Turaab
```

## Waddooyinka an umaray CRUD

### Isticmaaleyaasha

- `GET /users` -> soo bandhig dhammaan users-ka
- `GET /users/:id` -> soo bandhig hal isticmaale
- `POST /users` -> samee isticmaale cusub
- `PUT /users/:id` -> wax ka beddel isticmaale
- `DELETE /users/:id` -> tirtir isticmaale

### Qoraallada

- `GET /posts` -> soo bandhig dhammaan posts-ka
- `GET /posts/:id` -> soo bandhig hal qoraal
- `POST /posts` -> samee qoraal cusub
- `PUT /posts/:id` -> wax ka beddel qoraal
- `DELETE /posts/:id` -> delete-gareey qoraal

### Faallooyinka

- `GET /comments` -> soo bandhig dhammaan comments-ka
- `GET /comments/:id` -> soo bandhig hal comment
- `POST /comments` -> samee comment cusub
- `PUT /comments/:id` -> wax ka beddel faallo
- `DELETE /comments/:id` -> delete-garee comment

## Tusaalaha Xogta Hore

### Isticmaaleyaasha

API-gu wuxuu ku bilaabmanaya laba user:

- Mohamed Ismail Adan - mohamedturaab1991@gmail.com
- Aisha Abdulkadir Mohamed - cayuushabdulkadir@gmail.com

### Qoraallada

- Qoraalka 1: Mohamed iyo Aisha
  Mohamed iyo Aisha waa laba qof oo is jecel oo jeceyl kooduna  ku dhisan yahay ixtiraam iyo is faham.
- Qoraalka 2: Xiriirkooda
  Jacaylka ka dhexeeya Mohamed iyo Aisha waa mid dagan, qurux badan, isla markaana ay ku jirto kalsooni.

### Faallooyinka

- Faallada 1: waxaan idiin lee yahay anigoo Sharafdiin ah isku barakooba
- Faallada 2: waxaan idiin lee yahay anigoo tood ah gurigina guri qeyr.

## Tusaalaha Xogta La Dirayo

Hoos waxaa ku qoran tusaalooyin xogta aad dirayso markaad wax cusub sameyneyso.

### Samee user cusub

```
{
  "name": "mohamed",
  "email": "mohamedturaab@gmail.com"
}
```

### Samee qoraal cusub

```
{
  "title": "Qoraal cusub",
  "content": "Tani waa faahfaahinta qoraalkayga"
}
```

### Samee comment cusub

```
{
  "postId": 1,
  "message": "Tani waa comment"
}
```

## Browserka Iyo Postman

Waxaad baraawsarka ku tijaabin kartaa kaliya `GET`  sida:

- `http://localhost:8000/users`
- `http://localhost:8000/posts`
- `http://localhost:8000/comments`

Laakiin `POST`, `PUT`, iyo `DELETE` waxaa  lagu tijaabiyo:

- Postman
- Thunder Client
Aniga ahaan waxan ku tijaabiyey postman.
