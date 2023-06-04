# Lord Ring API SDK
This SDK package can be used to to access Lord of Ring API's

## Installation
```npm i muhaddis-lord-ring-sdk```

## Usage
```const LordRing = require("muhaddis-lord-ring-sdk");```

### 1. Movies

Run following function to get all movies:
```LordRing.movies.getAll()```

Run following function to get movie by id:
```LordRing.movies.getById(movieId)```

Run following function to get quote of a movie by id:
```LordRing.movies.getQuote(movieId)```

### 2. Quotes

Run following function to get all quotes:
```LordRing.quotes.getAll()```

Run following function to get quotes by id:
```LordRing.quotes.getById(quoteId)```

## Future Modules
### 1. Books
### 2. Characters