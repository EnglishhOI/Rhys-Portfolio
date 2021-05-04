
function toggleBurger() {
    const navbarLinks = document.getElementsByClassName('navbarLinks')[0];
    const bars = document.getElementsByClassName('bar');
    bars[0].classList.toggle('barOneClose');
    bars[1].classList.toggle('barTwoClose');
    bars[2].classList.toggle('barThreeClose');
    navbarLinks.classList.toggle('active');
}


// to Show when scrolled 300 from top

let scroll1 = window.scrollTop = 0;

window.onscroll = function(){
    const bxIcons = document.getElementById('gitIn');
    const navigation = document.getElementById('mainNav');
    let scroll2 = window.pageYOffset;
    
    if(scroll1 > 300) {
        console.log(navigation);
        navigation.classList.add('visable');
        bxIcons.classList.add('scroll');
    } else { 
        navigation.classList.remove('visable');
        bxIcons.classList.remove('scroll');
    }
scroll1 = scroll2
};