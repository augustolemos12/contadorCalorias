# ContadorCalorías

## Descripción

_ContadorCalorías_ es una aplicación diseñada para ayudar a los usuarios a gestionar su ingesta calórica diaria, promoviendo así hábitos alimenticios saludables.

## Formularios y Buenas Prácticas

En este proyecto, los formularios fueron diseñados implementando **buenas prácticas de desarrollo** para garantizar tanto la eficiencia del código como la experiencia del usuario.

### Aspectos destacados:

- **Control de estado:** Los formularios están completamente controlados mediante el uso del hook `useReducer`, lo que permite administrar de forma eficiente la lógica de actualización y validación de datos.
- **Buenas prácticas de desarrollo:**
  - Implementación de reducers puros con acciones descriptivas para garantizar un mantenimiento eficiente.
  - Correcta separación de la lógica empresarial y la presentación para fomentar la reutilización y la claridad del código.

### Archivos clave:

- [`src/components/Form.tsx`](src/components/Form.tsx): Componente principal del formulario.
- [`src/reducers/formData-reducer.ts`](src/reducers/formData-reducer.ts): Archivo que contiene la lógica para el manejo del estado de los formularios.
- [`src/types/index.ts`](src/types/index.ts): Archivo con la definición de los tipos utilizados en los formularios.
