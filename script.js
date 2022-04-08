    function initCarousel() {
      showNextSlide();
      showPrevSlide();
      setRadioBtnListeners(elRadioBtns);
      selectRB(currentSlideIndex);   
    };

    const elPrevSlideButton = document.querySelector('.btn-left');
    const elNextSlideButton = document.querySelector('.btn-right');
    const elSlider = document.querySelector('.carousel-slide');
    const elWindowImages = document.querySelectorAll('.window');
    const elRadioBtns = document.getElementsByName('radioBtn');
    const stepSize = elWindowImages[0].clientWidth;
    let currentSlideIndex = 0;
    let radioButtonIndex = 0;

    function showNextSlide() {
      isNextSlideExist();
      incCurrentSlideIndex();
      moveSlide(); 
    }

    function showPrevSlide() {
      isPrevSlideExist();
      decrCurrentSlideIndex();
      moveSlide();
    }

    function isNextSlideExist() {
      return currentSlideIndex > 3 ? currentSlideIndex = 3 : null;
    }

    function isPrevSlideExist() {
      return currentSlideIndex < 1 ? currentSlideIndex = 1 : null;
    }

    function incCurrentSlideIndex() {
      return currentSlideIndex++;
    }

    function decrCurrentSlideIndex() {
      return currentSlideIndex--;
    }

    function setAnimation(animationStep) {
      elSlider.classList.add('animation');  
      elSlider.style.transform = `translateX(${-stepSize * animationStep}px)`; 
    }

    function moveSlide() {
      setAnimation(currentSlideIndex);
      radioButtonIndex = currentSlideIndex;
      selectRB(currentSlideIndex);
    }

    function setRadioBtnListeners(elRadioBtns) {
      elRadioBtns.forEach(radioBtn => {
        radioBtn.addEventListener("change", function(event) {
          radioButtonIndex = event.target.value;
          setAnimation(radioButtonIndex);
          currentSlideIndex = radioButtonIndex;
        });
      });
    }

    function selectRB(currentSlideIndex) {
      elRadioBtns.forEach(radioBtn => {
        if (radioBtn.value == currentSlideIndex) {
          radioBtn.checked = true          
        } 
      })
    }

    elNextSlideButton.addEventListener('click', showNextSlide);
    elPrevSlideButton.addEventListener('click', showPrevSlide);


window.addEventListener('load', initCarousel);