const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const webpack = require("webpack");
const { parsed: localEnv } = require("dotenv").config({ path: './.env.build'});

module.exports = withImages(
  withCSS(
    withFonts({
      webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
        return config;
      },
      env: {
        PRIVATE_MARVEL_API_KEY: process.env.PRIVATE_MARVEL_API_KEY,
        PUBLIC_MARVEL_API_KEY: process.env.PUBLIC_MARVEL_API_KEY
      }
    })
  )
);
