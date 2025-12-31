import { categories } from "../data/categories"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { type FormData } from "../types"

export default function Form(){
    //  Estado para manejar los datos del formulario (uno solo)
    const [formData, setFormData] = useState<FormData>({
        category: 1,
        activity: '',
        calories: 0
    })

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        // Verifica si el campo que se está modificando es de tipo número o no.
        const isNumberField = ['category', 'calories'].includes(e.target.id);
        
        // Actualiza el estado del formulario con los nuevos valores
        setFormData({
            // Spread operator para mantener los valores anteriores
            ...formData,
            // [e.target.id] es el id del elemento HTML que disparó el evento, en este caso id toma los valores "category", "activity" o "calories".
            // [e.target.value] es el valor actual del elemento HTML. Por defecto, los valores de los elementos HTML son cadenas de texto asi que si el campo es de tipo número, se convierte a número.
            [e.target.id]: isNumberField ? Number(e.target.value) : e.target.value
        })
    }

    const isFormValid = () => {
        const {activity, calories} = formData
        // Verifica que la actividad no esté vacía y que las calorías sean mayores a 0
        // trim() elimina los espacios en blanco al inicio y al final de la cadena, asegurando que solo se considere texto significativo. Si el usuario ingresa solo espacios en blanco, se considerará como una cadena vacía.
        return activity.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Evita que la página se recargue al enviar el formulario
        console.log(formData)
    }

    return(
        <>
            <form 
                className="space-y-5 bg-white shadow p-10 rounded-lg" 
                onSubmit={handleSubmit}
            >
                {/* SELECCIÓN DE CATEGORÍAS */}
                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="category" className="font-bold">Categoria:</label>
                    <select 
                        className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                        id="category"
                        //'value' sirve para indicar el valor seleccionado en el select, en este caso se obtiene del estado formData
                        value={formData.category}
                        //maneja los cambios en el select
                        onChange={handleChange} 
                        >
                            {categories.map((category) => (
                                <option
                                    key={category.id}   //Se asigna una key unica por cada option
                                    value={category.id} //Se asigna el id como valor del option 
                                >
                                    {category.name}
                                </option>
                            ))}
                    </select>
                </div>

                {/* SELECCION DE TIPO DE ACTIVIDAD */}
                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="activity" className="font-bold">Actividad: </label>
                    <input 
                        type="text" 
                        id="activity" 
                        className="border border-slate-300 p-2 rounded-lg w-full bg-white" 
                        placeholder="Hamburguesa, Correr, Ensalada, etc"
                        value={formData.activity}
                        onChange={handleChange} //Maneja los cambios en el input
                    />
                </div>
                
                {/* SELECCION DE CANTIDAD DE CALORÍAS */}
                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="calories" className="font-bold">Calorías: </label>
                    <input 
                        type="number" 
                        id="calories" 
                        className="border border-slate-300 p-2 rounded-lg w-full bg-white" 
                        placeholder="500kcal, 1000kcal, etc"
                        value={formData.calories}
                        onChange={handleChange} //Maneja los cambios en el input
                    />
                </div>

                <input 
                    type="submit" 
                    className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-lg disabled:opacity-20 disabled:cursor-not-allowed"
                    // Cambia el texto del botón según la categoría seleccionada
                    value={formData.category === 1 ? 'Agregar comida' : 'Agregar ejercicio'}
                    disabled={!isFormValid()} // Deshabilita el botón si el formulario no es válido. Disabled es un atributo booleano, por lo que si isFormValid() devuelve false, se convierte en true y el botón se deshabilita.

                />
            </form>
        </>
    )
}