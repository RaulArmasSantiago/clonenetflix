'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _delete = require('./delete');

var _delete2 = _interopRequireDefault(_delete);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    addRating: _add2.default,
    deleteRating: _delete2.default,
    updateRating: _update2.default
};