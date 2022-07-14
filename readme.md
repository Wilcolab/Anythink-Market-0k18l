# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

This section explains the initial setup process for getting spinning up this project on a new computer.

0. Clone the repo.
1. Install docker [here](https://docs.docker.com/get-docker/).
2. Verify docker installation by entering `docker -v` and `docker-compose -v` in your terminal.
3. Run `docker-compose up` and once you see the message `Attaching to anythink-backend, anythink-frontend, mongodb` in your terminal go to ` http://localhost:3000/api/ping` for a quick health check on the backend.
4. Register your test user at `http://localhost:3001/register`
