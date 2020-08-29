class Slider {

    constructor({
        sliderSelector = ".roundAbout",
        sliderItem = ".roundAbout__item",
        slideStartItem = '.roundAbout__item',
        sliderContainer = ".sliderContainer",
        sliderButtonBox = document.createElement('div'),
        slideLeft = document.createElement('button'),
        slideRight = document.createElement('button'),
        sliderTime = 2000,
        autoPlay = true,
        slideCount = 1

    } = {}) {

        let that = this;

        // addClasslist  and create button box and buttons

        sliderButtonBox.classList.add('roundAbout__buttons');

        slideLeft.classList.add('sliderLeft');
        slideLeft.innerText = '<'

        slideRight.classList.add('sliderRight')
        slideRight.innerText = '>'

        // append button to button box

        sliderButtonBox.append(slideLeft)
        sliderButtonBox.append(slideRight)




        // ---------

        // setSlider item
        this.slideCount = slideCount;
        this.sliderSelector = document.querySelector(sliderSelector);
        this.sliderItem = document.querySelectorAll(`${sliderSelector} div`);
        this.startItem = document.querySelector(slideStartItem);
        // button slider
        this.leftButton = slideLeft;
        this.rightButton = slideRight;
        // slider container
        this.siderContainer = document.querySelector(`${sliderContainer}`);

        // ---------------------------------------

        // clone slider

        // let windoWidthNew = window.innerWidth

        // let empItem = []

        // for (let i = 0; i < this.sliderItem.length; i++) {

        //     let calcSlider = windoWidthNew / this.slideCount;

        //     let itm = this.sliderItem[i];

        //     let cln = itm.cloneNode(true);
        //     cln.style.width = `${calcSlider + 'px'}`

        //     this.sliderSelector.append(cln);

        //     let newData = document.querySelectorAll(`${'.roundAbout'} div`)

        //     empItem.push(newData)

        // }

        // ---------------------------------------------

        // slider button box
        this.sliderButtonBox = sliderButtonBox;
        // autoplay tim
        this.time = sliderTime;
        // autoplay
        this.autoPlay = autoPlay;
        // this slider or my bind function (.Akber Akhmedzadeh.)
        this.that = this;

        // crate buttonBox

        this.siderContainer.append(sliderButtonBox)


        // index slider

        this.index = 0;

        this.indexPrev = 0;


        //  callfunction




        // // clone sliderItem

        // that.cloneSlideItem()

        this.rightButton.onclick = function () {

            that.nextSlider()

        }

        this.leftButton.onclick = function () {

            that.prevSlider()

        }

        // autoplay

        that.autoSlider()


        //slideCount

        that.setItem()

    }




    // cloned slideItems




    // next slider

    nextSlider() {



        let translateElement = this.startItem.clientWidth


        if (this.index != -1) {
            if (this.index < this.sliderItem.length - this.slideCount) {

                this.index++

                this.sliderSelector.style.transform = `translate3d(-${this.index * translateElement}px,0px,0px)`

                if (this.index >= this.sliderItem.length - this.slideCount) {

                    this.index = -1

                }

            }
        }


    }



    // prev slider

    prevSlider() {

        let translateElement = this.startItem.clientWidth

        if (this.index > 0) {
            this.index--;
            this.sliderSelector.style.transform = `translate3d(-${this.index * translateElement}px,0px,0px)`;
        }

        if (this.index == -1) {
            this.index = this.sliderItem.length - this.slideCount
            this.index--
            this.sliderSelector.style.transform = `translate3d(-${this.index * translateElement}px,0px,0px)`;
        }



    }

    // autoplay

    autoSlider() {

        let otherThis = this.that

        if (this.autoPlay == true) {
            setInterval(function () {

                otherThis.nextSlider()

            }, this.time)
        }

    }



    // setSlider item

    setItem() {

        let windoWidth = window.innerWidth

        if (this.slideCount) {

            let calcSlider = windoWidth / this.slideCount;

            for (let i = 0; i < this.sliderItem.length; i++) {

                this.sliderItem[i].style.width = `${calcSlider + 'px'}`
            }

        }


    }




}







