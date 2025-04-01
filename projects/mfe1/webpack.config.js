const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe1",
      filename: 'remoteEntry.js',
      exposes: {
        "./Module": "./projects/mfe1/src/app/flights/flights.module.ts",
      },

      shared: {
     
      },
    }),
  ],
};
