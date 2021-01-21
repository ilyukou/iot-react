import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function getCookie(name) {
    if (typeof name !== "string") {
        throw new Error("Title should be an string");
     }

    
    return cookies.get(name); 
}