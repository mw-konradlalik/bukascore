export class SaveResult<T> {
    public savedModel: T;
    public errors: Array<string>; 
}

export class RemoveResult {
    public errors: Array<string>;
}