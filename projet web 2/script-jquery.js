$(document).ready(function() {
    // Page Parallax
    $(document).on('mousemove', function(e) {
        let ax = -($(window).innerWidth() / 2 - e.pageX) / 100;
        let ay = ($(window).innerHeight() / 2 - e.pageY) / 100;
        $('#main-wrapper').css('transform', `rotateY(${ax}deg) rotateX(${ay}deg)`);
    });

    // Toggle Chat
    $(document).on('click', '.chat-button', function() {
        $('#chatBox').fadeToggle(300);
    });

    // Formation Accordion
    $(document).on('click', '.formation .title', function() {
        $(".formation .content").not($(this).next()).slideUp();
        $(this).next().slideToggle();
    });

    // About Reveal on Scroll
    $(window).on('scroll', function() {
        let aboutPos = $("#abou").offset()?.top;
        if ($(window).scrollTop() + $(window).height() > aboutPos + 100) {
            $(".about-card").addClass("show");
        }
    });
});

$(document).on('mousemove', '.highlight-with-img', function(e) {
    // تحديد مكان السهم وزيادة شوية ديال المسافة (20px) باش ماتغطيش على السهم
    let x = e.clientX + 20; 
    let y = e.clientY + 20;

    $(this).find('.hover-img').css({
        left: x + 'px',
        top: y + 'px'
    });
});

$(document).ready(function() {
    // ... الكود اللي عندك قبل ...

    $(window).on('scroll', function() {
        let skillsSection = $('#skills');
        if (skillsSection.length) {
            let topPosition = skillsSection.offset().top - window.innerHeight + 100;

            if ($(window).scrollTop() > topPosition) {
                // هادي هي الأنيميشن اللي طلب البروف
                $('.progress-line').each(function() {
                    let targetWidth = $(this).attr('data-per');
                    $(this).find('.progress-fill').css('width', targetWidth);
                });
            }
        }
    });
});

// في ملف script-jquery.js (وسط $(document).ready)
$(window).on('scroll', function() {
    let skillsSection = $('#skills'); // تأكد أن ID مسما "skills"
    
    if (skillsSection.length) {
        // حساب المسافة من الفوق (كنزيدو window.innerHeight باش الأنيميشن تبدا فاش تبان السكشن في الشاشة)
        let topPosition = skillsSection.offset().top - window.innerHeight + 100;

        // إلا وصلنا لهاديك البلاصة بالسكرول
        if ($(window).scrollTop() > topPosition) {
            $('.progress-fill-futu').each(function() {
                let targetWidth = $(this).attr('data-per'); // كيجيب النسبة المئوية
                $(this).css('width', targetWidth); // كيعمر البار
            });
        }
    }
});
