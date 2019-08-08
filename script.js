let models = [
    {
        name: 'BMW',
        image: 'image/bmw.jpg',
        link: 'https://www.okantoper.com'
    },
    {
        name: 'Honda',
        image: 'image/honda.jpg',
        link: 'https://www.okantoper.com'
    },
    {
        name: 'Mazda',
        image: 'image/mazda.jpg',
        link: 'https://www.okantoper.com'
    },
    {
        name: 'Skoda',
        image: 'image/skoda.jpg',
        link: 'https://www.okantoper.com'
    },
    {
        name: 'Volvo',
        image: 'image/volvo.jpg',
        link: 'https://www.okantoper.com'
    }

]

let index = 2;
document.querySelector('.card-title').innerHTML = models[index].name;
document.querySelector('.card-img-top').setAttribute('src',models[index].image);
document.querySelector('.card-link').setAttribute('href',models[index].link);