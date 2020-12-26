// const View = require("./view.js").default;
// module.exports = View;

import Api from "./api";
import View from './view';

const view = new View();
const api = new Api();

view.viewInit();

async function initItems() {
    try {
        view.drawLoader();
        let response = await api.makeRequest('https://gitcdn.link/repo/netology-code/ajs-task/master/netology.json'); console.log(response);
        if (response && response.data && response.data.length) {
            // setTimeout для того, чтобы посмотреть лоадер
            setTimeout(() => view.drawItems(response.data), 1000);
        } else {
            view.drawEmpty();
        }
    }
    catch (err) {
        console.log(err);
        view.drawError();
    }
}

initItems();