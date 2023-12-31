# Pokedex

[![E2E tests](https://github.com/JySa65/pokedex-web/actions/workflows/cypress.yml/badge.svg?branch=main&event=push)](https://github.com/JySa65/pokedex-web/actions/workflows/cypress.yml)

## Hosted website

[https://pokedex-web-nine.vercel.app/](https://pokedex-web-nine.vercel.app/)

<br />

## Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br />

## Run the production server

```bash
npm run build && npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br />

## Run test e2e

```bash
npm run cy:dev_run
```

## For login
```json
[
  {
    "name": "John Doe",
    "email": "john_doe@gmail.com",
    "password": "123456",
    "isActive": true
  },
  {
    "name": "Jane Doe",
    "email": "jane_doe@gmail.com",
    "password": "123456",
    "phone": "1234567890",
  },
  {
    "name": "Ramon Sanchez",
    "email": "jysa65.dev@gmail.com",
    "password": "123456",
  },
  {
    "name": "Arturo Sanchez",
    "email": "hola@gmail.com",
    "password": "hola1234",
    "isActive": true
  }
]

```


## Technologies Used

- [Next.js](https://nextjs.org/)
- [twin.macro](https://github.com/ben-rogerson/twin.macro)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cypress](https://www.cypress.io/)
- [Pokedex API](https://pokeapi.co/)

