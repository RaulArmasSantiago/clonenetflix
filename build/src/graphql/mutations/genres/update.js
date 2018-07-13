'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
        },
        data: {
            name: "data",
            type: new _graphql.GraphQLNonNull(_generes3.GenreInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _generes2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (genre) {
            return genre;
        }).catch(function (err) {
            throw new Error("Error al hacer update");
        });
    }
};