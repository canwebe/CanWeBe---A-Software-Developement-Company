$(document).ready(function () {
	$(".hero-text-box").waypoint(function (n) {
		"down" == n ? $("nav").addClass("sticky-nav") : $("nav").removeClass("sticky-nav")
	}), $(function () {
		$(".roky").click(function () {
			if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
				var n = $(this.hash);
				if ((n = n.length ? n : $("[name=" + this.hash.slice(1) + "]")).length) return $("html,body").animate({
					scrollTop: n.offset().top - 60
				}, 1e3), !1
			}
		})
	}), $(".js-mobile-res").click(function () {
		var n = $(".js-mobile-res i"),
			a = $(".main-nav");
		n.hasClass("ion-md-menu") ? (n.addClass("ion-md-close"), n.removeClass("ion-md-menu")) : (n.addClass("ion-md-menu"), n.removeClass("ion-md-close")), a.toggleClass("active")
	}), $(".js-main-nav li a").on("click touch", function () {
		$(window).width() < 760 && $(".js-mobile-res").click()
	})
}), $(function () {
	(new WOW).init()
});