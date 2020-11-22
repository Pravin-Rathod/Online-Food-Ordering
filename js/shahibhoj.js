var sum = new Array ();


$(".add1").click(function(){
    
    var menu_name = $("#cor_meal_tray").html()
    var menu_price = $("#cor_meal_tray_price").html();
    var menu_qty = $("#ppr1").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list1").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".add2").click(function(){
    
    var menu_name = $("#exec_meal_box").html()
    var menu_price = $("#exec_meal_box_price").html();
    var menu_qty = $("#ppr4").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list2").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".add3").click(function(){
    
    var menu_name = $("#prem_meal_box").html()
    var menu_price = $("#prem_meal_box_price").html();
    var menu_qty = $("#ppr7").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list3").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".add4").click(function(){
    
    var menu_name = $("#fam_meal_box").html()
    var menu_price = $("#fam_meal_box_price").html();
    var menu_qty = $("#ppr10").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list4").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add5").click(function(){
    
    var menu_name = $("#shev_bhaji").html()
    var menu_price = $("#shev_bhaji_price").html();
    var menu_qty = $("#ppr13").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list5").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add6").click(function(){
    
    var menu_name = $("#BaiganMasala").html()
    var menu_price = $("#BaiganMasalaprice").html();
    var menu_qty = $("#ppr16").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list6").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add7").click(function(){
    
    var menu_name = $("#VegPulao").html()
    var menu_price = $("#VegPulaoprice").html();
    var menu_qty = $("#ppr19").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list7").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add8").click(function(){
    
    var menu_name = $("#DalKhichadiButter").html()
    var menu_price = $("#DalKhichadiButterprice").html();
    var menu_qty = $("#ppr22").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list8").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add9").click(function(){
    
    var menu_name = $("#AlooMasala").html()
    var menu_price = $("#AlooMasalaprice").html();
    var menu_qty = $("#ppr25").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list9").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add10").click(function(){
    
    var menu_name = $("#PlainPalak").html()
    var menu_price = $("#PlainPalakprice").html();
    var menu_qty = $("#ppr28").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list10").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add11").click(function(){
    
    var menu_name = $("#PaneerMasala").html()
    var menu_price = $("#PaneerMasalaprice").html();
    var menu_qty = $("#ppr31").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list11").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add12").click(function(){
    
    var menu_name = $("#PaneerPalak").html()
    var menu_price = $("#PaneerPalakprice").html();
    var menu_qty = $("#ppr34").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list12").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add13").click(function(){
    
    var menu_name = $("#PaneerMutter").html()
    var menu_price = $("#PaneerMutterprice").html();
    var menu_qty = $("#ppr37").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list13").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add14").click(function(){
    
    var menu_name = $("#ShevBhajiSpecial").html()
    var menu_price = $("#ShevBhajiSpecialprice").html();
    var menu_qty = $("#ppr40").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list14").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add15").click(function(){
    
    var menu_name = $("#ShewagaMasalaSpecial").html()
    var menu_price = $("#ShewagaMasalaSpecialprice").html();
    var menu_qty = $("#ppr43").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list15").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add16").click(function(){
    
    var menu_name = $("#TawaChapati").html()
    var menu_price = $("#TawaChapatiprice").html();
    var menu_qty = $("#ppr46").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list16").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add17").click(function(){
    
    var menu_name = $("#ButterChapathi").html()
    var menu_price = $("#ButterChapathiprice").html();
    var menu_qty = $("#ppr49").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list17").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add18").click(function(){
    
    var menu_name = $("#TawaParatha").html()
    var menu_price = $("#TawaParathaprice").html();
    var menu_qty = $("#ppr52").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list18").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add19").click(function(){
    
    var menu_name = $("#AlooParatha").html()
    var menu_price = $("#AlooParathaprice").html();
    var menu_qty = $("#ppr55").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list19").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add20").click(function(){
    
    var menu_name = $("#PlainRice").html()
    var menu_price = $("#PlainRiceprice").html();
    var menu_qty = $("#ppr58").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list20").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add21").click(function(){
    
    var menu_name = $("#JeeraRice").html()
    var menu_price = $("#JeeraRiceprice").html();
    var menu_qty = $("#ppr61").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list21").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add22").click(function(){
    
    var menu_name = $("#VegPulao").html()
    var menu_price = $("#VegPulaoprice").html();
    var menu_qty = $("#ppr64").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list22").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add23").click(function(){
    
    var menu_name = $("#MasalaRice").html()
    var menu_price = $("#MasalaRiceprice").html();
    var menu_qty = $("#ppr67").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list23").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add24").click(function(){
    
    var menu_name = $("#DalFry").html()
    var menu_price = $("#DalFryprice").html();
    var menu_qty = $("#ppr70").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list24").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add25").click(function(){
    
    var menu_name = $("#DalTadka").html()
    var menu_price = $("#DalTadkaprice").html();
    var menu_qty = $("#ppr73").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list25").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add26").click(function(){
    
    var menu_name = $("#DalKolhapuri").html()
    var menu_price = $("#DalKolhapuriprice").html();
    var menu_qty = $("#ppr76").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list26").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add27").click(function(){
    
    var menu_name = $("#ButterDalFry").html()
    var menu_price = $("#ButterDalFryprice").html();
    var menu_qty = $("#ppr79").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list27").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add28").click(function(){
    
    var menu_name = $("#JeeraDal").html()
    var menu_price = $("#JeeraDalprice").html();
    var menu_qty = $("#ppr82").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list28").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add29").click(function(){
    
    var menu_name = $("#PaneerMakhani").html()
    var menu_price = $("#PaneerMakhaniprice").html();
    var menu_qty = $("#ppr85").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list29").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add30").click(function(){
    
    var menu_name = $("#PaneerBhurji").html()
    var menu_price = $("#PaneerBhurjiprice").html();
    var menu_qty = $("#ppr88").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list30").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add31").click(function(){
    
    var menu_name = $("#PaneerPalak").html()
    var menu_price = $("#PaneerPalakprice").html();
    var menu_qty = $("#ppr91").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list31").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})
$(".add32").click(function(){
    
    var menu_name = $("#PaneerKeema").html()
    var menu_price = $("#PaneerKeemaprice").html();
    var menu_qty = $("#ppr94").html()
    var final_price = parseInt(menu_price) * parseInt(menu_qty);
    $("#list32").html("<li><h5>"+menu_name+" " + menu_price+" "+" x "+menu_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})



$("#final_bill_btn").click(function(){
       
    var addition=0;
    
    for(var i=0; i<sum.length; i++){
            addition = addition+sum[i];
    }
    // console.log("addition", addition )
    
    
    $("#final_bill12").html("Total = "+addition)
    })
