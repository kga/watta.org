const withSass = require("@zeit/next-sass")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = withSass({
    webpack: (config, options) => {
        config.optimization.minimizer = [];
        config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));

        return config;
    },
    cssModules: true,
});
