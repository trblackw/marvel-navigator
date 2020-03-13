const withCSS = require("@zeit/next-css");
const withImages = require('next-images');
const webpack = require('webpack');
const { parsed: localEnv } = require('dotenv').config();

module.exports = withImages(withCSS({
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
        return config;
    }
}));
