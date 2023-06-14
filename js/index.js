const acc='1.quan.1983.vn'

// OWL CAROUSEL 
$(document).ready(function(){
    $(".testimonial_slider").owlCarousel({
        // loop:true,
        responsiveClass:true,
        nav:true,
        margin:20,
        dots:false,
        rewindNav : true,
        navText: ["<i class='fas fa-chevron-left'></i>", '<i class="fas fa-chevron-right"></i>'],  
        responsive:{
            0:{
                items:1,
            },
            992:{
                items:2,
            },
        }
    
    });
  });
  
$(document).ready(function(){
    $(".speaker_slider").owlCarousel({
        // loop:true,
        margin:80,
        // center:true,
        responsiveClass:true,
        nav:true,
        dots:false,
        navText: ["<i class='fas fa-chevron-left'></i>", '<i class="fas fa-chevron-right"></i>'],  
        responsive:{
            0:{
                items:1,
            },
            992:{
                items:3,
            },
        }
    
    });
  });

  let invdate
  let invheading
  $("button").click(function(event){
    event.preventDefault();
  });
// NGAY TO CHUC 
$('#home-date').click(function(){
    $(this).toggleClass('d-none')
    $('#home-date-edit').css("display","flex")
})
document.getElementById('home-date-input').addEventListener('input',e => {
    invdate=e.target.value
})
$('#home-date-save').click(function(){
    $('#home-date-edit').hide()
    $('#home-date').removeClass('d-none')
    $('#home-date').html(invdate)
})

// TEN THU MOI 
$('#invite-heading').click(function(){
    $(this).toggleClass('d-none')
    $('#invite-heading-edit').css("display","flex")
})
document.getElementById('invite-heading-input').addEventListener('input',e => {
    invheading=e.target.value
})
$('#invite-heading-save').click(function(){
    $('#invite-heading-edit').hide()
    $('#invite-heading').removeClass('d-none')
    $('#invite-heading').html(invheading)
})

// NOI DUNG THU MOI 
let invtext
$('#home-text').click(function(){
    $(this).toggleClass('d-none')
    $('#home-text-edit').css("display","flex")
})
document.getElementById('home-text-input').addEventListener('input',e => {
    invtext=e.target.value
})
$('#home-text-save').click(function(){
    $('#home-text-edit').hide()
    $('#home-text').removeClass('d-none')
    $('#home-text').html(invtext)
})

// TÊN TOPIC 
let invtopic
$('#invite-topic').click(function(){
    $(this).toggleClass('d-none')
    $('#invite-topic-edit').css("display","flex")
})
document.getElementById('invite-topic-input').addEventListener('input',e => {
    invtopic=e.target.value
})
$('#invite-topic-save').click(function(){
    $('#invite-topic-edit').hide()
    $('#invite-topic').removeClass('d-none')
    $('#invite-topic').html(invtopic)
})

// NỘI DUNG CHIA SẺ
let topictxt
$('#topic-text').click(function(){
    $(this).toggleClass('d-none')
    $('#topic-text-edit').css("display","flex")
})
document.getElementById('topic-text-input').addEventListener('input',e => {
    invtopic=e.target.value
})
$('#topic-text-save').click(function(){
    $('#topic-text-edit').hide()
    $('#topic-text').removeClass('d-none')
    $('#topic-text').html(invtopic)
})

// AVT SPEAKER 1
let source1 
const input1 = document.getElementById('avt-speaker-1-input')
const image1 = document.getElementById('avt-speaker-1');
input1.addEventListener('change', (e) => {
    if (e.target.files.length) {
        source1 = URL.createObjectURL(e.target.files[0]);
        image1.src=source1
    }
    $('#avt-speaker-1').removeClass('d-none')
    $('#avt-speaker-1-edit').hide()
});
$('#avt-speaker-1').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-speaker-1-edit').css("display","flex")
})

// Tên SPEAKER 1
let spkname1
$('#speaker-name-1').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-name-1-edit').css("display","flex")
})
document.getElementById('speaker-name-1-input').addEventListener('input',e => {
    spkname1=e.target.value
})
$('#speaker-name-1-save').click(function(){
    if(spkname1.trim() !== ''){
        $('#speaker-name-1-edit').hide()
        $('#speaker-name-1').removeClass('d-none')
        $('#speaker-name-1').html(spkname1)
    }else return
})

// CHỨC DANH SPEAKER 1
let speakerpos1
$('#speaker-pos-1').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-pos-1-edit').css("display","flex")
})
document.getElementById('speaker-pos-1-input').addEventListener('input',e => {
    speakerpos1=e.target.value
})
$('#speaker-pos-1-save').click(function(){
    if(speakerpos1.trim() !== ''){
        $('#speaker-pos-1-edit').hide()
        $('#speaker-pos-1').removeClass('d-none')
        $('#speaker-pos-1').html(speakerpos1)
    }else return
})

// AVT SPEAKER 2
let source2 
const input2 = document.getElementById('avt-speaker-2-input')
const image2 = document.getElementById('avt-speaker-2');
input2.addEventListener('change', (e) => {
    if (e.target.files.length) {
        source2 = URL.createObjectURL(e.target.files[0]);
        image2.src=source2
    }
    $('#avt-speaker-2').removeClass('d-none')
    $('#avt-speaker-2-edit').hide()
});
$('#avt-speaker-2').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-speaker-2-edit').css("display","flex")
})

// Tên SPEAKER 2
let spkname2
$('#speaker-name-2').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-name-2-edit').css("display","flex")
})
document.getElementById('speaker-name-2-input').addEventListener('input',e => {
    spkname2=e.target.value
})
$('#speaker-name-2-save').click(function(){
    if(spkname2.trim() !== ''){
        $('#speaker-name-2-edit').hide()
        $('#speaker-name-2').removeClass('d-none')
        $('#speaker-name-2').html(spkname2)
    }else return
})

// CHỨC DANH SPEAKER 2
let speakerpos2
$('#speaker-pos-2').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-pos-2-edit').css("display","flex")
})
document.getElementById('speaker-pos-2-input').addEventListener('input',e => {
    speakerpos2=e.target.value
})
$('#speaker-pos-2-save').click(function(){
    if(speakerpos2.trim() !== ''){
        $('#speaker-pos-2-edit').hide()
        $('#speaker-pos-2').removeClass('d-none')
        $('#speaker-pos-2').html(speakerpos2)
    }else return
})
// AVT SPEAKER 3
let source3 
const input3 = document.getElementById('avt-speaker-3-input')
const image3 = document.getElementById('avt-speaker-3');
input3.addEventListener('change', (e) => {
    if (e.target.files.length) {
        source3 = URL.createObjectURL(e.target.files[0]);
        image3.src=source3
    }
    $('#avt-speaker-3').removeClass('d-none')
    $('#avt-speaker-3-edit').hide()
});
$('#avt-speaker-3').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-speaker-3-edit').css("display","flex")
})
// Tên SPEAKER 3
let spkname3
$('#speaker-name-3').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-name-3-edit').css("display","flex")
})
document.getElementById('speaker-name-3-input').addEventListener('input',e => {
    spkname3=e.target.value
})
$('#speaker-name-3-save').click(function(){
    if(spkname3.trim() !== ''){
        $('#speaker-name-3-edit').hide()
        $('#speaker-name-3').removeClass('d-none')
        $('#speaker-name-3').html(spkname3)
    }else return
})

// CHỨC DANH SPEAKER 3
let speakerpos3
$('#speaker-pos-3').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-pos-3-edit').css("display","flex")
})
document.getElementById('speaker-pos-3-input').addEventListener('input',e => {
    speakerpos3=e.target.value
})
$('#speaker-pos-3-save').click(function(){
    if(speakerpos3.trim() !== ''){
        $('#speaker-pos-3-edit').hide()
        $('#speaker-pos-3').removeClass('d-none')
        $('#speaker-pos-3').html(speakerpos3)
    }else return
})

// AVT SPEAKER 4
let source4 
const input4 = document.getElementById('avt-speaker-4-input')
const image4 = document.getElementById('avt-speaker-4');
input4.addEventListener('change', (e) => {
    if (e.target.files.length) {
        source4 = URL.createObjectURL(e.target.files[0]);
        image4.src=source4
    }
    $('#avt-speaker-4').removeClass('d-none')
    $('#avt-speaker-4-edit').hide()
});
$('#avt-speaker-4').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-speaker-4-edit').css("display","flex")
})

// Tên SPEAKER 4
let spkname4
$('#speaker-name-4').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-name-4-edit').css("display","flex")
})
document.getElementById('speaker-name-4-input').addEventListener('input',e => {
    spkname4=e.target.value
})
$('#speaker-name-4-save').click(function(){
    if(spkname4.trim() !== ''){
        $('#speaker-name-4-edit').hide()
        $('#speaker-name-4').removeClass('d-none')
        $('#speaker-name-4').html(spkname4)
    }else return
})

// CHỨC DANH SPEAKER 4
let speakerpos4
$('#speaker-pos-4').click(function(){
    $(this).toggleClass('d-none')
    $('#speaker-pos-4-edit').css("display","flex")
})
document.getElementById('speaker-pos-4-input').addEventListener('input',e => {
    speakerpos4=e.target.value
})
$('#speaker-pos-4-save').click(function(){
    if(speakerpos4.trim() !== ''){
        $('#speaker-pos-4-edit').hide()
        $('#speaker-pos-4').removeClass('d-none')
        $('#speaker-pos-4').html(speakerpos4)
    }else return
})

// TÊN ADS
let adsheading
$('#ads-heading').click(function(){
    $(this).toggleClass('d-none')
    $('#ads-heading-edit').css("display","flex")
})
document.getElementById('ads-heading-input').addEventListener('input',e => {
    adsheading=e.target.value
})
$('#ads-heading-save').click(function(){
    if(adsheading.trim() !== ''){
        $('#ads-heading-edit').hide()
        $('#ads-heading').removeClass('d-none')
        $('#ads-heading').html(adsheading)
    }else return
})

// NỘI DUNG PROMOTION
let adstxt
$('#ads-text').click(function(){
    $(this).toggleClass('d-none')
    $('#ads-text-edit').css("display","flex")
})
document.getElementById('ads-text-input').addEventListener('input',e => {
    adstxt=e.target.value
})
$('#ads-text-save').click(function(){
    if(adstxt.trim() !== ''){
        $('#ads-text-edit').hide()
        $('#ads-text').removeClass('d-none')
        $('#ads-text').html(adstxt)
    }else return
})

// TEXT BUTTON TOI PHAN DANG KI
let toregbtn
$('#to-reg-btn').click(function(){
    $(this).toggleClass('d-none')
    $('#to-reg-btn-edit').css("display","flex")
})
document.getElementById('to-reg-btn-input').addEventListener('input',e => {
    toregbtn=e.target.value
})
$('#to-reg-btn-save').click(function(){
    if(toregbtn.trim() !== ''){
        $('#to-reg-btn-edit').hide()
        $('#to-reg-btn').removeClass('d-none')
        $('#to-reg-btn').html(toregbtn)
    }else return
})

// PARTNER HEADING
let partnerheading
$('#partner-heading').click(function(){
    $(this).toggleClass('d-none')
    $('#partner-heading-edit').css("display","flex")
})
document.getElementById('partner-heading-input').addEventListener('input',e => {
    partnerheading=e.target.value
})
$('#partner-heading-save').click(function(){
    if(partnerheading.trim() !== ''){
        $('#partner-heading-edit').hide()
        $('#partner-heading').removeClass('d-none')
        $('#partner-heading').html(partnerheading)
    }else return
})

// PARTNER TEXT SAVE
let partnertext
$('#partner-text').click(function(){
    $(this).toggleClass('d-none')
    $('#partner-text-edit').css("display","flex")
})
document.getElementById('partner-text-input').addEventListener('input',e => {
    partnertext=e.target.value
})
$('#partner-text-save').click(function(){
    if(partnertext.trim() !== ''){
        $('#partner-text-edit').hide()
        $('#partner-text').removeClass('d-none')
        $('#partner-text').html(partnertext)
    }else return
})

// AVT ĐỐI TÁC 1
let avtpartner1
const inputpartner1 = document.getElementById('avt-partner-1-input')
const imagepartner1 = document.getElementById('avt-partner-1');
inputpartner1.addEventListener('change', (e) => {
    if (e.target.files.length) {
        avtpartner1 = URL.createObjectURL(e.target.files[0]);
        imagepartner1.src=avtpartner1
    }
    $('#avt-partner-1-edit').hide()
    $('#avt-partner-1').removeClass('d-none')
});
$('#avt-partner-1').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-partner-1-edit').css("display","flex")
})

// AVT ĐỐI TÁC 2
let avtpartner2
const inputpartner2 = document.getElementById('avt-partner-2-input')
const imagepartner2 = document.getElementById('avt-partner-2');
inputpartner2.addEventListener('change', (e) => {
    if (e.target.files.length) {
        avtpartner2 = URL.createObjectURL(e.target.files[0]);
        imagepartner2.src=avtpartner2
    }
    $('#avt-partner-2-edit').hide()
    $('#avt-partner-2').removeClass('d-none')
});
$('#avt-partner-2').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-partner-2-edit').css("display","flex")
})

// AVT ĐỐI TÁC 3
let avtpartner3
const inputpartner3 = document.getElementById('avt-partner-3-input')
const imagepartner3 = document.getElementById('avt-partner-3');
inputpartner3.addEventListener('change', (e) => {
    if (e.target.files.length) {
        avtpartner3 = URL.createObjectURL(e.target.files[0]);
        imagepartner3.src=avtpartner3
    }
    $('#avt-partner-3-edit').hide()
    $('#avt-partner-3').removeClass('d-none')
});
$('#avt-partner-3').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-partner-3-edit').css("display","flex")
})

// TÊN ĐỐI TÁC 1 
let partnername1
$('#partner-name-1').click(function(){
    $(this).toggleClass('d-none')
    $('#partner-name-1-edit').css("display","flex")
})
document.getElementById('partner-name-1-input').addEventListener('input',e => {
    partnername1=e.target.value
})
$('#partner-name-1-save').click(function(){
    $('#partner-name-1-edit').hide()
    $('#partner-name-1').removeClass('d-none')
    $('#partner-name-1').html(partnername1)
})

// VAI TRÒ ĐỐI TÁC 1
let partnerpos1
$('#partner-pos-1').click(function(){
    $(this).toggleClass('d-none')
    $('#partner-pos-1-edit').css("display","flex")
})
document.getElementById('partner-pos-1-input').addEventListener('input',e => {
    partnerpos1=e.target.value
})
$('#partner-pos-1-save').click(function(){
    $('#partner-pos-1-edit').hide()
    $('#partner-pos-1').removeClass('d-none')
    $('#partner-pos-1').html(partnerpos1)
})

// TÊN ĐỐI TÁC 2 
let partnername2
$('#partner-name-2').click(function(){
    $(this).toggleClass('d-none')
    $('#partner-name-2-edit').css("display","flex")
})
document.getElementById('partner-name-2-input').addEventListener('input',e => {
    partnername2=e.target.value
})
$('#partner-name-2-save').click(function(){
    $('#partner-name-2-edit').hide()
    $('#partner-name-2').removeClass('d-none')
    $('#partner-name-2').html(partnername2)
})

// VAI TRÒ ĐỐI TÁC 2
let partnerpos2
$('#partner-pos-2').click(function(){
    $(this).toggleClass('d-none')
    $('#partner-pos-2-edit').css("display","flex")
})
document.getElementById('partner-pos-2-input').addEventListener('input',e => {
    partnerpos2=e.target.value
})
$('#partner-pos-2-save').click(function(){
    $('#partner-pos-2-edit').hide()
    $('#partner-pos-2').removeClass('d-none')
    $('#partner-pos-2').html(partnerpos2)
})

// TÊN ĐỐI TÁC 3 
let partnername3
$('#partner-name-3').click(function(){
    $(this).toggleClass('d-none')
    $('#partner-name-3-edit').css("display","flex")
})
document.getElementById('partner-name-3-input').addEventListener('input',e => {
    partnername3=e.target.value
})
$('#partner-name-3-save').click(function(){
    $('#partner-name-3-edit').hide()
    $('#partner-name-3').removeClass('d-none')
    $('#partner-name-3').html(partnername3)
})

// VAI TRÒ ĐỐI TÁC 3
let partnerpos3
$('#partner-pos-3').click(function(){
    $(this).toggleClass('d-none')
    $('#partner-pos-3-edit').css("display","flex")
})
document.getElementById('partner-pos-3-input').addEventListener('input',e => {
    partnerpos3=e.target.value
})
$('#partner-pos-3-save').click(function(){
    $('#partner-pos-3-edit').hide()
    $('#partner-pos-3').removeClass('d-none')
    $('#partner-pos-3').html(partnerpos3)
})

// AVT CẢM NGHĨ 1
let avttestimonial1
const inputtestimonial1 = document.getElementById('avt-testimonial-1-input')
const imagetestimonial1 = document.getElementById('avt-testimonial-1');
inputtestimonial1.addEventListener('change', (e) => {
    if (e.target.files.length) {
        avttestimonial1 = URL.createObjectURL(e.target.files[0]);
        imagetestimonial1.src=avttestimonial1
    }
    $('#avt-testimonial-1-edit').hide()
    $('#avt-testimonial-1').removeClass('d-none')
});
$('#avt-testimonial-1').click(function(){
    $(this).toggleClass('d-none')
    $('#avt-testimonial-1-edit').css("display","flex")
})

// CẢM NGHĨ 1
let testimonial1
$('#testimonial-text-1').click(function(){
    $(this).toggleClass('d-none')
    $('#testimonial-text-1-edit').css("display","flex")
})
document.getElementById('testimonial-text-1-input').addEventListener('input',e => {
    testimonial1=e.target.value
})
$('#testimonial-text-1-save').click(function(){
    $('#testimonial-text-1-edit').hide()
    $('#testimonial-text-1').removeClass('d-none')
    $('#testimonial-text-1').html(testimonial1)
})

// TÊN NGƯỜI PHÁT BIỂU 1
let testimonialname1
$('#testimonial-name-1').click(function(){
    $(this).toggleClass('d-none')
    $('#testimonial-name-1-edit').css("display","flex")
})
document.getElementById('testimonial-name-1-input').addEventListener('input',e => {
    testimonialname1=e.target.value
})
$('#testimonial-name-1-save').click(function(){
    $('#testimonial-name-1-edit').hide()
    $('#testimonial-name-1').removeClass('d-none')
    $('#testimonial-name-1').html(testimonialname1)
})

// CHỨC DANH NGƯỜI PHÁT BIỂU 1
let testimonialpos1
$('#testimonial-pos-1').click(function(){
    $(this).toggleClass('d-none')
    $('#testimonial-pos-1-edit').css("display","flex")
})
document.getElementById('testimonial-pos-1-input').addEventListener('input',e => {
    testimonialpos1=e.target.value
})
$('#testimonial-pos-1-save').click(function(){
    $('#testimonial-pos-1-edit').hide()
    $('#testimonial-pos-1').removeClass('d-none')
    $('#testimonial-pos-1').html(testimonialpos1)
})

// REGISTRATION HEADING
let regheading
$('#reg-heading').click(function(){
    $(this).toggleClass('d-none')
    $('#reg-heading-edit').css("display","flex")
})
document.getElementById('reg-heading-input').addEventListener('input',e => {
    regheading=e.target.value
})
$('#reg-heading-save').click(function(){
    $('#reg-heading-edit').hide()
    $('#reg-heading').removeClass('d-none')
    $('#reg-heading').html(regheading)
})

// QUESTION 1
let question1
$('#question-1').click(function(){
    $(this).toggleClass('d-none')
    $('#question-1-edit').css("display","flex")
})
document.getElementById('question-1-input').addEventListener('input',e => {
    question1=e.target.value
})
$('#question-1-save').click(function(){
    $('#question-1-edit').hide()
    $('#question-1').removeClass('d-none')
    $('#question-1').html(question1)
})

// DIF 1 QUEST 1
let dif1
$('#dif-1').click(function(){
    $(this).toggleClass('d-none')
    $('#dif-1-edit').css("display","flex")
})
document.getElementById('dif-1-input').addEventListener('input',e => {
    dif1=e.target.value
})
$('#dif-1-save').click(function(){
    $('#dif-1-edit').hide()
    $('#dif-1').removeClass('d-none')
    $('#dif-1').html(dif1)
})

// DIF 2 QUEST 1
let dif2
$('#dif-2').click(function(){
    $(this).toggleClass('d-none')
    $('#dif-2-edit').css("display","flex")
})
document.getElementById('dif-2-input').addEventListener('input',e => {
    dif2=e.target.value
})
$('#dif-2-save').click(function(){
    $('#dif-2-edit').hide()
    $('#dif-2').removeClass('d-none')
    $('#dif-2').html(dif2)
})

// DIF 3 QUEST 1
let dif3
$('#dif-3').click(function(){
    $(this).toggleClass('d-none')
    $('#dif-3-edit').css("display","flex")
})
document.getElementById('dif-3-input').addEventListener('input',e => {
    dif3=e.target.value
})
$('#dif-3-save').click(function(){
    $('#dif-3-edit').hide()
    $('#dif-3').removeClass('d-none')
    $('#dif-3').html(dif3)
})

// DIF 4 QUEST 1
let dif4
$('#dif-4').click(function(){
    $(this).toggleClass('d-none')
    $('#dif-4-edit').css("display","flex")
})
document.getElementById('dif-4-input').addEventListener('input',e => {
    dif4=e.target.value
})
$('#dif-4-save').click(function(){
    $('#dif-4-edit').hide()
    $('#dif-4').removeClass('d-none')
    $('#dif-4').html(dif4)
})

// DIF 5 QUEST 1
let dif5
$('#dif-5').click(function(){
    $(this).toggleClass('d-none')
    $('#dif-5-edit').css("display","flex")
})
document.getElementById('dif-5-input').addEventListener('input',e => {
    dif5=e.target.value
})
$('#dif-5-save').click(function(){
    $('#dif-5-edit').hide()
    $('#dif-5').removeClass('d-none')
    $('#dif-5').html(dif5)
})

// QUY MO CAU HOI
let scale
$('#scale-quest').click(function(){
    $(this).toggleClass('d-none')
    $('#scale-quest-edit').css("display","flex")
})
document.getElementById('scale-quest-input').addEventListener('input',e => {
    scale=e.target.value
})
$('#scale-quest-save').click(function(){
    $('#scale-quest-edit').hide()
    $('#scale-quest').removeClass('d-none')
    $('#scale-quest').html(scale)
})

// QUY MO DAP AN 1
let scaleans1
$('#scale-ans-1').click(function(){
    $(this).toggleClass('d-none')
    $('#scale-ans-1-edit').css("display","flex")
})
document.getElementById('scale-ans-1-input').addEventListener('input',e => {
    scaleans1=e.target.value
})
$('#scale-ans-1-save').click(function(){
    $('#scale-ans-1-edit').hide()
    $('#scale-ans-1').removeClass('d-none')
    $('#scale-ans-1').html(scaleans1)
})

// QUY MO DAP AN 2
let scaleans2
$('#scale-ans-2').click(function(){
    $(this).toggleClass('d-none')
    $('#scale-ans-2-edit').css("display","flex")
})
document.getElementById('scale-ans-2-input').addEventListener('input',e => {
    scaleans2=e.target.value
})
$('#scale-ans-2-save').click(function(){
    $('#scale-ans-2-edit').hide()
    $('#scale-ans-2').removeClass('d-none')
    $('#scale-ans-2').html(scaleans2)
})

// QUY MO DAP AN 3
let scaleans3
$('#scale-ans-3').click(function(){
    $(this).toggleClass('d-none')
    $('#scale-ans-3-edit').css("display","flex")
})
document.getElementById('scale-ans-3-input').addEventListener('input',e => {
    scaleans3=e.target.value
})
$('#scale-ans-3-save').click(function(){
    $('#scale-ans-3-edit').hide()
    $('#scale-ans-3').removeClass('d-none')
    $('#scale-ans-3').html(scaleans3)
})

// TEXT AREA QUEST
let textareaquest
$('#textarea-quest').click(function(){
    $(this).toggleClass('d-none')
    $('#textarea-quest-edit').css("display","flex")
})
document.getElementById('textarea-quest-input').addEventListener('input',e => {
    textareaquest=e.target.value
})
$('#textarea-quest-save').click(function(){
    $('#textarea-quest-edit').hide()
    $('#textarea-quest').removeClass('d-none')
    $('#textarea-quest').html(textareaquest)
})

// TIÊU ĐỀ GIẢI PHÁP DỊCH VỤ
let benefitheading
$('#benefit-text').click(function(){
    $(this).toggleClass('d-none')
    $('#benefit-text-edit').css("display","flex")
})
document.getElementById('benefit-text-input').addEventListener('input',e => {
    benefitheading=e.target.value
})
$('#benefit-text-save').click(function(){
    $('#benefit-text-edit').hide()
    $('#benefit-text').removeClass('d-none')
    $('#benefit-text').html(benefitheading)
})

// GIẢI PHÁP 1
let sol1
$('#sol-1').click(function(){
    $(this).toggleClass('d-none')
    $('#sol-1-edit').css("display","flex")
})
document.getElementById('sol-1-input').addEventListener('input',e => {
    sol1=e.target.value
})
$('#sol-1-save').click(function(){
    $('#sol-1-edit').hide()
    $('#sol-1').removeClass('d-none')
    $('#sol-1').html(sol1)
})

// GIẢI PHÁP 2
let sol2
$('#sol-2').click(function(){
    $(this).toggleClass('d-none')
    $('#sol-2-edit').css("display","flex")
})
document.getElementById('sol-2-input').addEventListener('input',e => {
    sol2=e.target.value
})
$('#sol-2-save').click(function(){
    $('#sol-2-edit').hide()
    $('#sol-2').removeClass('d-none')
    $('#sol-2').html(sol2)
})

// GIẢI PHÁP 3
let sol3
$('#sol-3').click(function(){
    $(this).toggleClass('d-none')
    $('#sol-3-edit').css("display","flex")
})
document.getElementById('sol-3-input').addEventListener('input',e => {
    sol3=e.target.value
})
$('#sol-3-save').click(function(){
    $('#sol-3-edit').hide()
    $('#sol-3').removeClass('d-none')
    $('#sol-3').html(sol3)
})

// GIẢI PHÁP 4
let sol4
$('#sol-4').click(function(){
    $(this).toggleClass('d-none')
    $('#sol-4-edit').css("display","flex")
})
document.getElementById('sol-4-input').addEventListener('input',e => {
    sol4=e.target.value
})
$('#sol-4-save').click(function(){
    $('#sol-4-edit').hide()
    $('#sol-4').removeClass('d-none')
    $('#sol-4').html(sol4)
})

// GIẢI PHÁP 5
let sol5
$('#sol-5').click(function(){
    $(this).toggleClass('d-none')
    $('#sol-5-edit').css("display","flex")
})
document.getElementById('sol-5-input').addEventListener('input',e => {
    sol5=e.target.value
})
$('#sol-5-save').click(function(){
    $('#sol-5-edit').hide()
    $('#sol-5').removeClass('d-none')
    $('#sol-5').html(sol5)
})

// TIÊU ĐỀ PHẦN ẢNH TƯ LIỆU
let imgdocs
$('#imgs-title').click(function(){
    $(this).toggleClass('d-none')
    $('#imgs-title-edit').css("display","flex")
})
document.getElementById('imgs-title-input').addEventListener('input',e => {
    imgdocs=e.target.value
})
$('#imgs-title-save').click(function(){
    $('#imgs-title-edit').hide()
    $('#imgs-title').removeClass('d-none')
    $('#imgs-title').html(imgdocs)
})

// ẢNH TƯ LIỆU 1
let imgdata1
const inputimgdata1 = document.getElementById('img-data-1-input')
const imagedata1 = document.getElementById('img-data-1');
inputimgdata1.addEventListener('change', (e) => {
    if (e.target.files.length) {
        imgdata1 = URL.createObjectURL(e.target.files[0]);
        imagedata1.src=imgdata1
    }
    $('#img-data-1-edit').hide()
    $('#img-data-1').removeClass('d-none')
});
$('#img-data-1').click(function(){
    $(this).toggleClass('d-none')
    $('#img-data-1-edit').css("display","flex")
})

// ẢNH TƯ LIỆU 2
let imgdata2
const inputimgdata2 = document.getElementById('img-data-2-input')
const imagedata2 = document.getElementById('img-data-2');
inputimgdata2.addEventListener('change', (e) => {
    if (e.target.files.length) {
        imgdata2 = URL.createObjectURL(e.target.files[0]);
        imagedata2.src=imgdata2
    }
    $('#img-data-2-edit').hide()
    $('#img-data-2').removeClass('d-none')
});
$('#img-data-2').click(function(){
    $(this).toggleClass('d-none')
    $('#img-data-2-edit').css("display","flex")
})

// ẢNH TƯ LIỆU 3
let imgdata3
const inputimgdata3 = document.getElementById('img-data-3-input')
const imagedata3 = document.getElementById('img-data-3');
inputimgdata3.addEventListener('change', (e) => {
    if (e.target.files.length) {
        imgdata3 = URL.createObjectURL(e.target.files[0]);
        imagedata3.src=imgdata3
    }
    $('#img-data-3-edit').hide()
    $('#img-data-3').removeClass('d-none')
});
$('#img-data-3').click(function(){
    $(this).toggleClass('d-none')
    $('#img-data-3-edit').css("display","flex")
})

// ẢNH TƯ LIỆU 4
let imgdata4
const inputimgdata4 = document.getElementById('img-data-4-input')
const imagedata4 = document.getElementById('img-data-4');
inputimgdata4.addEventListener('change', (e) => {
    if (e.target.files.length) {
        imgdata4 = URL.createObjectURL(e.target.files[0]);
        imagedata4.src=imgdata4
    }
    $('#img-data-4-edit').hide()
    $('#img-data-4').removeClass('d-none')
});
$('#img-data-4').click(function(){
    $(this).toggleClass('d-none')
    $('#img-data-4-edit').css("display","flex")
})

// ẢNH TƯ LIỆU 5
let imgdata5
const inputimgdata5 = document.getElementById('img-data-5-input')
const imagedata5 = document.getElementById('img-data-5');
inputimgdata5.addEventListener('change', (e) => {
    if (e.target.files.length) {
        imgdata5 = URL.createObjectURL(e.target.files[0]);
        imagedata5.src=imgdata5
    }
    $('#img-data-5-edit').hide()
    $('#img-data-5').removeClass('d-none')
});
$('#img-data-5').click(function(){
    $(this).toggleClass('d-none')
    $('#img-data-5-edit').css("display","flex")
})

// ẢNH TƯ LIỆU 6
let imgdata6
const inputimgdata6 = document.getElementById('img-data-6-input')
const imagedata6 = document.getElementById('img-data-6');
inputimgdata6.addEventListener('change', (e) => {
    if (e.target.files.length) {
        imgdata6 = URL.createObjectURL(e.target.files[0]);
        imagedata6.src=imgdata6
    }
    $('#img-data-6-edit').hide()
    $('#img-data-6').removeClass('d-none')
});
$('#img-data-6').click(function(){
    $(this).toggleClass('d-none')
    $('#img-data-6-edit').css("display","flex")
})

// TIÊU ĐỀ PHẦN ẢNH TƯ LIỆU
let contactinfo
$('#contact_info').click(function(){
    $(this).toggleClass('d-none')
    $('#contact_info-edit').css("display","flex")
})
document.getElementById('contact_info-input').addEventListener('input',e => {
    contactinfo=e.target.value
})
$('#contact_info-save').click(function(){
    $('#contact_info-edit').hide()
    $('#contact_info').removeClass('d-none')
    $('#contact_info').html(contactinfo)
})

// ĐỊA CHỈ
let localeinfo
$('#info-locale').click(function(){
    $(this).toggleClass('d-none')
    $('#info-locale-edit').css("display","flex")
})
document.getElementById('info-locale-input').addEventListener('input',e => {
    localeinfo=e.target.value
})
$('#info-locale-save').click(function(){
    $('#info-locale-edit').hide()
    $('#info-locale').removeClass('d-none')
    $('#info-locale').html(localeinfo)
})

// EMAIL
let emailinfo
$('#info-email').click(function(){
    $(this).toggleClass('d-none')
    $('#info-email-edit').css("display","flex")
})
document.getElementById('info-email-input').addEventListener('input',e => {
    emailinfo=e.target.value
})
$('#info-email-save').click(function(){
    $('#info-email-edit').hide()
    $('#info-email').removeClass('d-none')
    $('#info-email').html(emailinfo)
})

// PHONENUMBER
let telinfo
$('#info-tel').click(function(){
    $(this).toggleClass('d-none')
    $('#info-tel-edit').css("display","flex")
})
document.getElementById('info-tel-input').addEventListener('input',e => {
    telinfo=e.target.value
})
$('#info-tel-save').click(function(){
    $('#info-tel-edit').hide()
    $('#info-tel').removeClass('d-none')
    $('#info-tel').html(telinfo)
})

$('.checkbox-content').on('click',function(){
    let currentId=$(this).attr("id").slice(0,-6)
    if($(this).is(':checked')){
        $(`#${currentId}`).hide()
    }else{
        $(`#${currentId}`).show()
    }
})

$('#business-logo').click(function(){
    $(this).toggleClass('d-none')
    $('#business-logo-edit').css("display","flex")
})
// LINK WEBSITE
let linkbl
$('#link-bl').click(function(){
    $(this).toggleClass('d-none')
    $('#link-bl-edit').css("display","flex")
})
document.getElementById('link-bl-input').addEventListener('input',e => {
    linkbl=e.target.value
    document.getElementById('bl-link').href = linkbl

})
$('#link-bl-save').click(function(){
    $('#link-bl-edit').hide()
    $('#link-bl').removeClass('d-none')
    $('#link-bl').html(linkbl)
})

// LOGO PERSON 
let personallogo 
const inputperlogo = document.getElementById('personal-logo-input')
const imageperlogo = document.getElementById('personal-logo');
inputperlogo.addEventListener('change', (e) => {
    if (e.target.files.length) {
        personallogo = URL.createObjectURL(e.target.files[0]);
        imageperlogo.src=personallogo
    }
    $('#personal-logo').removeClass('d-none')
    $('#personal-logo-edit').hide()
});
$('#personal-logo').click(function(){
    $(this).toggleClass('d-none')
    $('#personal-logo-edit').css("display","flex")
})
// JSON 


// LƯU TẤT CẢ THAY ĐỔI + GỬI DATA 
$('#save-change').on('click',function(){
    let home = document.getElementById('home').outerHTML
    let schedule = document.getElementById('schedule').outerHTML
    let subscribe = document.getElementById('subscribe').outerHTML
    let speaker = document.getElementById('speaker').outerHTML
    let testimonial = document.getElementById('testimonial').outerHTML
    let reg = document.getElementById('reg').outerHTML
    let faq = document.getElementById('faq').outerHTML
    let map = document.getElementById('map').outerHTML
    const payload = {
        htmlString: [
            {
                name:'home',
                html: home,
                show: true,
            },
            {
                name:'schedule',
                html: schedule,
                show: true,
            },
            {
                name:'subscribe',
                html: subscribe,
                show: true,
            },
            {
                name:'speaker',
                html: speaker,
                show: true,
            },
            {
                name:'testimonial',
                html: testimonial,
                show: true,
            },
            {
                name:'reg',
                html: reg,
                show: true,
            },
            {
                name:'faq',
                html: faq,
                show: true,
            },
            {
                name:'map',
                html: map,
                show: true,
            },
        ],
        acc:acc,
    }   

})

// LƯU ẢNH PHẦN HOME -> LOGO BUSINESS
let logoBusiness 
const inputLogo = document.getElementById('business-logo-input')
const imageLogo = document.getElementById('business-logo');
inputLogo.addEventListener('change', (e) => {
    if (e.target.files.length) {
        logoBusiness = URL.createObjectURL(e.target.files[0]);
        imageLogo.src=logoBusiness
    }
    $('#business-logo').removeClass('d-none')
    $('#business-logo-edit').hide()
    
    const homeFormData = new FormData()
    homeFormData.append('file', e.target.files[0])
    homeFormData.append('section', 'home')
    homeFormData.append('acc', acc)
    $.ajax({
        method:"POST",
        url:'',
        data: homeFormData,
    })
        .done(function(msg){
            console.log('msg',msg);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log('fail');
        });
    // call api
    // imagelogo.src = res json link anhr
});