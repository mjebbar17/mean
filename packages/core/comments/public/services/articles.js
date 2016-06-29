'use strict';

//Articles service used for articles REST endpoint
angular.module('mean.comments').factory('Comments', ['$resource',
  function($resource) {
    return $resource('api/comments/',{},{
        get: {
          method: 'GET',
          isArray : true,
          url : 'api/comments/:articleId',
          params : {articleId: '@articleId'}
        }
    }
    );
  }
]);
