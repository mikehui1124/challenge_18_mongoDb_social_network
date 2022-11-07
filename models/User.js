const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    
    // childs, one-to-many
    thoughts: [
      {
        // 'thought' is the name of collection
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ]
  },
  {    
    // activate virtual field
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `Count` that count of friends
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friends.length;
  })

// Initialize User model
const User = model('user', userSchema);

module.exports = User;
