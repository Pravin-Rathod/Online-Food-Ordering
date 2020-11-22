
// for faloodas--------------------------------------------------------------------------
var sum = new Array();
$(".ice_falooda_add").click(function(){
var menu_name = $("#ice_falooda").html();
var ice_falooda_price = $("#ice_falooda_price").html();
var ice_falooda_qty = $("#icf1").html();
var final_price = parseInt(ice_falooda_qty)*parseInt(ice_falooda_price);
$("#list1").html("<li><h5>"+ menu_name+" : " + ice_falooda_price + " x "+ ice_falooda_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".butterscotch_falooda_add").click(function(){
var menu_name = $("#butterscotch_falooda").html();
var butterscotch_falooda_price = $("#butterscotch_falooda_price").html();
var butterscotch_falooda_qty = $("#icf4").html();
var final_price = parseInt(butterscotch_falooda_qty)*parseInt(butterscotch_falooda_price);
$("#list2").html("<li><h5>"+ menu_name+" : " + butterscotch_falooda_price + " x "+ butterscotch_falooda_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".dry_fruit_falooda_add").click(function(){
var menu_name = $("#dry_fruit_falooda").html();
var dry_fruit_falooda_price = $("#dry_fruit_falooda_price").html();
var dry_fruit_falooda_qty = $("#icf7").html();
var final_price = parseInt(dry_fruit_falooda_qty)*parseInt(dry_fruit_falooda_price);
$("#list3").html("<li><h5>"+ menu_name+" : " + dry_fruit_falooda_price + " x "+ dry_fruit_falooda_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)

})
$(".bombay_special_falooda_add").click(function(){
var menu_name = $("#bombay_special_falooda").html();
var bombay_special_falooda_price = $("#bombay_special_falooda_price").html();
var bombay_special_falooda_qty = $("#icf10").html();
var final_price = parseInt(bombay_special_falooda_qty)*parseInt(bombay_special_falooda_price);
$("#list4").html("<li><h5>"+ menu_name+" : " + bombay_special_falooda_price + " x "+ bombay_special_falooda_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".strawberry_falooda_add").click(function(){
var menu_name = $("#strawberry_falooda").html();
var strawberry_falooda_price = $("#strawberry_falooda_price").html();
var strawberry_falooda_qty = $("#icf13").html();
var final_price = parseInt(strawberry_falooda_qty)*parseInt(strawberry_falooda_price);
$("#list5").html("<li><h5>"+ menu_name+" : " + strawberry_falooda_price + " x "+ strawberry_falooda_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".kesar_pista_falooda_add").click(function(){
var menu_name = $("#kesar_pista_falooda").html();
var kesar_pista_falooda_price = $("#kesar_pista_falooda_price").html();
var kesar_pista_falooda_qty = $("#icf16").html();
var final_price = parseInt(kesar_pista_falooda_qty)*parseInt(kesar_pista_falooda_price);
$("#list6").html("<li><h5>"+ menu_name+" : " + kesar_pista_falooda_price + " x "+ kesar_pista_falooda_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".rose_falooda_add").click(function(){
var menu_name = $("#rose_falooda").html();
var rose_falooda_price = $("#rose_falooda_price").html();
var rose_falooda_qty = $("#icf19").html();
var final_price = parseInt(rose_falooda_qty)*parseInt(rose_falooda_price);
$("#list7").html("<li><h5>"+ menu_name+" : " + rose_falooda_price + " x "+ rose_falooda_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".mango_falooda_add").click(function(){
var menu_name = $("#mango_falooda").html();
var mango_falooda_price = $("#mango_falooda_price").html();
var mango_falooda_qty = $("#icf22").html();
var final_price = parseInt(mango_falooda_qty)*parseInt(mango_falooda_price);
$("#list8").html("<li><h5>"+ menu_name+" : " + mango_falooda_price + " x "+ mango_falooda_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".mix_falooda_add").click(function(){
var menu_name = $("#mix_falooda").html();
var mix_falooda_price = $("#mix_falooda_price").html();
var mix_falooda_qty = $("#icf25").html();
var final_price = parseInt(mix_falooda_qty)*parseInt(mix_falooda_price);
$("#list9").html("<li><h5>"+ menu_name+" : " + mix_falooda_price + " x "+ mix_falooda_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

//milkshake----------------------------------------------------------------
$(".mango_milkshake_add").click(function(){
var menu_name = $("#mango_milkshake").html();
var mango_milkshake_price = $("#mango_milkshake_price").html();
var mango_milkshake_qty = $("#icf28").html();
var final_price = parseInt(mango_milkshake_qty)*parseInt(mango_milkshake_price);
$("#list10").html("<li><h5>"+ menu_name+" : " + mango_milkshake_price + " x "+ mango_milkshake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".strawberry_milkshake_add").click(function(){
var menu_name = $("#strawberry_milkshake").html();
var strawberry_milkshake_price = $("#strawberry_milkshake_price").html();
var strawberry_milkshake_qty = $("#icf31").html();
var final_price = parseInt(strawberry_milkshake_qty)*parseInt(strawberry_milkshake_price);
$("#list11").html("<li><h5>"+ menu_name+" : " + strawberry_milkshake_price + " x "+ strawberry_milkshake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".pineapple_milkshake_add").click(function(){
var menu_name = $("#pineapple_milkshake").html();
var pineapple_milkshake_price = $("#pineapple_milkshake_price").html();
var pineapple_milkshake_qty = $("#icf34").html();
var final_price = parseInt(pineapple_milkshake_qty)*parseInt(pineapple_milkshake_price);
$("#list12").html("<li><h5>"+ menu_name+" : " + pineapple_milkshake_price + " x "+ pineapple_milkshake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".apple_milkshake_add").click(function(){
var menu_name = $("#apple_milkshake").html();
var apple_milkshake_price = $("#apple_milkshake_price").html();
var apple_milkshake_qty = $("#icf37").html();
var final_price = parseInt(apple_milkshake_qty)*parseInt(apple_milkshake_price);
$("#list13").html("<li><h5>"+ menu_name+" : " + apple_milkshake_price + " x "+ apple_milkshake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".kesar_pista_milkshake_add").click(function(){
var menu_name = $("#kesar_pista_milkshake").html();
var kesar_pista_milkshake_price = $("#kesar_pista_milkshake_price").html();
var kesar_pista_milkshake_qty = $("#icf40").html();
var final_price = parseInt(kesar_pista_milkshake_qty)*parseInt(kesar_pista_milkshake_price);
$("#list14").html("<li><h5>"+ menu_name+" : " + kesar_pista_milkshake_price + " x "+ kesar_pista_milkshake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".custered_apple_milkshake_add").click(function(){
var menu_name = $("#custered_apple_milkshake").html();
var custered_apple_milkshake_price = $("#custered_apple_milkshake_price").html();
var custered_apple_milkshake_qty = $("#icf43").html();
var final_price = parseInt(custered_apple_milkshake_qty)*parseInt(custered_apple_milkshake_price);
$("#list15").html("<li><h5>"+ menu_name+" : " + custered_apple_milkshake_price + " x "+ custered_apple_milkshake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
//Juice----------------------------------------------------------
$(".watermelon_juice_add").click(function(){
var menu_name = $("#watermelon_juice").html();
var watermelon_juice_price = $("#watermelon_juice_price").html();
var watermelon_juice_qty = $("#icf46").html();
var final_price = parseInt(watermelon_juice_qty)*parseInt(watermelon_juice_price);
$("#list16").html("<li><h5>"+ menu_name+" : " + watermelon_juice_price + " x "+ watermelon_juice_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".sweetlemon_juice_add").click(function(){
var menu_name = $("#sweetlemon_juice").html();
var sweetlemon_juice_price = $("#sweetlemon_juice_price").html();
var sweetlemon_juice_qty = $("#icf49").html();
var final_price = parseInt(sweetlemon_juice_qty)*parseInt(sweetlemon_juice_price);
$("#list17").html("<li><h5>"+ menu_name+" : " + sweetlemon_juice_price + " x "+ sweetlemon_juice_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".orange_juice_add").click(function(){
var menu_name = $("#orange_juice").html();
var orange_juice_price = $("#orange_juice_price").html();
var orange_juice_qty = $("#icf52").html();
var final_price = parseInt(orange_juice_qty)*parseInt(orange_juice_price);
$("#list18").html("<li><h5>"+ menu_name+" : " + orange_juice_price + " x "+ orange_juice_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".mix_juice_add").click(function(){
var menu_name = $("#mix_juice").html();
var mix_juice_price = $("#mix_juice_price").html();
var mix_juice_qty = $("#icf55").html();
var final_price = parseInt(mix_juice_qty)*parseInt(mix_juice_price);
$("#list19").html("<li><h5>"+ menu_name+" : " + mix_juice_price + " x "+ mix_juice_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".cherry_juice_add").click(function(){
var menu_name = $("#cherry_juice").html();
var cherry_juice_price = $("#cherry_juice_price").html();
var cherry_juice_qty = $("#icf58").html();
var final_price = parseInt(cherry_juice_qty)*parseInt(cherry_juice_price);
$("#list20").html("<li><h5>"+ menu_name+" : " + cherry_juice_price + " x "+ cherry_juice_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".guava_juice_add").click(function(){
var menu_name = $("#guava_juice").html();
var guava_juice_price = $("#guava_juice_price").html();
var guava_juice_qty = $("#icf61").html();
var final_price = parseInt(guava_juice_qty)*parseInt(guava_juice_price);
$("#list21").html("<li><h5>"+ menu_name+" : " + guava_juice_price + " x "+ guava_juice_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".rosemalai_juice_add").click(function(){
var menu_name = $("#rosemalai_juice").html();
var rosemalai_juice_price = $("#rosemalai_juice_price").html();
var rosemalai_juice_qty = $("#icf64").html();
var final_price = parseInt(rosemalai_juice_qty)*parseInt(rosemalai_juice_price);
$("#list22").html("<li><h5>"+ menu_name+" : " + rosemalai_juice_price + " x "+ rosemalai_juice_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
//traditional stick-----------------------------------------------------------------------
$(".malai_stick_add").click(function(){
var menu_name = $("#malai_stick").html();
var malai_stick_price = $("#malai_stick_price").html();
var malai_stick_qty = $("#icf67").html();
var final_price = parseInt(malai_stick_qty)*parseInt(malai_stick_price);
$("#list23").html("<li><h5>"+ menu_name+" : " + malai_stick_price + " x "+ malai_stick_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".pista_stick_add").click(function(){
var menu_name = $("#pista_stick").html();
var pista_stick_price = $("#pista_stick_price").html();
var pista_stick_qty = $("#icf70").html();
var final_price = parseInt(pista_stick_qty)*parseInt(pista_stick_price);
$("#list24").html("<li><h5>"+ menu_name+" : " + pista_stick_price + " x "+ pista_stick_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".mango_stick_add").click(function(){
var menu_name = $("#mango_stick").html();
var mango_stick_price = $("#mango_stick_price").html();
var mango_stick_qty = $("#icf73").html();
var final_price = parseInt(mango_stick_qty)*parseInt(mango_stick_price);
$("#list25").html("<li><h5>"+ menu_name+" : " + mango_stick_price + " x "+ mango_stick_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
//Traditional Slice---------------------------------------------------
$(".mango_slice_add").click(function(){
var menu_name = $("#mango_slice").html();
var mango_slice_price = $("#mango_slice_price").html();
var mango_slice_qty = $("#icf76").html();
var final_price = parseInt(mango_slice_qty)*parseInt(mango_slice_price);
$("#list26").html("<li><h5>"+ menu_name+" : " + mango_slice_price + " x "+ mango_slice_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".rose_slice_add").click(function(){
var menu_name = $("#rose_slice").html();
var rose_slice_price = $("#rose_slice_price").html();
var rose_slice_qty = $("#icf79").html();
var final_price = parseInt(rose_slice_qty)*parseInt(rose_slice_price);
$("#list27").html("<li><h5>"+ menu_name+" : " + rose_slice_price + " x "+ rose_slice_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".kesar_slice_add").click(function(){
var menu_name = $("#kesar_slice").html();
var kesar_slice_price = $("#kesar_slice_price").html();
var kesar_slice_qty = $("#icf82").html();
var final_price = parseInt(kesar_slice_qty)*parseInt(kesar_slice_price);
$("#list29").html("<li><h5>"+ menu_name+" : " + kesar_slice_price + " x "+ kesar_slice_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".kesar_badam_slice_add").click(function(){
var menu_name = $("#kesar_badam_slice").html();
var kesar_badam_slice_price = $("#kesar_badam_slice_price").html();
var kesar_badam_slice_qty = $("#icf85").html();
var final_price = parseInt(kesar_badam_slice_qty)*parseInt(kesar_badam_slice_price);
$("#list28").html("<li><h5>"+ menu_name+" : " + kesar_badam_slice_price + " x "+ kesar_badam_slice_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
//snacks-----------------------------------------------------------------------
$(".bhel_add").click(function(){
var menu_name = $("#bhel").html();
var bhel_price = $("#bhel_price").html();
var bhel_qty = $("#icf88").html();
var final_price = parseInt(bhel_qty)*parseInt(bhel_price);
$("#list30").html("<li><h5>"+ menu_name+" : " + bhel_price + " x "+ bhel_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
}) 

$(".dahi_vada_add").click(function(){
var menu_name = $("#dahi_vada").html();
var dahi_vada_price = $("#dahi_vada_price").html();
var dahi_vada_qty = $("#icf91").html();
var final_price = parseInt(dahi_vada_qty)*parseInt(dahi_vada_price);
$("#list31").html("<li><h5>"+ menu_name+" : " + dahi_vada_price + " x "+ dahi_vada_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".ragada_add").click(function(){
var menu_name = $("#ragada").html();
var ragada_price = $("#ragada_price").html();
var ragada_qty = $("#icf94").html();
var final_price = parseInt(ragada_qty)*parseInt(ragada_price);
$("#list32").html("<li><h5>"+ menu_name+" : " + ragada_price + " x "+ ragada_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".pani_puri_add").click(function(){
var menu_name = $("#pani_puri").html();
var pani_puri_price = $("#pani_puri_price").html();
var pani_puri_qty = $("#icf97").html();
var final_price = parseInt(pani_puri_qty)*parseInt(pani_puri_price);
$("#list33").html("<li><h5>"+ menu_name+" : " + pani_puri_price + " x "+ pani_puri_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".samosa_add").click(function(){
var menu_name = $("#samosa").html();
var samosa_price = $("#samosa_price").html();
var samosa_qty = $("#icf100").html();
var final_price = parseInt(samosa_qty)*parseInt(samosa_price);
$("#list34").html("<li><h5>"+ menu_name+" : " + samosa_price + " x "+ samosa_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".kachori_add").click(function(){
var menu_name = $("#kachori").html();
var kachori_price = $("#kachori_price").html();
var kachori_qty = $("#icf103").html();
var final_price = parseInt(kachori_qty)*parseInt(kachori_price);
$("#list35").html("<li><h5>"+ menu_name+" : " + kachori_price + " x "+ kachori_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".spring_roll_add").click(function(){
var menu_name = $("#spring_roll").html();
var spring_roll_price = $("#spring_roll_price").html();
var spring_roll_qty = $("#icf106").html();
var final_price = parseInt(spring_roll_qty)*parseInt(spring_roll_price);
$("#list36").html("<li><h5>"+ menu_name+" : " + spring_roll_price + " x "+ spring_roll_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".crisp_roll_add").click(function(){
var menu_name = $("#crisp_roll").html();
var crisp_roll_price = $("#crisp_roll_price").html();
var crisp_roll_qty = $("#icf109").html();
var final_price = parseInt(crisp_roll_qty)*parseInt(crisp_roll_price);
$("#list37").html("<li><h5>"+ menu_name+" : " + crisp_roll_price + " x "+ crisp_roll_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
//mastani-----------------------------------------------------
$(".mango_mastani_add").click(function(){
var menu_name = $("#mango_mastani").html();
var mango_mastani_price = $("#mango_mastani_price").html();
var mango_mastani_qty = $("#icf112").html();
var final_price = parseInt(mango_mastani_qty)*parseInt(mango_mastani_price);
$("#list38").html("<li><h5>"+ menu_name+" : " + mango_mastani_price + " x "+ mango_mastani_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".mix_mastani_add").click(function(){
var menu_name = $("#mix_mastani").html();
var mix_mastani_price = $("#mix_mastani_price").html();
var mix_mastani_qty = $("#icf115").html();
var final_price = parseInt(mix_mastani_qty)*parseInt(mix_mastani_price);
$("#list39").html("<li><h5>"+ menu_name+" : " + mix_mastani_price + " x "+ mix_mastani_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".special_mastani_add").click(function(){
var menu_name = $("#special_mastani").html();
var special_mastani_price = $("#special_mastani_price").html();
var special_mastani_qty = $("#icf118").html();
var final_price = parseInt(special_mastani_qty)*parseInt(special_mastani_price);
$("#list40").html("<li><h5>"+ menu_name+" : " + special_mastani_price + " x "+ special_mastani_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})


$("#final_bill_btn").click(function(){
	var addition=0;
	for(var i=0; i<sum.length;i++)
	{
		addition = addition+sum[i];
	}

	$("#final_bill12").html("Total = "+addition)
})