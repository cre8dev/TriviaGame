$(document).ready(function () {
    var counter = $(".round");
    var timer = $(".item");
    var screen = $("#quizScreen");
    var titleLogo = $("<img>").attr("src", "./assets/images/trivia.png").css("margin", "100px 0 40px");
    var startBtn = $("<button type='button' class='btn btn-danger hvr-pulse-grow'>CLICK HERE TO START</button>");
    screen.html(titleLogo).append(startBtn);

    var round = $("")

    var qa = [
        ["ONE JUMP AHEAD OF THE __________, ONE SKIP AHEAD OF MY DOOM", "Law-men", "Slowpokes", "Bread line", "Flock", 2],
        ["I KNOW YOU, THE GLEAM IN YOUR EYES IS SO FAMILIAR A __________", "Stream", "Beam", "Dream", "Gleam", 4],
        ["I WANNA KNOW, CAN YOU ________ ME, I WANNA KNOW ABOUT THESE STRANGERS LIKE ME", "Tell", "Take", "Show", "Bring", 3],
        ["WHY IS MY REFLECTION SOMEONE I _________ __________", "Can't hide", "Won't be", "Can't see", "Don't know", 4],
        ["JUST AROUND THE RIVERBEND, BEYOND THE SHORE, WHERE THE _________ FLY FREE", "Gulls", "Birds", "Fish", "Waves", 1],
        ["BUT NOW HE'S _________, AND SO UNSURE, I WONDER WHY I DIDN'T SEE IT THERE BEFORE", "Kind", "Nice", "Dear", "Here", 3],
        ["SHA LA LA LA LA LA, DON'T BE SCARED, YOU GOT __________ _________ PREPARED", "The mood", "It all", "Her heart", "This thing", 1],
        ["NOW I'M THE KING OF THE _________ OH, THE JUNGLE VIP", "Forest", "Swingers", "Jungle", "Dancers", 2],
        ["LIKE A __________ IN THE SKY, YOU CAN FLY! YOU CAN FLY! YOU CAN FLY!", "Rainbow", "Eagle", "Reindeer", "Fairy", 3],
        ["IT AIN'T NO TRICK TO GET RICH QUICK IF YOU __________ __________ _________ WITH A SHOVEL OR A PICK", "Work work work", "Dig dig dig", "Good good good", "Quick quick quick", 2],
        ["SO SHE'S A BIT OF A FIXER-UPPER, HER BRAIN'S A BIT __________", "Below", "Amidst", "Betwixt", "Between", 3],
        ["WINNIE THE POOH, WINNIE THE POOH, CHUBBY LITTLE _________ ALL STUFFED WITH FLUFF", "Cubby", "Teddy", "Buddy", "Tubby", 1],
        ["HE SHOWED THE __________, BRAINS, AND SPUNK, FROM ZERO TO HERO, A MAJOR HUNK", "Bravery", "Moxie", "Courage", "Gusto", 2],
        ["I'VE SEEN A FRONT PORCH SWING, HEARD A DIAMOND RING, I'VE SEEN A __________ __________ RAILROAD TIE", "Zig zag", "20 cent", "Bright blue", "Polka dot", 4],
        ["CAN YOU FEEL THE LOVE TONIGHT, THE __________ THE EVENING BRINGS", "Peace", "Joy", "Rest", "Calm", 1]
    ]; // ♫

    var qNum = 0;
    var initialOffset = 314;

    startBtn.on("click", function () {
        screen.empty();
        counter.css("display","block");
        timer.css("display","block");
        stopwatch.start();
    });

    var interval;

    var clockRunning = false;

    var stopwatch = {
        time: 0,
        endTime: 10,
        i: 1,
        reset: function () {
        },
        start: function () {
            $('.circle_animation').css('stroke-dashoffset', initialOffset - (1 * (initialOffset / stopwatch.endTime)));
            $('.circle_animation2').css('stroke-dashoffset', initialOffset - ((qNum + 1) * (initialOffset / 15)));
            $('#roundNum').text(qNum + 1);
            i = 0;
            stopwatch.time = 0;
            if (!clockRunning) {
                interval = setInterval(stopwatch.count, 1000);
                clockRunning = true;
            }
        },
        stop: function () {
            clearInterval(interval);
            clockRunning = false;
            qNum++;
            if (qNum < 15) {
                stopwatch.start();
            }
        },
        count: function () {
            $('#timeNum').text(stopwatch.endTime - i);
            if (i == stopwatch.endTime) {
                stopwatch.stop();
                return;
            };
            $('.circle_animation').css('stroke-dashoffset', initialOffset - ((i + 1) * (initialOffset / stopwatch.endTime)));
            i++;
        }
    }


    /* Need initial run as interval hasn't yet occured... */

});