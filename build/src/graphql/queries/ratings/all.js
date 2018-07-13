'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _users = require('../../../models/users');

var _users2 = _interopRequireDefault(_users);

var _ratings = require('../../types/ratings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var queryAllRating = {

    type: new _graphql.GraphQLList(_ratings.RatingType),
    resolve: function resolve() {
        var ratings = _users2.default.find().exec();
        if (!ratings) throw new Error("Error al traer de la BD");
        return ratings;
    }
};

exports.default = queryAllRating;