import { categories } from "../data/categories"
import { useState } from "react"

export default function Form(){
    //  Estado para manejar los datos del formulario (uno solo)
    const [formData, setFormData] = useState({
        category: 1,
        activity: '',
        calories: 0
    })

    const handleChange = () => {
        // Lógica para manejar los cambios en los campos del formulario
        console.log("Cambio en el formulario")
    }
    return(
        <>
            <form className="space-y-5 bg-white shadow p-10 rounded-lg">
                {/* Se coloca un div por cada conjunto de ingreso de datos */}
                {/* SELECCIÓN DE CATEGORÍAS */}
                <div className="grid grid-cols-1 gap-3">
                    <label htmlFor="category" className="font-bold">Categoria:</label>
                    <select 
                        className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                        id="category"
                        //Controla el valor del select
                        value={formData.category}
                        onChange={handleChange} //Maneja los cambios en el select
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
                    className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer rounded-lg"
                />
            </form>
        </>
    )
}