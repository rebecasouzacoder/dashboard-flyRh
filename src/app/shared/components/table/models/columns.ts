export interface TableModel {
    header: string;
    field: string;
    type?: 'string' | 'date' | 'currency';
    actions?: boolean;
    actionType?: 'edit' | 'delete';
}
