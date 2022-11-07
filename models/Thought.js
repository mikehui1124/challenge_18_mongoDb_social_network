const { Schema, model } = require('mongoose');
//Import reaction schema
const Reaction = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      unique: true,
      minLength: 1,
      maxLength: 280,
    },  
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
  
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `Count` that count of reactions
thoughtSchema
  .virtual('reactionCount')  
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Application model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;
