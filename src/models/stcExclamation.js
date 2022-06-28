import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ExclamationSchema = new Schema({
    exclamation: {
        type: String,
    }
});