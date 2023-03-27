export interface TreeModel {
    id: string;
    previusId?: string | null;
    name: string;
    tasks: string[];
    treeList: TreeModel[];

}
