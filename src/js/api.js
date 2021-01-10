export default class Api {
    // функция отвечает за отправку запроса, сейчас она для get, если нужно для post, то нужно будет ее проагрейдит и добавить body
    makeRequest(requestUrl) {
        return fetch(requestUrl).then(res => {
            // отправвляем запрос
            if (res.ok) {
                // если приходит ответ без ошибок от сервера, то возвращаем json
                return res.json();
            } else {
                // если ошибка на серве, то пробрасываем ошибку
                return res.json().then(err => {
                    const e = new Error('ошибка');
                    throw e;
                })
            }
        })
    }
}