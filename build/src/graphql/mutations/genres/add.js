'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _generes = require('../../../models/generes');

var _generes2 = _interopRequireDefault(_generes);

var _generes3 = require('../../types/generes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _generes3.GenreType,
    args: {
        data: {
            type: new _graphql.GraphQLNonNull(_generes3.GenreInputType)
        }
    },
    resolve: function resolve(root, params) {
        var genre = new _generes2.default(params.data);
        var newGenre = genre.save();
        if (!newGenre) throw new Error("Error al crear un usuario");
        return newGenre;
    }
};