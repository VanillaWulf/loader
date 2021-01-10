// const View = require("./view.js").default;
// module.exports = View;

import Api from "./api";
import View from './view';
import '../scss/style.scss';

// создаем объекты для классов View - рисвование & Api - для запросов
const view = new View();
const api = new Api();

//инициалищируем наш конейнер, в котором будем рисовать
view.viewInit();

async function initItems() {
    try {
        // рисуем крутилку
        view.drawLoader();
        let response = await api.makeRequest('https://gitcdn.link/repo/netology-code/ajs-task/master/netology.json'); 
        console.log(response);
        // если в ответе есть дата, то рисуем 
        if (response && response.data && response.data.length) {
            // setTimeout для того, чтобы посмотреть лоадер
            setTimeout(() => view.drawItems(response.data), 700);
        } else {
            view.drawEmpty();
        }
    }
    catch (err) {
        // рисуем ошибку
        console.log(err);
        view.drawError();
    }
}

initItems();
