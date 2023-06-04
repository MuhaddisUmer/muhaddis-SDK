# Lord Ring API SDK
This SDK package can be used to to access Lord of Ring API's

## Installation
```npm i muhaddis-lord-ring-sdk```

## Usage
```const LordRing = require("muhaddis-lord-ring-sdk");```

### 1. Movies
Function to get all movies:
```LordRing.movies.getAll()```

Function to get movie by id:
```LordRing.movies.getById(movieId)```

Function to get quote of a movie by id:
```LordRing.movies.getQuote(movieId)```

### 2. Quotes
Function to get all quotes:
```LordRing.quotes.getAll()```

Function to get quotes by id:
```LordRing.quotes.getById(quoteId)```

## Future Modules
### 1. Books
### 2. Characters