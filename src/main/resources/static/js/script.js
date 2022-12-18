$(document).ready(function () {
    $(".sign-in").fadeOut(0);
    $(".info__to-sign-in").on("click", function () {
        $(".overlay").removeClass("toggle-overlay");
        $(".overlay-main").removeClass("toggle-overlay-inside");
        $(".sign-up").fadeIn(750);
        $(".sign-in").fadeOut(750);
    });
    $(".info__to-sign-up").on("click", function () {
        $(".overlay").addClass("toggle-overlay");
        $(".overlay-main").addClass("toggle-overlay-inside");
        $(".sign-in").fadeIn(750);
        $(".sign-up").fadeOut(750);
    });

    let myData;

    $.mask.definitions["h"] = "[0-9]";
    $.mask.definitions["9"] = ""
    $("#phone").mask("+7 (hhh)hhh-hh-hh");

    $.getJSON("js/countries.json", function (data) {
        myData = data;
        $.each(myData, function (index, country){
            $("#country").append("<option value=\"" + index + "\">" + country["name"] + "</option>");
        });
    });

    $(".country").change(function (){
        $.each(myData, function (index, country){
            if(country["name"] === $(".country option:selected").text()) {
                $("#phone").mask(country["dial_code"] + " (hhh)hhh-hh-hh");
                $("#phone").attr("placeholder", country["dial_code"]);
            }
        });
    });

    $.validator.addMethod("EMAIL", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
    }, "Please enter a valid email address.");

    $.validator.addMethod("PASSWORD",function(value,element){
        return this.optional(element) || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/i.test(value);
    },"8-16 symbols, at least 1 uppercase, lowercase, number");

    $.validator.addMethod("SUBMIT",function(value,element){
        return this.optional(element) || /[^ ]/i.test(value);
    },"You did not click the submit button.");

    $(".sign-up").validate({
        rules: {
            userEmail: {
                required: true,
                email: true,
                EMAIL: true
            },
            pword: {
                required: true,
                PASSWORD: true
            }
        },
        errorClass: "errorMsg"
    });

    $(".sign-in").validate({
        rules: {
            userEmail: {
                required: true,
                email: true,
                EMAIL: true
            },
            pword: {
                required: true,
                PASSWORD: true
            }
        },
        errorClass: "errorMsg"
    });

});