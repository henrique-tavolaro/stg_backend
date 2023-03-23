import { mongoose } from "../../main/services/mongoose"

const TaskSchema = new mongoose.Schema({
    previusId: {
        type: String,
        default: null
    },
    fatherId: {
        type: String,
        default: null
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: null
    },
    assignedTo: {
        type: [String]
    },
    documentation: {
        type: String,
        default: null
    },
    systems: {
        type: [String]
    },
    tasks: {
        type: [String],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: null
    }

})

export const Task = mongoose.model(
    "Task",
    TaskSchema
)