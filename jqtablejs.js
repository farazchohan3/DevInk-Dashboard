// User Profile

$(document).ready(function(){

    $("#image").click(function(){
        $("#usrpfile").toggle(500);
    });

    $("body").dblclick(function(){
        $("#usrpfile").hide(500);
    });
});

// User Profile in mobile

$(document).ready(function(){

    $("#mblimg").click(function(){
        $("#usrpfile").toggle(500);
    });
});

// 2nd Asidebar

$(document).ready(function () {
     $("#openaside").click(function(){
         $("#inasidebar").addClass("active");
     });

     $("#rembtn").click(function(){
         $("#inasidebar").removeClass("active");
     });

    });


$(document).ready( function () {
    $('#mytable').DataTable();
} );