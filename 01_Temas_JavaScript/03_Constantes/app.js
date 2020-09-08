// Una constante una vez declarada no puede cambiar, para declarar constantes usamos la palabra reservada const
const urlApi = 'http://www.google.com/api';

console.log(urlApi);

// Al querer cambiar su valor genera un error en consola
// urlApi = 'Adrián González';

// Por convención y buenas prácticas, las constantes se declaran en mayúsculas
// Otro tema importante es que las constantes al ser declaradas se les debe asignar una literal
const URL_API = 'http://www.google.com.mx/api';
const VERSION_API = 'v1';
const LANG = 'ES';
const TOKEN = 'evwrnlhiuecrfhnleiuzxlemiremrhfxz';

function getSongs() {
    const URL = `${URL_API}/${VERSION_API}/get-songs`;

    console.log(URL);
}

getSongs();