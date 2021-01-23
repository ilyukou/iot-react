import Cookies from 'universal-cookie';

import {api} from '../Properties';

const cookies = new Cookies();

export default function setCookie(name,value) {
    if (typeof name !== "string" || typeof value !== "string") {
       throw new Error("Title should be an string");
    }

    cookies.set(name, value, 
            { path: '/' },
            {domain : api},
            { expires: new Date().getTime() + 1000*10});
}
