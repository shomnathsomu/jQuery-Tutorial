
// //////////////////////////////
// ////// jQuery Load Test //////
// //////////////////////////////

// $(document).ready(function(){
//     alert("jQuery Loaded!");
// });

// //////////////////////////////
// ////// jQuery Selectors //////
// //////////////////////////////

// $("h3").css({border: "1px solid blue"});
// $(".wrapper").css({border: "1px solid red"});
// $("#clients").css({border: "1px solid green"});

// jQuery Filters
// $("header nav li:first").css({border: "2px solid red"});
// $("header nav li:last").css({border: "2px solid red"});

// $("#contact h2:first-child").css({border: "2px solid blue"});
// $("#contact ul:first-child").css({border: "2px solid blue"});
// $("#contact ul:last").css({border: "2px solid blue"});

// $("header nav li:even").css({border: "2px solid blue"});
// $("header nav li:odd").css({border: "2px solid yellow"});

// $("section:not('#contact')").css({border: "2px solid green"});

// $("#social-nav li:lt(2)").css({background: "rgba(0, 0, 255, 0.4)"});
// $("#social-nav li:gt(2)").css({background: "rgba(0, 255, 0, 0.5)"});

// $("div[class]").css({border: "2px solid pink"});
// $("img[alt=e-commerce]").css({border: "2px solid red"});

// ////////////////////////////////////////////
// ////// Traversing the DOM with jQuery //////
// ////////////////////////////////////////////

// $("#contact-methods").next().css({border: "2px solid blue"});
// $("img[alt=map]").prev().css({border: "2px solid red"});

// $(".banner-title").parent().css({border: "3px solid red"});
// $("#social-nav").children().css({border: "2px solid green"});

// $("#contact").find(".twitter").css({border: "2px solid purple", background: "yellow"});
// $(".facebook").closest("section").css({border: "2px solid black"});


// ////////////////////////////////////////////
// ///////////// jQuery Chaining //////////////
// ////////////////////////////////////////////

// $("#contact-methods").css({border: "2px solid blue"})
// .next().css({border: "2px solid green"})
// .closest("section").css({border: "2px solid red"});


// ////////////////////////////////////////////
// ////// Adding Content using jQuery  ////////
// ////////////////////////////////////////////

var tweet = "<div style='margin: 20px 0; padding: 10px; background: #eee;'>The Big Fight Live: Ham vs Cheese</div>";
var tweetText = "Hello world!";

// $("#tweets div").append(tweet);
// $("#tweets div p").prepend(tweet);
// $("#tweets div p").after(tweet);
// $("#tweets div").html(tweet);
// $("#tweets div p").text(tweetText);

// ////////////////////////////////////////////
// ///////// Wrap and Unwrap elements  ////////
// ////////////////////////////////////////////

// $("section").wrap("<div>");
// $("section").unwrap();
// $("section").wrapAll("<div>");

// var wrapper = "<div class='wrapper'>";
// var button = $(".button");
// var wrapped = true;

// button[0].onclick = function(){
//     if(wrapped){
//         $("section").unwrap();
//         wrapped = false;
//         button.text("Wrap");
//     } else{
//         $("section").wrapAll(wrapper);
//         wrapped = true;
//         button.text("Unwrap");
//     }
// };

// ////////////////////////////////////////////
// /////////// Removing Content  //////////////
// ////////////////////////////////////////////

// empties the inner html of an element
// $(".button").empty();
// $("#points-of-sale").empty();

// removes the element completely
// $("#contact img").remove();
// $("#social-nav").css({top: "10px"});

// ////////////////////////////////////////////
// ///////// Changing Attributes  /////////////
// ////////////////////////////////////////////

$("#contact img").removeAttr("alt");
$("#contact img").attr("alt", "Location");
console.log($("#contact img").attr("src"));
