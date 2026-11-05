const config = require("@patternslib/dev/jest.config.js");

config.transformIgnorePatterns = [
    "/node_modules/(?!(?:\\.pnpm/|@patternslib/|@plone/|preact/|screenfull/|leaflet-geosearch/)).+\\.[tj]sx?$",
];

module.exports = config;
