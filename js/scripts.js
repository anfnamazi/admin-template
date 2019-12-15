$(".button-collapse").sideNav();

let collapsible = $('.collapsible')
let collapsibleHeader = $(".collapsible-header")
let collapsibleIcon = $(".collapsible-icon")

for (let i = 0; i < collapsible.length; i++) {
    $(collapsible[i]).click(function () {
        if ($(collapsibleHeader[i]).hasClass("active")) {
            $(collapsibleIcon[i]).addClass("move-up-icon")
        } else {
            $(collapsibleIcon[i]).removeClass("move-up-icon")
        }
    })
}

