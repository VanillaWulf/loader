export default class View {
    constructor(rootDiv) {
        this.rootDiv = rootDiv;
    }

    viewInit() {
        this.rootDiv = document.getElementById('root');
    }

    drawLoader() {
        this.rootDiv.innerHTML = `<div class="lds-dual-ring"></div>`;
    }

    drawItems(items) {
        const view = [];
        if (items && items.length) {
            for (let i = 0; i < items.length; i++) {
                view.push(
                    `<div>${items[i].direction && items[i].direction.title ? items[i].direction.title : 'No name'}</div>`
                );
            }
            this.rootDiv.innerHTML = view.join('');
        }
    }
}