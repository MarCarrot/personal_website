$(document).ready(function() {
    console.log("val = " + sessionStorage.getItem("dark_mode") + ".");
    if (sessionStorage.getItem("dark_mode") == "enabled") {
        dark_mode = true;
        turnOnDarkMode();
    } else {
        dark_mode = false;
    }
})

$(document).ready(function () {
    $("button").click(function () {
        if (dark_mode) {
            sessionStorage.setItem('dark_mode', 'disabled');
            turnOffDarkMode();
        } else {
            sessionStorage.setItem('dark_mode', 'enabled');
            turnOnDarkMode();
        }
        dark_mode = !dark_mode;
    });
});

$(document).ready(function () {
    $("[id=icon]").hover(function () {
        $(this).addClass("enlarge");
    }, function() {
        $(this).removeClass("enlarge");
    })
})

function turnOffDarkMode() {
    console.log("Turning off dark mode...");
    $("p, h1, h3, bubble, li, h5").removeClass("dark");
    $("body").removeClass("dark-background");
    $("nav").removeClass("dark-nav");
    $("button").removeClass("night-light-off");
    $("button").html("<i class=\"fas fa-moon\"></i>");
    $(".external").removeClass("external-dark");
}

function turnOnDarkMode() {
    console.log("Turning on dark mode...");
    $("p, h1, h3, bubble, li, h5").addClass("dark");
    $("body").addClass("dark-background");
    $("nav").addClass("dark-nav");
    $("button").html("<i class=\"fas fa-sun\"></i>");
    $("button").addClass("night-light-off");
    $(".external").addClass("external-dark");
}

