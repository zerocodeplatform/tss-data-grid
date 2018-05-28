 export interface DatagridOptions {
    col:any[],
    rows:any[],
    globalFilter:boolean,
    styling: string
}

export class DatagridOptionsClass implements DatagridOptions{

    constructor(public col:any[],public rows:any[],public globalFilter:boolean,public styling:string){

    }
}

