let isLogin = false;

const Init = () => {
	if (isLogin) {
		$('.member_box').show()
		$('.guess_box').hide();
	} else {
		$('.member_box').hide()
		$('.guess_box').show();
	}
}


$(document).ready(() => {
	InitCarousel();
	GetGeneratedHeight();
	Init();
});


$('.login-button').click(() => {
	isLogin = true;
	CloseLoginForm()
	Init();
})


const GetGeneratedHeight = () => {
	const GEN_HEIGHT = $('body').height() - $('.ref-height').height() - ($('.mobile-navigation').height() + 20);
	$('.tab-container').height(GEN_HEIGHT);
	$('.list-container').height(GEN_HEIGHT);
}

const InitCarousel = () => {
	// const DEF_WID = $('.header-wrapper').width();
	// $('.owl-carousel').width(DEF_WID)
	$('.owl-carousel').owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		items: 1,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 4000,
	})
}


$('.list-container').on('scroll', function () {

	const CASINO_POS = $('#live-list').height();

	const SLOT_POS = CASINO_POS + $('#slot-list').height();

	const SPORT_POS = SLOT_POS + $('#sport-list').height();

	const MINI_POS = SPORT_POS + $('#minigame-list').height();

	const VIRTUAL_POS = MINI_POS + $('#virtuals-list').height();

	const CURRENT_SCROLL = $(this).scrollTop() + 150;

	if (CURRENT_SCROLL <= VIRTUAL_POS) {
		$('.game-button').removeClass("active");
		$('.virtual-tab').addClass("active");

		if (CURRENT_SCROLL <= MINI_POS) {
			$('.game-button').removeClass("active");
			$('.mini-tab').addClass("active");

			if (CURRENT_SCROLL <= SPORT_POS) {
				$('.game-button').removeClass("active");
				$('.sport-tab').addClass("active");

				if (CURRENT_SCROLL <= SLOT_POS) {
					$('.game-button').removeClass("active");
					$('.slot-tab').addClass("active");

					if (CURRENT_SCROLL <= CASINO_POS) {
						$('.game-button').removeClass("active");
						$('.casino-tab').addClass("active");
					}
				}
			}
		}
	}

});

let onScroll = false;

const DisableAutoScroll = () => {
	if (onScroll) return true;
	onScroll = true;
	setTimeout(() => {
		onScroll = false;
	}, 500)

}

const ScrollToCasino = () => {
	if (DisableAutoScroll()) return
	$('.list-container').animate({
		scrollTop: 0
	}, 500);


}

const ScrollToSlot = () => {
	if (DisableAutoScroll()) return
	$('.list-container').animate({
		scrollTop: $("#live-list").height()
	}, 500);
}

const ScrollToSports = () => {
	if (DisableAutoScroll()) return
	const SPORT_POS = $("#live-list").height() + $("#slot-list").height() + 10;
	$('.list-container').animate({
		scrollTop: SPORT_POS
	}, 500);
}

const ScrollToMiniGame = () => {
	if (DisableAutoScroll()) return
	const MINI_POS = $("#sport-list").height() + $("#live-list").height() + $("#slot-list").height() + 20;
	$('.list-container').animate({
		scrollTop: MINI_POS
	}, 500);
}

const ScrollToVirtual = () => {
	if (DisableAutoScroll()) return
	const VIRTUAL_POS = $("#minigame-list").height() + $("#sport-list").height() + $("#live-list").height() + $("#slot-list").height() + 30;
	$('.list-container').animate({
		scrollTop: VIRTUAL_POS
	}, 500);
}

$('.game-image').click(() => {
	OpenLoginForm()
})

const OpenSideBar = () => {
	$('.overlay').show();
	$('.sidebar').show();
}

const CloseSideBar = () => {
	$('.overlay').hide();
	$('.sidebar').hide();
}


const OpenLoginForm = () => {
	$('.LOGIN_WRAPPER').show();
	CloseSideBar();
}


// $('.nav-child').click(() => {
// 	OpenLoginForm();
// })
const CloseLoginForm = () => $('.LOGIN_WRAPPER').hide();


