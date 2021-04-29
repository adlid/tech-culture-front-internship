const requestUrl = 'https://jsonplaceholder.typicode.com/posts';
const catSucsess = 'https://http.cat/200';
const catFailure = 'https://http.cat/400';
const form = document.querySelector('.post__inner');
const message = {
        loading: 'img/spinner.svg',
        sucsess: 'your post is published',
        catSucsess,
        catFailure,
        failre: 'Ops, try again'
    }
    /**
     * функция для пагинаций  и отрисовки в ДОМ
     */
let pagination = document.querySelector('.pagination');

function Pagination(obj) {
    const results = document.querySelector('.result');
    let noteS = obj.slice(1, 10)
    console.log(noteS)
    let noteOnPage = 10;
    let countOfItems = Math.ceil(obj.length / noteOnPage)
    for (let i = 1; i <= countOfItems; i++) {
        let li = document.createElement('li');
        li.innerHTML = i;
        pagination.append(li);
    }
    let items = document.querySelectorAll('.pagination li');
    items.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(e.target)
            console.log(e.target.innerHTML)
            let pageNum = e.target.innerHTML
            let start = (pageNum - 1) * countOfItems;
            let end = start + countOfItems;
            let noteS = obj.slice(start, end)
            console.log(noteS)
            results.innerHTML = '';
            noteS.map(elem => {
                const element = document.createElement('div');
                element.classList.add('result__item');
                element.innerHTML = `
                    <div class="result__title" >${elem.title} </div>
                    <div  class="result__text">${elem.body} </div>
                    `;
                results.append(element)
            })
        })
    });
}

/* Здесь Получаем данные из апишшки */
fetch(requestUrl, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json; charset = UTF-8"
        }
    })
    .then(responce => responce.json())
    .then(data => Pagination(data))

/* Здесь lделаем асинхронный */

const postData = async(url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });
    return await res.json();
};

function renderDom(obj) {

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const statusMessage = document.createElement('img');
    statusMessage.src = message.loading;
    statusMessage.classList.add('status');
    form.append(statusMessage);
    const formdata = new FormData(form); // получает данные из эйчтмл
    const json = JSON.stringify(Object.fromEntries(formdata.entries())) // переоброзуем в джос
    postData(requestUrl, json)
        .then(data => {
            console.log(data)
            statusMessage.remove();
            const element = document.createElement('div'),
                thanksmessage = document.createElement('div'),
                results = document.querySelector('.result');
            element.classList.add('result__item');
            element.innerHTML = `
            <div class="result__title" >${data.title} </div>
            <div  class="result__text">${data.text} </div>
            `;
            results.prepend(element)
            thanksmessage.innerHTML = `
            <div class="result__thanks" >  ${message.sucsess} </div>
            <div class="getCat">
            <img src="${message.catSucsess}" alt="">
            </div>
            `
            form.append(thanksmessage);
            setTimeout(() => {
                thanksmessage.remove();
            }, 2000);
        })
        .catch(() => {
            const thanksmessage = document.createElement('div');
            thanksmessage.innerHTML.innerHTML = `
            <div class="result__thanks" >  ${message.sucsess} </div>
            <div class="getCat">
            <img src="${message.catFailure}" alt="">
            </div>
            `
        })
})