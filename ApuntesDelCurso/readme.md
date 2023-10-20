# Curso Básico de Tailwind 2 y 3

El proyecto del curso esta construido el TailwindCSS en su version 2. 
Al avanzar con las clases, se comenzaron a producir errores debido a que los comandos que utilizaba la profesora tenían clases, métodos y dependencias deprecadas.
Por este motivo, se utilizara la version 3 de TailwindCSS, apoyándose en los comentarios de los alumnos del curso junto a la [documentación oficial](https://tailwindcss.com/docs/installation).


## Clase 5: Creación del proyecto e instalación de Tailwind
Antes de comenzar, lo primero sera instalar las siguientes extensiones en Visual Studio Code: 
+ Tailwind CSS IntelliSense
+ Live server

1. El primer paso sera crear la carpeta **PlatziTravel** y luego abrir la consola para inicializar el proyecto utilizando npm (de momento dejar todos las opciones en blanco, se rellenaran mas adelante)

`$ npm init -y`

2. Instalar TailwindCSS siguiendo las recomendaciones de su 
Para este proyecto se utilizara el plugin de **Post CSS**, asi que en la consola del proyecto, escribir el comando:

`$ npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

3. Crear un árbol de carpetas y archivos del proyecto. Deberá quedar de la siguiente manera:
>(NOTA: se crearan dos archivos tailwind.css ya que uno sera de input y el otro de output de código)

	* public
		* css
			* *tailwind.css*
		* *index.html*
	* src
		* css
			* *tailwind.css*

4. Habilitar el archivo de configuración de Tailwind utilizando el comando:

`$ npx tailwindcss init`

5. Configurar la ruta de la plantilla por defecto. Dentro del archivo *tailwind.config.js*  se debe agregar la ruta del archivo index junto a un string de como cargar los archivos como aparece en la [documentación oficial](https://tailwindcss.com/docs/installation/using-postcss).
```
content: ["./public/index.html", "./src/**/*.{html,js}"],
```

6. Importar las directivas de Tailwind a la hoja de estilos en src/css/tailwind.css:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. Comenzar con el proceso de build o construcción de ambos archivos tailwind.css. Para esto existen dos opciones.

La primera opción seria escribiendo el siguiente comando en la consola, en donde se debe indicar la ruta del archivo input css donde se definirán los estilos y el archivo output donde posteriormente se enlazaran con el archivo index:
> (NOTA: se tendrá que ejecutar este comando cada vez que se realice un cambio en el archivo input, por lo que se puede activar una función de actualización automática agregando el flag --watch al final):

`$ npx tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css`

La segunda opción seria creando un script propio dentro del archivo *package.json* con el mismo código anterior:
```javascript
"scripts": {
    "dev": "npx tailwindcss -i ./src/css/tailwind.css -o ./public/css/tailwind.css --watch",
  },
```
Luego en la consola solo sera necesario escribir el siguiente código para ejecutar el script:

`$ npm run dev`

8. Crear la plantilla del archivo html en la carpeta public para comenzar a usar Tailwind. Se crea una estructura de html5 y lo mas importante, importar el archivo CSS de la ruta public/css/tailwind.css.
Luego agregar algunas etiquetas con clases de Tailwind.

9. El ultimo paso a realizar es levantar el proyecto utilizando Live Server.


## Clase 6: Directivas de Tailwind

Las directivas son instrucciones que utiliza Tailwind para insertar código en el archivo final de css. 
Las directivas las podemos identificar fácilmente ya que llevan un @ antes del nombre, revisando la documentación de Tailwind nos encontramos con:

+ @tailwind base → Inicializa todos los elementos de nuestro HTML sin estilo.
+ @tailwind components → Nos permite acceder a todas las clases de tailwind.
+ @tailwind utilities → Agrega todas las utilidades al proyecto y nos permite acceder a ellas.

Otras directivas son:
+ @layer → Nos sirve para decirle a Tailwind a qué “bloque de código” pertenece un conjunto de estilos personalizados. Las capas válidas son a base, components and utilities.
+ @apply → Se utiliza para incorporar cualquier clase de utilidad existente en su propio CSS personalizado. Esto es útil cuando se necesita escribir CSS personalizado (como anular los estilos en una biblioteca de terceros) pero aún desea trabajar con sus tokens de diseño y usar la misma sintaxis que está acostumbrado a usar en su HTML.
+ @config → Se utiliza para especificar qué archivo de configuración debe usar Tailwind al compilar ese archivo CSS. Esto es útil para proyectos que necesitan usar diferentes archivos de configuración para diferentes puntos de entrada de CSS.
Podemos generar variantes receptivas de nuestras propias clases envolviendo sus definiciones en la directiva.

Ademas de las directivas, Tailwind posee funciones propias:
+ theme() → Esta función se utiliza para acceder a los valores de configuración de Tailwind mediante la notación de puntos.
+ screen() → Esta función permite crear **media queries** que hacen referencia a los breakpoint por nombre en lugar de duplicar sus valores en su propio CSS.

Para entender mejor este tema, se pueden ver los ejemplos de cada una de las directivas visitando la [documentación oficial](https://tailwindcss.com/docs/functions-and-directives).


## Clase 7: Nueva paleta de colores extendida

Una de las características distintivas de Tailwind es que cuenta con su propio playground [Tailwind Play](https://play.tailwindcss.com/) para probar las clases y estilos CSS y verlos directamente reflejados en linea en tiempo real. 

Tailwind incluye una paleta de colores predeterminada diseñada por expertos lista para usar que es un excelente punto de partida para darle diseños a tus proyectos.
[Documentación oficial](https://tailwindcss.com/docs/customizing-colors)

Por ejemplo, si se quiere crear un div y asignarle un color de fondo, se debe utilizar la clase **bg-(nombre color en ingles)-(numero entre 50 y 950)**. 
No olvidar que se le debe agregar altura y anchura al div para que pueda verse el color.
´´´html
<div class="w-64 h-64 bg-blue-300">
</div>
´´´

Otra ventaja de Tailwind en cuanto al tema de colores, es que se puede crear una paleta de colores personalizados. 
Para esto, dentro del archivo *tailwind.config.js* se crea un objeto con el nombre del color, el nombre de la llave del objeto y el color en exa decimal. 
```javascript
theme: {
    extend: {
		colors: {
			cafe: {
				50: '#fdf8f6',
				100: '#f2e8e5',
				200: '#eaddd7',
				300: '#e0cec7',
				400: '#d2bab0',
				500: '#bfa094',
				600: '#a18072',
				700: '#977669',
				800: '#846358',
				900: '#43302b',
			},
		}
    },
}
```

