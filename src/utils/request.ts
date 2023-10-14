export const api = "http://185.77.96.45:8080";
//export const api = "http://localhost:3030";

const toQuery = (query: {[x: string]: string}) => {
    let queryStr = '';
    for (let x in query) {
        queryStr += `${x}=${query[x]}&`
    }
    return '?' + queryStr.slice(0, -1);
}

interface IRequestOptions {
    params?: string,
    body?: string,
    method?: "GET" | "POST";
    query?: {[x: string]: string};
}

export const request = async (route: string, {params = "", body = "", query = {}, method = "GET"}: IRequestOptions) => {
    try {
        const res = await fetch(api + route + params + toQuery(query), {
            method,
            body: method == 'GET' ? null : body,
        });
        return res.json();
    }
    catch (err) {
        throw err;
    }
}