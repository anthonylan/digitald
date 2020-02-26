import Glide from '@glidejs/glide' //TO BE USED LATER
import { Controls } from '@glidejs/glide/dist/glide.modular.esm.js'
import 'materialize-css/dist/js/materialize.min.js'
import { TweenMax, Expo } from 'gsap'





//========= GLOBAL VARIABLES====//
const slider  = document.querySelectorAll('.sliders')
const slideContainer = document.querySelector('.v-slider')
const briefLayout = document.querySelector('.v-course-brief')
const searchBar = document.querySelector('.search')
const notificationsBar = document.querySelector('.notifications')
const triggerNotify =  document.querySelector('.--trigger-notify')
const vManiCourse = document.querySelector('.v-in-course')
//Sidebar
const proBar = document.querySelector('.v-course-progress__bar')
const proBParent = document.querySelector('.v-course-sidebar')
const reSize = document.querySelector('.resize-width')
//IVA
const iva = document.querySelector('.main-footer .iva')





//=======Set Animations and Transitions on Mouse Hover
if(slideContainer){
  slider.forEach((slide) => {
    //Transform Contents - Show
    slide.addEventListener('mouseenter', () => {
      slide.querySelector('.top-layer').style.display = 'none'
      slide.querySelector('.bottom-layer').style.display = 'table-cell'
      slide.classList.add('sliders-margin')
      slide.style.transform = 'scale(1.4)'
      //Space Element on Hover
      if(slide.nextElementSibling){
        slide.nextElementSibling.style.marginLeft = '5.5rem'
      }  
      
      if(slide.previousElementSibling){
        slide.previousElementSibling.style.marginLeft = '3.5rem'
        slide.previousElementSibling.style.transform = 'translateX(-3rem)'
        slide.previousElementSibling.style.marginRight = '2.5rem'
      }
      
    })
  //Transform
    slide.addEventListener('mouseleave', () => {
      slide.querySelector('.top-layer').style.display = 'table-cell'
      slide.querySelector('.bottom-layer').style.display = 'none'
      slide.classList.remove('sliders-margin')
     slide.style.transform = ''
  
      //Unspace Element on MouseLeave
      if(slide.nextElementSibling){
        slide.nextElementSibling.style.marginLeft = ''
      }  
    
      if(slide.previousElementSibling){
        slide.previousElementSibling.style.marginLeft = ''
        slide.previousElementSibling.style.marginRight = ''
        slide.previousElementSibling.style.transform = 'translateX(0)'
      }
    })
  
  })

  //===========Reset if hovered on the last child of Slider
  const lastSlide = document.querySelector('.sliders:last-child')
  lastSlide.addEventListener('mouseenter', () => {
    TweenMax.to(slideContainer, .5, {marginRight: 'auto'})
  })
  lastSlide.addEventListener('mouseleave', () => {
    TweenMax.to(slideContainer, .5, {marginRight: ''})
  })



  //============Listen for Click on Arrow Down an Show Course Preview | Add class
document.querySelectorAll('.show-dictionary__prev').forEach((closeBrief) => {
  closeBrief.addEventListener('click', () => {
    briefLayout.classList.add('brief-active')
    TweenMax.from(briefLayout, 1, {opacity: 0})
    slider.forEach((slide) => {
      slide.classList.remove('slider-active')
      slide.style.transform = ''
  })
    closeBrief.closest('.sliders').classList.add('slider-active')
  })
})


//==========Close Course Preview
document.querySelector('.--close-course-preview').addEventListener('click', (e) => {
  e.preventDefault()
  briefLayout.classList.remove('brief-active')

  slider.forEach((slide) => {
      slide.classList.remove('slider-active')
  })
})



//========Add to List Listener / Change Icon on click

document.querySelectorAll('.ui-action-icons i:first-child').forEach((addTLicon) => {
  addTLicon.addEventListener('click', (e) => {

    let icon = e.target
    if(icon.innerHTML == 'add'){
      icon.textContent = 'check'
    } else {
      icon.textContent = 'add'
    }
    
    triggerNotify.classList.add('scale-notify')
    setTimeout(() => {  triggerNotify.classList.remove('scale-notify') }, 500)
  })
})


  //Move Sliders
  let rightButton = document.querySelector('#n-c .right');
  rightButton.onclick = function () {
      let container = document.querySelector('#new');
      sideScroll(container,'right',2,300,10);
  };
  
  let back = document.querySelector('#n-c .left');
  back.onclick = function () {
      let container = document.querySelector('#new');
      sideScroll(container,'left',2,300,10);
  };


//Trending
let tRightButton = document.querySelector('#t-c .right');
  tRightButton.onclick = function () {
      let container = document.querySelector('#trending');
      sideScroll(container,'right',2,300,10);
  };
  
  var tBack = document.querySelector('#t-c .left');
  tBack.onclick = function () {
      let container = document.querySelector('#trending');
      sideScroll(container,'left',2,300,10);
  };


  function sideScroll(element,direction,speed,distance,step){
      var scrollAmount = 0;
      var slideTimer = setInterval(function(){
          if(direction == 'left'){
              element.scrollLeft -= step;
          } else {
              element.scrollLeft += step;
          }
          scrollAmount += step;
          if(scrollAmount >= distance){
              window.clearInterval(slideTimer);
          }
      }, speed);
  }


}

//============Change Nav Background Color on Scroll
  const globalNav = document.querySelector('.--trigger-nav')
  if(globalNav){
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50 || window.pageYOffset > 50){
        globalNav.classList.add('navbar')
      } else {
        globalNav.classList.remove('navbar')
      }
    })
  }

  //=============Show User Prev | Progress | Modify profile
  if(document.querySelector('.--trigger-ui')){

    const triggerUI = document.querySelector('.--trigger-ui')
    const triggerProfile = document.querySelector('.--trigger-profile')
    const UIPrev = document.querySelector('.user-prev')
    const UIProfile = document.querySelector('.modify-profile')
    
   //Show User Profile Preview Bar
    triggerUI.addEventListener('click', (e) => {
      e.preventDefault()
      UIPrev.style.display = 'block'
    })
   
  //Close User Profile Preview Bar
    UIPrev.addEventListener('mouseleave', () => {
      UIPrev.style.display = 'none'
    })


    //============Show User Profile for Editiing
    triggerProfile.addEventListener('click', (e) => {
      e.preventDefault();

      UIProfile.style.display = 'table'
      TweenMax.from('.user-content', .5, {y: '200%', ease: Expo.easeInOut})
    })

    function closeUiProfile() {
      UIProfile.style.display = 'none'
      TweenMax.from('.user-content', .5, {y: '200%', ease: Expo.easeInOut})
    }

    UIProfile.addEventListener('click', (e) => {
      e.preventDefault()
      if(e.target.classList.contains('showcase-content')){
        closeUiProfile()
      }
    })
    document.querySelector('.--close-profile').addEventListener('click', () => {
      closeUiProfile()
    })
  }

  //=======Show Search
if (document.querySelector('.--trigger-search')) {
   document.querySelector('.--trigger-search').addEventListener('click', (e) => {
    if(searchBar.classList.contains('search-active')){
      searchBar.classList.remove('search-active')
      searchBar.style.transform = 'translateY(-200%)'
    } else {
      searchBar.style.transform = 'translateY(0)'
      searchBar.classList.add('search-active')
    }
    e.preventDefault()
  })
}


  //==========Show Notifications Bar
if (triggerNotify) {
  triggerNotify.addEventListener('click', (e) => {
    let that = e.target
    notificationsBar.classList.toggle('notify-active')
    that.classList.toggle('use-tri')
    e.preventDefault()
  })
}
 

  //Set Carousel Track




  //========== ( Start V Main Course Page) | Entrance | Change Backgrond Colors
  if(vManiCourse){


    //======= Change Theme Color  // Light Theme
    const changeTheme = () => {
      document.querySelectorAll('p, .flex-stat h2, .progress-steps, .parent-progress, .question-options').forEach((dark_El) => {
        dark_El.style.color = '#1d1d1d'
      })
      document.querySelectorAll('.v-course-sidebar, .inner-q__wrap').forEach((grey_El) => {
        grey_El.style.backgroundColor = '#D0D3D4'
      })
      document.querySelectorAll('body, .q-extra__content, .v-test, .question-options').forEach((primaryElBg) => {
        primaryElBg.style.backgroundColor = '#fff'
      })
      TweenMax.to(reSize, .3, {backgroundColor: '#1d1d1d', color: '#fff'})
      document.querySelectorAll('.parent-progress').forEach((parentProgressEl__theme) => {
        parentProgressEl__theme.classList.add('par-theme-changed')
      })
    }
    //Dark Theme
    const resetTheme = () => {
      document.querySelectorAll('p, .flex-stat h2, .progress-steps, .parent-progress, .question-options').forEach((light_ElReset) => {
        light_ElReset.style.color = ''
      })
      document.querySelectorAll('.v-course-sidebar, .inner-q__wrap').forEach((grey_El) => {
        grey_El.style.backgroundColor = ''
      })
      document.querySelectorAll('body, .q-extra__content, .v-test, .question-options').forEach((primaryElBg) => {
        primaryElBg.style.backgroundColor = ''
      })
      TweenMax.to(reSize, .3, {backgroundColor: '', color: ''})
      document.querySelectorAll('.parent-progress').forEach((parentProgressEl__theme) => {
        parentProgressEl__theme.classList.remove('par-theme-changed')
      })
    }

 
    //========Move Theme Toggle Icons
    vManiCourse.querySelector('.theme-toggle').addEventListener('click', (e) => {
      let _this = vManiCourse.querySelector('.theme-toggle')
      let themeIC = _this.querySelector('.material-icons')

      //Toggle Element Colors
      if(themeIC.innerHTML == 'brightness_2'){
        themeIC.innerHTML = 'wb_sunny'
        themeIC.classList.add('theme-icon')
         TweenMax.to(themeIC, .2, {x: -2})
        _this.style.backgroundColor = '#1D1D1D'
        changeTheme()

        
      } else {
        themeIC.innerHTML = 'brightness_2'
        themeIC.classList.remove('theme-icon')
        TweenMax.to(themeIC, .3, {x: 40})
        _this.style.backgroundColor = '#ffffff'
        resetTheme()
      }
    })

    //============= Full Page Toggler

    reSize.addEventListener('click', (e) => {
      let elI = e.target
      let sidebarBg = getComputedStyle(proBParent, null).getPropertyValue('background-color')

      if(elI.innerHTML == 'chevron_left'){
        document.querySelectorAll('.v-course-main__content, .q-wrapper, .q-extra__content, .v-course-stats').forEach((el) => {
          TweenMax.to(el, .3, {x: '-100px'})
        })
        TweenMax.to('.v-course-sidebar', .3, {marginLeft: '-180px'})
        TweenMax.to(proBar, .3, {x: '190px'})
        TweenMax.to('.v-in-course__header', .3, {marginLeft: '100px'})
        proBParent.classList.add('disable-cursor')
        elI.textContent = 'chevron_right'
        TweenMax.to(reSize, .3, {marginLeft: '-12rem'})
        TweenMax.fromTo('.progress-overlay', .2,{ display: 'none', opacity: 0}, { display: 'block', opacity: 1, delay: .2})
        vManiCourse.querySelectorAll('.inner-q__wrap').forEach((innerQ) => {
          innerQ.classList.add('q-wrap-add')
        })
        if(sidebarBg == 'rgb(208, 211, 212)'){
          TweenMax.to('.theme-toggle', .3, {x: '198px', backgroundColor: 'transparent'})
        } else {
          TweenMax.to('.theme-toggle', .3, {x: '150px', backgroundColor: 'transparent'})
        }
      } else {
        document.querySelectorAll('.v-course-main__content, .q-wrapper, .q-extra__content, .v-course-stats').forEach((el) => {
          TweenMax.to(el, .3, {x: '0px'})
        })
        TweenMax.to('.v-in-course__header', .3, {marginLeft: '250px'})
        TweenMax.to('.v-course-sidebar', .3, {marginLeft: '0px'})
        TweenMax.to(proBar, .3, {x: '0px'})
        TweenMax.to('.theme-toggle', .3, {x: '0px', backgroundColor: ''})
        proBParent.classList.remove('disable-cursor')
        elI.textContent = 'chevron_left'
        TweenMax.to(reSize, .3, {marginLeft: '0rem'})
        TweenMax.fromTo('.progress-overlay', .2,{ display: 'block', opacity: 1}, { display: 'none', opacity: 0})
        vManiCourse.querySelectorAll('.inner-q__wrap').forEach((innerQ) => {
         setTimeout(() => { innerQ.classList.remove('q-wrap-add') }, 500) 
        })
      }

      //Change Progress Overlay Helper Color // And other Elements

      if(sidebarBg == 'rgb(208, 211, 212)'){
        TweenMax.to('.progress-overlay', .2, {backgroundColor: '#D0D3D4'})
        vManiCourse.querySelectorAll('.inner-q__wrap').forEach((innerQ) => {
          innerQ.classList.add('q-wrap-color')
        })
      } else {
        TweenMax.to('.progress-overlay', .2, {backgroundColor: '#2d2d2d'})
        vManiCourse.querySelectorAll('.inner-q__wrap').forEach((innerQ) => {
          innerQ.classList.remove('q-wrap-color')
        })
      }
      
      
    })

  }

  //=========Questions
  const vQuestion = document.querySelector('.v-test')

  if(vQuestion){
    

    vQuestion.querySelectorAll('.v-questions').forEach((question) => {
      const rightChoice = question.querySelector('.right-choice')
      const wrongChoice = question.querySelector('.wrong-choice')
      question.querySelectorAll('.question-options').forEach((options) => {
        options.addEventListener('click', () => {
          const briefAnswer = question.querySelector('.brief-answer')
          const qExtraContent = question.querySelector('.q-extra__content')
          TweenMax.to(briefAnswer, .5, {height: 'auto'})
          TweenMax.to(qExtraContent, .5, {height: 'auto'})
          options.classList.add('color-choice')
  
          if(options.classList.contains('right-choice')){
            options.classList.add('right-option__select')
          } else {
            options.classList.add('wrong-option__select')
            rightChoice.classList.add('right-option__select')
            rightChoice.style.borderColor = '#fff'
          }
  
          let altOptions = question.querySelectorAll('.question-options')
          for(let i = 0; i < altOptions.length; i++){
            altOptions[i].classList.add('all-choice-disable')          
          }
        })
      })
    })

   

  }

  //Progress on Courses // Steps //Hide and Show Children
  const ProgessBar = document.querySelector('.v-course-progress__bar')

  if(ProgessBar){

    ProgessBar.querySelectorAll('.progress-wrap').forEach((progressWrap) => {
      progressWrap.querySelectorAll('.parent-progress').forEach((parentProgress) => {
        parentProgress.addEventListener('click', (e) => {
          
          let ulList = progressWrap.querySelector('ul')

          if(ulList.classList.contains('hide-list')){
            parentProgress.classList.add('par-selected')
            TweenMax.fromTo(ulList, .5, {display: 'none', opacity: 0}, {display: 'block', opacity: 1})
            ulList.classList.remove('hide-list')
            
          } else {
            parentProgress.classList.remove('par-selected')
            TweenMax.fromTo(ulList, .1, {display: 'block', opacity: 1}, {display: 'none', opacity: 0})
            ulList.classList.add('hide-list')
          }

          
          
        })
        
      })
    
    })
  }



  //=========== End V Main Course ==========//


  //===MAIN FOOTER ====//
if (iva) {
  iva.innerHTML = 'p.iva 01657489233'
}
  

if (document.querySelector('.next-slide')) {
    //====== PROGRESS PAGE ====   CAROUSEL ====// 
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems);
   
  
      const activeCarousel = document.querySelector('.carousel .active')
  
    
  
  
      document.querySelector('.prev-slide').addEventListener('click', () => {
        var el = document.querySelector('.carousel');
        var i = M.Carousel.getInstance(el);
        i.prev();
      })
  
      //Next Slider
      document.querySelector('.next-slide').addEventListener('click', () => {
        var el = document.querySelector('.carousel');
        var i = M.Carousel.getInstance(el);
        i.next();
  
      })
  
     
      
      const uaTop = document.querySelector('.side-achivement__bar .top')
      const uaBottom = document.querySelector('.side-achivement__bar .bottom')
      const statisticBar = document.querySelector('.statictics')
      const achievements = document.querySelector('.achivements')
  
      uaTop.addEventListener('click', () => {
        TweenMax.from(statisticBar, .3, { y: '9%' })
        if (uaBottom.classList.contains('bar-active')) {
          uaBottom.classList.remove('bar-active')
          uaTop.classList.add('bar-active')
          statisticBar.style.opacity = '0'
          achievements.style.opacity = '1'
        } else {
          uaTop.classList.remove('bar-active')
          uaBottom.classList.add('bar-active')
          statisticBar.style.opacity = '1'
          achievements.style.opacity = '0'
        }
      })
      
      uaBottom.addEventListener('click', () => {
        TweenMax.from(statisticBar, .3, { y: '9%' })
        if (uaTop.classList.contains('bar-active')) {
          uaTop.classList.remove('bar-active')
          uaBottom.classList.add('bar-active')
          statisticBar.style.opacity = '1'
          achievements.style.opacity = '0'
        } else {
          uaBottom.classList.remove('bar-active')
          uaTop.classList.add('bar-active')
          statisticBar.style.opacity = '0'
          achievements.style.opacity = '1'
        }
       
      })
      
    });
}



  


    //Temp
if (document.querySelector('.v-access')) {
  document.querySelector('.v-access').addEventListener('click', (e) => {
    e.preventDefault()
    location.href = '/dash.html'  
    console.log('..');
    
  })
}


  


