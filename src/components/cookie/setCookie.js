import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function setCookie(name,value) {
    if (typeof name !== "string" || typeof value !== "string") {
       throw new Error("Title should be an string");
    }

    cookies.set(name, value, 
            { path: '/' },
            {domain : "localhost:8080"},
            { expires: new Date().getTime() + 1000*10});
}
