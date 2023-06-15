let acc = "1.quan.1983.vn";
let bool = true;
let sec = "";
let token;

let text = "https://market.pomaskhoahocnaobo.com/iLogin";
console.log(text.length);
console.log(text.slice(37));
const currentUrl = window.location.href;
console.log(currentUrl);
// OWL CAROUSEL
$(document).ready(function () {
	$(".testimonial_slider").owlCarousel({
		// loop:true,
		responsiveClass: true,
		nav: true,
		margin: 20,
		dots: false,
		rewindNav: true,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			992: {
				items: 2,
			},
		},
	});
});

$(document).ready(function () {
	$(".speaker_slider").owlCarousel({
		// loop:true,
		margin: 80,
		// center:true,
		responsiveClass: true,
		nav: true,
		dots: false,
		navText: [
			"<i class='fas fa-chevron-left'></i>",
			'<i class="fas fa-chevron-right"></i>',
		],
		responsive: {
			0: {
				items: 1,
			},
			992: {
				items: 3,
			},
		},
	});
});

$("button").click(function (event) {
	event.preventDefault();
});
// THỜI GIAN TỔ CHỨC
let invtime;
$("#time").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#time-edit").css("display", "flex");
	}
});
document.getElementById("time-input").addEventListener("input", (e) => {
	invtime = e.target.value;
});
$("#time-save").click(function () {
	$("#time-edit").hide();
	$("#time").removeClass("d-none");
	$("#time").html(invtime);
});

// NGAY TO CHUC
let invdate;
$("#date").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#date-edit").css("display", "flex");
	}
});
document.getElementById("date-input").addEventListener("input", (e) => {
	invdate = e.target.value;
});
$("#date-save").click(function () {
	$("#date-edit").hide();
	$("#date").removeClass("d-none");
	$("#date").html(invdate);
});

// TEN THU MOI
let invheading;
$("#invite-heading").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#invite-heading-edit").css("display", "flex");
	}
});
document
	.getElementById("invite-heading-input")
	.addEventListener("input", (e) => {
		invheading = e.target.value;
	});
$("#invite-heading-save").click(function () {
	$("#invite-heading-edit").hide();
	$("#invite-heading").removeClass("d-none");
	$("#invite-heading").html(invheading);
});

// NOI DUNG THU MOI
let invtext;
$("#home-text").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#home-text-edit").css("display", "flex");
	}
});
document.getElementById("home-text-input").addEventListener("input", (e) => {
	invtext = e.target.value;
});
$("#home-text-save").click(function () {
	$("#home-text-edit").hide();
	$("#home-text").removeClass("d-none");
	$("#home-text").html(invtext);
});

// TÊN TOPIC
let invtopic;
$("#invite-topic").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#invite-topic-edit").css("display", "flex");
	}
});
document.getElementById("invite-topic-input").addEventListener("input", (e) => {
	invtopic = e.target.value;
});
$("#invite-topic-save").click(function () {
	$("#invite-topic-edit").hide();
	$("#invite-topic").removeClass("d-none");
	$("#invite-topic").html(invtopic);
});

// NỘI DUNG CHIA SẺ
let topictxt;
$("#topic-text").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#topic-text-edit").css("display", "flex");
	}
});
document.getElementById("topic-text-input").addEventListener("input", (e) => {
	invtopic = e.target.value;
});
$("#topic-text-save").click(function () {
	$("#topic-text-edit").hide();
	$("#topic-text").removeClass("d-none");
	$("#topic-text").html(invtopic);
});

// Tên SPEAKER 1
let spkname1;
$("#speaker-name-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-name-1-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-name-1-input")
	.addEventListener("input", (e) => {
		spkname1 = e.target.value;
	});
$("#speaker-name-1-save").click(function () {
	$("#speaker-name-1-edit").hide();
	$("#speaker-name-1").removeClass("d-none");
	$("#speaker-name-1").html(spkname1);
});

// CHỨC DANH SPEAKER 1
let speakerpos1;
$("#speaker-pos-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-pos-1-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-pos-1-input")
	.addEventListener("input", (e) => {
		speakerpos1 = e.target.value;
	});
$("#speaker-pos-1-save").click(function () {
	if (speakerpos1.trim() !== "") {
		$("#speaker-pos-1-edit").hide();
		$("#speaker-pos-1").removeClass("d-none");
		$("#speaker-pos-1").html(speakerpos1);
	} else return;
});

// Tên SPEAKER 2
let spkname2;
$("#speaker-name-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-name-2-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-name-2-input")
	.addEventListener("input", (e) => {
		spkname2 = e.target.value;
	});
$("#speaker-name-2-save").click(function () {
	if (spkname2.trim() !== "") {
		$("#speaker-name-2-edit").hide();
		$("#speaker-name-2").removeClass("d-none");
		$("#speaker-name-2").html(spkname2);
	} else return;
});

// CHỨC DANH SPEAKER 2
let speakerpos2;
$("#speaker-pos-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-pos-2-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-pos-2-input")
	.addEventListener("input", (e) => {
		speakerpos2 = e.target.value;
	});
$("#speaker-pos-2-save").click(function () {
	if (speakerpos2.trim() !== "") {
		$("#speaker-pos-2-edit").hide();
		$("#speaker-pos-2").removeClass("d-none");
		$("#speaker-pos-2").html(speakerpos2);
	} else return;
});

// Tên SPEAKER 3
let spkname3;
$("#speaker-name-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-name-3-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-name-3-input")
	.addEventListener("input", (e) => {
		spkname3 = e.target.value;
	});
$("#speaker-name-3-save").click(function () {
	if (spkname3.trim() !== "") {
		$("#speaker-name-3-edit").hide();
		$("#speaker-name-3").removeClass("d-none");
		$("#speaker-name-3").html(spkname3);
	} else return;
});

// CHỨC DANH SPEAKER 3
let speakerpos3;
$("#speaker-pos-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-pos-3-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-pos-3-input")
	.addEventListener("input", (e) => {
		speakerpos3 = e.target.value;
	});
$("#speaker-pos-3-save").click(function () {
	if (speakerpos3.trim() !== "") {
		$("#speaker-pos-3-edit").hide();
		$("#speaker-pos-3").removeClass("d-none");
		$("#speaker-pos-3").html(speakerpos3);
	} else return;
});

// Tên SPEAKER 4
let spkname4;
$("#speaker-name-4").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-name-4-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-name-4-input")
	.addEventListener("input", (e) => {
		spkname4 = e.target.value;
	});
$("#speaker-name-4-save").click(function () {
	if (spkname4.trim() !== "") {
		$("#speaker-name-4-edit").hide();
		$("#speaker-name-4").removeClass("d-none");
		$("#speaker-name-4").html(spkname4);
	} else return;
});

// CHỨC DANH SPEAKER 4
let speakerpos4;
$("#speaker-pos-4").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#speaker-pos-4-edit").css("display", "flex");
	}
});
document
	.getElementById("speaker-pos-4-input")
	.addEventListener("input", (e) => {
		speakerpos4 = e.target.value;
	});
$("#speaker-pos-4-save").click(function () {
	if (speakerpos4.trim() !== "") {
		$("#speaker-pos-4-edit").hide();
		$("#speaker-pos-4").removeClass("d-none");
		$("#speaker-pos-4").html(speakerpos4);
	} else return;
});

// TÊN ADS
let adsheading;
$("#ads-heading").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#ads-heading-edit").css("display", "flex");
	}
});
document.getElementById("ads-heading-input").addEventListener("input", (e) => {
	adsheading = e.target.value;
});
$("#ads-heading-save").click(function () {
	if (adsheading.trim() !== "") {
		$("#ads-heading-edit").hide();
		$("#ads-heading").removeClass("d-none");
		$("#ads-heading").html(adsheading);
	} else return;
});

// NỘI DUNG PROMOTION
let adstxt;
$("#ads-text").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#ads-text-edit").css("display", "flex");
	}
});
document.getElementById("ads-text-input").addEventListener("input", (e) => {
	adstxt = e.target.value;
});
$("#ads-text-save").click(function () {
	if (adstxt.trim() !== "") {
		$("#ads-text-edit").hide();
		$("#ads-text").removeClass("d-none");
		$("#ads-text").html(adstxt);
	} else return;
});

// TEXT BUTTON TOI PHAN DANG KI
let toregbtn;
$("#to-reg-btn").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#to-reg-btn-edit").css("display", "flex");
	}
});
document.getElementById("to-reg-btn-input").addEventListener("input", (e) => {
	toregbtn = e.target.value;
});
$("#to-reg-btn-save").click(function () {
	if (toregbtn.trim() !== "") {
		$("#to-reg-btn-edit").hide();
		$("#to-reg-btn").removeClass("d-none");
		$("#to-reg-btn").html(toregbtn);
	} else return;
});

// PARTNER HEADING
let partnerheading;
$("#partner-heading").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-heading-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-heading-input")
	.addEventListener("input", (e) => {
		partnerheading = e.target.value;
	});
$("#partner-heading-save").click(function () {
	if (partnerheading.trim() !== "") {
		$("#partner-heading-edit").hide();
		$("#partner-heading").removeClass("d-none");
		$("#partner-heading").html(partnerheading);
	} else return;
});

// PARTNER TEXT SAVE
let partnertext;
$("#partner-text").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-text-edit").css("display", "flex");
	}
});
document.getElementById("partner-text-input").addEventListener("input", (e) => {
	partnertext = e.target.value;
});
$("#partner-text-save").click(function () {
	if (partnertext.trim() !== "") {
		$("#partner-text-edit").hide();
		$("#partner-text").removeClass("d-none");
		$("#partner-text").html(partnertext);
	} else return;
});

// TÊN ĐỐI TÁC 1
let partnername1;
$("#partner-name-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-name-1-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-name-1-input")
	.addEventListener("input", (e) => {
		partnername1 = e.target.value;
	});
$("#partner-name-1-save").click(function () {
	$("#partner-name-1-edit").hide();
	$("#partner-name-1").removeClass("d-none");
	$("#partner-name-1").html(partnername1);
});

// VAI TRÒ ĐỐI TÁC 1
let partnerpos1;
$("#partner-pos-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-pos-1-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-pos-1-input")
	.addEventListener("input", (e) => {
		partnerpos1 = e.target.value;
	});
$("#partner-pos-1-save").click(function () {
	$("#partner-pos-1-edit").hide();
	$("#partner-pos-1").removeClass("d-none");
	$("#partner-pos-1").html(partnerpos1);
});

// TÊN ĐỐI TÁC 2
let partnername2;
$("#partner-name-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-name-2-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-name-2-input")
	.addEventListener("input", (e) => {
		partnername2 = e.target.value;
	});
$("#partner-name-2-save").click(function () {
	$("#partner-name-2-edit").hide();
	$("#partner-name-2").removeClass("d-none");
	$("#partner-name-2").html(partnername2);
});

// VAI TRÒ ĐỐI TÁC 2
let partnerpos2;
$("#partner-pos-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-pos-2-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-pos-2-input")
	.addEventListener("input", (e) => {
		partnerpos2 = e.target.value;
	});
$("#partner-pos-2-save").click(function () {
	$("#partner-pos-2-edit").hide();
	$("#partner-pos-2").removeClass("d-none");
	$("#partner-pos-2").html(partnerpos2);
});

// TÊN ĐỐI TÁC 3
let partnername3;
$("#partner-name-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-name-3-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-name-3-input")
	.addEventListener("input", (e) => {
		partnername3 = e.target.value;
	});
$("#partner-name-3-save").click(function () {
	$("#partner-name-3-edit").hide();
	$("#partner-name-3").removeClass("d-none");
	$("#partner-name-3").html(partnername3);
});

// VAI TRÒ ĐỐI TÁC 3
let partnerpos3;
$("#partner-pos-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#partner-pos-3-edit").css("display", "flex");
	}
});
document
	.getElementById("partner-pos-3-input")
	.addEventListener("input", (e) => {
		partnerpos3 = e.target.value;
	});
$("#partner-pos-3-save").click(function () {
	$("#partner-pos-3-edit").hide();
	$("#partner-pos-3").removeClass("d-none");
	$("#partner-pos-3").html(partnerpos3);
});

// AVT CẢM NGHĨ 1
let avtTestimonial1;
const inputTestimonial1 = document.getElementById("avt-testimonial-1-input");
const imgTestimonial1 = document.getElementById("avt-testimonial-1");
inputTestimonial1.addEventListener("change", (e) => {
	if (e.target.files.length) {
		avtTestimonial1 = URL.createObjectURL(e.target.files[0]);
		imgTestimonial1.src = avtTestimonial1;
		const testimonialFormData = new FormData();
		testimonialFormData.append("file", e.target.files[0]);
		testimonialFormData.append("section", "testimonial");
		testimonialFormData.append("acc", acc);
		// CALL API GET SRC IMG
		$.ajax({
			method: "POST",
			url: "",
			data: testimonialFormData,
			processData: false,
		})
			.done(function (msg) {
				console.log("msg", msg);
				// imageLogo.src = msg.link
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				console.log("fail");
			});
	}
	$("#avt-testimonial-1-edit").hide();
	$("#avt-testimonial-1").removeClass("d-none");
});
$("#avt-testimonial-1").click(function () {
	$(this).toggleClass("d-none");
	$("#avt-testimonial-1-edit").css("display", "flex");
});

// CẢM NGHĨ 1
let testimonial1;
$("#testimonial-text-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#testimonial-text-1-edit").css("display", "flex");
	}
});
document
	.getElementById("testimonial-text-1-input")
	.addEventListener("input", (e) => {
		testimonial1 = e.target.value;
	});
$("#testimonial-text-1-save").click(function () {
	$("#testimonial-text-1-edit").hide();
	$("#testimonial-text-1").removeClass("d-none");
	$("#testimonial-text-1").html(testimonial1);
});

// TÊN NGƯỜI PHÁT BIỂU 1
let testimonialname1;
$("#testimonial-name-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#testimonial-name-1-edit").css("display", "flex");
	}
});
document
	.getElementById("testimonial-name-1-input")
	.addEventListener("input", (e) => {
		testimonialname1 = e.target.value;
	});
$("#testimonial-name-1-save").click(function () {
	$("#testimonial-name-1-edit").hide();
	$("#testimonial-name-1").removeClass("d-none");
	$("#testimonial-name-1").html(testimonialname1);
});

// CHỨC DANH NGƯỜI PHÁT BIỂU 1
let testimonialpos1;
$("#testimonial-pos-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#testimonial-pos-1-edit").css("display", "flex");
	}
});
document
	.getElementById("testimonial-pos-1-input")
	.addEventListener("input", (e) => {
		testimonialpos1 = e.target.value;
	});
$("#testimonial-pos-1-save").click(function () {
	$("#testimonial-pos-1-edit").hide();
	$("#testimonial-pos-1").removeClass("d-none");
	$("#testimonial-pos-1").html(testimonialpos1);
});

// REGISTRATION HEADING
let regheading;
$("#reg-heading").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#reg-heading-edit").css("display", "flex");
	}
});
document.getElementById("reg-heading-input").addEventListener("input", (e) => {
	regheading = e.target.value;
});
$("#reg-heading-save").click(function () {
	$("#reg-heading-edit").hide();
	$("#reg-heading").removeClass("d-none");
	$("#reg-heading").html(regheading);
});

// QUESTION 1
let question1;
$("#question-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#question-1-edit").css("display", "flex");
	}
});
document.getElementById("question-1-input").addEventListener("input", (e) => {
	question1 = e.target.value;
});
$("#question-1-save").click(function () {
	$("#question-1-edit").hide();
	$("#question-1").removeClass("d-none");
	$("#question-1").html(question1);
});

// DIF 1 QUEST 1
let dif1;
$("#dif-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#dif-1-edit").css("display", "flex");
	}
});
document.getElementById("dif-1-input").addEventListener("input", (e) => {
	dif1 = e.target.value;
});
$("#dif-1-save").click(function () {
	$("#dif-1-edit").hide();
	$("#dif-1").removeClass("d-none");
	$("#dif-1").html(dif1);
});

// DIF 2 QUEST 1
let dif2;
$("#dif-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#dif-2-edit").css("display", "flex");
	}
});
document.getElementById("dif-2-input").addEventListener("input", (e) => {
	dif2 = e.target.value;
});
$("#dif-2-save").click(function () {
	$("#dif-2-edit").hide();
	$("#dif-2").removeClass("d-none");
	$("#dif-2").html(dif2);
});

// DIF 3 QUEST 1
let dif3;
$("#dif-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#dif-3-edit").css("display", "flex");
	}
});
document.getElementById("dif-3-input").addEventListener("input", (e) => {
	dif3 = e.target.value;
});
$("#dif-3-save").click(function () {
	$("#dif-3-edit").hide();
	$("#dif-3").removeClass("d-none");
	$("#dif-3").html(dif3);
});

// DIF 4 QUEST 1
let dif4;
$("#dif-4").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#dif-4-edit").css("display", "flex");
	}
});
document.getElementById("dif-4-input").addEventListener("input", (e) => {
	dif4 = e.target.value;
});
$("#dif-4-save").click(function () {
	$("#dif-4-edit").hide();
	$("#dif-4").removeClass("d-none");
	$("#dif-4").html(dif4);
});

// DIF 5 QUEST 1
let dif5;
$("#dif-5").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#dif-5-edit").css("display", "flex");
	}
});
document.getElementById("dif-5-input").addEventListener("input", (e) => {
	dif5 = e.target.value;
});
$("#dif-5-save").click(function () {
	$("#dif-5-edit").hide();
	$("#dif-5").removeClass("d-none");
	$("#dif-5").html(dif5);
});

// QUY MO CAU HOI
let scale;
$("#scale-quest").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#scale-quest-edit").css("display", "flex");
	}
});
document.getElementById("scale-quest-input").addEventListener("input", (e) => {
	scale = e.target.value;
});
$("#scale-quest-save").click(function () {
	$("#scale-quest-edit").hide();
	$("#scale-quest").removeClass("d-none");
	$("#scale-quest").html(scale);
});

// QUY MO DAP AN 1
let scaleans1;
$("#scale-ans-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#scale-ans-1-edit").css("display", "flex");
	}
});
document.getElementById("scale-ans-1-input").addEventListener("input", (e) => {
	scaleans1 = e.target.value;
});
$("#scale-ans-1-save").click(function () {
	$("#scale-ans-1-edit").hide();
	$("#scale-ans-1").removeClass("d-none");
	$("#scale-ans-1").html(scaleans1);
});

// QUY MO DAP AN 2
let scaleans2;
$("#scale-ans-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#scale-ans-2-edit").css("display", "flex");
	}
});
document.getElementById("scale-ans-2-input").addEventListener("input", (e) => {
	scaleans2 = e.target.value;
});
$("#scale-ans-2-save").click(function () {
	$("#scale-ans-2-edit").hide();
	$("#scale-ans-2").removeClass("d-none");
	$("#scale-ans-2").html(scaleans2);
});

// QUY MO DAP AN 3
let scaleans3;
$("#scale-ans-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#scale-ans-3-edit").css("display", "flex");
	}
});
document.getElementById("scale-ans-3-input").addEventListener("input", (e) => {
	scaleans3 = e.target.value;
});
$("#scale-ans-3-save").click(function () {
	$("#scale-ans-3-edit").hide();
	$("#scale-ans-3").removeClass("d-none");
	$("#scale-ans-3").html(scaleans3);
});

// TEXT AREA QUEST
let textareaquest;
$("#textarea-quest").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#textarea-quest-edit").css("display", "flex");
	}
});
document
	.getElementById("textarea-quest-input")
	.addEventListener("input", (e) => {
		textareaquest = e.target.value;
	});
$("#textarea-quest-save").click(function () {
	$("#textarea-quest-edit").hide();
	$("#textarea-quest").removeClass("d-none");
	$("#textarea-quest").html(textareaquest);
});

// TIÊU ĐỀ GIẢI PHÁP DỊCH VỤ
let benefitheading;
$("#benefit-text").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#benefit-text-edit").css("display", "flex");
	}
});
document.getElementById("benefit-text-input").addEventListener("input", (e) => {
	benefitheading = e.target.value;
});
$("#benefit-text-save").click(function () {
	$("#benefit-text-edit").hide();
	$("#benefit-text").removeClass("d-none");
	$("#benefit-text").html(benefitheading);
});

// GIẢI PHÁP 1
let sol1;
$("#sol-1").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#sol-1-edit").css("display", "flex");
	}
});
document.getElementById("sol-1-input").addEventListener("input", (e) => {
	sol1 = e.target.value;
});
$("#sol-1-save").click(function () {
	$("#sol-1-edit").hide();
	$("#sol-1").removeClass("d-none");
	$("#sol-1").html(sol1);
});

// GIẢI PHÁP 2
let sol2;
$("#sol-2").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#sol-2-edit").css("display", "flex");
	}
});
document.getElementById("sol-2-input").addEventListener("input", (e) => {
	sol2 = e.target.value;
});
$("#sol-2-save").click(function () {
	$("#sol-2-edit").hide();
	$("#sol-2").removeClass("d-none");
	$("#sol-2").html(sol2);
});

// GIẢI PHÁP 3
let sol3;
$("#sol-3").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#sol-3-edit").css("display", "flex");
	}
});
document.getElementById("sol-3-input").addEventListener("input", (e) => {
	sol3 = e.target.value;
});
$("#sol-3-save").click(function () {
	$("#sol-3-edit").hide();
	$("#sol-3").removeClass("d-none");
	$("#sol-3").html(sol3);
});

// GIẢI PHÁP 4
let sol4;
$("#sol-4").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#sol-4-edit").css("display", "flex");
	}
});
document.getElementById("sol-4-input").addEventListener("input", (e) => {
	sol4 = e.target.value;
});
$("#sol-4-save").click(function () {
	$("#sol-4-edit").hide();
	$("#sol-4").removeClass("d-none");
	$("#sol-4").html(sol4);
});

// GIẢI PHÁP 5
let sol5;
$("#sol-5").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#sol-5-edit").css("display", "flex");
	}
});
document.getElementById("sol-5-input").addEventListener("input", (e) => {
	sol5 = e.target.value;
});
$("#sol-5-save").click(function () {
	$("#sol-5-edit").hide();
	$("#sol-5").removeClass("d-none");
	$("#sol-5").html(sol5);
});

// TIÊU ĐỀ PHẦN ẢNH TƯ LIỆU
let imgdocs;
$("#imgs-title").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#imgs-title-edit").css("display", "flex");
	}
});
document.getElementById("imgs-title-input").addEventListener("input", (e) => {
	imgdocs = e.target.value;
});
$("#imgs-title-save").click(function () {
	$("#imgs-title-edit").hide();
	$("#imgs-title").removeClass("d-none");
	$("#imgs-title").html(imgdocs);
});

// TIÊU ĐỀ PHẦN ẢNH TƯ LIỆU
let contactinfo;
$("#contact_info").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#contact_info-edit").css("display", "flex");
	}
});
document.getElementById("contact_info-input").addEventListener("input", (e) => {
	contactinfo = e.target.value;
});
$("#contact_info-save").click(function () {
	$("#contact_info-edit").hide();
	$("#contact_info").removeClass("d-none");
	$("#contact_info").html(contactinfo);
});

// ĐỊA CHỈ
let localeinfo;
$("#info-locale").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#info-locale-edit").css("display", "flex");
	}
});
document.getElementById("info-locale-input").addEventListener("input", (e) => {
	localeinfo = e.target.value;
});
$("#info-locale-save").click(function () {
	$("#info-locale-edit").hide();
	$("#info-locale").removeClass("d-none");
	$("#info-locale").html(localeinfo);
});

// EMAIL
let emailinfo;
$("#info-email").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#info-email-edit").css("display", "flex");
	}
});
document.getElementById("info-email-input").addEventListener("input", (e) => {
	emailinfo = e.target.value;
});
$("#info-email-save").click(function () {
	$("#info-email-edit").hide();
	$("#info-email").removeClass("d-none");
	$("#info-email").html(emailinfo);
});

// PHONENUMBER
let telinfo;
$("#info-tel").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#info-tel-edit").css("display", "flex");
	}
});
document.getElementById("info-tel-input").addEventListener("input", (e) => {
	telinfo = e.target.value;
});
$("#info-tel-save").click(function () {
	$("#info-tel-edit").hide();
	$("#info-tel").removeClass("d-none");
	$("#info-tel").html(telinfo);
});

// CHECKBOX ẨN HIỆN SECTION
$(".checkbox-content").on("click", function () {
	let currentId = $(this).attr("id").slice(0, -6);
	if ($(this).is(":checked")) {
		$(`#${currentId}`).hide();
	} else {
		$(`#${currentId}`).show();
	}
});

$("#business-logo").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#business-logo-edit").css("display", "flex");
	}
});
// LINK WEBSITE
let linkbl;
$("#link-bl").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#link-bl-edit").css("display", "flex");
	} else {
		$("#link-bl-edit").css("display", "none");
	}
});
document.getElementById("link-bl-input").addEventListener("input", (e) => {
	linkbl = e.target.value;
	document.getElementById("bl-link").href = linkbl;
});
$("#link-bl-save").click(function () {
	$("#link-bl-edit").hide();
	$("#link-bl").removeClass("d-none");
	$("#link-bl").html(linkbl);
});

// LOGO PERSON
let personallogo;
const inputperlogo = document.getElementById("personal-logo-input");
const imageperlogo = document.getElementById("personal-logo");
inputperlogo.addEventListener("change", (e) => {
	if (e.target.files.length) {
		personallogo = URL.createObjectURL(e.target.files[0]);
		imageperlogo.src = personallogo;
	}
	$("#personal-logo").removeClass("d-none");
	$("#personal-logo-edit").hide();
});
$("#personal-logo").click(function () {
	if (bool) {
		$(this).toggleClass("d-none");
		$("#personal-logo-edit").css("display", "flex");
	}
});

// LƯU TẤT CẢ THAY ĐỔI + GỬI DATA
$("#save-change").on("click", function () {
	let home = document.getElementById("home").outerHTML;
	let schedule = document.getElementById("schedule").outerHTML;
	let subscribe = document.getElementById("subscribe").outerHTML;
	let speaker = document.getElementById("speaker").outerHTML;
	let testimonial = document.getElementById("testimonial").outerHTML;
	let reg = document.getElementById("reg").outerHTML;
	let faq = document.getElementById("faq").outerHTML;
	let map = document.getElementById("map").outerHTML;
	const payload = {
		htmlString: [
			{
				name: "home",
				html: home,
				show: true,
			},
			{
				name: "schedule",
				html: schedule,
				show: true,
			},
			{
				name: "subscribe",
				html: subscribe,
				show: true,
			},
			{
				name: "speaker",
				html: speaker,
				show: true,
			},
			{
				name: "testimonial",
				html: testimonial,
				show: true,
			},
			{
				name: "reg",
				html: reg,
				show: true,
			},
			{
				name: "faq",
				html: faq,
				show: true,
			},
			{
				name: "map",
				html: map,
				show: true,
			},
		],
		acc: acc,
	};
});

// LƯU ẢNH PHẦN HOME -> LOGO BUSINESS
let logoBusiness;
const inputLogo = document.getElementById("business-logo-input");
const imageLogo = document.getElementById("business-logo");
inputLogo.addEventListener("change", (e) => {
	if (e.target.files.length) {
		logoBusiness = URL.createObjectURL(e.target.files[0]);
		imageLogo.src = logoBusiness;
	}
	$("#business-logo").removeClass("d-none");
	$("#business-logo-edit").hide();

	const homeFormData = new FormData();
	homeFormData.append("file", e.target.files[0]);
	homeFormData.append("section", "home");
	homeFormData.append("acc", acc);
	$.ajax({
		method: "POST",
		url: "https://market.pomaskhoahocnaobo.com/iUploadImg",
		data: homeFormData,
		headers: {
			Authorization:
				"Bearer eyJraWQiOiJBbWZJSXU3UFhhdXlUbHM3UmNyZmNIQUd1MUdCWkRab2I0U05GaVJuWUFJPSIsImFsZyI6IlYYYjU2In0.eyJzdWIiOiJjNTYyEEE1ZS05Zjc3LTQ2NDAtYTFmOS1hJJJ5Njk1OGE0MzUiLCJhdWQiOiI3Z2ZsZnNmMm1vNnQ4dXJpOG0xcHY5N3BnayIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJldmVudF9pZCI6ImE2YWFjOTQxLTYzYWUtNGU5ZS1iYTE1LTRlYTNlOGIyZjQ5MSIsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNTY4OTY0NDI2LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9qanRiZFZkZEYiLCJjb2duaXRvOnVzZXJuYW1lIjoiYzU2MmFjNWUtOWY3Ny00NjQwLWExZjktYTgxOTY5NThhNDM1IiwiZXhwIjoxNTY4OTY4MDI2LCJpYXQiOjE1Njg5NjQ0MjcsImVtYWlsIjoiYnJ5YW5Ab3BlbndvbmsuY29tIn0.fV4bgaKwXx-HjrBmGtBnSzaDHdP0JEeJ0sbE6MzuOJYWafT5gWfh9pLtkpUv-mgsnX3cVIWDVKC0H8_XM4ziUhsulZIRBwTiSca0CfABvanuMdbdjk1iK70aUxsrjHX0gK4SDUi4Zl6JNGws_SRbVi9Yq_ntx7ttXfUpZHjimfZ2mLidOLUruYctG1V_gU-dLD6CARCUbGh5aRk5nwX_5-HBUTbBVPYK3sXcVg2YRk63d-p3TITA5hoOEj9lxtHs3ZM7ZqNPl0XPUGghxdbvWnpSIUKrFLugRHqCiWxC38ZYiBhP0NDYoEMaOI-UrnEH1W6j-kr3fnH2LD5wOMJ_8Q",
		},
	})
		.done(function (res) {
			console.log("link ", res);
			// imageLogo.src = res
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			console.log("fail");
		});
});

// CAP NHAT ANH PHAN SCHEDULE
// AVT SPEAKER 3
// let avtSpeaker1
// const inputSpeaker1 = document.getElementById("avt-speaker-1-input");
// const imageSpeaker1 = document.getElementById("avt-speaker-1");
// inputSpeaker1.addEventListener("change", (e) => {
// 	if (e.target.files.length) {
// 		console.log("1");
// 		$("#avt-speaker-1").removeClass("d-none");
// 		$("#avt-speaker-1-edit").hide();
// 		const avtFormData = new FormData();
// 		avtFormData.append("file", e.target.files[0]);
// 		avtFormData.append("section", "schedule");
// 		avtFormData.append("acc", acc);
// 		$.ajax({
// 			method: "POST",
// 			url: "",
// 			data: avtFormData,
// 			processData: false,
// 		})
//         .done(function (msg) {
//             console.log("msg", msg);
//             // imageLogo.src = msg.link
//         })
//         .fail(function (jqXHR, textStatus, errorThrown) {
//             console.log("fail");
//         });
// 	}
// });
for (let img of $(".speaker-avt")) {
	img.addEventListener("click", function (e) {
		if (bool) {
			const id = e.target.id.charAt(12);
			$(`#avt-speaker-${id}`).toggleClass("d-none");
			$(`#avt-speaker-${id}-edit`).css("display", "flex");
		}
	});
}

let speakerImg;
for (let input of $(".speaker-avt-input")) {
	const avtFormData = new FormData();
	input.addEventListener("change", function (e) {
		// lấy ID ảnh
		let id = e.target.id.charAt(12);
		if (e.target.files.length) {
			speakerImg = URL.createObjectURL(e.target.files[0]);
			document.getElementById(`avt-speaker-${id}`).src = speakerImg;
		}
		// FORM DATA GỬI API
		avtFormData.append("file", e.target.files[0]);
		avtFormData.append("section", "schedule");
		avtFormData.append("acc", acc);
		// CALL API GET SRC ẢNH -> CẬP NHẬT SRC
		$.ajax({
			method: "POST",
			url: "https://market.pomaskhoahocnaobo.com/iUploadImg",
			data: avtFormData,
			processData: false,
			headers: {
				'Authorization':
					`Bearer ${token}`,
			},
		})
			.done(function (res) {
				console.log("link ", res);
				// imageLogo.src = res
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				console.log("fail");
			});

		for (var pair of avtFormData.entries()) {
			console.log(pair[0] + ", " + pair[1]);
		}
		// ẨN INPUT FILE HIỆN AVATAR
		$(`#avt-speaker-${id}`).removeClass("d-none");
		$(`#avt-speaker-${id}-edit`).hide();
	});
}

// CAP NHAT ANH PHẦN PARTNER
for (let img of $(".partner-avt")) {
	img.addEventListener("click", function (e) {
		if (bool) {
			const id = e.target.id.charAt(12);
			$(`#avt-partner-${id}`).toggleClass("d-none");
			$(`#avt-partner-${id}-edit`).css("display", "flex");
		}
	});
}

let logoPartner;
for (let input of $(".partner-avt-input")) {
	const avtFormData = new FormData();
	input.addEventListener("change", function (e) {
		// lấy ID ảnh
		let id = e.target.id.charAt(12);
		if (e.target.files.length) {
			logoPartner = URL.createObjectURL(e.target.files[0]);
			document.getElementById(`avt-partner-${id}`).src = logoPartner;
		}
		// FORM DATA GỬI API
		avtFormData.append("file", e.target.files[0]);
		avtFormData.append("section", "speaker");
		avtFormData.append("acc", acc);
		// CALL API GET SRC ẢNH -> CẬP NHẬT SRC
		$.ajax({
			method: "POST",
			url: "https://market.pomaskhoahocnaobo.com/iUploadImg",
			data: avtFormData,
			processData: false,
			headers: {
				'Authorization':
					`Bearer ${token}`,
			},
		})
			.done(function (res) {
				console.log("link ", res);
				// imageLogo.src = res
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				console.log("fail");
			});

		// ẨN INPUT FILE HIỆN AVATAR
		$(`#avt-partner-${id}`).removeClass("d-none");
		$(`#avt-partner-${id}-edit`).hide();
	});
}

// CẬP NHẬT ẢNH CỘNG ĐỒNG
for (let img of $(".community-img")) {
	img.addEventListener("click", function (e) {
		if (bool) {
			const id = e.target.id.charAt(9);
			$(`#img-data-${id}`).toggleClass("d-none");
			$(`#img-data-${id}-edit`).css("display", "flex");
		}
	});
}
let communityImg;
for (let input of $(".img-data-input")) {
	const imgFormData = new FormData();
	input.addEventListener("change", function (e) {
		// lấy ID ảnh
		let id = e.target.id.charAt(9);
		if (e.target.files.length) {
			communityImg = URL.createObjectURL(e.target.files[0]);
			document.getElementById(`img-data-${id}`).src = communityImg;
		}
		// FORM DATA GỬI API
		imgFormData.append("file", e.target.files[0]);
		imgFormData.append("section", "faq");
		imgFormData.append("acc", acc);

		for (var pair of imgFormData.entries()) {
			console.log(pair[0] + ", " + pair[1]);
		}
		// CALL API GET SRC ẢNH -> CẬP NHẬT SRC
		$.ajax({
			method: "POST",
			url: "https://market.pomaskhoahocnaobo.com/iUploadImg",
			data: imgFormData,
			processData: false,
			headers: {
				'Authorization':
					`Bearer ${token}`,
			},
		})
			.done(function (msg) {
				console.log("msg", msg);
				// imageLogo.src = msg.link
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				console.log("fail");
			});

		// ẨN INPUT FILE HIỆN AVATAR
		$(`#img-data-${id}`).removeClass("d-none");
		$(`#img-data-${id}-edit`).addClass("d-none");
	});
}

// SAU KHI ĐĂNG NHẬP NHẬN ĐƯỢC 1 BOOLEAN
function isShowButtonHide() {
	if (!bool) {
		for (item of $(".checkbox-container")) {
			console.log(item);
			item.style.display = "none";
		}
		$("#save-change").css("display", "none");
		$("#link-bl-edit").css("display", "none");
	} else {
		$("#save-change").css("display", "block");
	}
}
isShowButtonHide();

// XU LI MODAL DANG NHAP
let modal = document.querySelector(".login");
let trigger = document.querySelector("#invite-heading");
let closeButton = document.querySelector(".close-button");
let inputLogin = document.querySelector("#input-login");

function toggleModal() {
	modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}
$(".login-button").on("click", function (e) {
	let secretPhrase = inputLogin.value;
	let data = {
		acc: acc,
		secret: secretPhrase,
	};
	$.ajax({
		method: "POST",
		url: "https://market.pomaskhoahocnaobo.com/iLogin",
		data,
		headers: { 
			"Content-Type": "application/json" ,
			'Authorization': `Bearer ${token}`,
		},
	})
		.done(function (msg) {
			console.log("msg", msg);
			acc = msg.acc;
			bool = msg.data;
			token = msg.token;
			isShowButtonHide();
			// imageLogo.src = msg.link
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			console.log("fail");
		});
});
trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
