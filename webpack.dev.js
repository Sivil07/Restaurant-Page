import { merge } from "webpack-merge";
import common from "./webpack.common.js";

/* Only specifies development specific options such as the 
mode, source maps, and the development server */
export default merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/public/template.html"],
    },
})