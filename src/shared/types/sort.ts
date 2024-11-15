export type SortOrder = 'asc' | 'desc';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}
