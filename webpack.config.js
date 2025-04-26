const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js',
		etnomofagi: './src/js/etnomofagi.js',
		novosti: './src/js/novosti.js',
		contacts: './src/js/contacts.js',
		aboutus: './src/js/aboutus.js'
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};

module.exports = config;
