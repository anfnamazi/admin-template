$(".button-collapse").sideNav();

let dropDown = $(".collapsible")
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
dropDown[i].click(function () {
    if ($(".collapsible-header").hasClass("active")) {
        $(".collapsible-icon").addClass("move-up-icon");
    } else {
        $(".collapsible-icon").removeClass("move-up-icon");
    }
});
