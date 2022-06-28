import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PrepositionSchema = new Schema({
    preposition: {
        type: String,
    }
});