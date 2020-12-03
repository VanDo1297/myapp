export interface IBlogItem{
    title:string,
    image:string,
    content:string,
    own: string,
    date: string
}


export interface IBlog{
    blogs: IBlogItem[],
    loading: boolean,
    errorMessage: any
}