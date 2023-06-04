require('dotenv').config();

let expect = require('chai').expect;
let { movies, quotes } = require('../index');

let apiKey = '7fAPCX9lgo8OV-mfUAec';
let movieId = '5cd95395de30eff6ebccde56';
let quoteId = '5cd95395de30eff6ebccde56';

describe('Movies', function () {
    it('Get All', function (done) {
        movies.getAll(apiKey).then(response => {
            expect(response['total']).to.be.above(0);
            done();
        }).catch(error => done(new Error(error['data']['message'] || error['data'])));
    });

    it('Get By Id', function (done) {
        movies.getById(movieId, apiKey).then(response => {
            expect(response['total']).to.be.equal(1);
            done();
        }).catch(error => done(new Error(error['data']['message'] || error['data'])));
    });

    it('Get Quote By Id', function (done) {
        movies.getQuote(movieId, apiKey).then(response => {
            expect(response['page']).to.be.equal(1);
            done();
        }).catch(error => done(new Error(error['data']['message'] || error['data'])));
    });
});

describe('Quotes', function () {
    it.only('Get All', function (done) {
        quotes.getAll(apiKey).then(response => {
            expect(response['page']).to.be.equal(1);
            done();
        }).catch(error => done(new Error(error['data']['message'] || error['data'])));
    });

    it('Get By Id', function (done) {
        quotes.getById(quoteId, apiKey).then(response => {
            expect(response['page']).to.be.equal(1);
            done();
        }).catch(error => done(new Error(error['data']['message'] || error['data'])));
    });
});