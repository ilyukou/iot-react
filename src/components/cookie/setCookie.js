import Cookies from 'universal-cookie';
import {FRONTEND_URL} from "../../../properties";
const cookies = new Cookies();

export default function setCookie(name,value) {
    if (typeof name !== "string" || typeof value !== "string") {
       throw new Error("Title should be an string");
    }

    cookies.set(name, value, 
            { path: '/' },
            {domain : FRONTEND_URL},
            { expires: new Date().getTime() + 1000*10});
}
