import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import external from "rollup-plugin-peer-deps-external";

export default [
	{
		input: "./src/index.ts",
		output: [
			{
				file: "./lib/index.js",
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			typescript({
				tsconfigOverride: ["**/__tests__", "**/*.test.ts"],
				useTsconfigDeclarationDir: true,
			}),
			external(),
			resolve(),
			commonjs(),
			terser(),
		],
	},
];
