export interface TourItem{
    id: number,
    image: string,
    name: string,
    price:string
}

export interface ITourItem{
    id:string,
    tourName:string,
    image:string,
    prince:string,
    description: string,
    location: string,
    startDate: string,
    endDate:string
}

export interface ITour{
    tours: ITourItem[],
    loading: boolean,
    errorMessage: any,
    tourDetail: ITourItem
}