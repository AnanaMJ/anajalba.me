const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const {resolve, join} = require("path");

const notFalse = (val) => val !== false;
const nodeEnv = process.env.NODE_ENV.toLowerCase();
const IS_PROD = nodeEnv === "production";
const IS_DEV = nodeEnv === "development";

if (!IS_PROD && !IS_DEV) {
	throw new Error("NODE_ENV was not set to one of production or development (it was '" + nodeEnv + "'")
}

const outputDir = resolve(__dirname, "build", "client");
const entryPoints = resolve(__dirname, "src", "client", "index.tsx");

const babelLoader = {
	loader: "babel-loader",
	options: {
		cacheDirectory: true,
		plugins: [
			"@babel/plugin-syntax-dynamic-import",
		],
		presets: [
			[
				"@babel/preset-env",
				{
					targets: {
						esmodules: true,
					},
					modules: false,
				},
			],
			["@babel/typescript"],
			["@babel/react"],
		],
	},
};

const tsLoader = {
	loader: "ts-loader",
	options: {
		// these override the settings in tsconfig.json
		compilerOptions: {
			module: "esnext",
			target: "es6",
			removeComments: false, // keep for webpackChunkName and similar
		},
	},
};

const terserMinimiser = new TerserWebpackPlugin({
	parallel: true,
	terserOptions: {
		cache: true,
		ecma: 6,
		toplevel: true,
		module: true,
		sourceMap: false,
		compress: {
			drop_console: true,
		},
	},
});

module.exports = {
	mode: IS_PROD ? "production" : "development",
	cache: false,
	target: "web",
	entry: entryPoints,
	output: {
		publicPath: "/",
		path: outputDir,
		filename: IS_PROD ? "[name]~[contenthash].js" : "[name].js",

		// used in development mode only
		hotUpdateMainFilename: "hot-update.[hash:6].json",
		hotUpdateChunkFilename: "hot-update.[hash:6].js",
	},
	node: {
		fs: "empty",
		__filename: true,
		__dirname: true,
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				use: [
					babelLoader,
					tsLoader,
				],
				exclude: /node_modules/,
			},
			{
				test: /\.js(x?)$/,
				use: [
					babelLoader,
				],
				exclude: /node_modules/,
			},
			{
				test: /\.html$/,
				loader: "html-loader",
			},
			{
				test: /\.(s?)css$/,
				include: /node_modules/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(s?)css$/,
				exclude: /node_modules/,
				use: [
					IS_PROD ? MiniCssExtractPlugin.loader : "style-loader",
					{
						loader: "typings-for-css-modules-loader",
						options: {
							camelCase: "only",
							modules: true,
							namedExport: true,
							sourceMap: IS_DEV,
							localIdentName: IS_PROD ? "[hash:base64:5]" : "[name]_[local]_[hash:base64:5]",
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: "file-loader",
			},
		],
	},
	devtool: IS_PROD ? false : "cheap-module-eval-source-map",
	plugins: [
		new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
		new webpack.EnvironmentPlugin(["NODE_ENV"]),
		new HtmlWebpackPlugin({
			template: resolve(__dirname, "src", "client", "index.html"),
			inject: true,
			hash: IS_DEV,
			minify: IS_PROD,
			alwaysWriteToDisk: IS_DEV,
		}),
		IS_PROD && new MiniCssExtractPlugin({
			minimize: true,
			filename: "[name]~[contenthash].css",
		}),
		IS_PROD && new BundleAnalyzerPlugin({
			analyzerMode: "static",
			openAnalyzer: false,
		}),
		IS_DEV && new webpack.HotModuleReplacementPlugin(),
	].filter(notFalse),
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
		modules: ["node_modules", join("src", "client")],
	},
	optimization: {
		minimize: IS_PROD,
		minimizer: IS_PROD ? [terserMinimiser] : [],
		namedModules: IS_DEV,
		splitChunks: {
			chunks: "all",
			maxInitialRequests: Infinity,
			minSize: 0,
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: (m) => "npm." + m.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1].replace("@", ""),
				},
				globalStyles: {
					test: /[\\/]global-styles[\\/]/,
					name: (m) => {
						const res = m.resource || m.issuer.resource;
						return "styles." + res.match(/[\\/]global-styles[\\/](.*?)\.(s?)css/)[1].toLowerCase();
					},
				},
			},
		},
	},
	stats: {
		assetsSort: "!size",
		children: false,
		chunks: false,
		colors: true,
		entrypoints: false,
		modules: false,
	},
};
