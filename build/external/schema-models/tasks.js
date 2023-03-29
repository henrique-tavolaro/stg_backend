"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
const mongoose_1 = require("../../main/services/mongoose");
const TaskSchema = new mongoose_1.mongoose.Schema({
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
    department: {
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
    status: {
        type: String,
        default: 'Pendente'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    deletedAt: {
        type: Date,
        default: null
    }
});
exports.Task = mongoose_1.mongoose.model("Task", TaskSchema);
