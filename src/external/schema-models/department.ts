import { mongoose } from "../../main/services/mongoose"

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
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

export const Department = mongoose.model(
    "Department",
    DepartmentSchema
)