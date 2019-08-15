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

let index = 0;
let slideCount = models.length;
let interval;
let settings = {
    duration: '2000',
    random: false
}
init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {

    index--;
    showSlide(index);
    console.log(`Left arrow : ${index}`)

});

document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {


    index++;
    showSlide(index);
    console.log(`Right arrow : ${index}`)

});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings) {
    let prev;
   interval = setInterval(function () {
        if (settings.random) { 
            do{
                index = Math.floor(Math.random() * slideCount)
            }while(index == prev)
            prev = index;
        } else {
            if(slideCount == index + 1){
                index = -1;
            }
        }
        showSlide(index);
        console.log(index);
        index++;
    }, settings.duration)
}

function showSlide(i) {

    index = i;

    if (i < 0) {
        index = slideCount - 1;
    }
    if (i >= slideCount) {
        index = 0;
    }

    document.querySelector('.card-title').innerHTML = models[index].name;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').setAttribute('href', models[index].link);
}