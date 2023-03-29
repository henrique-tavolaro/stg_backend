"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
const mongoose_1 = require("../../main/services/mongoose");
const DepartmentSchema = new mongoose_1.mongoose.Schema({
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
});
exports.Department = mongoose_1.mongoose.model("Department", DepartmentSchema);
