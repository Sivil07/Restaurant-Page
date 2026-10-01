import { merge } from "webpack-merge";
import common from "./webpack.common.js";

/* Only specifies production specific options such as the 
mode, source maps and any build optimizations */
export default merge(common, {
    mode: "production",
    devtool: "source-map",
})