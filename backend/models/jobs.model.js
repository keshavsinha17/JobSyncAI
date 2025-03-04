import mongoose, { Schema } from "mongoose";

const JobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'applied', 'interviewing', 'offered', 'rejected'],
        default: 'pending'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

export const Job = mongoose.model('Job', JobSchema);
