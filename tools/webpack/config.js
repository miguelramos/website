require('dotenv').config();

const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        GH_TOKEN: JSON.stringify(process.env.GH_TOKEN),
        GL_TOKEN: JSON.stringify(process.env.GL_TOKEN),
        GL_ID: JSON.stringify(process.env.GL_ID)
      }
    })
  ]
}
