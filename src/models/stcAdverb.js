import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AdverbSchema = new Schema({
    adverb: {
        type: String,
    }
});