const mongoose = require('mongoose');
const reactionSchema = require('./Reaction'); // Import reaction schema

const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => timestamp.toLocaleString() // Format the timestamp
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema] // Array of subdocuments
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Virtual to get the count of reactions
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
