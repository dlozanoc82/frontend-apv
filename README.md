# Administración de pacientes de veterinaria (APV) 🐶
APV es una aplicación web que permite a los veterinarios administrar los pacientes de su clínica veterinaria. La aplicación permite listar, crear, editar y eliminar los pacientes de una veterinaria. Además, los veterinarios pueden crear una cuenta, iniciar sesión, recuperar su contraseña y editar su información personal.

El front end de la aplicación está construido con React, Tailwind y vite. Se utiliza Axios para enviar y recibir las peticiones al servidor.

## Usuario de Pruebas
* correo: `correo@correo.com`
* contraseña: password

## Instalación y configuración

1. Clona el repositorio a tu máquina local.
2. Asegúrate de tener Node.js instalado en tu computadora.
3. Abre una terminal en la raíz del proyecto.
4. Ejecuta el siguiente comando para instalar las dependencias:
```bash  
  npm install
```
5. Ve al repositorio del backen y sigue los pasos
<a href="https://github.com/dlozanoc82/backend-apv">Backend APV</a>

6. Después de que se hayan instalado todas las dependencias, cree un archivo .env y agregue las siguientes variables de entorno para acceder al backend (Por defecto, el backend se lanzara de manera local en el puerto 4000): 
```makefile
VITE_BACKEND_URL=http://localhost:4000
```

7. Por ultimo ejecute el siguiente comando para levantar la applicacion:
```bash  
  npm run dev
```

## Funcionalidades
* Inicio de sesión / registro de veterinario.
* Recuperación de contraseña.
* Edición de información personal del veterinario.
* Listado de pacientes registrados.
* Creación de nuevos pacientes.
* Edición de información de pacientes existentes.
* Eliminación de pacientes existentes.

## Contribuir
Si deseas contribuir a APV, sigue los siguientes pasos:

* Crea un fork del repositorio.
* Crea una nueva rama para tu función: git checkout -b feature/feature-name
* Realiza tus cambios y haz commit de los mismos: git commit -am 'Add some feature'
* Empuja tus cambios a la rama: git push origin feature/feature-name
* Envía una solicitud de extracción.
