// Loader

window.onload=function(){
               document.getElementById('loader').style.display="none";
               document.getElementById('content').style.display="block"
          };


$(document).ready(function () {
    $('#example').DataTable();
});

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

// let list= document.querySelectorAll("#nevigation li");
// function activelink(){
//     list.forEach((item) =>
//         item.classList.remove('hovered'));
//         this.classList.add('hovered');

// }

// list.forEach((item) =>
// item.addEventListener('mouseover', activelink));

// Data Table

$(document).ready( function () {
    $('#mytable').DataTable();
} );

//************************************8 

// Brand Logo Carasoul

$('#owl1').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        550:{
            items:1
        },
        800:{
            items:1
        },
        1000:{
            items:1
        },
    },
});

// Line Chart

new Chart(document.getElementById("line-chart"), {
      type : 'line',
      data : {
        labels : [ 1500, 1600, 1700, 1750, 1800, 1850,
            1900, 1950, 1999, 2050 ],
        datasets : [
            {
              data : [ 500, 205, 1521, 1516, 2107,
                  2191, 3133, 3221, 4783, 5478 ],
              label : "America",
              borderColor : "#3cba9f",
              fill : true,
              backgroundColor: "rgba(0, 147,173 , 0.2)"
            },
            {
              data : [ 1282, 1350, 2411, 2502, 2635,
                  2809, 3947, 4402, 3700, 5267 ],
              label : "Europe",
              borderColor : "#e43202",
              fill : false
            } ]
      },

    options: {
    responsive:false,

    layout: {
            padding:0,
        },

        plugins: {
            legend: {
                display: false,
            },
        },
    },  
      
    });

// Doughnut Chart js


var xValues = ["Pakistan", "Turkey", "Indonasia"];
var yValues = [55, 25, 20,];
var barColors = [
  "green",
  "red",
  "blue"
];

new Chart("doughnut", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      // label: 'My First Dataset',
      backgroundColor: barColors,
      data: yValues,
       hoverOffset: 10,
       hoverBorderWidth: 2,
       hoverBorderColor:"yellow",
       // radius: 100 inner Gap
       // circumference: 360  circle rotation
       cutout:65
    }]
  },

  options: {
    responsive:false,

    layout: {
            padding: 20,
        },

        plugins: {
            legend: {
                display: false,
            }
        },
    }
});


// PieChart JS

var ctx = document.getElementById('piechart');

  new Chart(ctx, {
    type: "pie",
    data: {
      labels: ['Lahore', 'Karachi', 'Faisalabad'],
      datasets: [
        {
        data: [30, 15, 20],
        label: "No of Votes",
        backgroundColor:["red","blue","orange"],
        borderColor:["white"],
        borderWidth:1,
        hoverOffset: 10,
        hoverBorderWidth: 2,
       hoverBorderColor:"yellow"
        },
      ],
    },
    options: {
      responsive:false,

        layout:{
            padding:20
          // padding:{
          //   top:0,
          //   right:0,
          //   left:0,
          //   bottom:0,
          // },
        },
        plugins: {
        tooltip: {
        enabled: true,
        titleAlign:"center",
        bodyAlign: "center",
        backgroundColor:"white",
        titleColor:"black",
        bodyColor:"black",
        padding:10,
      },
       title:{
          display:false,
          position:"top",
          color:"blue",
          text:"Elections Results in Punjab",
        },
        // subtitle: {
        //         display: true,
        //         position:"left",
        //          color:"black",
        //         text: 'No of Votes',
        //     },

         legend:{
          display: false,
          position:"top",
        },
    },

     animation:{
          duration:2000,
          // easing:"easeInOutBounce",
        },

    },
  });