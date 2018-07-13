'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _generes = require('../../../models/generes');

var _generes2 = _interopRequireDefault(_generes);

var _generes3 = require('../../types/generes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var querySingleGenre = {

    type: _generes3.GenreType,
    args: {
        id: {
            name: 'ID',
            type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var genre = _generes2.default.findById(params.id).exec();
        return genre;
    }
};

exports.default = querySingleGenre;