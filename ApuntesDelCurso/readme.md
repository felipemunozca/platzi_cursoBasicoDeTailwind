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
````html
<div class="w-64 h-64 bg-blue-300">
	
</div>
````

Otra ventaja de Tailwind en cuanto al tema de colores, es que se puede crear una paleta de colores personalizados. 
Para esto, dentro del archivo *tailwind.config.js* se crea un objeto con el nombre del color, el nombre de la llave del objeto y el color en exa decimal. 
```javascript
theme: {
    extend: {
      colors: {
        brown: {
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


## Clase 8: Medidas y Breakpoints

### Width
Tailwind cuenta con sus propias utilidades para establecer el ancho de un elemento.

Por ejemplo: Se pueden utilizar las clases con valores fijos para establecer el ancho de un div.
>(NOTA: la clase w-64 equivale a 16rem o también 256px).
````html
<div class="w-64">
	
</div>
````
Existen otras formas de utilizar width, se recomienda visitar la [documentación oficial](https://tailwindcss.com/docs/width) y hacer pruebas con distintas clases. 

### Height
Al igual que con el width, Tailwind cuenta con sus propias utilidades para establecer el alto de un elemento.

Por ejemplo: Se pueden utilizar las clases con valores fijos para establecer el alto de un article.
>(NOTA: la clase h-10 equivale a 2.5rem o también 40px).
````html
<article class="h-10">
	
</article>
````
Existen otras formas de utilizar height, se recomienda visitar la [documentación oficial](https://tailwindcss.com/docs/height) y hacer pruebas con distintas clases. 

### Breakpoint
Un breakpoint es el salto en el que cambia la pantalla de Layout.

Se puede manipular los estilos del archivo en función al tamaño de pantalla del dispositivo.

Tailwind es un framework pensado en **diseño responsivo** por lo que se pueden crear interfaces de usuario adaptables.
Los breakpoints que maneja Tailwind son:
* sm  →  640px
* md  →  768px
* lg  →  1024px
* xl  →  1280px
* 2xl  →  1536px

Para mayor información, consultar la [documentación oficial](https://tailwindcss.com/docs/responsive-design).


## Clase 9: Flexbox

### Flexbox
Flexbox es un modelo de layout que funciona principalmente respecto a un eje X y un eje Y.

Controlando todo de manera unidimensional, esto se traduce al uso de una fila o columna.

Dentro de Tailwind, al usar la palabra **flex** dentro de una clase, por defecto se ordenara en dirección de fila (row), para cambiar la dirección a columna se debe usar la clase **flex-col**.

Ejemplo: Se crea un div que dentro contendrá 4 div pequeños como si fueran botones, se utiliza el layout de flex, luego se cambia la alineación de los elementos para que estén dentro de una columna, se crea un espacio de 4 en el eje y, se centran.
````html
<div class="w-96 h-96 bg-sky-200 flex flex-col space-y-4 justify-center items-center">
  <div class="w-16 h-16 bg-gray-400"></div>
  <div class="w-16 h-16 bg-gray-400"></div>
  <div class="w-16 h-16 bg-gray-400"></div>
  <div class="w-16 h-16 bg-gray-400"></div>
</div>
````

Más información de Flex en la [documentación oficial](https://tailwindcss.com/docs/flex)

### Grid
Grid es un modelo de layout de que funciona como una cuadricula compuesta de filas y columnas, la cual nos permite dividir nuestra página en áreas o secciones.


## Clase 11: Forms, Typography y Aspect ratio
Tailwind CSS es un framework tan completo que además cuenta con plugins oficiales.

### Forms
Este plugin permite resetear los estilos predeterminados con los que cuentan los formularios, de esta manera es posible sobrescribir los estilos y trabajar con clases de utilidades dentro de Tailwind.

Para conocer mas sobre este tema, consultar la [documentación oficial](https://github.com/tailwindlabs/tailwindcss-forms) y ademas, el siguiente enlace con [ejemplos en vivo](https://tailwindcss-forms.vercel.app/).

### Typography
Con este plugin puedes tener control sobre estilos vanilla con los que cuenta HTML, elementos como headings, paragraphs, listas, entre otros. El plugin de typography agrega una nueva clase llamada **"prose"** que permite dar un mejor formato a estos elementos.

Para conocer mas sobre este tema, consultar la [documentación oficial](https://github.com/tailwindlabs/tailwindcss-typography)

### Aspect ratio
Hace referencia a la relación entre el ancho y el alto de la imagen o video. En muchas ocasiones cuando modificamos las dimensiones de elementos o imágenes podemos llegar a tener problemas con el aspect ratio.

Este plugin llega a resolver el problema integrando la clase **"aspect"** que nos permite establecer un aspect ratio de manera fija para nuestros elementos.

Para conocer mas sobre este tema, consultar la [documentación oficial](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)


## Clase 12: Tailwind como API para la creación de un Design System
Un design system es el archivo donde se definen todos los estilos, tamaños, tipografías y colores que se usarán en el proyecto.

Dentro del archivo *tailwind.config.css* en la sección theme:{}, dentro de extend:{}: se crea una nueva clase llamada backgroundImage:{} y dentro se crearan un nombre para cada llave junto a la ruta de cada imagen que necesitara el proyecto:
```javascript
theme: {
	extend: {
		backgroundImage: {
			'sanFrancisco': "url('../img/sanFrancisco.jpg')",
		}
	},
},
```

Luego de agregar todas las rutas de las imágenes, a continuación personalizando la paleta de colores.
Dentro del mismo archivo, se crea una clase llamada backgroundColor:{} y se declara la propiedad **theme** para poder traer los colores nativos de Tailwind (traer los colores por defecto, por ejemplo primary, y si existe la clase, reemplazarlo con un nuevo color).
Ademas, se declaran nuevas propiedades a las cuales se les asignaran los colores que aparecen en el archivo Figma [TravelPlatzi](https://www.figma.com/file/aPbr2Rhd5SCUjNYu6NRPPB/Platzi-Travel-Mockups?type=design&node-id=0-1&mode=design) que nos paso el equipo de diseño:
```javascript
backgroundColor: theme =>({
	...theme('colors'),
	'principal': '#CC2D4A',
	'secondary': '#8FA206',
	'tertiary': '#61AEC9',
}),
```

Creo una nueva clase llamada textColor para personalizar los colores de los textos, utilizando el mismo patron de colores obtenidos de Figma definidos en el ejercicio anterior:
```javascript
textColor: {
	'principal': '#CC2D4A',
	'secondary': '#8FA206',
	'tertiary': '#61AEC9',
},
```

El ultimo detalle a personalizar, sera la tipografía, para esto se debe acceder a [Google Fonts](https://fonts.google.com/) y buscar **Montserrat**.
Seleccionar la que dice Regular 400, copiar el enlace y pegarlo dentro del archivo *public/index.html* y luego crear una nueva clase llamada fontFamily dentro del archivo de configuración:
```javascript
fontFamily: {
	Montserrat: ["Montserrat", "sans-serif"],
},
```

Finalmente, para terminar con toda la configuración de los estilos personales, se debe realizar un build del código y posteriormente realizar pruebas llamando a las clases:
`$ npm run tw:build`


## Clase 16: Extracción de componentes a clases para nuestra card
La extracción de componentes sirve para no escribir el mismo código en componentes que se utilizarán más de una vez (por ejemplo: cards) y poder mantener el principio de utility-first. La extracción de componentes trabaja de la mano con la directiva **@apply**.

Para hacer la extracción de componentes se hace lo siguiente:

En el archivo *src/css/tailwind.css* se crea una clase cuyo nombre será el adecuado para identificar cierto componente, dentro de la clase se introducirán todos los estilos de Tailwind que se estarán reutilizando haciendo el uso de la directiva **@apply** seguido de las clases de Tailwind.
```javascript
.Card {
	@apply w-48 h-64 shadow-md rounded-lg
}
```

A continuación se puede utilizar el nombre de la nueva clase en nuestro archivo HTML, 
> IMPORTANTE: antes de probar la nueva clase ejecutar el script **tw:build** para que se efectúen los cambios.
````html
<div class="Card">

</div>
````

Si comienzas a usar @apply para todo, básicamente solo estás escribiendo CSS nuevamente y desechando todas las ventajas del flujo de trabajo y mantenimiento que brinda Tailwind, por ejemplo:
* Tienes que pensar en los nombres de las clases todo el tiempo → Nada te quitará la energía como pensar en el nombre de una clase para algo que no merece ser nombrado.
* Tienes que saltar entre varios archivos para hacer cambios. Esto es un asesino del flujo de trabajo mucho más grande de lo que piensas antes de ubicar todo junto.
* Cambiar estilos da más miedo. CSS es global, ¿está seguro de que puedes cambiar el valor de min-width en esa clase sin romper algo en otra parte del sitio?

Si usas @apply, úsalo para cosas muy pequeñas y altamente reutilizables, como botones y formularios, e incluso, solo si no estás usando un framework como React, donde un componente sería una mejor opción.