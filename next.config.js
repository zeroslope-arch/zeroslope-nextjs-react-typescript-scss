const isProd = process.env.ENVIRONMENT === "production";
let withImages = require("next-images");

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ENABLE_ANALYZER === 'true',
});

const {
  PORT,
  API_APIM_KEY,
  API_BASE_URL
} = process.env;

let nextConfigurationOptions = {
  publicRuntimeConfig: {
    PORT,
    API_APIM_KEY,
    API_BASE_URL,
  },
  useFileSystemPublicRoutes: isProd ? false : true,
  assetPrefix: isProd ? "" : "",
  inlineImageLimit: 6384,
  generateEtags: false,
  onDemandEntries: {
    maxInactiveAge: 25 * 1000 * 1000,
    pagesBufferLength: 50
  }
};

let exportsObject = withImages(nextConfigurationOptions);
if (!isProd) {
  exportsObject = withBundleAnalyzer(exportsObject);
}

module.exports = exportsObject;
