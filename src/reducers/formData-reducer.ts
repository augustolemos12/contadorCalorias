import { type FormData } from "../types"

//Tipamos las acciones que se pueden realizar en el reducer
export type FormDataActions = {
    type: 'save-activity', payload: { newActivity: FormData }
}

//Tipamos la forma del estado global.
type FormDataState = {
    //Es un arreglo porque se guardan varias actividades: [ {Ejercicio-Correr-400} , {Comida-Pasta-500} , etc...]
    activities: FormData[]
}

//Estado inicial. Cuando arranca no hay actividades. El array está vacío.
export const initialState: FormDataState = {
    activities: []
}

//Función reducer
export const formDataReducer = (
    state: FormDataState = initialState, //Ese "=initialState" es un valor por defecto.
    action: FormDataActions
) => {

    if(action.type === 'save-activity'){
        //Este código maneja la lógica para actualizar el state
        console.log("desde el type de save-activity")
    }

    return state;
}