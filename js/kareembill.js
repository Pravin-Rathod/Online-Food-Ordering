
var sum = new Array ();
$(".kareem_special_add").click(function(){
    
    var menu_name = $("#kareem_special").html()
    var kareem_special_price = $("#kareem_special_price").html();
    var kareem_special_qty = $("#icf1").html()
    var final_price = parseInt(kareem_special_price) * parseInt(kareem_special_qty);
    $("#list1").html("<li><h5>"+menu_name+" " + kareem_special_price+" "+" x "+kareem_special_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".chicken_platter_add").click(function(){
    
    var menu_name = $("#chicken_platter").html()
    var chicken_platter_price = $("#chicken_platter_price").html();
    var chicken_platter_qty = $("#icf4").html()
    var final_price = parseInt(chicken_platter_price) * parseInt(chicken_platter_qty);
    $("#list2").html("<li><h5>"+menu_name+" " + chicken_platter_price+" "+" x "+chicken_platter_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mdb_add").click(function(){
    
    var menu_name = $("#mdb").html()
    var mdb_price = $("#mdb_price").html();
    var mdb_qty = $("#icf7").html()
    var final_price = parseInt(mdb_price) * parseInt(mdb_qty);
    $("#list3").html("<li><h5>"+menu_name+" " + mdb_price+" "+" x "+mdb_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".madb_add").click(function(){
    
    var menu_name = $("#madb").html()
    var madb_price = $("#madb_price").html();
    var madb_qty = $("#icf10").html()
    var final_price = parseInt(madb_price) * parseInt(madb_qty);
    $("#list4").html("<li><h5>"+menu_name+" " + madb_price+" "+" x "+madb_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mtdb_add").click(function(){
    
    var menu_name = $("#mtdb").html()
    var mtdb_price = $("#mtdb_price").html();
    var mtdb_qty = $("#icf13").html()
    var final_price = parseInt(mtdb_price) * parseInt(mtdb_qty);
    $("#list5").html("<li><h5>"+menu_name+" " + mtdb_price+" "+" x "+mtdb_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".murgh_anarkali_b_add").click(function(){
    
    var menu_name = $("#murgh_anarkali_b").html()
    var murgh_anarkali_b_price = $("#murgh_anarkali_b_price").html();
    var murgh_anarkali_b_qty = $("#icf16").html()
    var final_price = parseInt(murgh_anarkali_b_price) * parseInt(murgh_anarkali_b_qty);
    $("#list6").html("<li><h5>"+menu_name+" " + murgh_anarkali_b_price+" "+" x "+murgh_anarkali_b_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".bmab_add").click(function(){
    
    var menu_name = $("#bmab").html()
    var bmab_price = $("#bmab_price").html();
    var bmab_qty = $("#icf19").html()
    var final_price = parseInt(bmab_price) * parseInt(bmab_qty);
    $("#list7").html("<li><h5>"+menu_name+" " + bmab_price+" "+" x "+bmab_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mutton_dum_biryani_add").click(function(){
    
    var menu_name = $("#mutton_dum_biryani").html()
    var mutton_dum_biryani_price = $("#mutton_dum_biryani_price").html();
    var mutton_dum_biryani_qty = $("#icf22").html()
    var final_price = parseInt(mutton_dum_biryani_price) * parseInt(mutton_dum_biryani_qty);
    $("#list8").html("<li><h5>"+menu_name+" " + mutton_dum_biryani_price+" "+" x "+mutton_dum_biryani_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".eadb_add").click(function(){
    
    var menu_name = $("#eadb").html()
    var eadb_price = $("#eadb_price").html();
    var eadb_qty = $("#icf25").html()
    var final_price = parseInt(eadb_price) * parseInt(eadb_qty);
    $("#list9").html("<li><h5>"+menu_name+" " + eadb_price+" "+" x "+eadb_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".dal_peshwari_add").click(function(){
    
    var menu_name = $("#dal_peshwari").html()
    var dal_peshwari_price = $("#dal_peshwari_price").html();
    var dal_peshwari_qty = $("#icf28").html()
    var final_price = parseInt(dal_peshwari_price) * parseInt(dal_peshwari_qty);
    $("#list10").html("<li><h5>"+menu_name+" " + dal_peshwari_price+" "+" x "+dal_peshwari_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".paneer_tikka_masala_add").click(function(){
    
    var menu_name = $("#paneer_tikka_masala").html()
    var paneer_tikka_masala_price = $("#paneer_tikka_masala_price").html();
    var paneer_tikka_masala_qty = $("#icf31").html()
    var final_price = parseInt(paneer_tikka_masala_price) * parseInt(paneer_tikka_masala_qty);
    $("#list11").html("<li><h5>"+menu_name+" " + paneer_tikka_masala_price+" "+" x "+paneer_tikka_masala_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".murgh_nizami_kabab_add").click(function(){
    
    var menu_name = $("#murgh_nizami_kabab").html()
    var murgh_nizami_kabab_price = $("#murgh_nizami_kabab_price").html();
    var murgh_nizami_kabab_qty = $("#icf34").html()
    var final_price = parseInt(murgh_nizami_kabab_price) * parseInt(murgh_nizami_kabab_qty);
    $("#list12").html("<li><h5>"+menu_name+" " + murgh_nizami_kabab_price+" "+" x "+murgh_nizami_kabab_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".murgh_pahadi_kabab_add").click(function(){
    
    var menu_name = $("#murgh_pahadi_kabab").html()
    var murgh_pahadi_kabab_price = $("#murgh_pahadi_kabab_price").html();
    var murgh_pahadi_kabab_qty = $("#icf37").html()
    var final_price = parseInt(murgh_pahadi_kabab_price) * parseInt(murgh_pahadi_kabab_qty);
    $("#list13").html("<li><h5>"+menu_name+" " + murgh_pahadi_kabab_price+" "+" x "+murgh_pahadi_kabab_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".murgh_mali_kabab_add").click(function(){
    
    var menu_name = $("#murgh_mali_kabab").html()
    var murgh_mali_kabab_price = $("#murgh_mali_kabab_price").html();
    var murgh_mali_kabab_qty = $("#icf40").html()
    var final_price = parseInt(murgh_mali_kabab_price) * parseInt(murgh_mali_kabab_qty);
    $("#list14").html("<li><h5>"+menu_name+" " + murgh_mali_kabab_price+" "+" x "+murgh_mali_kabab_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".murgh_seekh_kabab_add").click(function(){
    
    var menu_name = $("#murgh_seekh_kabab").html()
    var murgh_seekh_kabab_price = $("#murgh_seekh_kabab_price").html();
    var murgh_seekh_kabab_qty = $("#icf43").html()
    var final_price = parseInt(murgh_seekh_kabab_price) * parseInt(murgh_seekh_kabab_qty);
    $("#list15").html("<li><h5>"+menu_name+" " + murgh_seekh_kabab_price+" "+" x "+murgh_seekh_kabab_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".murgh_reshmi_kabab_add").click(function(){
    
    var menu_name = $("#murgh_reshmi_kabab").html()
    var murgh_reshmi_kabab_price = $("#murgh_reshmi_kabab_price").html();
    var murgh_reshmi_kabab_qty = $("#icf47").html()
    var final_price = parseInt(murgh_reshmi_kabab_price) * parseInt(murgh_reshmi_kabab_qty);
    $("#list16").html("<li><h5>"+menu_name+" " + murgh_reshmi_kabab_price+" "+" x "+murgh_reshmi_kabab_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mck_add").click(function(){
    
    var menu_name = $("#mck").html()
    var mck_price = $("#mck_price").html();
    var mck_qty = $("#icf50").html()
    var final_price = parseInt(mck_price) * parseInt(mck_qty);
    $("#list17").html("<li><h5>"+menu_name+" " + mck_price+" "+" x "+mck_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".murghpk_add").click(function(){
    
    var menu_name = $("#murghpk").html()
    var murghpk_price = $("#murghpk_price").html();
    var murghpk_qty = $("#icf53").html()
    var final_price = parseInt(murghpk_price) * parseInt(murghpk_qty);
    $("#list18").html("<li><h5>"+menu_name+" " + murghpk_price+" "+" x "+murghpk_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mksk_add").click(function(){
    
    var menu_name = $("#mksk").html()
    var mksk_price = $("#mksk_price").html();
    var mksk_qty = $("#icf56").html()
    var final_price = parseInt(mksk_price) * parseInt(mksk_qty);
    $("#list19").html("<li><h5>"+menu_name+" " + mksk_price+" "+" x "+mksk_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mkk_add").click(function(){
    
    var menu_name = $("#mkk").html()
    var mkk_price = $("#mkk_price").html();
    var mkk_qty = $("#icf59").html()
    var final_price = parseInt(mkk_price) * parseInt(mkk_qty);
    $("#list20").html("<li><h5>"+menu_name+" " + mkk_price+" "+" x "+mkk_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mck_add").click(function(){
    
    var menu_name = $("#mck").html()
    var mck_price = $("#mck_price").html();
    var mck_qty = $("#icf62").html()
    var final_price = parseInt(mck_price) * parseInt(mck_qty);
    $("#list21").html("<li><h5>"+menu_name+" " + mck_price+" "+" x "+mck_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".atc_add").click(function(){
    
    var menu_name = $("#atc").html()
    var atc_price = $("#atc_price").html();
    var atc_qty = $("#icf65").html()
    var final_price = parseInt(atc_price) * parseInt(atc_qty);
    $("#list22").html("<li><h5>"+menu_name+" " + atc_price+" "+" x "+atc_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".mtl_add").click(function(){
    
    var menu_name = $("#mtl").html()
    var mtl_price = $("#mtl_price").html();
    var mtl_qty = $("#icf68").html()
    var final_price = parseInt(mtl_price) * parseInt(mtl_qty);
    $("#list23").html("<li><h5>"+menu_name+" " + mtl_price+" "+" x "+mtl_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mptc_add").click(function(){
    
    var menu_name = $("#mptc").html()
    var mptc_price = $("#mptc_price").html();
    var mptc_qty = $("#icf71").html()
    var final_price = parseInt(mptc_price) * parseInt(mptc_qty);
    $("#list24").html("<li><h5>"+menu_name+" " + mptc_price+" "+" x "+mptc_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".ctc_add").click(function(){
    
    var menu_name = $("#ctc").html()
    var ctc_price = $("#ctc_price").html();
    var ctc_qty = $("#icf74").html()
    var final_price = parseInt(ctc_price) * parseInt(ctc_qty);
    $("#list25").html("<li><h5>"+menu_name+" " + ctc_price+" "+" x "+ctc_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mmkk_add").click(function(){
    
    var menu_name = $("#mmkk").html()
    var mmkk_price = $("#mmkk_price").html();
    var mmkk_qty = $("#icf79").html()
    var final_price = parseInt(mmkk_price) * parseInt(mmkk_qty);
    $("#list26").html("<li><h5>"+menu_name+" " + mmkk_price+" "+" x "+mmkk_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mctk_add").click(function(){
    
    var menu_name = $("#mctk").html()
    var mctk_price = $("#mctk_price").html();
    var mctk_qty = $("#icf82").html()
    var final_price = parseInt(mctk_price) * parseInt(mctk_qty);
    $("#list27").html("<li><h5>"+menu_name+" " + mctk_price+" "+" x "+mctk_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".brta_add").click(function(){
    
    var menu_name = $("#brta").html()
    var brta_price = $("#brta_price").html();
    var brtak_qty = $("#icf85").html()
    var final_price = parseInt(brta_price) * parseInt(brtak_qty);
    $("#list28").html("<li><h5>"+menu_name+" " + brta_price+" "+" x "+brtak_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".brtl_add").click(function(){
    
    var menu_name = $("#brtl").html()
    var brtl_price = $("#brtl_price").html();
    var brtl_qty = $("#icf88").html()
    var final_price = parseInt(brtl_price) * parseInt(brtl_qty);
    $("#list29").html("<li><h5>"+menu_name+" " + brtl_price+" "+" x "+brtl_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".bonelessrtk_add").click(function(){
    
    var menu_name = $("#bonelessrtk").html()
    var bonelessrtk_price = $("#bonelessrtk_price").html();
    var bonelessrtk_qty = $("#icf91").html()
    var final_price = parseInt(bonelessrtk_price) * parseInt(bonelessrtk_qty);
    $("#list30").html("<li><h5>"+menu_name+" " + bonelessrtk_price+" "+" x "+bonelessrtk_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".tp_add").click(function(){
    
    var menu_name = $("#tp").html()
    var tp_price = $("#tp_price").html();
    var tp_qty = $("#icf94").html()
    var final_price = parseInt(tp_price) * parseInt(tp_qty);
    $("#list26").html("<li><h5>"+menu_name+" " + tp_price+" "+" x "+tp_qty+" = "+final_price+"</h5></li>")
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
