function smoothScroll(target, duration){
    var target = document.querySelector(target);
    //targeted section where need to move
    var targetPosition = target.getBoundingClientRect().top;
    
    //scroll position of the window
    var startPosition = window.pageYOffset;

    //calculate distance
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime){
        if(startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    //easing function which can be found from https://www.gizma.com/easing/ 
    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t*t*t + b;
        t -= 2;
        return -c/2 * (t*t*t*t - 2) + b;
    }

    requestAnimationFrame(animation);
}

var section1 = document.querySelector(".section1");
section1.addEventListener("click", function(){
    smoothScroll(".section2", 1000);
});

var section2 = document.querySelector(".section2");
section1.addEventListener("click", function(){
    smoothScroll(".section1", 1000);
});

