import Glide from '@glidejs/glide' //TO BE USED LATER
import { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm.js'
import 'materialize-css/dist/js/materialize.min.js'
import { TweenMax, Expo } from 'gsap'






//========= GLOBAL VARIABLES====//
const slider  = document.querySelectorAll('.sliders')
const slideContainer = document.querySelectorAll('.v-courses')
//const briefLayout = document.querySelectorAll('.v-course-brief')
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


if (document.querySelector('main')) {
  
  
//====== Glide Continue ====//
var glide = new Glide('.glide-continue', {
  type: 'carousel',
  perView: 4,
  focusAt: 'center',
  breakpoints: {
    800: {
      perView: 2
    },
    480: {
      perView: 1
    }
  }
})

glide.mount()

//Glide New
var newC = new Glide('#new', {
  type: 'carousel',
  perView: 5,
  focusAt: 'center',
  breakpoints: {
    800: {
      perView: 3
    },
    480: {
      perView: 1
    }
  }
})
newC.mount()

//Glide Trending
var trend = new Glide('#trending', {
  type: 'carousel',
  perView: 5,
  focusAt: 'center',
  breakpoints: {
    800: {
      perView: 3
    },
    480: {
      perView: 1
    }
  }
})
trend.mount()

//Digiatl
var digial = new Glide('#digital', {
  type: 'carousel',
  perView: 5,
  focusAt: 'center',
  breakpoints: {
    800: {
      perView: 3
    },
    480: {
      perView: 1
    }
  }
})
digial.mount()


  const newCourses = document.querySelector('#new')
  const trendingCourses = document.querySelector('#trending')
  const digitalCourses = document.querySelector('#digital')
  
  
  
  //New Courses
   newCourses.querySelectorAll('.show-dictionary__prev').forEach((open) => {
     open.addEventListener('click', (e) => {
       open.closest('.sliders').classList.add('slider-active')
       document.querySelector('.new-brief').classList.add('brief-active')
       //Deactivate
       newCourses.style.pointerEvents = 'none'
     })
   })
  //Trending Courses
  trendingCourses.querySelectorAll('.show-dictionary__prev').forEach((open) => {
    open.addEventListener('click', (e) => {
      open.closest('.sliders').classList.add('slider-active')
      document.querySelector('.trending-brief').classList.add('brief-active')
      //Deactivate
      trendingCourses.style.pointerEvents = 'none'
    })
  })
  //Digital Courses
  digitalCourses.querySelectorAll('.show-dictionary__prev').forEach((open) => {
    open.addEventListener('click', (e) => {
      open.closest('.sliders').classList.add('slider-active')
      document.querySelector('.digital-brief').classList.add('brief-active')
      //Deactivate
      digitalCourses.style.pointerEvents = 'none'
    })
  })
  
  
   
   
  
  //Close Brief
  document.querySelectorAll('.--close-course-preview').forEach((closeBrief) => {
    closeBrief.addEventListener('click', (e) => {
      e.preventDefault()
       document.querySelector('.slider-active').classList.remove('slider-active')
      document.querySelectorAll('.new-brief, .trending-brief, .digital-brief').forEach((el) => {
        el.classList.remove('brief-active')
      })
      newCourses.style.pointerEvents = ''
      trendingCourses.style.pointerEvents = ''
      digitalCourses.style.pointerEvents = ''
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



  


    //Temporary
if (document.querySelector('.v-access')) {
  document.querySelector('.v-access').addEventListener('click', (e) => {
    e.preventDefault()
    location.href = '/dash.html'  
    console.log('...');
    
  })
}



document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.showcase')) {
    TweenMax.from('.showcase', 2, { scale: 3, ease: Expo.easeInOut, backgroundPositionY: 'bottom', delay: 1 })
    TweenMax.from('.showcase-content h1', .5, { opacity: 0, x: -20, delay: 3 })
    TweenMax.from('.showcase-content p', .5, {opacity: 0, x: -20, delay: 3})

  }
})



  


