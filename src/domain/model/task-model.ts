export interface TaskModel {
    id: string;
    previusId?: string;
    fatherId?: string;
    name: string;
    description?: string;
    assignedTo: string[];
    documentation?: string;
    systems: string[];
    createdAt: Date;
    deletedAt?: Date;
}