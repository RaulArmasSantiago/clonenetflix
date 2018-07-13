'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RateMovieType = exports.MovieInputType = exports.MovieType = undefined;

var _graphql = require('graphql');

var _generes = require('./generes');

var _ratings = require('./ratings');

var _generes2 = require('../../models/generes');

var _generes3 = _interopRequireDefault(_generes2);

var _ratings2 = require('../../models/ratings');

var _ratings3 = _interopRequireDefault(_ratings2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieType = exports.MovieType = new _graphql.GraphQLObjectType({
    name: "Listmovies",
    description: "Peliculas de la BD",
    fields: function fields() {
        return {
            _id: {
                type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
            },
            name: {
                type: _graphql.GraphQLString
            },
            plot: {
                type: _graphql.GraphQLString
            },
            genre: {
                type: _generes.GenreType,
                resolve: function resolve(movie) {
                    var genre = movie.genre;

                    return _generes3.default.findById(genre).exec();
                }
            },
            url: {
                type: _graphql.GraphQLString
            },
            director: {
                type: _graphql.GraphQLString
            },
            year: {
                type: _graphql.GraphQLString
            },
            rate: {
                type: (0, _graphql.GraphQLList)(_graphql.GraphQLFloat)
            },
            raiting: {
                /* Este es para el procesador de pagos */
                type: _ratings.RatingType,
                resolve: function resolve(movie) {
                    var ratin = movie.ratin;

                    return _ratings3.default.findById(rating).exec();
                }
            },
            is_active: {
                type: _graphql.GraphQLBoolean
            },
            upload_at: {
                type: _graphql.GraphQLString
            }
        };
    }
});

var MovieInputType = exports.MovieInputType = new _graphql.GraphQLInputObjectType({

    name: "AddMovies",
    description: "Agrega, modificar peliculas de la BD",
    fields: function fields() {
        return {
            name: {
                type: _graphql.GraphQLString
            },
            plot: {
                type: _graphql.GraphQLString
            },
            genre: {
                type: _graphql.GraphQLString
            },
            url: {
                type: _graphql.GraphQLString
            },
            director: {
                type: _graphql.GraphQLString
            },
            year: {
                type: _graphql.GraphQLString
            },
            raiting: {
                type: _graphql.GraphQLString
            }
        };
    }
});

var RateMovieType = exports.RateMovieType = new _graphql.GraphQLInputObjectType({
    name: "addRate",
    descriptions: "Agrega rate a Movie",
    fields: function fields() {
        return {
            rate: {
                type: _graphql.GraphQLFloat
            }
        };
    }
});