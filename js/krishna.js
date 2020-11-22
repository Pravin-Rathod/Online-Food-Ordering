var sum = new Array ();


$(".ms_add").click(function(){
    
    var menu_name = $("#ms").html()
    var ms_price = $("#ms_price").html();
    var ms_qty = $("#icf1").html()
    var final_price = parseInt(ms_price) * parseInt(ms_qty);
    $("#list1").html("<li><h5>"+menu_name+" " + ms_price+" "+" x "+ms_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".mk_add").click(function(){
    
    var menu_name = $("#mk").html()
    var mk_price = $("#mk_price").html();
    var mk_qty = $("#icf4").html()
    var final_price = parseInt(mk_price) * parseInt(mk_qty);
    $("#list2").html("<li><h5>"+menu_name+" " + mk_price+" "+" x "+mk_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".bkc_add").click(function(){
    
    var menu_name = $("#bkc").html()
    var bkc_price = $("#bkc_price").html();
    var bkc_qty = $("#icf7").html()
    var final_price = parseInt(bkc_price) * parseInt(bkc_qty);
    $("#list3").html("<li><h5>"+menu_name+" " +bkc_price+" "+" x "+bkc_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".bh_add").click(function(){
    
    var menu_name = $("#bh").html()
    var bh_price = $("#bh_price").html();
    var bh_qty = $("#icf10").html()
    var final_price = parseInt(bh_price) * parseInt(bh_qty);
    $("#list4").html("<li><h5>"+menu_name+" " + bh_price+" "+" x "+bh_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".dp_add").click(function(){
    
    var menu_name = $("#dp").html()
    var dp_price = $("#dp_price").html();
    var dp_qty = $("#icf13").html()
    var final_price = parseInt(dp_price) * parseInt(dp_qty);
    $("#list5").html("<li><h5>"+menu_name+" " + dp_price+" "+" x "+dp_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".sp_add").click(function(){
    
    var menu_name = $("#sp").html()
    var sp_price = $("#sp_price").html();
    var sp_qty = $("#icf16").html()
    var final_price = parseInt(sp_price) * parseInt(sp_qty);
    $("#list6").html("<li><h5>"+menu_name+" " + sp_price+" "+" x "+ sp_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".db_add").click(function(){
    
    var menu_name = $("#db").html()
    var db_price = $("#db_price").html();
    var db_qty = $("#icf19").html()
    var final_price = parseInt(db_price) * parseInt(db_qty);
    $("#list7").html("<li><h5>"+menu_name+" " + db_price+" "+" x "+db_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".dm_add").click(function(){
    
    var menu_name = $("#dm").html()
    var dm_price = $("#dm_price").html();
    var dm_qty = $("#icf22").html()
    var final_price = parseInt(dm_price) * parseInt(dm_qty);
    $("#list8").html("<li><h5>"+menu_name+" " +dm_price+" "+" x "+dm_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".mp_add").click(function(){
    
    var menu_name = $("#mp").html()
    var mp_price = $("#mp_price").html();
    var mp_qty = $("#icf25").html()
    var final_price = parseInt(mp_price) * parseInt(mp_qty);
    $("#list9").html("<li><h5>"+menu_name+" " + mp_price+" "+" x "+mp_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".kp_add").click(function(){
    
    var menu_name = $("#kp").html()
    var kp_price = $("#kp_price").html();
    var kp_qty = $("#icf28").html()
    var final_price = parseInt(kp_price) * parseInt(kp_qty);
    $("#list10").html("<li><h5>"+menu_name+" " + kp_price+" "+" x "+kp_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".brc_add").click(function(){
    
    var menu_name = $("#brc").html()
    var brc_price = $("#brc_price").html();
    var brc_qty = $("#icf31").html()
    var final_price = parseInt(brc_price) * parseInt(brc_qty);
    $("#list11").html("<li><h5>"+menu_name+" " +brc_price+" "+" x "+brc_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".s_add").click(function(){
    
    var menu_name = $("#s").html()
    var s_price = $("#s_price").html();
    var s_qty = $("#icf34").html()
    var final_price = parseInt(s_price) * parseInt(s_qty);
    $("#list12").html("<li><h5>"+menu_name+" " +s_price+" "+" x "+s_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".do_add").click(function(){
    
    var menu_name = $("#do").html()
    var d_price = $("#do_price").html();
    var d_qty = $("#icf37").html()
    var final_price = parseInt(d_price) * parseInt(d_qty);
    $("#list13").html("<li><h5>"+menu_name+" " + d_price+" "+" x "+d_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".k_add").click(function(){
    
    var menu_name = $("#k").html()
    var k_price = $("#k_price").html();
    var k_qty = $("#icf40").html()
    var final_price = parseInt(k_price) * parseInt(k_qty);
    $("#list14").html("<li><h5>"+menu_name+" " +k_price+" "+" x "+k_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".vs_add").click(function(){
    
    var menu_name = $("#vs").html()
    var vs_price = $("#vs_price").html();
    var vs_qty = $("#icf43").html()
    var final_price = parseInt(vs_price) * parseInt(vs_qty);
    $("#list15").html("<li><h5>"+menu_name+" " + vs_price+" "+" x "+vs_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".bs_add").click(function(){
    
    var menu_name = $("#bs").html()
    var bs_price = $("#bs_price").html();
    var bs_qty = $("#icf46").html()
    var final_price = parseInt(bs_price) * parseInt(bs_qty);
    $("#list16").html("<li><h5>"+menu_name+" " + bs_price+" "+" x "+bs_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".sl_add").click(function(){
    
    var menu_name = $("#sl").html()
    var sl_price = $("#sl_price").html();
    var sl_qty = $("#icf49").html()
    var final_price = parseInt(sl_price) * parseInt(sl_qty);
    $("#list17").html("<li><h5>"+menu_name+" " +sl_price+" "+" x "+sl_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mt_add").click(function(){
    
    var menu_name = $("#mt").html()
    var mt_price = $("#mt_price").html();
    var mt_qty = $("#icf52").html()
    var final_price = parseInt(mt_price) * parseInt(mt_qty);
    $("#list18").html("<li><h5>"+menu_name+" " + mt_price+" "+" x "+mt_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".wb_add").click(function(){
    
    var menu_name = $("#wb").html()
    var wb_price = $("#wb_price").html();
    var wb_qty = $("#icf55").html()
    var final_price = parseInt(wb_price) * parseInt(wb_qty);
    $("#list19").html("<li><h5>"+menu_name+" " + wb_price+" "+" x "+wb_qty+" = "+final_price+"</h5></li>")
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
