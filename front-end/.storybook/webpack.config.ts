module.exports = ({ config }:any) => {
	config.module.rules.push({
		loader: require.resolve('babel-loader'),
		options: {
			presets: [['react-app', { flow: false, typescript: true }]]
		},
		test: /\.(ts|tsx)$/
	});
	config.resolve.extensions.push('.ts', '.tsx');
	return config;
};

export {};