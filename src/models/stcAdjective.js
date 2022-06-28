import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const AdjectiveSchema = new Schema({
    adjective: {
        type: String,
    }
});