$(document).ready(function(){
    $(".minus:eq(0)").click(function(){
        $(".minus:eq(0)").hide();
        $(".plus:eq(0)").show();
        $(".experience .tohide").hide();
    });
    $(".plus:eq(0)").click(function(){
        $(".minus:eq(0)").show();
        $(".plus:eq(0)").hide();
        $(".experience .tohide").show();
    });


    $(".minus:eq(1)").click(function(){
        $(".minus:eq(1)").hide();
        $(".plus:eq(1)").show();
        $(".skill .tohide").hide();
    });
    $(".plus:eq(1)").click(function(){
        $(".minus:eq(1)").show();
        $(".plus:eq(1)").hide();
        $(".skill .tohide").show();
    });

    $(".minus:eq(2)").click(function(){
        $(".minus:eq(2)").hide();
        $(".plus:eq(2)").show();
        $(".career .tohide").hide();
    });
    $(".plus:eq(2)").click(function(){
        $(".minus:eq(2)").show();
        $(".plus:eq(2)").hide();
        $(".training .tohide").show();
    });
});