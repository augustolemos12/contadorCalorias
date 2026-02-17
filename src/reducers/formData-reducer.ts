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
        return{
            //Spread operator para mantener las actividades anteriores
            ...state,
            //Agrega la nueva actividad al arreglo de actividades. Se crea un nuevo arreglo con las actividades anteriores y la nueva actividad.
            activities: [...state.activities, action.payload.newActivity]
        }
    }
    return state;
}