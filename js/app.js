$(document).ready(function(){
    $(".minus:eq(0)").click(function(){
        $(".minus:eq(0)").hide();
        $(".plus:eq(0)").show();
        $(".experience .tohide").hide();
        $(".career:eq(0) h2").css("top","0").css("left","5px");
    });
    $(".plus:eq(0)").click(function(){
        $(".minus:eq(0)").show();
        $(".plus:eq(0)").hide();
        $(".experience .tohide").show();
        $(".career:eq(0) h2").css("top","-50px").css("left","-50px");
    });


    $(".minus:eq(1)").click(function(){
        $(".minus:eq(1)").hide();
        $(".plus:eq(1)").show();
        $(".skill .tohide").hide();
        $(".career:eq(1) h2").css("top","0").css("left","5px");
    });
    $(".plus:eq(1)").click(function(){
        $(".minus:eq(1)").show();
        $(".plus:eq(1)").hide();
        $(".skill .tohide").show();
        $(".career:eq(1) h2").css("top","-50px").css("left","-50px");
    });

    $(".minus:eq(2)").click(function(){
        $(".minus:eq(2)").hide();
        $(".plus:eq(2)").show();
        $(".training .tohide").hide();
        $(".career:eq(2) h2").css("top","0").css("left","5px");
    });
    $(".plus:eq(2)").click(function(){
        $(".minus:eq(2)").show();
        $(".plus:eq(2)").hide();
        $(".training .tohide").show();
        $(".career:eq(2) h2").css("top","-50px").css("left","-50px");
    });
});