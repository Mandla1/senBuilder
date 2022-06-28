import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ConjuctionSchema = new Schema({
    conjuction: {
        type: String,
    }
});