import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"

export default {
	input: "build/index.js",
	output: {
		file: "build.js",
		format: "iife",
	},
	onwarn(warning, warn) {
		if (warning.code === "THIS_IS_UNDEFINED") return
		warn(warning)
	},
	plugins: [nodeResolve(), commonjs()],
}
