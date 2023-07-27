This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Live Demo

You can test this project live on [`Vercel`](https://fulltimeforce-assessment.vercel.app/)

This app fetch Github commit history from a backend built on top of NestJS deployed on [`Adaptable`](https://fulltimeforce-assessment.adaptable.app/repositories).

## Running Locally

If you want to run this project on your machine you must have NodeJS installed.

First clone the backend repo

```bash
git clone https://github.com/shoshincl/fulltimeforce_backend_nest.git
```

Then cd into it and install dependencies.

```bash
npm install --s
```

After that run the server with

```bash
npm run start:dev
```

Once the backend is running clone this repo

```bash
git clone https://github.com/shoshincl/fulltimeforce_frontend_next.git
```

Then cd into the directory and install dependencies.

```bash
npm install --s
```

Finally the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
