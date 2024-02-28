# Eth-Duties-Dashboard

A dashboard for TobiWo's [eth-duties](https://github.com/TobiWo/eth-duties).

## Run app

Replace `ETH_DUTIES_API` by your eth-duties server and start the dashboard using Docker.

```bash
docker run -p 5001:5001 -e ETH_DUTIES_API="http://your-eth-duties-api:5000" luisnaldo7/eth-duties-dashboard:prod
```

## Getting started for development

### Prerequisites

[node.js](https://nodejs.org/en) >= 20.9.0

[yarn](https://yarnpkg.com/)

[Docker](https://docs.docker.com/manuals/) Engine, Build & Compose

### Run app

Create environment

```bash
cp .env.example .env
```

Install dependencies

```bash
yarn install
```

Start app

```bash
yarn dev
```

### Run in Docker

Build image

```
docker build -f docker/Dockerfile -t luisnaldo7/eth-duties-dashboard:latest .
```

Execute container

```
docker run --network host -p 5001:5001 -e ETH_DUTIES_API="http://localhost:5000" --rm --name eth-duties-dashboard luisnaldo7/eth-duties-dashboard:latest
```
