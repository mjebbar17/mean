'use strict';

module.exports = function(Comments, app) {
  
  var comments = require('../controllers/comments')(Comments);

  app.route('/api/comments')
    .post(comments.create);
  app.route('/api/comments/:articleId')
    .get(comments.get);

};