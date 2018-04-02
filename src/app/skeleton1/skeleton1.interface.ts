/**
 * Interface for data models.
 */
export interface UserData {
    id?: number;
    first_name?: string;
    last_name?: string;
    avatar?: string;
}
export interface Data {
    data?: UserData;
}
export interface UserDetails {
    name?: string;
    job?: string;
    id?: string;
    createdAt?: string;
}

// SystemJS bug:
// TS file must export something real in JS, not just interfaces
export const _dummy = undefined;
