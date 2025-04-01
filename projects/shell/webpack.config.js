const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'my_host',
      remotes: {
      },
    
      shared: {
      },
    
    }),
  ]
};
