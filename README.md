# Hacker News Interface

### Main page

![main-page](./docs/img/main-page.png?raw=true)

### Single story page

![story-page](./docs/img/single-story-page.png?raw=true)

## Stack

- React
- Redux Toolkit
- React Router

## Building using Docker

This project can be built with Docker.

1. Install Docker on your device.
2. Build image:
   `docker build -t hacker-news:1.0 .`
3. Run containerized app:
   `docker run -p 3000:3000 hacker-news:1.0`

## Building without Docker

You can build the project with Node.js. Node version of the project: 16.17.1.

Install dependencies:
`yarn install`

### Available Scripts

In the project directory, you can run:

1. `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

2. `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
