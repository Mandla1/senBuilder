import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const PronounSchema = new Schema({
    pronoun: {
        type: String,
    }
});