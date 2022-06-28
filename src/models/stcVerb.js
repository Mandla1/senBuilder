import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const VerbSchema = new Schema({
    verb: {
        type: String,
    }
});