import { type FormData } from "../types"

//Tipamos las acciones que se pueden realizar en el reducer
export type FormDataActions =
    { type: 'save-activity', payload: { newActivity: FormData }} |
    { type: 'set-activity', payload : { id: FormData['id'] }}    |
    { type: 'delete-activity', payload: { id: FormData['id'] }}

//Tipamos la forma del estado global.
export type FormDataState = {
    //Es un arreglo porque se guardan varias actividades: [ {Ejercicio-Correr-400} , {Comida-Pasta-500} , etc...]
    activities: FormData[],
    activeId: FormData['id'] //ID de la actividad seleccionada para EDITAR.
}

//Estado inicial. Cuando arranca no hay actividades. El array está vacío.
export const initialState: FormDataState = {
    activities: [],
    activeId: ''
}

//Función reducer
export const formDataReducer = (
    state: FormDataState = initialState, //Ese "=initialState" es un valor por defecto.
    action: FormDataActions
) => {

    if(action.type === 'save-activity'){
        
        let updatedActivities: FormData[] = []
        if(state.activeId){ //Si esa condición es cierta (porque en el activeID hay un valor) es que se ha tocado el botón editar y hay que sobreescribir
            updatedActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity: activity)
        }else{
            //Agrega la nueva actividad al arreglo de actividades. Se crea un nuevo arreglo con las actividades anteriores y la nueva actividad.
            updatedActivities = [...state.activities, action.payload.newActivity]
        }

        return{
            //Spread operator para mantener las actividades anteriores
            ...state,
            activities: updatedActivities,
            activeId: ''
        }
    }

    if(action.type === 'set-activity'){
        return{
            ...state,
            activeId: action.payload.id
        }
    }

    if(action.type === 'delete-activity'){
        return{
            ...state,
            activities: state.activities.filter(activity => activity.id !== action.payload.id)
        }
    }

    return state;
}