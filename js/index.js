window.onload = function(){
    const cases = document.getElementsByClassName('cases__item');
    let isActive = false;

    for(let cases__item of cases){
        cases__item.addEventListener('click', () => {
            cases__item.classList.toggle('cases-active');
        });
    }

    // слайдер header

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let activeTextId = 1;

    nextButton.addEventListener('click', () => {
        // activeTextId = 1
        if(activeTextId === 4){
            activeTextId = 1;
        } else {
            activeTextId++;
        }

        //document.getElementById(`text${activeTextId == 1 ? 4 : activeTextId - 1}`).classList.remove('title-active');
        //document.getElementById(`text${activeTextId}`).classList.add('title-active');
        document.getElementById(`text${activeTextId == 1 ? 4 : activeTextId - 1}`).style.opacity = 0;

      
        
        let op = 0;
        while(op <= 1){
            let _op = op + 0.05;
            setTimeout(() => {
                document.getElementById(`text${activeTextId}`).style.opacity = _op;
            }, 60 + _op*200);

            op += 0.1;
        }
        

        document.getElementById(`dot${activeTextId == 1 ? 4 : activeTextId - 1}`).classList.remove('dots-active');
        document.getElementById(`dot${activeTextId}`).classList.add('dots-active');
    });

    prevButton.addEventListener('click', () => {
        if(activeTextId === 1){
            activeTextId = 4;
        } else{
            activeTextId--;
        }

        //document.getElementById(`text${activeTextId == 4 ? 1 : activeTextId + 1}`).classList.remove('title-active');
        //document.getElementById(`text${activeTextId}`).classList.add('title-active');
        document.getElementById(`text${activeTextId == 4 ? 1 : activeTextId + 1}`).style.opacity = 0;

        let op = 0;
        while(op <= 1){
            let _op = op + 0.05;
            setTimeout(() => {
                document.getElementById(`text${activeTextId}`).style.opacity = _op;
            }, 60 + _op*200);
            
            op += 0.1;
        }

        document.getElementById(`dot${activeTextId == 4 ? 1 : activeTextId + 1}`).classList.remove('dots-active');
        document.getElementById(`dot${activeTextId}`).classList.add('dots-active');
    });



    // slider reviews

    const prevReviews = document.getElementById('prev_reviews');
    const nextReviews = document.getElementById('next_reviews');
    let review = 1;
    let count = 1;

    nextReviews.addEventListener('click', () => {
        
        if(review == 3){
            review = 1;
        } else{
            review++;
        }

        document.getElementById(`reviews${review == 1 ? 3 : review - 1}`).classList.remove('reviews-active');
        document.getElementById(`reviews${review}`).classList.add('reviews-active');

        if(count == 4){
            count = 1;
        } else{
            count++;
        }

        document.getElementById(`review-dot${count == 1 ? 4 : count - 1}`).classList.remove('dots-active');
        document.getElementById(`review-dot${count}`).classList.add('dots-active');

    });

    prevReviews.addEventListener('click', () => {

        if(review == 1){
            review = 3;
        } else{
            review--;
        }

        document.getElementById(`reviews${review == 3 ? 1 : review +1}`).classList.remove('reviews-active');
        document.getElementById(`reviews${review}`).classList.add('reviews-active');

        if(count == 1){
            count = 4;
        } else{
            count--;
        }

        document.getElementById(`review-dot${count == 4 ? 1 : count + 1}`).classList.remove('dots-active');
        document.getElementById(`review-dot${count}`).classList.add('dots-active');


    });

    /* slick slider */

    $('.clients__content').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });

    $("#menu__item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1400);
     });

};


            /*
                for(let cases__item of cases){
                    cases__item.addEventListener('click', () => {
                        if(isActive){
                            for(let c1 of cases){
                                c1.classList.remove('class-active');
                            }
                        }
                        isActive = true;
                        cases__item.classList.add('cases-active');
                    

                        if(cases__item.className.indexOf('cases-active') !== -1){
                            cases__item.classList.remove('cases-active');
                        } else {
                            cases__item.classList.add('cases-active');
                        }

                    
                    });
                }
            */

