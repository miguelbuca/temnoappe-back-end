export default interface Product{
    id?: number,
    name: string
    photo: string
    description: string
}
export interface Query{
    start?: number,
    length?: number,
    field?: string,
    sort?: string,
    search?: string
}