jQuery('.expand-counters').appear(function() {
jQuery(document).ready(function(){
jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},1000);
});
});
},{accX: 0, accY: -200});

jQuery('.counterss, .top-wrapper').appear(function() {
jQuery('.count').each(function () {
    jQuery(this).prop('Counter',0).animate({
        Counter: jQuery(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            jQuery(this).text(Math.ceil(now));
        }
    });
});
},{accX: 0, accY: -200});