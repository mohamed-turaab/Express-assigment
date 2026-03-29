# HTTP Status Codes

`HTTP status code` waa lambar yar oo server-ku kuu soo celiyo markaad request dirto.

Lambarkan wuxuu kuu sheegaa waxa dhacay.

## Kuwa ugu muhiimsan

### 200

Waxay ka dhigan tahay: wax walba waa sax.

Tusaale:
- `GET /users`
- `PUT /users/:id`
- `DELETE /users/:id`

### 201

Waxay ka dhigan tahay: wax cusub ayaa la sameeyay.

Tusaale:
- `POST /users`
- `POST /posts`
- `POST /comments`

### 400

Waxay ka dhigan tahay: request-kaaga qalad baa ku jira.

Tusaale:
- `name` maqan
- `email` maqan

### 404

Waxay ka dhigan tahay: xogta lama helin.

Tusaale:
- user ma jiro
- post ma jiro
- comment ma jiro

### 500

Waxay ka dhigan tahay: server-ka in uu qalad ka jiro.

## Si wanagsan ayan u xafiday

- `200` = waa hagaag
- `201` = wax cusub ayaa la sameeyay
- `400` = request-kaaga qalad baa ku jira
- `404` = xogta lama helin
- `500` = server-ka ayaa qalad ka dhacay
