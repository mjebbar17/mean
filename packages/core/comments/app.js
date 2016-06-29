'use strict';


var Module = require('meanio').Module;

var Comments = new Module('comments');


Comments.register(function(app, auth, database, swagger) {

  Comments.routes(app, auth, database);

  return Comments;
});
