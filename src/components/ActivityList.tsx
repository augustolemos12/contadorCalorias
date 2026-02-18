import { useMemo, type Dispatch } from 'react'
import type { FormData } from '../types'
import { categories } from '../data/categories'
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import type { FormDataActions } from '../reducers/formData-reducer'

type ActivityListProps = {
    activities: FormData[]
    dispatch: Dispatch<FormDataActions>
}

export default function ActivityList({ activities, dispatch }: ActivityListProps) {

    //Esto retorna un array de dos elementos tipo ['', 'Ejercicio'], dependiendo de cual sea la categoría cargada.
    //Aunque esto no está bien, se renderiza. Pareciera que se renderiza la palabra correcta pero en realidad es el arreglo.
    const categoryName = useMemo(
        () => (category: FormData['category']) => categories.map((cat) => cat.id === category ? cat.name : '')
        , [activities])

    const isEmptyActivities = useMemo(() => activities.length === 0, [activities])

    return (
        <>
            <h2 className='text-4xl font-bold text-slate-600 text-center'>Comidas y Actividades</h2>
            {isEmptyActivities
                ? <p className='text-center text-2xl font-bold my-5'>No hay actividades aún...</p>
                : activities.map(activity => (
                    <div key={activity.id} className='px-5 py-10 bg-white mt-5 flex justify-between shadow-lg'>

                        <div className='space-y-2 relative'>
                            {/* Categoría cargada */}
                            <p className={
                                `absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold 
                            ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`
                            }>
                                {categoryName(+activity.category)}
                            </p>
                            {/* Actividad cargada */}
                            <p className='text-2xl font-bold pt-5'>{activity.activity}</p>
                            {/* Calorías cargadas */}
                            <p className='font-black text-4xl text-lime-500'>
                                {activity.calories} {""}
                                <span>Calorías</span>
                            </p>
                        </div>

                        {/* Botón de lápiz para editar */}
                        <div className='flex gap-5 items-center'>
                            <button
                                onClick={() => dispatch({ type: 'set-activity', payload: { id: activity.id } })}
                            >
                                <PencilSquareIcon className='h-8 w-8 text-gray-800' />
                            </button>

                            <button
                                onClick={() => dispatch({ type: 'delete-activity', payload: { id: activity.id } })}
                            >
                                <XCircleIcon className='h-8 w-8 text-red-500' />
                            </button>
                        </div>
                    </div>
                ))}
        </>
    )
}
