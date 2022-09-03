# Frontend Take Home Project

## Prerequisites

You may need to install the following to get started

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js 16.14.0 LTS](https://nodejs.org/dist/v16.14.0/)

## Goal

Create a simple proof of concept frontend app for users to interact with the horses api.

## Requirements

#### Task 1

List existing horses

- The user should be presented with a list of horse names
- The list should only display up to 10 horses at a time

#### Task2

Display details for a horse

- When a user clicks on a horse within the list, they should be presented with all the
  details for that horse
- Fields without a value should show as empty

#### Task 3

Edit a horse

- From within the view of a horse, the user should be able to edit the fields for that
  horse
- The user should not be able to provide an empty name

#### Task 4

Add a horse

- From the list view, the user should be able to press a button to add a horse
- Any new horse should have at least a name field. All other fields are optional
- Once added, the horse should display in the list

#### Task 5

Comparing horses

- From the list, a user should be able to select two horses and bring up their stats side
  by side for comparison

### Api details

`GET /horse`

> Returns an array of all current horses

`GET /horse/{id}`

> Returns the horse with the given id

`PUT /horse`

> Adds a new horse. Returns the new id

`PUT /horse/{id}`

> Updates the horse with the given id. Returns the updated horse

GET endpoint will provide horse stats objects. An example:

```
{
  "id": "5bb04e04-5698-4237-a1c7-d2eb285c5d51",
  "name": "Thunderdash",
  "profile": {
    "favouriteFood": "Hot Chips",
    "physical": {
      "height": 200,
      "weight": 450
    }
  }
}
```

PUT endpoints take the same object, but without the id field:

```
{
  "name": "Thunderdash",
  "profile": {
    "favouriteFood": "Hot Chips",
    "physical": {
      "height": 200,
      "weight": 450
    }
  }
}
```

## Get Started

### Backend

Start the local api

```
docker compose up
# OR
docker-compose up
```

You may access the admin page by http://localhost:3016

### Frontend

#### Install dependencies

```
yarn
```

### Run the frontend

```
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Run the frontend tests

```
yarn test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
