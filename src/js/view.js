export default class View {
    // класс отвечает за отрисвоку
    constructor(rootDiv) {
        this.rootDiv = rootDiv;
    }

    // получаем объект нашего дерева
    viewInit() {
        this.rootDiv = document.getElementById('root');
    }

    // рисуем лоадер
    drawLoader() {
        this.rootDiv.innerHTML = `<div class="lds-dual-ring"></div>`;
    }

    // выводим ошибку
    drawError() {
        this.rootDiv.innerHTML = `<div>Ошибка загрузки</div>`;
    }

    // рисуем див с отсутсвием данных
    drawEmpty() {
        this.rootDiv.innerHTML = `<div>Нет данных</div>`;
    }

    // рисуем пришедшие items
    drawItems(items) {
        const view = [];
        // смотрим есть ли у нас вообще что-то - это доп проверка, вдруг мы будем переиспользовать эту функцию еще где-то
        if (items && items.length) {
            // рисуем загловок
            view.push(`<h1 class="header">Изучайте <span class="blue">актуальные темы</span></h1>`);
            // перебираем массив с items и добавляем по одному в наш массив
            for (let i = 0; i < items.length; i++) {
                // проверяем есть ли у нас имя и группа
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
            //объединяем массив в 1 строчку
            this.rootDiv.innerHTML = view.join('');
        }
    }

    getCourseNoun(number) {
        // вычисляем нужное склонени для слова "курсы", можно универсализировать функцию и вставлять помимо number массив с вариантами слова 
        const value = Math.abs(number) % 100; 
        const num = value % 10;
        if(value > 10 && value < 20) return ' курсов'; 
        if(num > 1 && num < 5) return ' курса';
        if(num == 1) return ' курс'; 
        return ' курсов';    
    }

}