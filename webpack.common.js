import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

/* Provides everything the development and production configuration files needs.
This includes: the entry (where app starts), the output (where bundles 
need to go), loaders (tools that process files so Webpack can bundle them), 
plugins (tools that perform extra tasks during the build process) 
and path resolutions (absolute file paths) */
export default {
  entry: "./src/public/js/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
