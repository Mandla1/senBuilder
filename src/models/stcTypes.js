import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const TypesSchema = new Schema({
    sentenceType: {
        type: String,
    }
});