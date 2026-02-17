//Tipamos las categorías
export type Category = {
    id: number,
    name: string
}

//Tipamos el objeto del state
export type FormData = {
    id: string
    category: number,
    activity: string,
    calories: number
}