import type { FormData } from '../types'
import { categories } from '../data/categories'
import { useMemo } from 'react'

type ActivityListProps = {
    activities: FormData[]
}

export default function ActivityList({activities} : ActivityListProps) {
    
    return (
    <>
        <h2 className='text-4xl font-bold text-slate-600 text-center'>Comidas y Actividades</h2>
        {activities.map(activity => (
            <div key={activity.id} className='px-5 py-10 bg-white mt-5 flex justify-between'>
                <div className='space-y-2 relative'>
                    <p>{activity.category}</p>
                    <p className='text-2xl font-bold pt-5'>{activity.activity}</p>
                    <p className='font-black text-4xl text-lime-500'>
                        {activity.calories} {""}
                        <span>Calorías</span>
                    </p>
                </div>

                <div>

                </div>
            </div>
        ))}
    </>
  )
}
