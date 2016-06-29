'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Comment Schema
 */
var CommentSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: false,
    trim: true
  },
  articleId: {
    type: Schema.ObjectId,
    ref: 'Article',
    required: true
  }
});

mongoose.model('Comment', CommentSchema);
