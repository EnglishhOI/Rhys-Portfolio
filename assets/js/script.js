
//Mobile Navigation Display / Burger Icon animation
const toggleButton = document.getElementsByClassName('toggleBtn')[0];

toggleButton.addEventListener('click', function() {
    const navbarLinks = document.getElementsByClassName('navbarLinks')[0];
    const bars = document.getElementsByClassName('bar');

    navbarLinks.classList.toggle('active');
    bars[0].classList.toggle('barOneClose');
    bars[1].classList.toggle('barTwoClose');
    bars[2].classList.toggle('barThreeClose');
});

//to Show when scrolled 300 from top

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