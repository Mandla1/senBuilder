import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DeterminerSchema = new Schema({
    determiner: {
        type: String,
    }
});