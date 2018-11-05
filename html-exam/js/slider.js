(function (global) {
   'use strict';
   //тело функции
    let slider = {
        init: function (id) {
            console.log(this);
            this.elem = document.getElementById(id);
            this.elem.classList.add('slider');
            this.slides = [];
            this.currentIndex = 0;

        },
        add: function (imagePath, text) {
            let image = document.createElement('img'); // <img>
            image.setAttribute('src', imagePath); // <img src="path">
            image.setAttribute('alt', text); // <img src="path" alt="текст">
            this.elem.appendChild(image);
            // <div id="slider"><img src="path" alt="текст"></div>
            this.slides.push(image);

 /*           let a = document.createElement('a');
            a.setAttribute('href', ahref);
            this.elem.appendChild(a);
            this.slides.push(a);

            let h1 = document.createElement('h1');
            h1.setRangeText(h1text);
            this.elem.appendChild(a);
            this.slides.push(a);

            let h2 = document.createElement('h2');
            h2.setRangeText(h2text);
            this.elem.appendChild(a);
            this.slides.push(a);*/

        },

        run: function () {
            //показ следующего слайда

            setInterval(this.nextSlide.bind(this), 2500)
        },
        nextSlide: function () {
            if (this.currentIndex || this.currentIndex === 0) {
                this.slides[this.currentIndex].classList.remove('active');
                this.currentIndex += 1;
            }
            this.currentIndex = this.currentIndex < this.slides.length ?
                this.currentIndex : 0;
            this.slides[this.currentIndex].classList.add('active');
        }
    };


    global.sliderInit = slider.init.bind(slider);
    global.sliderAdd = slider.add.bind(slider);
    global.sliderRun = slider.run.bind(slider);

}(window));