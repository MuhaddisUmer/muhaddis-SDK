let {movies, quotes} = require('./index');

// movies.getAll().then(response => console.log(response)).catch(e => console.log(e));
// movies.getById(`5cd95395de30eff6ebccde56`).then(response => console.log(response)).catch(e => console.log(e));
// movies.getQuote(`5cd95395de30eff6ebccde56`).then(response => console.log(response)).catch(e => console.log(e));

quotes.getAll().then(response => console.log(response)).catch(e => console.log(e));