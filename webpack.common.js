const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
   
    entry:  "./src/index.js",
   
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
          {
            test: /\.html$/,
            use: [
              {
                loader: "html-loader"
              }
            ]
          },
          {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        }, 
        {
          test: /\.(svg|png|jpg|gif)$/,
          use: {
              loader: "file-loader",
              options:{
                name: "[name].[ext]",
                outputPath: "imgs"
                
              }
          }
          
      },        
        ]
      },
      
      plugins: [
        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        })
      ]
}