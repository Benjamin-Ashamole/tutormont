const mongoose = require('mongoose');
const User = require('../models/user');

const Schema = mongoose.Schema;

const TokenSchema = new Schema ({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    token: { type: String, required: true },
    createdAt: { type: Date, required: true, default: Date.now, expires: 43200 }
});

const Token = mongoose.model('Token', TokenSchema);
module.exports = Token;
