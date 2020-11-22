var sum = new Array();

//best seller-----------------------------------
$(".smokin_special_pizza_add").click(function(){
    
    var menu_name = $("#smokin_special_pizza").html()
    var smokin_special_pizza_price = $("#smokin_special_pizza_price").html();
    var smokin_special_pizza_qty = $("#icf1").html()
    var final_price = parseInt(smokin_special_pizza_price) * parseInt(smokin_special_pizza_qty);
    $("#list1").html("<li><h5>"+menu_name+" " + smokin_special_pizza_price+" "+" x "+smokin_special_pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Plain_Cheese_Pizza_add").click(function(){
    
    var menu_name = $("#Plain_Cheese_Pizza").html()
    var Plain_Cheese_Pizza_price = $("#Plain_Cheese_Pizza_price").html();
    var Plain_Cheese_Pizza_qty = $("#icf4").html()
    var final_price = parseInt(Plain_Cheese_Pizza_price) * parseInt(Plain_Cheese_Pizza_qty);
    $("#list2").html("<li><h5>"+menu_name+" " + Plain_Cheese_Pizza_price+" "+" x "+Plain_Cheese_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Margherita_Pizza_add").click(function(){
    
    var menu_name = $("#Margherita_Pizza").html()
    var Margherita_Pizza_price = $("#Margherita_Pizza_price").html();
    var Margherita_Pizza_qty = $("#icf7").html()
    var final_price = parseInt(Margherita_Pizza_price) * parseInt(Margherita_Pizza_qty);
    $("#list3").html("<li><h5>"+menu_name+" " + Margherita_Pizza_price+" "+" x "+Margherita_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Ultimate_Veg_Cheese_Pizza_add").click(function(){
    
    var menu_name = $("#Ultimate_Veg_Cheese_Pizza").html()
    var Ultimate_Veg_Cheese_Pizza_price = $("#Ultimate_Veg_Cheese_Pizza_price").html();
    var Ultimate_Veg_Cheese_Pizza_qty = $("#icf10").html()
    var final_price = parseInt(Ultimate_Veg_Cheese_Pizza_price) * parseInt(Ultimate_Veg_Cheese_Pizza_qty);
    $("#list4").html("<li><h5>"+menu_name+" " + Ultimate_Veg_Cheese_Pizza_price+" "+" x "+Ultimate_Veg_Cheese_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Corn_N_Cheese_Pizza_add").click(function(){
    
    var menu_name = $("#Corn_N_Cheese_Pizza").html()
    var Corn_N_Cheese_Pizza_price = $("#Corn_N_Cheese_Pizza_price").html();
    var Corn_N_Cheese_Pizza_qty = $("#icf13").html()
    var final_price = parseInt(Corn_N_Cheese_Pizza_price) * parseInt(Corn_N_Cheese_Pizza_qty);
    $("#list5").html("<li><h5>"+menu_name+" " + Corn_N_Cheese_Pizza_price+" "+" x "+Corn_N_Cheese_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Ultimate_Veg_Pizza_add").click(function(){
    
    var menu_name = $("#Ultimate_Veg_Pizza").html()
    var Ultimate_Veg_Pizza_price = $("#Ultimate_Veg_Pizza_price").html();
    var Ultimate_Veg_Pizza_qty = $("#icf16").html()
    var final_price = parseInt(Ultimate_Veg_Pizza_price) * parseInt(Ultimate_Veg_Pizza_qty);
    $("#list6").html("<li><h5>"+menu_name+" " + Ultimate_Veg_Pizza_price+" "+" x "+Ultimate_Veg_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Spicy_Veg_Pizza_add").click(function(){
    
    var menu_name = $("#Spicy_Veg_Pizza").html()
    var Spicy_Veg_Pizza_price = $("#Spicy_Veg_Pizza_price").html();
    var Spicy_Veg_Pizza_qty = $("#icf19").html()
    var final_price = parseInt(Spicy_Veg_Pizza_price) * parseInt(Spicy_Veg_Pizza_qty);
    $("#list7").html("<li><h5>"+menu_name+" " + Spicy_Veg_Pizza_price+" "+" x "+Spicy_Veg_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Smokies_Five_Pizza_add").click(function(){
    
    var menu_name = $("#Smokies_Five_Pizza").html()
    var Smokies_Five_Pizza_price = $("#Smokies_Five_Pizza_price").html();
    var Smokies_Five_Pizza_qty = $("#icf22").html()
    var final_price = parseInt(Smokies_Five_Pizza_price) * parseInt(Smokies_Five_Pizza_qty);
    $("#list8").html("<li><h5>"+menu_name+" " + Smokies_Five_Pizza_price+" "+" x "+Smokies_Five_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Woodcutters_Pizza_add").click(function(){
    
    var menu_name = $("#Woodcutters_Pizza").html()
    var Woodcutters_Pizza_price = $("#Woodcutters_Pizza_price").html();
    var Woodcutters_Pizza_qty = $("#icf25").html()
    var final_price = parseInt(Woodcutters_Pizza_price) * parseInt(Woodcutters_Pizza_qty);
    $("#list9").html("<li><h5>"+menu_name+" " + Woodcutters_Pizza_price+" "+" x "+Woodcutters_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Classic_Veg_Pizza_add").click(function(){
    
    var menu_name = $("#Classic_Veg_Pizza").html()
    var Classic_Veg_Pizza_price = $("#Classic_Veg_Pizza_price").html();
    var Classic_Veg_Pizza_qty = $("#icf28").html()
    var final_price = parseInt(Classic_Veg_Pizza_price) * parseInt(Classic_Veg_Pizza_qty);
    $("#list10").html("<li><h5>"+menu_name+" " + Classic_Veg_Pizza_price+" "+" x "+Classic_Veg_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Schezwan_Veg_Pizza_add").click(function(){
    
    var menu_name = $("#Schezwan_Veg_Pizza").html()
    var Schezwan_Veg_Pizza_price = $("#Schezwan_Veg_Pizza_price").html();
    var Schezwan_Veg_Pizza_qty = $("#icf31").html()
    var final_price = parseInt(Schezwan_Veg_Pizza_price) * parseInt(Schezwan_Veg_Pizza_qty);
    $("#list11").html("<li><h5>"+menu_name+" " + Schezwan_Veg_Pizza_price+" "+" x "+Schezwan_Veg_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Mixed_Veg_Pizza_add").click(function(){
    
    var menu_name = $("#Mixed_Veg_Pizza").html()
    var Mixed_Veg_Pizza_price = $("#Mixed_Veg_Pizza_price").html();
    var Mixed_Veg_Pizza_qty = $("#icf34").html()
    var final_price = parseInt(Mixed_Veg_Pizza_price) * parseInt(Mixed_Veg_Pizza_qty);
    $("#list12").html("<li><h5>"+menu_name+" " + Mixed_Veg_Pizza_price+" "+" x "+Mixed_Veg_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Herb_Paradise_add").click(function(){
    
    var menu_name = $("#Herb_Paradise").html()
    var Herb_Paradise_price = $("#Herb_Paradise_price").html();
    var Herb_Paradise_qty = $("#icf37").html()
    var final_price = parseInt(Herb_Paradise_price) * parseInt(Herb_Paradise_qty);
    $("#list13").html("<li><h5>"+menu_name+" " + Herb_Paradise_price+" "+" x "+Herb_Paradise_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Exotic_Veggie_add").click(function(){
    
    var menu_name = $("#Exotic_Veggie").html()
    var Exotic_Veggie_price = $("#Exotic_Veggie_price").html();
    var Exotic_Veggie_qty = $("#icf40").html()
    var final_price = parseInt(Exotic_Veggie_price) * parseInt(Exotic_Veggie_qty);
    $("#list14").html("<li><h5>"+menu_name+" " + Exotic_Veggie_price+" "+" x "+Exotic_Veggie_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Mexican_Lover_add").click(function(){
    
    var menu_name = $("#Mexican_Lover").html()
    var Mexican_Lover_price = $("#Mexican_Lover_price").html();
    var Mexican_Lover_qty = $("#icf43").html()
    var final_price = parseInt(Mexican_Lover_price) * parseInt(Mexican_Lover_qty);
    $("#list15").html("<li><h5>"+menu_name+" " + Mexican_Lover_price+" "+" x "+Mexican_Lover_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Five_Pepper_Fiesta_Pizza_add").click(function(){
    
    var menu_name = $("#Five_Pepper_Fiesta_Pizza").html()
    var Five_Pepper_Fiesta_Pizza_price = $("#Five_Pepper_Fiesta_Pizza_price").html();
    var Five_Pepper_Fiesta_Pizza_qty = $("#icf46").html()
    var final_price = parseInt(Five_Pepper_Fiesta_Pizza_price) * parseInt(Five_Pepper_Fiesta_Pizza_qty);
    $("#list16").html("<li><h5>"+menu_name+" " + Five_Pepper_Fiesta_Pizza_price+" "+" x "+Five_Pepper_Fiesta_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Roast_Chicken_Pizza_add").click(function(){
    
    var menu_name = $("#Roast_Chicken_Pizza").html()
    var Roast_Chicken_Pizza_price = $("#Roast_Chicken_Pizza_price").html();
    var Roast_Chicken_Pizza_qty = $("#icf49").html()
    var final_price = parseInt(Roast_Chicken_Pizza_price) * parseInt(Roast_Chicken_Pizza_qty);
    $("#list17").html("<li><h5>"+menu_name+" " + Roast_Chicken_Pizza_price+" "+" x "+Roast_Chicken_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Spicy_Salami_Pizza_add").click(function(){
    
    var menu_name = $("#Spicy_Salami_Pizza").html()
    var Spicy_Salami_Pizza_price = $("#Spicy_Salami_Pizza_price").html();
    var Spicy_Salami_Pizza_qty = $("#icf52").html()
    var final_price = parseInt(Spicy_Salami_Pizza_price) * parseInt(Spicy_Salami_Pizza_qty);
    $("#list18").html("<li><h5>"+menu_name+" " + Spicy_Salami_Pizza_price+" "+" x "+Spicy_Salami_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Hot_Chicken_Pizza_add").click(function(){
    
    var menu_name = $("#Hot_Chicken_Pizza").html()
    var Hot_Chicken_Pizza_price = $("#Hot_Chicken_Pizza_price").html();
    var Hot_Chicken_Pizza_qty = $("#icf55").html()
    var final_price = parseInt(Hot_Chicken_Pizza_price) * parseInt(Hot_Chicken_Pizza_qty);
    $("#list19").html("<li><h5>"+menu_name+" " + Hot_Chicken_Pizza_price+" "+" x "+Hot_Chicken_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Napolitana_Pizza_add").click(function(){
    
    var menu_name = $("#Napolitana_Pizza").html()
    var Napolitana_Pizza_price = $("#Napolitana_Pizza_price").html();
    var Napolitana_Pizza_qty = $("#icf58").html()
    var final_price = parseInt(Napolitana_Pizza_price) * parseInt(Napolitana_Pizza_qty);
    $("#list20").html("<li><h5>"+menu_name+" " + Napolitana_Pizza_price+" "+" x "+Napolitana_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Meat_Fiesta_Pizza_add").click(function(){
    
    var menu_name = $("#Meat_Fiesta_Pizza").html()
    var Meat_Fiesta_Pizza_price = $("#Meat_Fiesta_Pizza_price").html();
    var Meat_Fiesta_Pizza_qty = $("#icf61").html()
    var final_price = parseInt(Meat_Fiesta_Pizza_price) * parseInt(Meat_Fiesta_Pizza_qty);
    $("#list21").html("<li><h5>"+menu_name+" " + Meat_Fiesta_Pizza_price+" "+" x "+Meat_Fiesta_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Chicken_Tikka_Pizza_add").click(function(){
    
    var menu_name = $("#Chicken_Tikka_Pizza").html()
    var Chicken_Tikka_Pizza_price = $("#Chicken_Tikka_Pizza_price").html();
    var Chicken_Tikka_Pizza_qty = $("#icf64").html()
    var final_price = parseInt(Chicken_Tikka_Pizza_price) * parseInt(Chicken_Tikka_Pizza_qty);
    $("#list22").html("<li><h5>"+menu_name+" " + Chicken_Tikka_Pizza_price+" "+" x "+Chicken_Tikka_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Butter_Chicken_Pizza_add").click(function(){
    
    var menu_name = $("#Butter_Chicken_Pizza").html()
    var Butter_Chicken_Pizza_price = $("#Butter_Chicken_Pizza_price").html();
    var Butter_Chicken_Pizza_qty = $("#icf67").html()
    var final_price = parseInt(Butter_Chicken_Pizza_price) * parseInt(Butter_Chicken_Pizza_qty);
    $("#list23").html("<li><h5>"+menu_name+" " + Butter_Chicken_Pizza_price+" "+" x "+Butter_Chicken_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Meat_Lovers_Pizza_add").click(function(){
    
    var menu_name = $("#Meat_Lovers_Pizza").html()
    var Meat_Lovers_Pizza_price = $("#Meat_Lovers_Pizza_price").html();
    var Meat_Lovers_Pizza_qty = $("#icf70").html()
    var final_price = parseInt(Meat_Lovers_Pizza_price) * parseInt(Meat_Lovers_Pizza_qty);
    $("#list24").html("<li><h5>"+menu_name+" " + Meat_Lovers_Pizza_price+" "+" x "+Meat_Lovers_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Chicken_Bonanza_Pizza_add").click(function(){
    
    var menu_name = $("#Chicken_Bonanza_Pizza").html()
    var Chicken_Bonanza_Pizza_price = $("#Chicken_Bonanza_Pizza_price").html();
    var Chicken_Bonanza_Pizza_qty = $("#icf73").html()
    var final_price = parseInt(Chicken_Bonanza_Pizza_price) * parseInt(Chicken_Bonanza_Pizza_qty);
    $("#list25").html("<li><h5>"+menu_name+" " + Chicken_Bonanza_Pizza_price+" "+" x "+Chicken_Bonanza_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".BBQ_Chicken_Pizza_add").click(function(){
    
    var menu_name = $("#BBQ_Chicken_Pizza").html()
    var BBQ_Chicken_Pizza_price = $("#BBQ_Chicken_Pizza_price").html();
    var BBQ_Chicken_Pizza_qty = $("#icf76").html()
    var final_price = parseInt(BBQ_Chicken_Pizza_price) * parseInt(BBQ_Chicken_Pizza_qty);
    $("#list26").html("<li><h5>"+menu_name+" " + BBQ_Chicken_Pizza_price+" "+" x "+BBQ_Chicken_Pizza_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".White_Souce_Pasta_add").click(function(){
    
    var menu_name = $("#White_Souce_Pasta").html()
    var White_Souce_Pasta_price = $("#White_Souce_Pasta_price").html();
    var White_Souce_Pasta_qty = $("#icf79").html()
    var final_price = parseInt(White_Souce_Pasta_price) * parseInt(White_Souce_Pasta_qty);
    $("#list27").html("<li><h5>"+menu_name+" " + White_Souce_Pasta_price+" "+" x "+White_Souce_Pasta_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})


$(".Red_Sauce_Pasta_add").click(function(){
    
    var menu_name = $("#Red_Sauce_Pasta").html()
    var Red_Sauce_Pasta_price = $("#Red_Sauce_Pasta_price").html();
    var Red_Sauce_Pasta_qty = $("#icf82").html()
    var final_price = parseInt(Red_Sauce_Pasta_price) * parseInt(Red_Sauce_Pasta_qty);
    $("#list28").html("<li><h5>"+menu_name+" " + Red_Sauce_Pasta_price+" "+" x "+Red_Sauce_Pasta_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Pink_Sauce_Pasta_add").click(function(){
    
    var menu_name = $("#Pink_Sauce_Pasta").html()
    var Pink_Sauce_Pasta_price = $("#Pink_Sauce_Pasta_price").html();
    var Pink_Sauce_Pasta_qty = $("#icf85").html()
    var final_price = parseInt(Pink_Sauce_Pasta_price) * parseInt(Pink_Sauce_Pasta_qty);
    $("#list29").html("<li><h5>"+menu_name+" " + Pink_Sauce_Pasta_price+" "+" x "+Pink_Sauce_Pasta_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Chiken_White_Sauce_Pasta_add").click(function(){
    
    var menu_name = $("#Chiken_White_Sauce_Pasta").html()
    var Chiken_White_Sauce_Pasta_price = $("#Chiken_White_Sauce_Pasta_price").html();
    var Chiken_White_Sauce_Pasta_qty = $("#icf88").html()
    var final_price = parseInt(Chiken_White_Sauce_Pasta_price) * parseInt(Chiken_White_Sauce_Pasta_qty);
    $("#list30").html("<li><h5>"+menu_name+" " + Chiken_White_Sauce_Pasta_price+" "+" x "+Chiken_White_Sauce_Pasta_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Chiken_Red_Sauce_Pasta_add").click(function(){
    
    var menu_name = $("#Chiken_Red_Sauce_Pasta").html()
    var Chiken_Red_Sauce_Pasta_price = $("#Chiken_Red_Sauce_Pasta_price").html();
    var Chiken_Red_Sauce_Pasta_qty = $("#icf91").html()
    var final_price = parseInt(Chiken_Red_Sauce_Pasta_price) * parseInt(Chiken_Red_Sauce_Pasta_qty);
    $("#list31").html("<li><h5>"+menu_name+" " + Chiken_Red_Sauce_Pasta_price+" "+" x "+Chiken_Red_Sauce_Pasta_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})


$(".Cheesy_Veggie_Pizza_Sandwich_add").click(function(){
    
    var menu_name = $("#Cheesy_Veggie_Pizza_Sandwich").html()
    var Cheesy_Veggie_Pizza_Sandwich_price = $("#Cheesy_Veggie_Pizza_Sandwich_price").html();
    var Cheesy_Veggie_Pizza_Sandwich_qty = $("#icf94").html()
    var final_price = parseInt(Cheesy_Veggie_Pizza_Sandwich_price) * parseInt(Cheesy_Veggie_Pizza_Sandwich_qty);
    $("#list32").html("<li><h5>"+menu_name+" " + Cheesy_Veggie_Pizza_Sandwich_price+" "+" x "+Cheesy_Veggie_Pizza_Sandwich_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})


$(".Paneer_Tikka_Pizza_Sandwich_add").click(function(){
    
    var menu_name = $("#Paneer_Tikka_Pizza_Sandwich").html()
    var Paneer_Tikka_Pizza_Sandwich_price = $("#Paneer_Tikka_Pizza_Sandwich_price").html();
    var Paneer_Tikka_Pizza_Sandwich_qty = $("#icf97").html()
    var final_price = parseInt(Paneer_Tikka_Pizza_Sandwich_price) * parseInt(Paneer_Tikka_Pizza_Sandwich_qty);
    $("#list33").html("<li><h5>"+menu_name+" " + Paneer_Tikka_Pizza_Sandwich_price+" "+" x "+Paneer_Tikka_Pizza_Sandwich_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Vegetarian_Delight_Pizza_Sandwich_add").click(function(){
    
    var menu_name = $("#Vegetarian_Delight_Pizza_Sandwich").html()
    var Vegetarian_Delight_Pizza_Sandwich_price = $("#Paneer_Tikka_Pizza_Sandwich_price").html();
    var Vegetarian_Delight_Pizza_Sandwich_qty = $("#icf100").html()
    var final_price = parseInt(Vegetarian_Delight_Pizza_Sandwich_price) * parseInt(Vegetarian_Delight_Pizza_Sandwich_qty);
    $("#list34").html("<li><h5>"+menu_name+" " + Vegetarian_Delight_Pizza_Sandwich_price+" "+" x "+Vegetarian_Delight_Pizza_Sandwich_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Honey_Paper_Chicken_Sandwich_add").click(function(){
    
    var menu_name = $("#Honey_Paper_Chicken_Sandwich").html()
    var Honey_Paper_Chicken_Sandwich_price = $("#Honey_Paper_Chicken_Sandwich_price").html();
    var Honey_Paper_Chicken_Sandwich_qty = $("#icf103").html()
    var final_price = parseInt(Honey_Paper_Chicken_Sandwich_price) * parseInt(Honey_Paper_Chicken_Sandwich_qty);
    $("#list35").html("<li><h5>"+menu_name+" " + Honey_Paper_Chicken_Sandwich_price+" "+" x "+Honey_Paper_Chicken_Sandwich_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Paneer_Tikka_Wraps_add").click(function(){
    
    var menu_name = $("#Paneer_Tikka_Wraps").html()
    var Paneer_Tikka_Wraps_price = $("#Paneer_Tikka_Wraps_price").html();
    var Paneer_Tikka_Wraps_qty = $("#icf106").html()
    var final_price = parseInt(Paneer_Tikka_Wraps_price) * parseInt(Paneer_Tikka_Wraps_qty);
    $("#list36").html("<li><h5>"+menu_name+" " + Paneer_Tikka_Wraps_price+" "+" x "+Paneer_Tikka_Wraps_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Vegetarian_Delight_Wrap_add").click(function(){
    
    var menu_name = $("#Vegetarian_Delight_Wrap").html()
    var Vegetarian_Delight_Wrap_price = $("#Vegetarian_Delight_Wrap_price").html();
    var Vegetarian_Delight_Wrap_qty = $("#icf109").html()
    var final_price = parseInt(Vegetarian_Delight_Wrap_price) * parseInt(Vegetarian_Delight_Wrap_qty);
    $("#list37").html("<li><h5>"+menu_name+" " + Vegetarian_Delight_Wrap_price+" "+" x "+Vegetarian_Delight_Wrap_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Chicken_Tikka_Wrap_add").click(function(){
    
    var menu_name = $("#Chicken_Tikka_Wrap").html()
    var Chicken_Tikka_Wrap_price = $("#Chicken_Tikka_Wrap_price").html();
    var Chicken_Tikka_Wrap_qty = $("#icf112").html()
    var final_price = parseInt(Chicken_Tikka_Wrap_price) * parseInt(Chicken_Tikka_Wrap_qty);
    $("#list38").html("<li><h5>"+menu_name+" " + Chicken_Tikka_Wrap_price+" "+" x "+Chicken_Tikka_Wrap_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
   sum.push(final_price)
})

$(".Roasted_Chicken_Wrap_add").click(function(){
    
    var menu_name = $("#Roasted_Chicken_Wrap").html()
    var Roasted_Chicken_Wrap_price = $("#Roasted_Chicken_Wrap_price").html();
    var Roasted_Chicken_Wrap_qty = $("#icf115").html()
    var final_price = parseInt(Roasted_Chicken_Wrap_price) * parseInt(Roasted_Chicken_Wrap_qty);
    $("#list39").html("<li><h5>"+menu_name+" " + Roasted_Chicken_Wrap_price+" "+" x "+Roasted_Chicken_Wrap_qty+" = "+"<span id='f1'>"+final_price+"</span></h5></li>")
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
