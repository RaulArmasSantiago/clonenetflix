'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _generes = require('../../../models/generes');

var _generes2 = _interopRequireDefault(_generes);

var _generes3 = require('../../types/generes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllGenres = {

    type: new _graphql.GraphQLList(_generes3.GenreType),
    resolve: function resolve() {
        var genres = _generes2.default.find().exec();
        if (!genres) throw new Error("Error al traer de la BD");
        return genres;
    }
};

exports.default = queryAllGenres;