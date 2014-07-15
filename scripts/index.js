;
(function ($) {
    $(function () {
        var $sliderListOuterWrappers = $('.js-slider-list-outer-wrapper');


        $sliderListOuterWrappers.each(function (index, el) {

            var $sliderListOuterWrapper = $(el),
                $prev = $sliderListOuterWrapper.find('.js-prev'),
                $next = $sliderListOuterWrapper.find('.js-next'),
                $sliderListInnerWrapper = $sliderListOuterWrapper.find('.js-slider-list-inner-wrapper'),
                $sliderList = $sliderListOuterWrapper.find('.js-slider-list'),
                $sliderItem = $sliderListOuterWrapper.find('.js-slider-item'),
                sliderListInnerWrapperWidth = $sliderListInnerWrapper.width(),
                sliderItemWidth = $sliderItem.eq(0).width(),
                sliderListWidth = sliderItemWidth * $sliderItem.length;

//            console.log('sliderItemWidth:' + sliderItemWidth);
//            console.log('sliderListWidth:' + sliderListWidth);


            $sliderList.width(sliderListWidth);

            $prev.on('click', function (event) {
                event.preventDefault();

                var current = $sliderList.position().left;

                if ((sliderListWidth + current) <= sliderListInnerWrapperWidth) {
                    return;
                }

                $sliderList.animate({
                    'left': current - sliderItemWidth
                }, 500);
            });

            $next.on('click', function (event) {
                event.preventDefault();

                var current = $sliderList.position().left;

                if (current >= 0) {
                    return;
                }

                /* $sliderList.css({
                 'left': current + sliderItemWidth
                 });*/

                $sliderList.animate({
                    'left': current + sliderItemWidth
                }, 500);
            });
        });

    });

    $(function () {
        var $supplierListWrapper = $('.supplier-list-wrapper'),

            supplierListWrapperWidth = $supplierListWrapper.width(),

            $supplierList = $supplierListWrapper.find('.supplier-list'),
            $supplierItem = $supplierListWrapper.find('.supplier-item'),

            supplierItemWidth = $supplierItem.eq(0).width(),
            supplierListWidth = supplierItemWidth * $supplierItem.length;

        $supplierList.width(supplierListWidth);

        function animateLeft(cb) {
            $supplierList.animate({
                'left': (supplierListWrapperWidth - supplierListWidth)
            }, 2000, function () {
                setTimeout(function () {
                    cb();
                }, 200);
            });
        }

        function animateRight(cb) {
            $supplierList.animate({
                'left': (supplierListWidth - supplierListWrapperWidth)
            }, 2000, function () {
                setTimeout(function () {
                    cb();
                }, 200);
            });
        }

        animateLeft(animateRight);

    });
}(jQuery));