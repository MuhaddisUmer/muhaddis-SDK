# Lord Ring API SDK
This SDK package can be used to to access Lord of Ring API's

## Installation
```npm i muhaddis-lord-ring-sdk```

## Usage
```const LordRing = require("muhaddis-lord-ring-sdk");```

### 1. Movies
Function to get all movies:
```LordRing.movies.getAll(api-key-here)```

Function to get movie by id:
```LordRing.movies.getById(movieId, api-key-here)```

Function to get quote of a movie by id:
```LordRing.movies.getQuote(movieId, api-key-here)```

### 2. Quotes
Function to get all quotes:
```LordRing.quotes.getAll(api-key-here)```

Function to get quotes by id:
```LordRing.quotes.getById(quoteId, api-key-here)```

## Future Modules
### 1. Books
### 2. Characters