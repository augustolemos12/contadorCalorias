import { categories } from "../data/categories"

export default function Form(){

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
                        >
                            {categories.map((category) => (
                                <option
                                    key={category.id}
                                    value={category.id}
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