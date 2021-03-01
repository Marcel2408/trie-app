# Trie-challenge - Marcel Subirana

Bienvenidos a la Trie-app,

una app donde poder elegir entre los distintos almacenes disponibles en España y reservar los espacios que se requieran.

Para poder iniciar el proyecto hay que seguir los siguientes pasos:

## Preparación

Clona el repositorio:

```bash
$ git clone https://github.com/Marcel2408/tier-app
$ cd tier-app
```

Instala las dependencias:

```bash
$ npm install
```

Crea el archivo ```.env``` :

```bash
$ touch .env
```

Debido a que la app usa el mapa de [Mapbox](https://www.mapbox.com/), deberás acudir a su sitio web para crear un usuario y conseguir un token gratuito.  

Una vez conseguido el token, rellena el archivo ```.env``` con la siguiente info:

```
REACT_APP_MAPBOX_ACCESS_TOKEN=<introduce tu Mapbox token>
```

## Inicia la app

Desde el directorio raíz:

```bash
$ npm start
```

Siendo una CRA, la app se inicia por defecto en el puerto localhost:3000.

## Notas

Stack: React con Hooks y Redux, junto a Sass como preprocesador de CSS.

Para mayor calidad del código, el proyecto usa ESLint junto con el formateador Prettier.

Dependencias relevantes:

[Mapbox-gl](https://www.npmjs.com/package/mapbox-gl) para visualizar el mapa interactivo.

[Redux-logger](https://www.npmjs.com/package/redux-logger) como middleware para un mejor seguimiento de los cambios en el 'state' durante el desarrollo.

[React-router-dom](https://www.npmjs.com/package/react-router-dom) para desarrollar el 'client-side' routing de esta SPA.

[Reselect](https://www.npmjs.com/package/reselect) para mejorar el rendimiento de la app evitando 'rerenderings' innecesarios cuando la parte del 'state' que afecta a un componente no cambia. 

[Commitizen](https://www.npmjs.com/package/commitizen) para mantener una estructura de 'commits' limpia y organizada. 

También destacar que para mejorar la eficiencia y velocidad de la app, pensando en futuras mejoras y escalabilidad, he usado React.lazy() en aquellos componentes que solo deben ser cargados cuando el usuario se dirige a su url, dividiendo así la carga en distintos archivos. Para los tiempos de carga he implantado un 'spinner' para una mejor experiencia de usuario.

## Potenciales mejoras (próximos pasos)

Responsiveness: Adecuar la app a cualquier tipo de dispositivo mediante @media queries. Pensando en este punto, las medidas están implantadas en 'rem', para agilizar el proceso de adaptación con solamente variar la 'font-size' en el selector 'body'.

Popups: Los menús de selección de espacios en el mapa presentan alguna incomodidad a la hora de seleccionar rápidamente la cantidad, puesto que el mapa puede entender que el usuario quiere aumentar el zoom. Una alternativa puede ser hacer aparecer un submenú lateral para la selección de espacios en vez de seleccionar directamente sobre el mapa.

Tests: Realizar unit, integration y E2E tests para asegurar el correcto funcionamiento de cada componente así como la interacción entre ellos.

## Sobre mí

- Marcel Subirana - [Github](https://github.com/marcel2408) - [LinkedIn](https://www.linkedin.com/in/marcel-subirana-campanera/)