# ref-nextjs-react-typescript-scss
Reference Architecture using NextJS, React, Typescript, and Generic scss

## What is this?
This is a reference architecture (or accelerator) used to kick off a standard structure when putting react applications into production. Its built in a way that it is easy to swap out technologies, such as bootstrap, and stand up a quick scaffold for your next project.

## Technologies
- React 17.0
- NextJS 11.1
- ExpressJs 14.17
- Bootstrap 4.0
- Font awesome 5.8
- Typescript 4.4
- Scss 1.32

# Getting Started
You can run this locally in three modes:

Debug (next+react)
```
$ npm install
$ npm run dev
```

Production mode (nextjs+express+react)
```
$ npm install
$ npm run build
$ npm run start
```

## Solution Structure
```
├─── 📁public                           > Staticly served assets
│
├─── 📁server                           > Service (ExpressJS)
│    ├─── 📁config                      > All configuration based logic
│    │    └─── 📝swagger.ts             > Swagger config for the expressjs api
│    ├─── 📁controllers                 > Controller abstraction
│    │    ├─── 📝health.ts              > Health endpoint, mainly used for container/app-service health checks
│    │    └─── 📝version.ts             > Version endpoint used to return package.json version
│    └─── 📝index.ts                    > Service entry point
│
├─── 📁src                              > Web Application (React)
│    ├─── 📁assets                      > Assets such as images, styles, fonts, etc
│    │    ├─── 📁fonts                  > Fonts used within the application
│    │    └─── 📁styles                 > Where all the Styles are located
│    │          ├─── 📁bootstrap        > Contains all the scss for bootstrap
│    │          ├─── 📁components       > Styles specific to components, if using css modules
│    │          └─── 📝main.scss        > The main injected scss file, which links all the styles together
│    ├─── 📁components                  > Generic components for web app
│    │    ├─── 📝accordion.tsx          > A sample component for hiding content
│    │    └─── 📝toggle.tsx             > A sample component for toggling values
│    ├─── 📁contexts                    > State contexts for react
│    │    ├─── 📝theme-context.tsx      > A context used to handle dark/light mode
│    │    └─── 📝sample-context.tsx     > A sample context for state management
│    ├─── 📁models                      > Where all of the structured objects are
│    ├─── 📁hooks                       > Where all of the custom hooks are
│    ├─── 📁layout                      > Layout(s) for all pages
│    │    ├─── 📝footer.tsx             > Footer component for all pages
│    │    ├─── 📝header.tsx             > Header component for all pages
│    │    └─── 📝index.tsx              > Main layout applied to all pages
│    ├─── 📁pages                       > Page structure for navigation
│    │    ├─── 📁api                    > NextJS Api Handlers root
│    │    │    └─── 📝sample-auth.tsx   > Sample nextjs api handler used to obfuscate header security
│    │    ├─── 📁home                   > Load payloads via json upload
│    │    │    └─── 📝index.tsx         > This is the actual home page, referenced by ./index
│    │    ├─── 📝index.tsx              > The main page which routes us to ./home/index
│    │    ├─── 📝_app.tsx               > App component wrapped around each page
│    │    ├─── 📝_document.tsx          > Pre-rendered component wrapped around application
│    │    ├─── 📝_error.tsx             > Error handling page
│    │    ├─── 📝404.tsx                > Page not found handler page
│    │    └─── 📝500.tsx                > Server and Client error handler page
│    └─── 📁utilities                   > Utilities to mapping and formatting data
│
├─── 📁storybook                        > Component testing
│
└─── 📁tests                            > Unit and integration testing
```

# Docker Support

## Building the Docker Image
This project uses Docker for deployments outside of your local environment. To create the docker image, navigate to this directory in your console and execute the following...
```
$ npm install
$ npm run build
$ docker build -t cfryerdev/ref-nextjs:2.0.0 -t cfryerdev/ref-nextjs:latest .
```
This will create a docker image with the tag `cfryerdev/ref-nextjs`.

## Running the Docker Image

To create a local container with the name `cfd-refnextjs-dev`, execute the following...
```
$ docker run -p 8080:80 --name cfd-refnextjs-dev cfryerdev/ref-nextjs
```

Then navigate to `http://localhost:80` ... Thats it, enjoy!