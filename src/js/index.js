// const View = require("./view.js").default;
// module.exports = View;

import Api from "./api";
import View from './view';

const view = new View();
const api = new Api();

const items = [];

view.viewInit();
view.drawLoader();

api.makeRequest('https://gitcdn.link/repo/netology-code/ajs-task/master/netology.json')
    .then(response => {
        console.log(response);
        if(response && response.data && response.data.length) {
            setTimeout(() => view.drawItems(response.data), 1500);
        }
    })
    .catch(err => console.log(err));
