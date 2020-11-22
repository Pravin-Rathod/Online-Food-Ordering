
// starter--------------------------------------------------------------------------
var sum = new Array();
$(".veg_manchurian_add").click(function(){
var menu_name = $("#veg_manchurian").html();
var veg_manchurian_price = $("#veg_manchurian_price").html();
var veg_manchurian_qty = $("#icf1").html();
var final_price = parseInt(veg_manchurian_qty)*parseInt(veg_manchurian_price);
$("#list1").html("<li><h5>"+ menu_name+" : " + veg_manchurian_price + " x "+ veg_manchurian_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".gobi_manchurian_add").click(function(){
var menu_name = $("#gobi_manchurian").html();
var gobi_manchurian_price = $("#gobi_manchurian_price").html();
var gobi_manchurian_qty = $("#icf4").html();
var final_price = parseInt(gobi_manchurian_qty)*parseInt(gobi_manchurian_price);
$("#list2").html("<li><h5>"+ menu_name+" : " + gobi_manchurian_price + " x "+ gobi_manchurian_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)

})

$(".paneer_saibo_add").click(function(){
var menu_name = $("#paneer_saibo").html();
var paneer_saibo_price = $("#paneer_saibo_price").html();
var paneer_saibo_qty = $("#icf7").html();
var final_price = parseInt(paneer_saibo_qty)*parseInt(paneer_saibo_price);
$("#list3").html("<li><h5>"+ menu_name+" : " + paneer_saibo_price + " x "+ paneer_saibo_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".paneer_chilli_add").click(function(){
var menu_name = $("#paneer_chilli").html();
var paneer_chilli_price = $("#paneer_chilli_price").html();
var paneer_chilli_qty = $("#icf10").html();
var final_price = parseInt(paneer_chilli_qty)*parseInt(paneer_chilli_price);
$("#list4").html("<li><h5>"+ menu_name+" : " + paneer_chilli_price + " x "+ paneer_chilli_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".hot_paneer_garlic_add").click(function(){
var menu_name = $("#hot_paneer_garlic").html();
var hot_paneer_garlic_price = $("#hot_paneer_garlic_price").html();
var hot_paneer_garlic_qty = $("#icf13").html();
var final_price = parseInt(hot_paneer_garlic_qty)*parseInt(hot_paneer_garlic_price);
$("#list5").html("<li><h5>"+ menu_name+" : " + hot_paneer_garlic_price + " x "+ hot_paneer_garlic_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".veg_crispy_add").click(function(){
var menu_name = $("#veg_crispy").html();
var veg_crispy_price = $("#veg_crispy_price").html();
var veg_crispy_qty = $("#icf16").html();
var final_price = parseInt(veg_crispy_qty)*parseInt(veg_crispy_price);
$("#list6").html("<li><h5>"+ menu_name+" : " + veg_crispy_price + " x "+ veg_crispy_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".golden_crispy_corn_add").click(function(){
var menu_name = $("#golden_crispy_corn").html();
var golden_crispy_corn_price = $("#golden_crispy_corn_price").html();
var golden_crispy_corn_qty = $("#icf19").html();
var final_price = parseInt(golden_crispy_corn_qty)*parseInt(golden_crispy_corn_price);
$("#list7").html("<li><h5>"+ menu_name+" : " + golden_crispy_corn_price + " x "+ golden_crispy_corn_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".veg_hot_plan_add").click(function(){
var menu_name = $("#veg_hot_plan").html();
var veg_hot_plan_price = $("#veg_hot_plan_price").html();
var veg_hot_plan_qty = $("#icf22").html();
var final_price = parseInt(veg_hot_plan_qty)*parseInt(veg_hot_plan_price);
$("#list7").html("<li><h5>"+ menu_name+" : " + veg_hot_plan_price + " x "+ veg_hot_plan_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".paneer_tikka_add").click(function(){
var menu_name = $("#paneer_tikka").html();
var paneer_tikka_price = $("#paneer_tikka_price").html();
var paneer_tikka_qty = $("#icf25").html();
var final_price = parseInt(paneer_tikka_qty)*parseInt(paneer_tikka_price);
$("#list8").html("<li><h5>"+ menu_name+" : " + paneer_tikka_price + " x "+ paneer_tikka_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})


//sweets-----------------------------------
$(".rabadi_add").click(function(){
var menu_name = $("#rabadi").html();
var rabadi_price = $("#rabadi_price").html();
var rabadi_qty = $("#icf28").html();
var final_price = parseInt(rabadi_qty)*parseInt(rabadi_price);
$("#list9").html("<li><h5>"+ menu_name+" : " + rabadi_price + " x "+ rabadi_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".gulab_jamun_add").click(function(){
var menu_name = $("#gulab_jamun").html();
var gulab_jamun_price = $("#gulab_jamun_price").html();
var gulab_jamun_qty = $("#icf31").html();
var final_price = parseInt(gulab_jamun_qty)*parseInt(gulab_jamun_price);
$("#list10").html("<li><h5>"+ menu_name+" : " + gulab_jamun_price + " x "+ gulab_jamun_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".keshar_jalebi_add").click(function(){
var menu_name = $("#keshar_jalebi").html();
var keshar_jalebi_price = $("#keshar_jalebi_price").html();
var keshar_jalebi_qty = $("#icf34").html();
var final_price = parseInt(keshar_jalebi_qty)*parseInt(keshar_jalebi_price);
$("#list11").html("<li><h5>"+ menu_name+" : " + keshar_jalebi_price + " x "+ keshar_jalebi_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".kashmiri_jamun_add").click(function(){
var menu_name = $("#rabadi_jalebi").html();
var kashmiri_jamun_price = $("#kashmiri_jamun_price").html();
var kashmiri_jamun_qty = $("#icf37").html();
var final_price = parseInt(kashmiri_jamun_qty)*parseInt(kashmiri_jamun_price);
$("#list12").html("<li><h5>"+ menu_name+" : " + kashmiri_jamun_price + " x "+ kashmiri_jamun_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".rabadi_jalebi_add").click(function(){
var menu_name = $("#rabadi_jalebi").html();
var rabadi_jalebi_price = $("#rabadi_jalebi_price").html();
var rabadi_jalebi_qty = $("#icf40").html();
var final_price = parseInt(rabadi_jalebi_qty)*parseInt(rabadi_jalebi_price);
$("#list13").html("<li><h5>"+ menu_name+" : " + rabadi_jalebi_price + " x "+ rabadi_jalebi_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

//pantry-------------------------------------------------------------------
$(".green_salad_add").click(function(){
var menu_name = $("#green_salad").html();
var green_salad_price = $("#green_salad_price").html();
var green_salad_qty = $("#icf43").html();
var final_price = parseInt(green_salad_qty)*parseInt(green_salad_price);
$("#list14").html("<li><h5>"+ menu_name+" : " + green_salad_price + " x "+ green_salad_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".pineapple_raita_add").click(function(){
var menu_name = $("#pineapple_raita").html();
var pineapple_raita_price = $("#pineapple_raita_price").html();
var pineapple_raita_qty = $("#icf46").html();
var final_price = parseInt(pineapple_raita_qty)*parseInt(pineapple_raita_price);
$("#list15").html("<li><h5>"+ menu_name+" : " + pineapple_raita_price + " x "+ pineapple_raita_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".mix_raita_add").click(function(){
var menu_name = $("#mix_raita").html();
var mix_raita_price = $("#mix_raita_price").html();
var mix_raita_qty = $("#icf49").html();
var final_price = parseInt(mix_raita_qty)*parseInt(mix_raita_price);
$("#list16").html("<li><h5>"+ menu_name+" : " + mix_raita_price + " x "+ mix_raita_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".greek_salad_add").click(function(){
var menu_name = $("#greek_salad").html();
var greek_salad_price = $("#greek_salad_price").html();
var greek_salad_qty = $("#icf52").html();
var final_price = parseInt(greek_salad_qty)*parseInt(greek_salad_price);
$("#list17").html("<li><h5>"+ menu_name+" : " + greek_salad_price + " x "+ greek_salad_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".fruit_salad_add").click(function(){
var menu_name = $("#fruit_salad").html();
var fruit_salad_price = $("#fruit_salad_price").html();
var fruit_salad_qty = $("#icf55").html();
var final_price = parseInt(fruit_salad_qty)*parseInt(fruit_salad_price);
$("#list18").html("<li><h5>"+ menu_name+" : " + fruit_salad_price + " x "+ fruit_salad_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

//mocktails--------------------------------------------------------------

$(".blue_sky_add").click(function(){
var menu_name = $("#blue_sky").html();
var blue_sky_price = $("#blue_sky_price").html();
var blue_sky_qty = $("#icf58").html();
var final_price = parseInt(blue_sky_qty)*parseInt(blue_sky_price);
$("#list19").html("<li><h5>"+ menu_name+" : " + blue_sky_price + " x "+ blue_sky_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".green_ice_land_add").click(function(){
var menu_name = $("#green_ice_land").html();
var green_ice_land_price = $("#green_ice_land_price").html();
var green_ice_land_qty = $("#icf61").html();
var final_price = parseInt(green_ice_land_qty)*parseInt(green_ice_land_price);
$("#list20").html("<li><h5>"+ menu_name+" : " + green_ice_land_price + " x "+ green_ice_land_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".mojito_add").click(function(){
var menu_name = $("#mojito").html();
var mojito_price = $("#mojito_price").html();
var mojito_qty = $("#icf64").html();
var final_price = parseInt(mojito_qty)*parseInt(mojito_price);
$("#list21").html("<li><h5>"+ menu_name+" : " + mojito_price + " x "+ mojito_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".pinacolada_add").click(function(){
var menu_name = $("#pinacolada").html();
var pinacolada_price = $("#pinacolada_price").html();
var pinacolada_qty = $("#icf67").html();
var final_price = parseInt(pinacolada_qty)*parseInt(pinacolada_price);
$("#list22").html("<li><h5>"+ menu_name+" : " + pinacolada_price + " x "+ pinacolada_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".blue_colada_add").click(function(){
var menu_name = $("#blue_colada").html();
var blue_colada_price = $("#blue_colada_price").html();
var blue_colada_qty = $("#icf70").html();
var final_price = parseInt(blue_colada_qty)*parseInt(blue_colada_price);
$("#list23").html("<li><h5>"+ menu_name+" : " + blue_colada_price + " x "+ blue_colada_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".orange_lovers_add").click(function(){
var menu_name = $("#orange_lovers").html();
var orange_lovers_price = $("#orange_lovers_price").html();
var orange_lovers_qty = $("#icf73").html();
var final_price = parseInt(orange_lovers_qty)*parseInt(orange_lovers_price);
$("#list24").html("<li><h5>"+ menu_name+" : " + orange_lovers_price + " x "+ orange_lovers_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

//soup-----------------------------------------------------------
$(".tomato_sup_add").click(function(){
var menu_name = $("#tomato_sup").html();
var tomato_sup_price = $("#tomato_sup_price").html();
var tomato_sup_price_qty = $("#icf76").html();
var final_price = parseInt(tomato_sup_price_qty)*parseInt(tomato_sup_price);
$("#list25").html("<li><h5>"+ menu_name+" : " + tomato_sup_price + " x "+ tomato_sup_price_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".veg_manchow_soup_add").click(function(){
var menu_name = $("#veg_manchow_soup").html();
var veg_manchow_soup_price = $("#veg_manchow_soup_price").html();
var veg_manchow_soup_qty = $("#icf79").html();
var final_price = parseInt(veg_manchow_soup_qty)*parseInt(veg_manchow_soup_price);
$("#list26").html("<li><h5>"+ menu_name+" : " + veg_manchow_soup_price + " x "+ veg_manchow_soup_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".roast_corn_soup_add").click(function(){
var menu_name = $("#roast_corn_soup").html();
var roast_corn_soup_price = $("#roast_corn_soup_price").html();
var roast_corn_soup_qty = $("#icf82").html();
var final_price = parseInt(roast_corn_soup_qty)*parseInt(roast_corn_soup_price);
$("#list27").html("<li><h5>"+ menu_name+" : " + roast_corn_soup_price + " x "+ roast_corn_soup_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".Veg_Hot_and_Sour_Soup_add").click(function(){
var menu_name = $("#Veg_Hot_and_Sour_Soup").html();
var Veg_Hot_and_Sour_Soup_price = $("#Veg_Hot_and_Sour_Soup_price").html();
var Veg_Hot_and_Sour_Soup_qty = $("#icf85").html();
var final_price = parseInt(Veg_Hot_and_Sour_Soup_qty)*parseInt(Veg_Hot_and_Sour_Soup_price);
$("#list28").html("<li><h5>"+ menu_name+" : " + Veg_Hot_and_Sour_Soup_price + " x "+ Veg_Hot_and_Sour_Soup_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".clear_soup_add").click(function(){
var menu_name = $("#clear_soup").html();
var clear_soup_price = $("#clear_soup_price").html();
var clear_soup_qty = $("#icf88").html();
var final_price = parseInt(clear_soup_qty)*parseInt(clear_soup_price);
$("#list29").html("<li><h5>"+ menu_name+" : " + clear_soup_price + " x "+ clear_soup_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".spinach_soup_add").click(function(){
var menu_name = $("#spinach_soup").html();
var spinach_soup_price = $("#spinach_soup_price").html();
var spinach_soup_qty = $("#icf91").html();
var final_price = parseInt(spinach_soup_qty)*parseInt(spinach_soup_price);
$("#list30").html("<li><h5>"+ menu_name+" : " + spinach_soup_price + " x "+ spinach_soup_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".ministone_add").click(function(){
var menu_name = $("#ministone").html();
var ministone_price = $("#ministone_price").html();
var ministone_price_qty = $("#icf94").html();
var final_price = parseInt(ministone_price_qty)*parseInt(ministone_price);
$("#list31").html("<li><h5>"+ menu_name+" : " + ministone_price + " x "+ ministone_price_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})


//Noodles------------------------------------------------------------
$(".Hakka_noodles_add").click(function(){
var menu_name = $("#Hakka_noodles").html();
var Hakka_noodles_price = $("#Hakka_noodles_price").html();
var Hakka_noodles_qty = $("#icf97").html();
var final_price = parseInt(Hakka_noodles_qty)*parseInt(Hakka_noodles_price);
$("#list32").html("<li><h5>"+ menu_name+" : " + Hakka_noodles_price + " x "+ Hakka_noodles_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".Schezwan_noodles_add").click(function(){
var menu_name = $("#Schezwan_noodles").html();
var Schezwan_noodles_price = $("#Schezwan_noodles_price").html();
var Schezwan_noodles_qty = $("#icf100").html();
var final_price = parseInt(Schezwan_noodles_qty)*parseInt(Schezwan_noodles_price);
$("#list33").html("<li><h5>"+ menu_name+" : " + Schezwan_noodles_price + " x "+ Schezwan_noodles_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".Chilli_Garlic_noodles_add").click(function(){
var menu_name = $("#Chilli_Garlic_noodles").html();
var Chilli_Garlic_noodles_price = $("#Chilli_Garlic_noodles_price").html();
var Chilli_Garlic_noodles_qty = $("#icf103").html();
var final_price = parseInt(Chilli_Garlic_noodles_qty)*parseInt(Chilli_Garlic_noodles_price);
$("#list34").html("<li><h5>"+ menu_name+" : " + Chilli_Garlic_noodles_price + " x "+ Chilli_Garlic_noodles_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".garlic_noodles_add").click(function(){
var menu_name = $("#garlic_noodles").html();
var garlic_noodles_price = $("#garlic_noodles_price").html();
var garlic_noodles_qty = $("#icf106").html();
var final_price = parseInt(garlic_noodles_qty)*parseInt(garlic_noodles_price);
$("#list35").html("<li><h5>"+ menu_name+" : " + garlic_noodles_price + " x "+ garlic_noodles_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})

$(".singapore_noodles_add").click(function(){
var menu_name = $("#singapore_noodles").html();
var singapore_noodles_price = $("#singapore_noodles_price").html();
var singapore_noodles_qty = $("#icf109").html();
var final_price = parseInt(singapore_noodles_qty)*parseInt(singapore_noodles_price);
$("#list36").html("<li><h5>"+ menu_name+" : " + singapore_noodles_price + " x "+ singapore_noodles_qty + " = "+" <span>"+final_price+"</span></h5></li>")
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