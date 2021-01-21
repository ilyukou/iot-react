import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function removeCookie(name) {
    if (typeof name !== "string") {
        throw new Error("Title should be an string");
    }

    cookies.remove(name);
}
