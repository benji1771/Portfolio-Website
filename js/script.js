const hamButton = document.querySelector('#hamButton');
const hamburger = document.querySelector('.hamburger');
const navi = document.querySelector('.Navi');
hamButton.addEventListener('click', function(){
    console.log("hello");
    if(hamburger.classList.contains('open')){
        hamburger.classList.remove('open');
        navi.classList.remove('open');
    }else{
        hamburger.classList.add('open');
        navi.classList.add('open');
    }
});

document.querySelectorAll('.Navi-Lists-Ref a').forEach(item => {
    item.addEventListener('click', function(){
        if(hamburger.classList.contains('open')){
            hamburger.classList.remove('open');
            navi.classList.remove('open');
        }else{
            hamburger.classList.add('open');
            navi.classList.add('open');
        }
    })
});