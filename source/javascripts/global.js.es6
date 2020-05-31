function delay(n) {
    console.log(n);
    
    n = n || 2000;
  
        setTimeout(() => {
            done();
        }, n);
    
}

function pageTransition() {
    var tl = gsap.timeline();
    tl.to(".loading-screen", {
        duration: 1.2,
        width: "100%",
        left: "0%",
        ease: "Expo.easeInOut",
    });

    tl.to(".loading-screen", {
        duration: 1,
        width: "100%",
        left: "100%",
        ease: "Expo.easeInOut",
        delay: 0.3,
    });
    tl.set(".loading-screen", { left: "-100%" });
}

function contentAnimation() {
    var tl = gsap.timeline();
    tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 2.2 });
}

(function () {
    barba.init({
        sync: true,
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
                const done = this.async();

                pageTransition();
                delay(1000);
                done();
            },

            enter(data) {
                console.log('enter');
                contentAnimation();
            },

            once() {
                console.log('once');
                
                contentAnimation();
            }
        }]
    });

    
})();