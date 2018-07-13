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
        id: {
            name: "ID",
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deleteGenre = _generes2.default.findByIdAndRemove(params.id).exec();
        if (!deleteGenre) throw new Error("Error al borrar usuario");
        return deleteGenre;
    }
};