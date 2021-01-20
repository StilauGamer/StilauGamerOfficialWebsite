var navbar = document.getElementById('text1');

function test() {
    navbar.remove();
}

$(window).resize(function() {
    if($(window).width() > 768) {
        navbar.remove();
    }
});