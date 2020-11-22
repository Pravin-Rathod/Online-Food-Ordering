var sum = new Array();


$(".butter_chiken_bill").click(function(){
    
    var menu_name = $("#butter_chicken").html()
    var butter_chicken_price = $("#butter_chicken_price span").html();
    var butter_chicken_qty = $("#icf1").html()
    var final_price = parseInt(butter_chicken_price) * parseInt(butter_chicken_qty);
    // alert(butter_chicken_qty)
    $("#list1").html("<li><h5>"+menu_name+" " + butter_chicken_price+" "+" x "+butter_chicken_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".chicken_makhani_bill").click(function(){

    var menu_name=$("#chicken_makhani").html()
    var chicken_makhani_price = $("#chicken_makhani_price span").html()
    var chicken_makhani_qty = $("#icf4").html()
    var final_price = parseInt(chicken_makhani_price)*parseInt(chicken_makhani_qty);
    $("#list2").html("<li><h5>"+menu_name + chicken_makhani_price + " x "+ chicken_makhani_qty + " = "+" <span id='f2'>"+final_price+"</span></h5></li>")
    sum.push(final_price);
})


$(".chickan_curry_bill").click(function(){
    var menu_name=$("#chickan_curry").html()
    var chickan_curry_price = $("#chickan_curry_price span").html()
    var chickan_curry_qty = $("#icf7").html()
    var final_price = parseInt(chickan_curry_price)*parseInt(chickan_curry_qty);

    $("#list3").html("<li><h5>"+menu_name + chickan_curry_price + " x "+ chickan_curry_qty + " = "+" <span id='f3'>"+final_price+"</span></h5></li>")
    sum.push(final_price)
})

 

$(".biryani_add").click(function(){
    var menu_name=$("#biryani").html()
    var biryani_price = $("#biryani_price").html()
    var biryani_qty = $("#icf10").html()
    var final_price = parseInt(biryani_qty)*parseInt(biryani_price);

    $("#list4").html("<li><h5>"+menu_name + biryani_price + " x "+ biryani_qty + " = "+" <span id='f4'>"+final_price+"</span></h5></li>")
    sum.push(final_price)

})

$(".chickan_dum_biryani_add").click(function(){
    var menu_name=$("#chickan_dum_biryani").html()
    var chickan_dum_biryani_price = $("#chickan_dum_biryani_price").html()
    var chickan_dum_biryani_qty = $("#icf13").html()
    var final_price = parseInt(chickan_dum_biryani_qty)*parseInt(chickan_dum_biryani_price);

    $("#list5").html("<li><h5>"+menu_name + chickan_dum_biryani_price + " x "+ chickan_dum_biryani_qty + " = "+" <span id='f5'>"+final_price+"</span></h5></li>")
    sum.push(final_price)

})


$(".scb_add").click(function(){
    var menu_name=$("#scb").html()
    var scb_price = $("#scb_price").html()
    var scb_qty = $("#icf16").html()
    var final_price = parseInt(scb_qty)*parseInt(scb_price);

    $("#list6").html("<li><h5>"+menu_name + scb_price + " x "+ scb_qty + " = "+ "<span id='f6'>" + final_price + "</span></h5></li>")
    sum.push(final_price)

})


$(".kaju_masala_add").click(function(){
    var menu_name=$("#kaju_masala").html()
    var kaju_masala_price = $("#kaju_masala_price").html()
    var kaju_masala_qty = $("#icf19").html()
    var final_price = parseInt(kaju_masala_qty)*parseInt(kaju_masala_price);

    $("#list7").html("<li><h5>"+menu_name + kaju_masala_price + " x "+ kaju_masala_qty + " = "+ "<span id='f7'>" + final_price + "</span></h5></li>")
    sum.push(final_price)

})


$(".paneer_butter_masala_add").click(function(){
    var menu_name=$("#paneer_butter_masala").html()
    var paneer_butter_masala_price = $("#paneer_butter_masala_price").html()
    var paneer_butter_masala_qty = $("#icf22").html()
    var final_price = parseInt(paneer_butter_masala_qty)*parseInt(paneer_butter_masala_price);

    $("#list8").html("<li><h5>"+menu_name + paneer_butter_masala_price + " x "+ paneer_butter_masala_qty + " = "+ "<span id='f8'>" + final_price + "</span></h5></li>")
    sum.push(final_price)

})



$(".punjabi_paneer_add").click(function(){
    var menu_name=$("#punjabi_paneer").html()
    var punjabi_paneer_price = $("#punjabi_paneer_price").html()
    var punjabi_paneer_qty = $("#icf25").html()
    var final_price = parseInt(punjabi_paneer_qty)*parseInt(punjabi_paneer_price);

    $("#list9").html("<li><h5>"+menu_name + punjabi_paneer_price + " x "+ punjabi_paneer_qty + " = "+ "<span id='f9' >" + final_price + "</span></h5></li>")
    sum.push(final_price)

})


$(".roti_add").click(function(){
    var menu_name=$("#roti").html()
    var roti_price = $("#roti_price").html()
    var roti_qty = $("#icf28").html()
    var final_price = parseInt(roti_qty)*parseInt(roti_price);

    $("#list10").html("<li><h5>"+menu_name + roti_price + " x "+ roti_qty + " = "+ "<span id='f10'>" + final_price + "</span></h5></li>")
    sum.push(final_price)

})


$(".btr_add").click(function(){
    var menu_name=$("#btr").html()
    var btr_price = $("#btr_price").html()
    var btr_qty = $("#icf31").html()
    var final_price = parseInt(btr_qty)*parseInt(btr_price);

    $("#list11").html("<li><h5>"+menu_name+" " + btr_price + " x "+ btr_qty + " = "+ "<span id='f11'>" + final_price + "</span></h5></li>")
    sum.push(final_price)

})

$(".nan_add").click(function(){
    var menu_name=$("#nan").html()
    var nan_price = $("#nan_price").html()
    var nan_qty = $("#icf34").html()
    var final_price = parseInt(nan_qty)*parseInt(nan_price);

    $("#list12").html("<li><h5>"+menu_name+" " + nan_price + " x "+ nan_qty + " = "+ "<span id='f12'>" + final_price + "</span></h5></li>")
    sum.push(final_price)

})


$("#final_bill_btn").click(function(){
// var f1 = parseInt($("#f1").html());
// var f2 = parseInt($("#f2").html());
// var f3 = parseInt($("#f3").html());
// var f4 = parseInt($("#f4").html());
// var f5 = parseInt($("#f5").html());
// var f6 = parseInt($("#f6").html());
// var f7 = parseInt($("#f7").html());
// var f8 = parseInt($("#f8").html());
// var f9 = parseInt($("#f9").html());
// var f10 = parseInt($("#f10").html());
// var f11 = parseInt($("#f11").html());
// var f12 = parseInt($("#f12").html());
// console.log(sum.length)
// console.log(sum)

var addition=0;

for(var i=0; i<sum.length; i++){

    console.log(i)
    console.log("sum", sum[i])
    addition = addition+sum[i];
}

// console.log("addition", addition )


$("#final_bill12").html("Total = "+addition)
})

