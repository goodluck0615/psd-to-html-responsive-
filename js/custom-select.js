    $(".selector select").each(function() {
        var obj = $(this);
        if (obj.parent().children(".custom-select").length < 1) {
            obj.after("<span class='custom-select'>" + obj.children("option:selected").html() + "</span>");
            
            if (obj.hasClass("white-bg")) {
                obj.next("span.custom-select").addClass("white-bg");
            }
            if (obj.hasClass("full-width")) {
                //obj.removeClass("full-width");
                //obj.css("width", obj.parent().width() + "px");
                //obj.next("span.custom-select").css("width", obj.parent().width() + "px");
                obj.next("span.custom-select").addClass("full-width");
            }
        }
    });
    $("body").on("change", ".selector select", function() {
        if ($(this).next("span.custom-select").length > 0) {
            $(this).next("span.custom-select").text($(this).children("option:selected").text());
        }
    });
    
    $("body").on("keydown", ".selector select", function() {
        if ($(this).next("span.custom-select").length > 0) {
            $(this).next("span.custom-select").text($(this).children("option:selected").text());
        }

    });


function setFooterMenuHeight() {
    var maxHeight = 0;
    $(".footer-middle .container .row > ul > li").each(function(){
        var tempHeight = $(this).outerHeight();
        if ( maxHeight < tempHeight )
            maxHeight = tempHeight;
    });
    $(".footer-middle .container .row > ul > li").outerHeight( maxHeight );    
}

setFooterMenuHeight();


   