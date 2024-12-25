const path = require('path');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js', // Входной файл
	output: {
		filename: 'js/main.js', // Имя выходного файла
		path: path.resolve(__dirname, 'dist'), // Папка для выходного файла
	},
	devServer: {
		hot: true,
		static: {
			directory: './dist',
			watch: true
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|jpg|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'images/',
						},
					},
				],
			},
		]
	},
};
