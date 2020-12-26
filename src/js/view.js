export default class View {
    constructor(rootDiv) {
        this.rootDiv = rootDiv;
    }

    viewInit() {
        this.rootDiv = document.getElementById('root');
    }

    drawLoader() {
        console.log(this.rootDiv);
        this.rootDiv.innerHTML = `<div class="lds-dual-ring"></div>`;
    }

    drawError() {
        this.rootDiv.innerHTML = `<div>Ошибка загрузки</div>`;
    }

    drawEmpty() {
        this.rootDiv.innerHTML = `<div>Нет данных</div>`;
    }


    drawItems(items) {
        const view = [];
        if (items && items.length) {
            for (let i = 0; i < items.length; i++) {
                view.push(
                    `<div>
                        <div>${items[i].direction && items[i].direction.title ? items[i].direction.title : 'No name'}</div>
                        ${items[i].groups && items[i].groups.length ? items[i].groups.length: 'No courses yet'}
                    </div>`
                );
            }
            this.rootDiv.innerHTML = view.join('');
        }
    }
}