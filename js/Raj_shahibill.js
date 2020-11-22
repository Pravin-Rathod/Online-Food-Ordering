var sum = new Array ();

$(".rsdb_add").click(function(){
    
    var menu_name = $("#rsdb").html()
    var rsdb_price = $("#rsdb_price").html();
    var rsdb_qty = $("#icf1").html()
    var final_price = parseInt(rsdb_price) * parseInt(rsdb_qty);
    $("#list1").html("<li><h5>"+menu_name+" " + rsdb_price+" "+" x "+rsdb_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".veg_thali_add").click(function(){
    
    var menu_name = $("#veg_thali").html()
    var veg_thali_price = $("#veg_thali_price").html();
    var veg_thali_qty = $("#icf4").html()
    var final_price = parseInt(veg_thali_price) * parseInt(veg_thali_qty);
    $("#list2").html("<li><h5>"+menu_name+" " + veg_thali_price+" "+" x "+veg_thali_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".special_thali_add").click(function(){
    
    var menu_name = $("#special_thali").html()
    var special_thali_price = $("#special_thali_price").html();
    var special_thali_qty = $("#icf7").html()
    var final_price = parseInt(special_thali_price) * parseInt(special_thali_qty);
    $("#list3").html("<li><h5>"+menu_name+" " + special_thali_price+" "+" x "+special_thali_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".ptm_add").click(function(){
    
    var menu_name = $("#ptm").html()
    var ptm_price = $("#ptm_price").html();
    var ptm_qty = $("#icf10").html()
    var final_price = parseInt(ptm_price) * parseInt(ptm_qty);
    $("#list4").html("<li><h5>"+menu_name+" " + ptm_price+" "+" x "+ptm_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".kadia_paneer_add").click(function(){
    
    var menu_name = $("#kadia_paneer").html()
    var kadia_paneer_price = $("#kadia_paneer_price").html();
    var kadia_paneer_qty = $("#icf13").html()
    var final_price = parseInt(kadia_paneer_price) * parseInt(kadia_paneer_qty);
    $("#list5").html("<li><h5>"+menu_name+" " + kadia_paneer_price+" "+" x "+kadia_paneer_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".paneer_bhurji_add").click(function(){
    
    var menu_name = $("#paneer_bhurji").html()
    var paneer_bhurji_price = $("#paneer_bhurji_price").html();
    var paneer_bhurji_qty = $("#icf16").html()
    var final_price = parseInt(paneer_bhurji_price) * parseInt(paneer_bhurji_qty);
    $("#list6").html("<li><h5>"+menu_name+" " + paneer_bhurji_price+" "+" x "+paneer_bhurji_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".matar_paneer_add").click(function(){
    
    var menu_name = $("#matar_paneer").html()
    var matar_paneer_price = $("#matar_paneer_price").html();
    var matar_paneer_qty = $("#icf19").html()
    var final_price = parseInt(matar_paneer_price) * parseInt(matar_paneer_qty);
    $("#list7").html("<li><h5>"+menu_name+" " + matar_paneer_price+" "+" x "+matar_paneer_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".paneer_handi_add").click(function(){
    
    var menu_name = $("#paneer_handi").html()
    var paneer_handi_price = $("#paneer_handi_price").html();
    var paneer_handi_qty = $("#icf22").html()
    var final_price = parseInt(paneer_handi_price) * parseInt(paneer_handi_qty);
    $("#list8").html("<li><h5>"+menu_name+" " + paneer_handi_price+" "+" x "+paneer_handi_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".palak_paneer_add").click(function(){
    
    var menu_name = $("#palak_paneer").html()
    var palak_paneer_price = $("#palak_paneer_price").html();
    var palak_paneer_qty = $("#icf25").html()
    var final_price = parseInt(palak_paneer_price) * parseInt(palak_paneer_qty);
    $("#list9").html("<li><h5>"+menu_name+" " + palak_paneer_price+" "+" x "+palak_paneer_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".shahi_paneer_add").click(function(){
    
    var menu_name = $("#shahi_paneer").html()
    var shahi_paneer_price = $("#shahi_paneer_price").html();
    var shahi_paneer_qty = $("#icf28").html()
    var final_price = parseInt(shahi_paneer_price) * parseInt(shahi_paneer_qty);
    $("#list10").html("<li><h5>"+menu_name+" " + shahi_paneer_price+" "+" x "+shahi_paneer_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".pcl_add").click(function(){
    
    var menu_name = $("#pcl").html()
    var pcl_price = $("#pcl_price").html();
    var pcl_qty = $("#icf31").html()
    var final_price = parseInt(pcl_price) * parseInt(pcl_qty);
    $("#list11").html("<li><h5>"+menu_name+" " + pcl_price+" "+" x "+pcl_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".paneer_cheese_add").click(function(){
    
    var menu_name = $("#paneer_cheese").html()
    var paneer_cheese_price = $("#paneer_cheese_price").html();
    var paneer_cheese_qty = $("#icf34").html()
    var final_price = parseInt(paneer_cheese_price) * parseInt(paneer_cheese_qty);
    $("#list12").html("<li><h5>"+menu_name+" " + paneer_cheese_price+" "+" x "+paneer_cheese_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".paneer_maharaja_add").click(function(){
    
    var menu_name = $("#paneer_maharaja").html()
    var paneer_maharaja_price = $("#paneer_maharaja_price").html();
    var paneer_maharaja_qty = $("#icf37").html()
    var final_price = parseInt(paneer_maharaja_price) * parseInt(paneer_maharaja_qty);
    $("#list13").html("<li><h5>"+menu_name+" " + paneer_maharaja_price+" "+" x "+paneer_maharaja_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".pp_add").click(function(){
    
    var menu_name = $("#pp").html()
    var pp_price = $("#pp_price").html();
    var pp_qty = $("#icf40").html()
    var final_price = parseInt(pp_price) * parseInt(pp_qty);
    $("#list14").html("<li><h5>"+menu_name+" " + pp_price+" "+" x "+pp_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".paneer_patiyala_add").click(function(){
    
    var menu_name = $("#paneer_patiyala").html()
    var paneer_patiyala_price = $("#paneer_patiyala_price").html();
    var paneer_patiyala_qty = $("#icf43").html()
    var final_price = parseInt(paneer_patiyala_price) * parseInt(paneer_patiyala_qty);
    $("#list15").html("<li><h5>"+menu_name+" " + paneer_patiyala_price+" "+" x "+paneer_patiyala_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".pk_add").click(function(){
    
    var menu_name = $("#pk").html()
    var pk_price = $("#pk_price").html();
    var pk_qty = $("#icf47").html()
    var final_price = parseInt(pk_price) * parseInt(pk_qty);
    $("#list16").html("<li><h5>"+menu_name+" " + pk_price+" "+" x "+pk_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".pc_add").click(function(){
    
    var menu_name = $("#pc").html()
    var pc_price = $("#pc_price").html();
    var pc_qty = $("#icf50").html()
    var final_price = parseInt(pc_price) * parseInt(pc_qty);
    $("#list17").html("<li><h5>"+menu_name+" " + pc_price+" "+" x "+pc_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".pm_add").click(function(){
    
    var menu_name = $("#pm").html()
    var pm_price = $("#pm_price").html();
    var pm_qty = $("#icf53").html()
    var final_price = parseInt(pm_price) * parseInt(pm_qty);
    $("#list18").html("<li><h5>"+menu_name+" " + pm_price+" "+" x "+pm_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".ps_add").click(function(){
    
    var menu_name = $("#ps").html()
    var ps_price = $("#pm_price").html();
    var ps_qty = $("#icf57").html()
    var final_price = parseInt(ps_price) * parseInt(ps_qty);
    $("#list19").html("<li><h5>"+menu_name+" " + ps_price+" "+" x "+ps_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".shewaga_add").click(function(){
    
    var menu_name = $("#shewaga").html()
    var shewaga_price = $("#shewaga_price").html();
    var shewaga_qty = $("#icf60").html()
    var final_price = parseInt(shewaga_price) * parseInt(shewaga_qty);
    $("#list20").html("<li><h5>"+menu_name+" " + shewaga_price+" "+" x "+shewaga_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".shewaga_add").click(function(){
    
    var menu_name = $("#shewaga").html()
    var shewaga_price = $("#shewaga_price").html();
    var shewaga_qty = $("#icf63").html()
    var final_price = parseInt(shewaga_price) * parseInt(shewaga_qty);
    $("#list21").html("<li><h5>"+menu_name+" " + shewaga_price+" "+" x "+shewaga_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".tc_add").click(function(){
    
    var menu_name = $("#tc").html()
    var tc_price = $("#tc_price").html();
    var tc_qty = $("#icf67").html()
    var final_price = parseInt(tc_price) * parseInt(tc_qty);
    $("#list22").html("<li><h5>"+menu_name+" " + tc_price+" "+" x "+tc_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".bn_add").click(function(){
    
    var menu_name = $("#bn").html()
    var bn_price = $("#bn_price").html();
    var bn_qty = $("#icf70").html()
    var final_price = parseInt(bn_price) * parseInt(bn_qty);
    $("#list23").html("<li><h5>"+menu_name+" " + bn_price+" "+" x "+bn_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".bn_add").click(function(){
    
    var menu_name = $("#bn").html()
    var bn_price = $("#bn_price").html();
    var bn_qty = $("#icf73").html()
    var final_price = parseInt(bn_price) * parseInt(bn_qty);
    $("#list24").html("<li><h5>"+menu_name+" " + bn_price+" "+" x "+bn_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".jr_add").click(function(){
    
    var menu_name = $("#jr").html()
    var bn_price = $("#bn_price").html();
    var bn_qty = $("#icf76").html()
    var final_price = parseInt(bn_price) * parseInt(bn_qty);
    $("#list25").html("<li><h5>"+menu_name+" " + bn_price+" "+" x "+bn_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".br_add").click(function(){
    
    var menu_name = $("#br").html()
    var br_price = $("#br_price").html();
    var br_qty = $("#icf79").html()
    var final_price = parseInt(br_price) * parseInt(br_qty);
    $("#list26").html("<li><h5>"+menu_name+" " + br_price+" "+" x "+br_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".pb_add").click(function(){
    
    var menu_name = $("#pb").html()
    var pb_price = $("#pb_price").html();
    var pb_qty = $("#icf82").html()
    var final_price = parseInt(pb_price) * parseInt(pb_qty);
    $("#list27").html("<li><h5>"+menu_name+" " + pb_price+" "+" x "+pb_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".samosa_add").click(function(){
    
    var menu_name = $("#samosa").html()
    var samosa_price = $("#samosa_price").html();
    var samosa_qty = $("#icf85").html()
    var final_price = parseInt(samosa_price) * parseInt(samosa_qty);
    $("#list28").html("<li><h5>"+menu_name+" " + samosa_price+" "+" x "+samosa_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".kachori_add").click(function(){
    
    var menu_name = $("#kachori").html()
    var kachori_price = $("#kachori_price").html();
    var kachori_qty = $("#icf87").html()
    var final_price = parseInt(kachori_price) * parseInt(kachori_qty);
    $("#list29").html("<li><h5>"+menu_name+" " + kachori_price+" "+" x "+kachori_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".vb_add").click(function(){
    
    var menu_name = $("#vb").html()
    var vb_price = $("#vb_price").html();
    var vb_qty = $("#icf90").html()
    var final_price = parseInt(vb_price) * parseInt(vb_qty);
    $("#list30").html("<li><h5>"+menu_name+" " + vb_price+" "+" x "+vb_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".vhdb_add").click(function(){
    
    var menu_name = $("#vhdb").html()
    var vhdb_price = $("#vhdb_price").html();
    var vhdb_qty = $("#icf93").html()
    var final_price = parseInt(vhdb_price) * parseInt(vhdb_qty);
    $("#list30").html("<li><h5>"+menu_name+" " + vhdb_price+" "+" x "+vhdb_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".paneer_biryani_add").click(function(){
    
    var menu_name = $("#paneer_biryani").html()
    var paneer_biryani_price = $("#paneer_biryani_price").html();
    var paneer_biryani_qty = $("#icf97").html()
    var final_price = parseInt(paneer_biryani_price) * parseInt(paneer_biryani_qty);
    $("#list30").html("<li><h5>"+menu_name+" " + paneer_biryani_price+" "+" x "+paneer_biryani_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".vdb_add").click(function(){
    
    var menu_name = $("#vdb").html()
    var vdb_price = $("#vdb_price").html();
    var vdb_qty = $("#icf91").html()
    var final_price = parseInt(vdb_price) * parseInt(vdb_qty);
    $("#list30").html("<li><h5>"+menu_name+" " + vdb_price+" "+" x "+vdb_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".masala_dosa_add").click(function(){
    
    var menu_name = $("#masala_dosa").html()
    var masala_dosa_price = $("#masala_dosa_price").html();
    var masala_dosa_qty = $("#icf94").html()
    var final_price = parseInt(masala_dosa_price) * parseInt(masala_dosa_qty);
    $("#list30").html("<li><h5>"+menu_name+" " + masala_dosa_price+" "+" x "+masala_dosa_qty+" = "+final_price+"</h5></li>")
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
