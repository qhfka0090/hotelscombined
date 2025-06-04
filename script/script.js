/* ----------------------------- header ----------------------- */

const toggle = document.querySelector('.toggle_btn')
const gnb = document.querySelector('.gnb');
const bg = document.querySelector('.black_bg');
let toggleState = true;

toggle.addEventListener('click',function(){
    gnb.style.transition = 'all 0.5s ease';
    if( toggleState ){
        gnb.style.left = 0;
        bg.style.display = 'block';
        toggleState = false;
    }else{
        gnb.style.left='-100vw';
        gnb.addEventListener('transitionend',()=>{gnb.style.transition=''},{once:true});
        bg.style.display = 'none';
        toggleState = true;
    }
});

const myTrip = document.querySelector('.my_content');
const myTripContent = document.querySelector('.my_trip');
const myTripClose = document.querySelector('.mytrip_close');
let myTripState = true;

myTrip.addEventListener('click',function(){
    myTripContent.style.transition = 'all 0.5s ease';
    if( myTripState ){
        myTripContent.style.right = 0;
        myTripState = false;
    }else{
        myTripContent.style.right = '-100vw';
        myTripContent.addEventListener('transitionend',()=>{myTripContent.style.transition=''},{once:true});
        myTripState = true;
    }
});

myTripClose.addEventListener('click',function(){
    myTripContent.style.right = '-100vw';
    myTripContent.addEventListener('transitionend',()=>{myTripContent.style.transition=''},{once:true});
    myTripState = true;
})

const login = document.querySelector('.loginBtn');
const loginBox = document.querySelector('.login');
const loginClose = document.querySelector('.login_close')
let loginState = true;

login.addEventListener('click',()=>{
    if( loginState ){
        loginBox.style.right = 0;
        loginState = false;
    }else{
        loginBox.style.right = '-100vw';
        loginBox.addEventListener('transitionend',()=>{loginBox.style.transition=''},{once:true});
        loginState = true;
    }
})

loginClose.addEventListener('click',()=>{
    loginBox.style.right = '-100vw';
    loginBox.addEventListener('transitionend',()=>{loginBox.style.transition=''},{once:true});
    loginState = true;
})

/* ---------------------main content ------------------------------- */

const tabli = document.querySelector('.tabs>li');
const tabA = document.querySelector('.tabs>li>a')

tabA.addEventListener('click',(event)=>{
    event.preventDefault();
});



const room = document.querySelector('.room');
const roomBox = document.querySelector('.room_info');
let roomState = true;

room.addEventListener('click',function(){
    roomBox.style.transition = 'all 0.2s ease';
    if( roomState ){
        roomBox.style.opacity = 1;
        roomState = false;
    }else{
        roomBox.style.opacity = 0;
        roomBox.addEventListener('transitionend',()=>{roomBox.style.transition=''},{once:true});
        roomState = true;
    }
});
roomBox.addEventListener('mouseleave',function(){
    if( !roomState ){
        roomBox.style.opacity = 0;
        roomBox.addEventListener('transitionend',()=>{roomBox.style.transition=''},{once:true});
        roomState = true;
    }
})


const contentBox = document.querySelectorAll('.transportation>ul>li>div');
const tabs = document.querySelectorAll('.transportation>ul>li>a');

tabs.forEach((tab,index)=>{
    tab.addEventListener('click',function(e){
        e.preventDefault();
        tabs.forEach(function(a){
            a.classList.remove('active');
        });
        contentBox.forEach(function(div){
            div.style.display = 'none';
        });
        this.classList.add('active');
        const nextForm = this.nextElementSibling;
        nextForm.style.display = 'block';
    });
});


/* -------------------------------- hot ----------------------------------- */



gsap.fromTo('.ex_bottom>*',
    {
        opacity:0,
        y:300,
    },{
        opacity:1,
        y:0,
        duration:1,
        scrollTrigger:{
            trigger:'.ex_bottom',
            start:'top 100%',
            toggleAction:'play none none reverse',
        }
    }
);

/* -------------------------------domestic ------------------------------------ */

gsap.fromTo('.domestic_bottom>*',
    {
        opacity:0,

    },{
        opacity:1,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:'.domestic_bottom',
            start:'top 70%',
            toggleAction:'play none none reverse',
        }

    }
)

/* ------------------------------- overseas ------------------------------------ */


gsap.fromTo('.over_bottom>*',
    {
        opacity:0,

    },{
        opacity:1,
        duration:1,
        stagger:0.2,
        scrollTrigger:{
            trigger:'.over_bottom',
            start:'top 70%',
            toggleAction:'play none none reverse',
        }

    }
)



/* ------------------------------- banner ------------------------------------ */


const swiper = new Swiper(".swiper", {

    speed: 1000,
    loop: true,
    autoplay: {
      delay: 4000,
    },

  });

 

/* -----------------------------  local_hotal  -------------------------------------- */

/* const tab1 = document.querySelector('#tab1');
const tab2 = document.querySelector('#tab2');
const tab3 = document.querySelector('#tab3');
const tab4 = document.querySelector('#tab4');

const tabSub1 = document.querySelector('#tab_sub1')
const tabSub2 = document.querySelector('#tab_sub2')
const tabSub3 = document.querySelector('#tab_sub3')
const tabSub4 = document.querySelector('#tab_sub4')
const tabState = true;

tab1.addEventListener('click',function(){
    if( tabState ){
        tabSub1.style.display = 'block';
        tabState = false;
    }
})
*/
/*
const tab1 = document.querySelector('#tab1');
const tab2 = document.querySelector('#tab2');
const tab3 = document.querySelector('#tab3');
const tab4 = document.querySelector('#tab4');

const moveTab = document.querySelector('.tab_box>div');

tab1.addEventListener('click',function(){
    moveTab.style.transform = 'translateX(0%)';
})
tab2.addEventListener('click',function(){
    moveTab.style.transform = 'translateX(-25%)';
})
tab3.addEventListener('click',function(){
    moveTab.style.transform = 'translateX(-50%)';
})
tab4.addEventListener('click',function(){
    moveTab.style.transform = 'translateX(-100%)';
})*/



const tabBox = document.querySelector('.tab_box');
const labelBtn = document.querySelectorAll('.tab_btn>label');
const tab1 = document.querySelector('#tab1');
const tab2 = document.querySelector('#tab2');
const tab3 = document.querySelector('#tab3');
const tab4 = document.querySelector('#tab4');

const hotelInfo = document.querySelector('.tab_box');

let currentIndex = 0;

labelBtn.forEach((tab,index)=>{
    tab.addEventListener('click',function(e){
        e.preventDefault();
        labelBtn.forEach(function(label){
            label.classList.remove('checked');           
        });
        this.classList.add('checked');
        console.log(index);
        hotelInfo.style.transition = 'transform 0.4s'
        hotelInfo.style.transform = 'translateX('+index*(-25)+'%)';
            /*
            if( index >= currentIndex ){
                div.style.transform = 'translateX(-100%)';
            }else{
                div.style.transform = 'translateX(100%)';
            }
            */
        
    });
});





/* -----------------------------  sevice  -------------------------------------- */

gsap.fromTo('.service_info>*',
    {
        opacity:0,
        y:200,
    },{
        opacity:1,
        y:0,
        duration:1,
        stagger:0.15,
        scrollTrigger:{
            trigger:'.service_info',
            start:'top 80%',
            toggleAction:'play none none reverse',
        }

    }
)


