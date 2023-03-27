export interface TaskModel {
    id: string;
    previusId?: string;
    fatherId?: string;
    name: string;
    department: string;
    assignedTo: string[];
    documentation?: string;
    systems: string[];
    tasks: string[]
    createdAt: Date;
    deletedAt?: Date;
}