'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./presto.production.min.js');
} else {
  module.exports = require('./presto.development.js');
}
