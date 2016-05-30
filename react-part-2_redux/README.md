# ReactJS Talk. Part 2 redux and react-router

In this talk we see the react-router and redux libraries.

## Installation and execution

Install dependencies
````
npm install

````

Run
````
npm run dev

````

you can access to [http://localhost:3000](http://localhost:3000)


## Ejercicio
El ejercicio consiste en hacer una SPA (Single Page Application) que maneje un CRUD (Create, Read, Update, Delete) de usuarios. Constará de las siguientes pantallas:
- Listado: Mostrará el listado de usuarios. En cada fila de la tabla tendremos las acciones de editar y borrar el usuario.
- Creación: En esta pantalla habrá un formulario donde se podrá crear un usuario. El usuario tendrá Nombre y Trabajo. El primero será un input y el segundo un select. Este select se rellenará a partir de los datos que devuelve la API.
- Edición: En esta pantalla se podrá editar el usuario. La url debe contener la información necesaria para poder ser cargada la pagina de edición si la abre directamente otro usuario


La API RestFul que vais a atacar para realizar el ejercicio esta en: 45.32.235.206:8000
Tiene los siguientes endpoints:
- /api/users (GET) -> Devuelve el listado de usuarios
- /api/users/:id (GET) -> Devuelve el usuario con id el pasado como parámetro. (El id será nuestra clave primaria. Se autoasigna al crear el usuario)
- /api/users (POST) -> Crea un usuario nuevo. Devuelve el usuario creado.
- /api/users/:id (PUT) -> Actualiza el usuario con id el pasado en la url. Devuelve el usuario modificado.
- /api/users/:id (DELETE) -> Borra el usuario con id el pasado en la url . Devuelve el usuario borrado.
- /api/jobs (GET) -> Devuelve el listado de jobs.
