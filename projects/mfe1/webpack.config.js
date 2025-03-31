// const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");

// module.exports = withModuleFederationPlugin({

//   name: 'mfe1',

//   exposes: {
//     './Module': './projects/mfe1/src/app/flights/flights.module.ts',
//   },

//   shared: {
//     ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
//   },

// });

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe1",
      filename: 'remoteEntry.js',
      exposes: {
        "./Module": "./projects/mfe1/src/app/flights/flights.module.ts",
      },

      shared: {
        // ...shareAll({
        //   singleton: true,
        //   strictVersion: true,
        //   requiredVersion: "auto",
        // }),
      },
    }),
  ],
};
