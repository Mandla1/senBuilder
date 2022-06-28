import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const NounSchema = new Schema({
    noun: {
        type: String,
    }
});