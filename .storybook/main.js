const path = require('path');

module.exports = {
	core: {
		builder: 'webpack5',
	},
	webpackFinal: async (config) => {
		config.module.rules.push({
			test: /\.(ttf|woff|woff2|otf|svg)$/,
			use: {
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			},
			include: path.resolve(__dirname, '../'),
		});
		config.stats = 'errors-only';
		config.resolve.modules.push('src');

		return config;
	},
	framework: '@storybook/react',
	stories: [
		'../src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
		'../src/**/__stories__/*.stories.@(js|jsx|ts|tsx|mdx)',
		'./**/__stories__/*.stories.@(js|jsx|ts|tsx|mdx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
	],
	staticDirs: ['./public'],
	features: {
		storyStoreV7: false,
	},
};
