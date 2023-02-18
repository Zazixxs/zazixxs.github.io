function burgerMenuMobile() {
    jQuery(".burger").click(function() {
        jQuery(".mobilemenushow").toggleClass("open");
        jQuery(".burger").toggleClass("opened");
        jQuery(".mobilemenushow").slideToggle("");
        jQuery(".mobilemenu").toggleClass("opened");
    });
    jQuery(".mobilearrow1").detach().appendTo(".mobilemenulist li.menu-item-has-children");
    jQuery(".mobilemenulist li.menu-item-has-children .mobilearrow1").click(function(event) {
        /*event.preventDefault();*/
        jQuery(this).parent().find("ul").first().slideToggle();
        jQuery(this).parent().toggleClass("opened");
    });
    jQuery(".mobilemenulist .sub-menu a").click(function(event) {
        event.stopPropagation();
    });
}

jQuery(document).ready(function() {
    burgerMenuMobile();
});