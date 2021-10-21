import swaggerJsdoc from "swagger-jsdoc";
import path from "path";
import packageJson from "../../package.json";

const options = {
    explorer: true,
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Ref-NextJS',
        description: 'Reference Architecture using NextJS, React, Typescript, and generic scss',
        version: packageJson.version,
        contact: {
          name: "Chris Fryer",
          url: "http://www.cfryerdev.com/"
        },
      },
    },
    produces: ["application/json"],
    schemes: process.env.ENVIRONMENT === "dev" ? ["http"] : ["http", "https"],
    apis: [
      path.resolve(__dirname, "../controllers/*.ts"),
      path.resolve(__dirname, "../models/*.ts")
    ]
  };

  export default swaggerJsdoc(options);