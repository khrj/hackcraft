export default {
	input: "build/index.js",
	output: {
		file: "build.js",
		format: "cjs",
	},
	onwarn(warning, warn) {
		if (warning.code === "THIS_IS_UNDEFINED") return
		warn(warning)
	},
}
