# ref-nextjs-react-typescript-scss
Reference Architecture using NextJS, React, Typescript, and Generic scss

## Solution Structure
```
├─── public                           > Staticly served assets
├─── server                           > Service (ExpressJS)
│   ├─── config                       > All configuration based logic
│   │   └─── swagger.ts               > Swagger config for the expressjs api
│   ├─── controllers                  > Controller abstraction
│   │   ├─── health.ts                > Health endpoint, mainly used for container/app-service health checks
│   │   └─── version.ts               > Version endpoint used to return package.json version
│   └─── index.ts                     > Service entry point
└─── src                              > Web Application (React)
    ├─── assets                       > Assets such as images, styles, fonts, etc
    │   ├─── fonts                    > Fonts used within the application
    │   └─── styles                   > Where all the Styles are located
    │       └───                      > 
    ├─── components                   > Generic components for web app
    ├─── contexts                     > State contexts for react
    │   └─── sample-context.ts        > A sample context for state management
    ├─── models                       > Where all of the structured objcets are
    ├─── layout                       > Layout(s) for all pages
    ├─── pages                        > Page structure for navigation
    │   ├─── api                      > NextJS Api Handlers root
    │   │   └─── sample-auth.ts       > Sample nextjs api handler used to obfuscate header security
    │   ├─── index                    > The main page which routes us to ./home/index
    │   ├─── home                     > Load payloads via json upload
    │   │   └─── index                > This is the actual home page, referenced by ./index
    │   ├─── _app                     > App component wrapped around each page
    │   ├─── _document                > Pre-rendered component wrapped around application
    │   ├─── _error                   > Error handling page
    │   ├─── 404                      > Page not found handler page
    │   └─── 500                      > Server and Client error handler page
    └─── utilities                    > Utilities to mapping and formatting data
```
