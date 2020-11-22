var sum = new Array ();


$(".masala_dosa_add").click(function(){
    
    var menu_name = $("#masala_dosa").html()
    var masala_dosa_price = $("#masala_dosa_price").html();
    var masala_dosa_qty = $("#icf1").html()
    var final_price = parseInt(masala_dosa_price) * parseInt(masala_dosa_qty);
    $("#list1").html("<li><h5>"+menu_name+" " + masala_dosa_price+" "+" x "+masala_dosa_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".medu_vada_add").click(function(){
    
    var menu_name = $("#medu_vada").html()
    var medu_vada_price = $("#medu_vada_price").html();
    var medu_vada_qty = $("#icf4").html()
    var final_price = parseInt(medu_vada_price) * parseInt(medu_vada_qty);
    $("#list2").html("<li><h5>"+menu_name+" " + medu_vada_price+" "+" x "+medu_vada_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".idali_add").click(function(){
    
    var menu_name = $("#idali").html()
    var idali_price = $("#idali_price").html();
    var idali_qty = $("#icf7").html()
    var final_price = parseInt(idali_price) * parseInt(idali_qty);
    $("#list3").html("<li><h5>"+menu_name+" " +idali_price+" "+" x "+idali_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mancho_add").click(function(){
    
    var menu_name = $("#mancho").html()
    var madb_price = $("#mancho_price").html();
    var madb_qty = $("#icf10").html()
    var final_price = parseInt(madb_price) * parseInt(madb_qty);
    $("#list4").html("<li><h5>"+menu_name+" " + madb_price+" "+" x "+madb_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".chilli_add").click(function(){
    
    var menu_name = $("#chilli").html()
    var mtdb_price = $("#chilli_price").html();
    var mtdb_qty = $("#icf13").html()
    var final_price = parseInt(mtdb_price) * parseInt(mtdb_qty);
    $("#list5").html("<li><h5>"+menu_name+" " + mtdb_price+" "+" x "+mtdb_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".p65_add").click(function(){
    
    var menu_name = $("#p65").html()
    var p65_price = $("#p65_price").html();
    var p65_qty = $("#icf16").html()
    var final_price = parseInt(p65_price) * parseInt(p65_qty);
    $("#list6").html("<li><h5>"+menu_name+" " + p65_price+" "+" x "+ p65_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".corn_add").click(function(){
    
    var menu_name = $("#corn").html()
    var corn_price = $("#corn_price").html();
    var corn_qty = $("#icf19").html()
    var final_price = parseInt(corn_price) * parseInt(corn_qty);
    $("#list7").html("<li><h5>"+menu_name+" " + corn_price+" "+" x "+corn_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".bullet_add").click(function(){
    
    var menu_name = $("#bullet").html()
    var bullet_price = $("#bullet_price").html();
    var bullet_qty = $("#icf22").html()
    var final_price = parseInt(bullet_price) * parseInt(bullet_qty);
    $("#list8").html("<li><h5>"+menu_name+" " + bullet_price+" "+" x "+bullet_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".panman_add").click(function(){
    
    var menu_name = $("#panman").html()
    var panman_price = $("#panman_price").html();
    var panman_qty = $("#icf25").html()
    var final_price = parseInt(panman_price) * parseInt(panman_qty);
    $("#list9").html("<li><h5>"+menu_name+" " + panman_price+" "+" x "+panman_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".soyachi_add").click(function(){
    
    var menu_name = $("#soyachi").html()
    var soyachi_price = $("#soyachi_price").html();
    var soyachi_qty = $("#icf28").html()
    var final_price = parseInt(soyachi_price) * parseInt(soyachi_qty);
    $("#list10").html("<li><h5>"+menu_name+" " + soyachi_price+" "+" x "+soyachi_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".cornso_add").click(function(){
    
    var menu_name = $("#cornso").html()
    var cornso_price = $("#cornso_price").html();
    var cornso_qty = $("#icf31").html()
    var final_price = parseInt(cornso_price) * parseInt(cornso_qty);
    $("#list11").html("<li><h5>"+menu_name+" " +cornoso_price+" "+" x "+cornoso_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".shang_add").click(function(){
    
    var menu_name = $("#shang").html()
    var shang_price = $("#shang_price").html();
    var shang_qty = $("#icf34").html()
    var final_price = parseInt(shang_price) * parseInt(shang_qty);
    $("#list12").html("<li><h5>"+menu_name+" " +shang_price+" "+" x "+shang_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".vgb_add").click(function(){
    
    var menu_name = $("vgb").html()
    var vgb_price = $("#vgb_price").html();
    var vgb_qty = $("#icf37").html()
    var final_price = parseInt(vgb_price) * parseInt(vgb_qty);
    $("#list13").html("<li><h5>"+menu_name+" " + vgb_price+" "+" x "+vgb_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".phk_add").click(function(){
    
    var menu_name = $("#phk").html()
    var phk_price = $("#phk_price").html();
    var phk_qty = $("#icf40").html()
    var final_price = parseInt(phk_price) * parseInt(phk_qty);
    $("#list14").html("<li><h5>"+menu_name+" " + phk_price+" "+" x "+phk_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".cb_add").click(function(){
    
    var menu_name = $("#cb").html()
    var cb_price = $("#cb_price").html();
    var cb_qty = $("#icf43").html()
    var final_price = parseInt(cb_price) * parseInt(cb_qty);
    $("#list15").html("<li><h5>"+menu_name+" " + cb_price+" "+" x "+cb_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".sbk_add").click(function(){
    
    var menu_name = $("#sbk").html()
    var sbk_price = $("#sbk_price").html();
    var sbk_qty = $("#icf46").html()
    var final_price = parseInt(sbk_price) * parseInt(sbk_qty);
    $("#list16").html("<li><h5>"+menu_name+" " + sbk_price+" "+" x "+sbk_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".sbvd_add").click(function(){
    
    var menu_name = $("#sbvd").html()
    var sbvd_price = $("#sbvd_price").html();
    var sbvd_qty = $("#icf49").html()
    var final_price = parseInt(sbvd_price) * parseInt(sbvd_qty);
    $("#list17").html("<li><h5>"+menu_name+" " + sbvd_price+" "+" x "+sbvd_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".fgcp_add").click(function(){
    
    var menu_name = $("#fgcp").html()
    var fgcp_price = $("#fgcp_price").html();
    var fgcp_qty = $("#icf52").html()
    var final_price = parseInt(fgcp_price) * parseInt(fgcp_qty);
    $("#list18").html("<li><h5>"+menu_name+" " + fgcp_price+" "+" x "+fgcp_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".pk_add").click(function(){
    
    var menu_name = $("#pk").html()
    var pk_price = $("#pk_price").html();
    var pk_qty = $("#icf58").html()
    var final_price = parseInt(pk_price) * parseInt(pk_qty);
    $("#list19").html("<li><h5>"+menu_name+" " + pk_price+" "+" x "+pk_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".vgcut_add").click(function(){
    
    var menu_name = $("#vgcut").html()
    var vgcut_price = $("#vgcut_price").html();
    var vgcut_qty = $("#icf55").html()
    var final_price = parseInt(vgcut_price) * parseInt(vgcut_qty);
    $("#list20").html("<li><h5>"+menu_name+" " + vgcut_price+" "+" x "+vgcut_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".vgdra_add").click(function(){
    
    var menu_name = $("#vgdra").html()
    var vgdra_price = $("#vgdra_price").html();
    var vgdra_qty = $("#icf61").html()
    var final_price = parseInt(vgdra_price) * parseInt(vgdra_qty);
    $("#list21").html("<li><h5>"+menu_name+" " + vgdra_price+" "+" x "+vgdra_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".gm_add").click(function(){
    
    var menu_name = $("#gm").html()
    var gm_price = $("#gm_price").html();
    var gm_qty = $("#icf64").html()
    var final_price = parseInt(gm_price) * parseInt(gm_qty);
    $("#list22").html("<li><h5>"+menu_name+" " + gm_price+" "+" x "+gm_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".criv_add").click(function(){
    
    var menu_name = $("#criv").html()
    var criv_price = $("#criv_price").html();
    var criv_qty = $("#icf67").html()
    var final_price = parseInt(criv_price) * parseInt(criv_qty);
    $("#list23").html("<li><h5>"+menu_name+" " + criv_price+" "+" x "+criv_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mvp_add").click(function(){
    
    var menu_name = $("#mvp").html()
    var mvp_price = $("#mvp_price").html();
    var mvp_qty = $("#icf70").html()
    var final_price = parseInt(mvp_price) * parseInt(mvp_qty);
    $("#list24").html("<li><h5>"+menu_name+" " + mvp_price+" "+" x "+mvp_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".pvp_add").click(function(){
    
    var menu_name = $("#pvp").html()
    var pvp_price = $("#pvp_price").html();
    var pvp_qty = $("#icf73").html()
    var final_price = parseInt(pvp_price) * parseInt(pvp_qty);
    $("#list25").html("<li><h5>"+menu_name+" " + pvp_price+" "+" x "+pvp_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})



$(".cp_add").click(function(){
    
    var menu_name = $("#cp").html()
    var cp_price = $("#cp_price").html();
    var cp_qty = $("#icf76").html()
    var final_price = parseInt(cp_price) * parseInt(cp_qty);
    $("#list26").html("<li><h5>"+menu_name+" " + cp_price+" "+" x "+cp_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".ccp_add").click(function(){
    
    var menu_name = $("#ccp").html()
    var ccp_price = $("#ccp_price").html();
    var ccp_qty = $("#icf79").html()
    var final_price = parseInt(ccp_price) * parseInt(ccp_qty);
    $("#list27").html("<li><h5>"+menu_name+" " + ccp_price+" "+" x "+ccp_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".atp_add").click(function(){
    
    var menu_name = $("#atp").html()
    var atp_price = $("#atp_price").html();
    var atp_qty = $("#icf82").html()
    var final_price = parseInt(atp_price) * parseInt(atp_qty);
    $("#list28").html("<li><h5>"+menu_name+" " + atp_price+" "+" x "+atp_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".bm_add").click(function(){
    
    var menu_name = $("#bm").html()
    var bm_price = $("#bm_price").html();
    var bm_qty = $("#icf85").html()
    var final_price = parseInt(bm_price) * parseInt(bm_qty);
    $("#list29").html("<li><h5>"+menu_name+" " + bm_price+" "+" x "+bm_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})


$(".cm_add").click(function(){
    
    var menu_name = $("#cm").html()
    var cm_price = $("#cm_price").html();
    var cm_qty = $("#icf88").html()
    var final_price = parseInt(cm_price) * parseInt(cm_qty);
    $("#list30").html("<li><h5>"+menu_name+" " + cm_price+" "+" x "+cm_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".mpm_add").click(function(){
    
    var menu_name = $("#mpm").html()
    var mpm_price = $("#mpm_price").html();
    var mpm_qty = $("#icf91").html()
    var final_price = parseInt(mpm_price) * parseInt(mpm_qty);
    $("#list31").html("<li><h5>"+menu_name+" " + mpm_price+" "+" x "+mpm_qty+" = "+final_price+"</h5></li>")
   sum.push(final_price)
})

$(".sm_add").click(function(){
    
    var menu_name = $("#sm").html()
    var sm_price = $("#sm_price").html();
    var sm_qty = $("#icf94").html()
    var final_price = parseInt(sm_price) * parseInt(sm_qty);
    $("#list32").html("<li><h5>"+menu_name+" " + sm_price+" "+" x "+sm_qty+" = "+final_price+"</h5></li>")
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
