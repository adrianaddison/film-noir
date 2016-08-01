// The base url

module.exports = {

	apiKey: 'cca89170f2ee1d5dfeace49dd90e1ee4',

	base: 'https://api.themoviedb.org/3/',

	url: function (path) {
		return this.base + path + '?api_key=' + this.apiKey;
	},

	imageUrl: function (fileName, width) {
		width = width || 500;

		return 'http://image.tmdb.org/t/p/w' + width + '/' + fileName;
	}
}