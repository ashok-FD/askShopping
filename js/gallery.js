document.addEventListener('keyup',function(e){
    if(e.keyCode == 27)
    window.location.reload();
})
$(document).ready(function() {

            $(".galleryImage1").hover(
              function() {
                $(".galleryImageCaption1").fadeOut(1000);
              },
              function() {
                $(".galleryImageCaption1").fadeIn(1000);
              }
            );
              $(".galleryImage2").hover(
                function() {
                  $(".galleryImageCaption2").fadeOut(1000);
                },
                function() {
                  $(".galleryImageCaption2").fadeIn(1000);
                }
              );
              $(".galleryImage3").hover(
                function() {
                  $(".galleryImageCaption3").fadeOut(1000);
                },
                function() {
                  $(".galleryImageCaption3").fadeIn(1000);
                }
              );
                $(".galleryImage4").hover(
              function() {
                $(".galleryImageCaption4").fadeOut(1000);
              },
              function() {
                $(".galleryImageCaption4").fadeIn(1000);
              }
            );
              $(".galleryImage5").hover(
                function() {
                  $(".galleryImageCaption5").fadeOut(1000);
                },
                function() {
                  $(".galleryImageCaption5").fadeIn(1000);
                }
              );
                $(".galleryImage6").hover(
                  function() {
                    $(".galleryImageCaption6").fadeOut(1000);
                  },
                  function() {
                    $(".galleryImageCaption6").fadeIn(1000);
                  }
                );
                $(".galleryImage7").hover(
                  function() {
                    $(".galleryImageCaption7").fadeOut(1000);
                  },
                  function() {
                    $(".galleryImageCaption7").fadeIn(1000);
                  }
                );
                  $(".galleryImage8").hover(
                    function() {
                      $(".galleryImageCaption8").fadeOut(1000);
                    },
                    function() {
                      $(".galleryImageCaption8").fadeIn(1000);
                    }
                  );
				
         });

         //Animation 
$(document).ready(function () {
    $("#part-2").click(function () {
        $("#order-2").show(2000);
        $("#part-2").hide();
    });
    $("#order-return").click(function(){
        $("#order-return").css("color","green");
    })
    $("#view-detail-1").click(function () {
        $("#card-content-1").toggle(1500);
        $(".del-1").toggle(2000);
        $(".shipment-1").toggle(2000);
        $(".old").toggle(2000);
        $("#old_img").hide();
    });
    $("#view-detail-2").click(function () {
        $("#card-content-2").toggle(1500);
        $("#product-name-2").fadeIn(3000);
        $("#product-name-2").fadeOut(3000);
    });
    $("#view-detail-3").click(function () {
        $("#card-content-3").toggle(1500);
        $("#product-name-3").fadeIn(3000);
        $("#product-name-3").fadeOut(3000);
    });
    $("#order-return").click(function () {
        $("#order-2").show(2000);
        $("#part-2").hide();
    });
    $("#specification").click(function(){
        $("#delivery-content").hide();
        $("#product-content").hide();
        $(".product-content-text").hide(1000);
        $("#specification-details").toggle(2000);
    })
    $("#delivery-text").click(function(){
        $("#specification-details").hide();
        $("#product-content").hide();
        $(".product-content-text").hide(1000);
        $("#delivery-content").toggle(2000);
    })
    $("#product-button").click(function(){
        $("#specification-details").hide();
        $(".product-content-text").hide(1000);
        $("#delivery-content").hide();
        $("#product-content").toggle(2000);
    })
});
//InnerHTML change function's
function show_1(){
    var x = document.getElementById("view-detail-1");
    if (x.innerHTML === "Order details") {
        x.innerHTML = "Close details";
    } else {
        x.innerHTML = "Order details";
    }
}
function show_2(){
    var x = document.getElementById("view-detail-2");
    if (x.innerHTML === "Order details") {
        x.innerHTML = "Close details";
    } else {
        x.innerHTML = "Order details";
    }
}
function show_3(){
    var x = document.getElementById("view-detail-3");
    if (x.innerHTML === "Order details") {
        x.innerHTML = "Close details";
    } else {
        x.innerHTML = "Order details";
    }
}
$("#add-1").hover(
    function () {
        $("#sliptop").fadeIn(100)},
    function () {
        $("#sliptop").fadeOut(300)
    }
)
$('#add-1').hover(
    function () {
        $(this).addClass('fa-minus-circle') },
    function () { 
        $(this).removeClass('fa-minus-circle')}
)
//
function removeElement() {
    alert("Are you delete?")
    // Removes an element from the document
    var element = document.getElementById('card_1');
    element.parentNode.removeChild(element);
}