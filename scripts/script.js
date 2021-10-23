
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

$("#contact-methods").css({border: "2px solid blue"})
.next().css({border: "2px solid green"})
.closest("section").css({border: "2px solid red"});










