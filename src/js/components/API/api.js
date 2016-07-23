// The base url

module.exports = {

	apiKey: 'cca89170f2ee1d5dfeace49dd90e1ee4',

	base: 'http://api.themoviedb.org/3/',

	searchMovieMode: '/search/movie?query='

	url: function (path) {
		return this.base + this.searchMovieMode + path + '&apikey=' + this.apiKey;
	}

}