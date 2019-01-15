(function () {
    function throttleV1(method, context) {
        clearTimeout(method.tId)
        method.tId = setTimeout(function () {
            method.call(context)
        }, 1000)
    }

    function throttleV2(method, delay) {
        var timer = null
        var that = this
        return function () {
            var context = that, args = arguments
            clearTimeout(timer)
            timer = setTimeout(function () {
                method.call(context)
            }, delay)
        }
    }

    // window.onscroll = function() {
    //     throttleV1(function () {
    //         let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    //         let distance = document.querySelector('#distance')
    //         distance.innerText = scrollTop
    //     }, 1000)
    // }

    window.onscroll = throttleV2(function () {
        let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        let distance = document.querySelector('#distance')
        distance.innerText = scrollTop
    }, 1000)

})()