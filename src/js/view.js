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
            view.push(`<h1 class="header">Изучайте <span class="blue">актуальные темы</span></h1>`);
            for (let i = 0; i < items.length; i++) {
                view.push(
                    `<div class="item">
                        <div class="item-name">
                            <h2>${items[i].direction && items[i].direction.title ? items[i].direction.title : 'Нет имени('}</h2>
                            <p>${items[i].groups && items[i].groups.length ? items[i].groups.length + this.getCourseNoun(items[i].groups.length): 'Нет курсов'} </p>
                        </div>
                        <input type="checkbox" class="checkbox" name="course" />
                    </div>`
                );
            }
            this.rootDiv.innerHTML = view.join('');
        }
    }

    getCourseNoun(number) {
        const value = Math.abs(number) % 100; 
        const num = value % 10;
        if(value > 10 && value < 20) return ' курсов'; 
        if(num > 1 && num < 5) return ' курса';
        if(num == 1) return ' курс'; 
        return ' курсов';    
    }

}