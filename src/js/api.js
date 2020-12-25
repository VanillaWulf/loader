export default class Api {
    makeRequest(requestUrl) {
        return fetch(requestUrl).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then(err => {
                    const e = new Error('ошибка');
                    throw e;
                })
            }
        })
    }
}