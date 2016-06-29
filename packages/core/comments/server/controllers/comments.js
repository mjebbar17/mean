'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Comment = mongoose.model('Comment'),
    config = require('meanio').loadConfig(),
    _ = require('lodash');

module.exports = function() {

    return {
        /**
         * Find article by id
         */
        get: function(req, res) {

            var ObjectId = mongoose.Types.ObjectId;
            var query = {articleId: new ObjectId(req.params.articleId) };

            Comment.find(query).exec(function(err, comments){
                res.json(comments);
            })
        },
        /**
         * Create a comment
         */
        create: function(req, res) {
            var comment = new Comment(req.body);

            comment.save(function(err, doc) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot save the comment'
                    });
                }

                res.json(comment);
            });
        },
    };
}