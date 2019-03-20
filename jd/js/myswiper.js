var mySwiper = new Swiper('.swiper-container1', {
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
        effect: "fade",
        autoplay: true,
        loop: true,
        // 表示有分页器，就是那个圆点
        pagination: {
            el: '.pagination1',
        },
    }
)
var mySwiper = new Swiper('.swiper-container2', {
        // 表示有左右箭头
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        effect: "fade",
        autoplay: true,
        loop: true,
        pagination: {
            el: '.pagination2',
        },
    }
)
var mySwiper = new Swiper('.swiper-container3', {
        navigation: {
            nextEl: '.swiper-button-next3',
            prevEl: '.swiper-button-prev3',
        },
        loop:true,
        // 每次显示4条
        slidesPerView: 4,
        // 定义slides的数量多少为一组
        slidesPerGroup:4


    }
)
var mySwiper = new Swiper('.swiper-container4', {
    navigation: {
        nextEl: '.swiper-button-next4',
        prevEl: '.swiper-button-prev4',
    },
        pagination: {
            el: '.pagination4',
        },
    }
)