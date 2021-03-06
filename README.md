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
ββββ πpublic                           > Staticly served assets
β
ββββ πserver                           > Service (ExpressJS)
β    ββββ πconfig                      > All configuration based logic
β    β    ββββ πswagger.ts             > Swagger config for the expressjs api
β    ββββ πcontrollers                 > Controller abstraction
β    β    ββββ πhealth.ts              > Health endpoint, mainly used for container/app-service health checks
β    β    ββββ πversion.ts             > Version endpoint used to return package.json version
β    ββββ πindex.ts                    > Service entry point
β
ββββ πsrc                              > Web Application (React)
β    ββββ πassets                      > Assets such as images, styles, fonts, etc
β    β    ββββ πfonts                  > Fonts used within the application
β    β    ββββ πstyles                 > Where all the Styles are located
β    β          ββββ πbootstrap        > Contains all the scss for bootstrap
β    β          ββββ πcomponents       > Styles specific to components, if using css modules
β    β          ββββ πmain.scss        > The main injected scss file, which links all the styles together
β    ββββ πcomponents                  > Generic components for web app
β    β    ββββ πaccordion.tsx          > A sample component for hiding content
β    β    ββββ πtoggle.tsx             > A sample component for toggling values
β    ββββ πcontexts                    > State contexts for react
β    β    ββββ πtheme-context.tsx      > A context used to handle dark/light mode
β    β    ββββ πsample-context.tsx     > A sample context for state management
β    ββββ πmodels                      > Where all of the structured objects are
β    ββββ πhooks                       > Where all of the custom hooks are
β    ββββ πlayout                      > Layout(s) for all pages
β    β    ββββ πfooter.tsx             > Footer component for all pages
β    β    ββββ πheader.tsx             > Header component for all pages
β    β    ββββ πindex.tsx              > Main layout applied to all pages
β    ββββ πpages                       > Page structure for navigation
β    β    ββββ πapi                    > NextJS Api Handlers root
β    β    β    ββββ πsample-auth.tsx   > Sample nextjs api handler used to obfuscate header security
β    β    ββββ πhome                   > Load payloads via json upload
β    β    β    ββββ πindex.tsx         > This is the actual home page, referenced by ./index
β    β    ββββ πindex.tsx              > The main page which routes us to ./home/index
β    β    ββββ π_app.tsx               > App component wrapped around each page
β    β    ββββ π_document.tsx          > Pre-rendered component wrapped around application
β    β    ββββ π_error.tsx             > Error handling page
β    β    ββββ π404.tsx                > Page not found handler page
β    β    ββββ π500.tsx                > Server and Client error handler page
β    ββββ πutilities                   > Utilities to mapping and formatting data
β
ββββ πstorybook                        > Component testing
β
ββββ πtests                            > Unit and integration testing
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