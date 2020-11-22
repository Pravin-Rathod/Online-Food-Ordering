var sum = new Array();
$(".vanilla_cake_add").click(function(){

var menu_name = $("#vanilla_cake").html();
var vanilla_cake_price = $("#vanilla_cake_price").html();
var vanilla_cake_qty = $("#icf1").html();
var final_price = parseInt(vanilla_cake_qty)*parseInt(vanilla_cake_price);
$("#list1").html("<li><h5>"+ menu_name+" : " + vanilla_cake_price + " x "+ vanilla_cake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".choco_cake_add").click(function(){

var menu_name = $("#choco_cake").html();
var choco_cake_price = $("#choco_cake_price").html();
var choco_cake_qty = $("#icf4").html();
var final_price = parseInt(choco_cake_qty)*parseInt(choco_cake_price);
$("#list2").html("<li><h5>"+ menu_name+" : " + choco_cake_price + " x "+ choco_cake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".chocochips_cake_add").click(function(){

var menu_name = $("#chocochips_cake").html();
var chocochips_cake_price = $("#chocochips_cake_price").html();
var chocochips_cake_qty = $("#icf7").html();
var final_price = parseInt(chocochips_cake_qty)*parseInt(chocochips_cake_price);
$("#list3").html("<li><h5>"+ menu_name+" : " + chocochips_cake_price + " x "+ chocochips_cake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".pineapple_cake_add").click(function(){

var menu_name = $("#pineapple_cake").html();
var pineapple_cake_price = $("#pineapple_cake_price").html();
var pineapple_cake_qty = $("#icf10").html();
var final_price = parseInt(pineapple_cake_qty)*parseInt(pineapple_cake_price);
$("#list4").html("<li><h5>"+ menu_name+" : " + pineapple_cake_price + " x "+ pineapple_cake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".blackforest_cake_add").click(function(){

var menu_name = $("#blackforest_cake").html();
var blackforest_cake_price = $("#blackforest_cake_price").html();
var blackforest_cake_qty = $("#icf13").html();
var final_price = parseInt(blackforest_cake_qty)*parseInt(blackforest_cake_price);
$("#list5").html("<li><h5>"+ menu_name+" : " + blackforest_cake_price + " x "+ blackforest_cake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".rasmalai_cake_add").click(function(){

var menu_name = $("#rasmalai_cake").html();
var rasmalai_cake_price = $("#rasmalai_cake_price").html();
var rasmalai_cake_qty = $("#icf16").html();
var final_price = parseInt(rasmalai_cake_qty)*parseInt(rasmalai_cake_price);
$("#list6").html("<li><h5>"+ menu_name+" : " + rasmalai_cake_price + " x "+ rasmalai_cake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".crunchy_cake_add").click(function(){

var menu_name = $("#crunchy_cake").html();
var crunchy_cake_price = $("#crunchy_cake_price").html();
var crunchy_cake_qty = $("#icf19").html();
var final_price = parseInt(crunchy_cake_qty)*parseInt(crunchy_cake_price);
$("#list7").html("<li><h5>"+ menu_name+" : " + crunchy_cake_price + " x "+ crunchy_cake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".butterscotch_cake_add").click(function(){

var menu_name = $("#butterscotch_cake").html();
var butterscotch_cake_price = $("#butterscotch_cake_price").html();
var butterscotch_cake_qty = $("#icf22").html();
var final_price = parseInt(butterscotch_cake_qty)*parseInt(butterscotch_cake_price);
$("#list8").html("<li><h5>"+ menu_name+" : " + butterscotch_cake_price + " x "+ butterscotch_cake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".cassata_cake_add").click(function(){

var menu_name = $("#cassata_cake").html();
var cassata_cake_price = $("#cassata_cake_price").html();
var cassata_cake_qty = $("#icf25").html();
var final_price = parseInt(cassata_cake_qty)*parseInt(cassata_cake_price);
$("#list9").html("<li><h5>"+ menu_name+" : " + cassata_cake_price + " x "+ cassata_cake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
//for Pastries---------------------------------------------------------------
$(".chocolate_truffele_add").click(function(){

var menu_name = $("#chocolate_truffele_pastry").html();
var chocolate_truffele_price = $("#chocolate_truffele_price").html();
var chocolate_truffele_qty = $("#icf28").html();
var final_price = parseInt(chocolate_truffele_qty)*parseInt(chocolate_truffele_price);
$("#list10").html("<li><h5>"+ menu_name+" : " + chocolate_truffele_price + " x "+ chocolate_truffele_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".black_forestpastry_add").click(function(){

var menu_name = $("#black_forestpastry").html();
var black_forestpastry_price = $("#black_forestpastry_price").html();
var black_forestpastry_qty = $("#icf31").html();
var final_price = parseInt(black_forestpastry_qty)*parseInt(black_forestpastry_price);
$("#list11").html("<li><h5>"+ menu_name+" : " + black_forestpastry_price + " x "+ black_forestpastry_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".pineapple_pastry_add").click(function(){

var menu_name = $("#pineapple_pastry").html();
var pineapple_pastry_price = $("#pineapple_pastry_price").html();
var pineapple_pastry_qty = $("#icf34").html();
var final_price = parseInt(pineapple_pastry_qty)*parseInt(pineapple_pastry_price);
$("#list12").html("<li><h5>"+ menu_name+" : " + pineapple_pastry_price + " x "+ pineapple_pastry_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".oreo_pastry_add").click(function(){

var menu_name = $("#oreo_pastry").html();
var oreo_pastry_price = $("#oreo_pastry_price").html();
var oreo_pastry_qty = $("#icf37").html();
var final_price = parseInt(oreo_pastry_qty)*parseInt(oreo_pastry_price);
$("#list13").html("<li><h5>"+ menu_name+" : " + oreo_pastry_price + " x "+ oreo_pastry_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".kiwi_pastry_add").click(function(){

var menu_name = $("#kiwi_pastry").html();
var kiwi_pastry_price = $("#kiwi_pastry_price").html();
var kiwi_pastry_qty = $("#icf40").html();
var final_price = parseInt(kiwi_pastry_qty)*parseInt(kiwi_pastry_price);
$("#list14").html("<li><h5>"+ menu_name+" : " + kiwi_pastry_price + " x "+ kiwi_pastry_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".strawberry_pastry_add").click(function(){

var menu_name = $("#strawberry_pastry").html();
var strawberry_pastry_price = $("#strawberry_pastry_price").html();
var strawberry_pastry_qty = $("#icf43").html();
var final_price = parseInt(strawberry_pastry_qty)*parseInt(strawberry_pastry_price);
$("#list15").html("<li><h5>"+ menu_name+" : " + strawberry_pastry_price + " x "+ strawberry_pastry_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".vanilla_pastry_add").click(function(){

var menu_name = $("#vanilla_pastry").html();
var vanilla_pastry_price = $("#vanilla_pastry_price").html();
var vanilla_pastry_qty = $("#icf46").html();
var final_price = parseInt(vanilla_pastry_qty)*parseInt(vanilla_pastry_price);
$("#list16").html("<li><h5>"+ menu_name+" : " + vanilla_pastry_price + " x "+ vanilla_pastry_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
//sandwiches and burgers----------------------------------------------------------------
$(".cheese_sandwich_grilled_add").click(function(){

var menu_name = $("#cheese_sandwich_grilled").html();
var cheese_sandwich_grilled_price = $("#cheese_sandwich_grilled_price").html();
var cheese_sandwich_grilled_qty = $("#icf49").html();
var final_price = parseInt(cheese_sandwich_grilled_qty)*parseInt(cheese_sandwich_grilled_price);
$("#list17").html("<li><h5>"+ menu_name+" : " + cheese_sandwich_grilled_price + " x "+ cheese_sandwich_grilled_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".veg_cheese_sandwich_add").click(function(){

var menu_name = $("#veg_cheese_sandwich").html();
var veg_cheese_sandwich_price = $("#veg_cheese_sandwich_price").html();
var veg_cheese_sandwich_qty = $("#icf52").html();
var final_price = parseInt(veg_cheese_sandwich_qty)*parseInt(veg_cheese_sandwich_price);
$("#list18").html("<li><h5>"+ menu_name+" : " + veg_cheese_sandwich_price + " x "+ veg_cheese_sandwich_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".veggie_cheese_burger_add").click(function(){

var menu_name = $("#veggie_cheese_burger").html();
var veggie_cheese_burger_price = $("#veggie_cheese_burger_price").html();
var veggie_cheese_burger_qty = $("#icf55").html();
var final_price = parseInt(veggie_cheese_burger_qty)*parseInt(veggie_cheese_burger_price);
$("#list19").html("<li><h5>"+ menu_name+" : " + veggie_cheese_burger_price + " x "+ veggie_cheese_burger_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
//Quick Bites-------------------------------------------
$(".french_fries_add").click(function(){

var menu_name = $("#french_fries").html();
var french_fries_price = $("#french_fries_price").html();
var french_fries_qty = $("#icf58").html();
var final_price = parseInt(french_fries_qty)*parseInt(french_fries_price);
$("#list20").html("<li><h5>"+ menu_name+" : " + french_fries_price + " x "+ french_fries_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
// pizza----------------------------------------------------
$(".paneer_pizza_add").click(function(){

var menu_name = $("#paneer_pizza").html();
var paneer_pizza_price = $("#paneer_pizza_price").html();
var paneer_pizza_qty = $("#icf61").html();
var final_price = parseInt(paneer_pizza_qty)*parseInt(paneer_pizza_price);
$("#list21").html("<li><h5>"+ menu_name+" : " + paneer_pizza_price + " x "+ paneer_pizza_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".cheese_pizza_add").click(function(){
var menu_name = $("#cheese_pizza").html();
var cheese_pizza_price = $("#cheese_pizza_price").html();
var cheese_pizza_qty = $("#icf64").html();
var final_price = parseInt(cheese_pizza_qty)*parseInt(cheese_pizza_price);
$("#list22").html("<li><h5>"+ menu_name+" : " + cheese_pizza_price + " x "+ cheese_pizza_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".capsicum_pizza_add").click(function(){
var menu_name = $("#capsicum_pizza").html();
var capsicum_pizza_price = $("#capsicum_pizza_price").html();
var capsicum_pizza_qty = $("#icf67").html();
var final_price = parseInt(capsicum_pizza_qty)*parseInt(capsicum_pizza_price);
$("#list23").html("<li><h5>"+ menu_name+" : " + capsicum_pizza_price + " x "+ capsicum_pizza_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".classic_pizza_add").click(function(){
var menu_name = $("#classic_pizza").html();
var classic_pizza_price = $("#classic_pizza_price").html();
var classic_pizza_qty = $("#icf70").html();
var final_price = parseInt(classic_pizza_qty)*parseInt(classic_pizza_price);
$("#list24").html("<li><h5>"+ menu_name+" : " + classic_pizza_price + " x "+ classic_pizza_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".onion_pizza_add").click(function(){
var menu_name = $("#onion_pizza").html();
var onion_pizza_price = $("#onion_pizza_price").html();
var onion_pizza_qty = $("#icf73").html();
var final_price = parseInt(onion_pizza_qty)*parseInt(onion_pizza_price);
$("#list25").html("<li><h5>"+ menu_name+" : " + onion_pizza_price + " x "+ onion_pizza_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".chilli_pizza_add").click(function(){
var menu_name = $("#chilli_pizza").html();
var chilli_pizza_price = $("#chilli_pizza_price").html();
var chilli_pizza_qty = $("#icf76").html();
var final_price = parseInt(chilli_pizza_qty)*parseInt(chilli_pizza_price);
$("#list26").html("<li><h5>"+ menu_name+" : " + chilli_pizza_price + " x "+ chilli_pizza_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
//Pasta-----------------------------------------
$(".white_sauce_add").click(function(){
var menu_name = $("#white_sauce").html();
var white_sauce_price = $("#white_sauce_price").html();
var white_sauce_qty = $("#icf79").html();
var final_price = parseInt(white_sauce_qty)*parseInt(white_sauce_price);
$("#list27").html("<li><h5>"+ menu_name+" : " + white_sauce_price + " x "+ white_sauce_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".red_sauce_add").click(function(){
var menu_name = $("#red_sauce").html();
var red_sauce_price = $("#red_sauce_price").html();
var red_sauce_qty = $("#icf82").html();
var final_price = parseInt(red_sauce_qty)*parseInt(red_sauce_price);
$("#list28").html("<li><h5>"+ menu_name+" : " + red_sauce_price + " x "+ red_sauce_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".cheese_pasta_add").click(function(){
var menu_name = $("#cheese_pasta").html();
var cheese_pasta_price = $("#cheese_pasta_price").html();
var cheese_pasta_qty = $("#icf85").html();
var final_price = parseInt(cheese_pasta_qty)*parseInt(cheese_pasta_price);
$("#list29").html("<li><h5>"+ menu_name+" : " + cheese_pasta_price + " x "+ cheese_pasta_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
//For Milkhake--------------------------------------------------------------
$(".mango_milkshake_add").click(function(){
var menu_name = $("#mango_milkshake").html();
var mango_milkshake_price = $("#mango_milkshake_price").html();
var mango_milkshake_qty = $("#icf88").html();
var final_price = parseInt(mango_milkshake_qty)*parseInt(mango_milkshake_price);
$("#list30").html("<li><h5>"+ menu_name+" : " + mango_milkshake_price + " x "+ mango_milkshake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".custered_milkshake_add").click(function(){
var menu_name = $("#custered_milkshake").html();
var custered_milkshake_price = $("#custered_milkshake_price").html();
var custered_milkshake_qty = $("#icf91").html();
var final_price = parseInt(custered_milkshake_qty)*parseInt(custered_milkshake_price);
$("#list31").html("<li><h5>"+ menu_name+" : " + custered_milkshake_price + " x "+ custered_milkshake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
})
$(".rose_milkshake_add").click(function(){
var menu_name = $("#rose_milkshake").html();
var rose_milkshake_price = $("#rose_milkshake_price").html();
var rose_milkshake_qty = $("#icf94").html();
var final_price = parseInt(rose_milkshake_qty)*parseInt(rose_milkshake_price);
$("#list32").html("<li><h5>"+ menu_name+" : " + rose_milkshake_price + " x "+ rose_milkshake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".pineapple_milkshake_add").click(function(){
var menu_name = $("#pineapple_milkshake").html();
var pineapple_milkshake_price = $("#pineapple_milkshake_price").html();
var pineapple_milkshake_qty = $("#icf97").html();
var final_price = parseInt(pineapple_milkshake_qty)*parseInt(pineapple_milkshake_price);
$("#list33").html("<li><h5>"+ menu_name+" : " + pineapple_milkshake_price + " x "+ pineapple_milkshake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".oreo_milkshake_add").click(function(){
var menu_name = $("#oreo_milkshake").html();
var oreo_milkshake_price = $("#oreo_milkshake_price").html();
var oreo_milkshake_qty = $("#icf100").html();
var final_price = parseInt(oreo_milkshake_qty)*parseInt(oreo_milkshake_price);
$("#list34").html("<li><h5>"+ menu_name+" : " + oreo_milkshake_price + " x "+ oreo_milkshake_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
//Fruit creams-----------------------------------------------------
$(".mango_fruit_add").click(function(){
var menu_name = $("#mango_fruit").html();
var mango_fruit_price = $("#mango_fruit_price").html();
var mango_fruit_qty = $("#icf103").html();
var final_price = parseInt(mango_fruit_qty)*parseInt(mango_fruit_price);
$("#list35").html("<li><h5>"+ menu_name+" : " + mango_fruit_price + " x "+ mango_fruit_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".custered_fruit_add").click(function(){
var menu_name = $("#custered_fruit").html();
var custered_fruit_price = $("#custered_fruit_price").html();
var custered_fruit_qty = $("#icf106").html();
var final_price = parseInt(custered_fruit_qty)*parseInt(custered_fruit_price);
$("#list36").html("<li><h5>"+ menu_name+" : " + custered_fruit_price + " x "+ custered_fruit_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".strawberry_fruit_add").click(function(){
var menu_name = $("#strawberry_fruit").html();
var strawberry_fruit_price = $("#strawberry_fruit_price").html();
var strawberry_fruit_qty = $("#icf109").html();
var final_price = parseInt(strawberry_fruit_qty)*parseInt(strawberry_fruit_price);
$("#list37").html("<li><h5>"+ menu_name+" : " + strawberry_fruit_price + " x "+ strawberry_fruit_qty + " = "+" <span>"+final_price+"</span></h5></li>")
sum.push(final_price)
})
$(".mixed_fruit_add").click(function(){
var menu_name = $("#mixed_fruit").html();
var mixed_fruit_price = $("#mixed_fruit_price").html();
var mixed_fruit_qty = $("#icf112").html();
var final_price = parseInt(mixed_fruit_qty)*parseInt(mixed_fruit_price);
$("#list38").html("<li><h5>"+ menu_name+" : " + mixed_fruit_price + " x "+ mixed_fruit_qty + " = "+" <span>"+final_price+"</span></h5></li>")
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