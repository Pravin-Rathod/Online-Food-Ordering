<?php   session_start();  ?>
<html>
    <head>
        <title>Amigos Kitchen</title>
        <link rel="stylesheet" type="text/css" href="bootstrap/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/amigos_kitchen.css">
    </head>
    <body>
        <?php
        if(!isset($_SESSION['id'])) // If session is not set then redirect to Login Page
        {
        header("Location:Login.php");
        }
        
        ?>
       
        <!---------------------------------Header------------------------------------------>
        <div class="col-lg-12 header">
            <div class="row">
                <div class="col-lg-7">
                    <marquee> <img id="header_img" src="Image/bike.png"> </marquee>
                </div>
                <div class="col-lg-5">
                    <p id="header_title"><b> <em> Online Food Order </em><br>
                        <span id="profile_div">
                         <a href="profile.php"> <i class="fa fa-user fa-5x fa-fw" aria-hidden="true"></i>  <?php  echo $_SESSION['name'];?> 

                        </a>

<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  <?php  echo $_SESSION['name'];?>
</button>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <table class="table table-responsive table-dark table-bordered table-hover">
            <tr>
                <th class="bg-success"> User Id </th>
                <td colspan="3"> <?php  echo $_SESSION['id'];?> </td>
            </tr>
            <tr>
                <th  class="bg-success"> Name </th>
                <td> <?php  echo $_SESSION['name'];?> </td>
                <td rowspan="6"> <a href="update.php"> Update </a> </td>
                <td rowspan="6"> <a href='delete.php' onclick='return confirm("are you sure, you want to delete all your information ?")'> Delete</a> </td>
            </tr>
            <tr>
                <th  class="bg-success"> Username </th>
                <td> <?php  echo $_SESSION['username'];?> </td>
            </tr>
            <tr>
                <th  class="bg-success"> Email </th>
                <td> <?php  echo $_SESSION['email'];?> </td>
            </tr>
            <tr>
                <th class="bg-success"> Password </th>
                <td> <?php  echo $_SESSION['password'];?> </td>
            </tr>
            <tr>
                <th class="bg-success"> Mobile No. </th>
                <td> <?php  echo $_SESSION['mobile'];?> </td>
            </tr>
            <tr>
                <th class="bg-success"> Address </th>
                <td> <?php  echo $_SESSION['address'];?> </td>
            </tr>
        </table>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>




                        </span>   </b>
                        <?php echo "<a href='logout.php'> Logout</a> "; ?>
                    </p>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-lg-8 ">
                <p id="hotel_add1">ORDER FOOD ONLINE FROM</p>
                <h2 id="hotel_name">Amigos Kitchen</h2>
                <p id="hotel_add">CIDCO, Aurangabad</p>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 menu1">
                <h4>Non-Veg</h4>
                <div class="row">
                    <div class="col-lg-2">
                        <img src="Image/dish/butterchicken.jpg" >
                    </div>
                    <div class="col-lg-4">
                        <h6 id="butter_chicken">Butter Chicken</h6>
                        <p id="butter_chicken_price">&#8377 <span>135</span>   </p>
                    </div>
                    <div class="col-lg-3">
                        <button class="box btn-primary"id="icf2">-</button>
                        <button class="box border-success"id="icf1">1</button>
                        <button class="box btn-primary" id="icf0">+</button>
                    </div>
                    <div class="col-lg-2">
                        <button id="btns" class="butter_chiken_bill">Add</button>
                        <!-- <input type="submit" id="btns" value="Add"> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 menu1">
                <div class="row">
                    <div class="col-lg-2">
                        <img src="Image/dish/Chicken_makhani.jpg" >
                    </div>
                    <div class="col-lg-4">
                        <h6 id="chicken_makhani">Chicken Makhani</h6>
                        <p id="chicken_makhani_price">&#8377<span> 180</span></p>
                    </div>
                    <div class="col-lg-3">
                        <button class="box btn-primary"id="icf5">-</button>
                        <button class="box border-success " id="icf4">1</button>
                        <button class="box btn-primary" id="icf3">+</button>
                    </div>
                    <div class="col-lg-2">
                        <input type="submit" class="chicken_makhani_bill" id="btns" value="Add">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 menu1">
                <div class="row">
                    <div class="col-lg-2">
                        <img src="Image/dish/chickancurry.jpg" >
                    </div>
                    <div class="col-lg-4">
                        <h6 id="chickan_curry">Chickan Curry</h6>
                        <p id="chickan_curry_price">&#8377<span> 230</span></p>
                    </div>
                    <div class="col-lg-3">
                        <button class="box btn-primary"id="icf8">-</button>
                        <button class="box border-success"id="icf7">1</button>
                        <button class="box btn-primary" id="icf6">+</button>
                    </div>
                    <div class="col-lg-2">
                        <input type="submit" id="btns" class="chickan_curry_bill" value="Add">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="col-lg-8 menu1">
                <h4>Rice and Biryani</h4>
                <div class="row">
                    <div class="col-lg-2">
                        <img src="Image/dish/biryani1.jpg" >
                    </div>
                    <div class="col-lg-4">
                        <h6 id="biryani">Biryani</h6>
                        <p >&#8377<span id="biryani_price"> 180</span></p>
                    </div>
                    <div class="col-lg-3">
                        <button class="box btn-primary"id="icf11">-</button>
                        <button class="box border-success"id="icf10">1</button>
                        <button class="box btn-primary" id="icf9">+</button>
                    </div>
                    <div class="col-lg-2">
                        <input type="submit" id="btns" class="biryani_add" value="Add">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="col-lg-8 menu1">
                <div class="row">
                    <div class="col-lg-2">
                        <img src="Image/dish/chikan_biryani.jpg" >
                    </div>
                    <div class="col-lg-4">
                        <h6 id="chickan_dum_biryani">Chickan Dum Biryani</h6>
                        <p>&#8377<span id="chickan_dum_biryani_price"> 229 </span></p>
                    </div>
                    <div class="col-lg-3">
                        <button class="box btn-primary"id="icf14">-</button>
                        <button class="box border-success"id="icf13">1</button>
                        <button class="box btn-primary" id="icf12">+</button>
                    </div>
                    <div class="col-lg-2">
                        <input type="submit" class="chickan_dum_biryani_add" id="btns" value="Add">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="col-lg-8 menu1">
                <div class="row">
                    <div class="col-lg-2">
                        <img src="Image/dish/FB.jpg" >
                    </div>
                    <div class="col-lg-4">
                        <h6 id="scb">Special Chikan Biryani</h6>
                        <p>&#8377<span id="scb_price"> 299</span></p>
                    </div>
                    <div class="col-lg-3">
                        <button class="box btn-primary"id="icf17">-</button>
                        <button class="box border-success"id="icf16">1</button>
                        <button class="box btn-primary" id="icf15">+</button>
                    </div>
                    <div class="col-lg-2">
                        <input type="submit" class="scb_add" id="btns" value="Add">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="col-lg-8 menu1">
                <h4>Veg Main Course</h4>
                <div class="row">
                    <div class="col-lg-2">
                        <img src="Image/dish/main_course1.jpg" >
                    </div>
                    <div class="col-lg-4">
                        <h6 id="kaju_masala">Kaju Masala</h6>
                        <p>&#8377<span id="kaju_masala_price"> 210</span></p>
                    </div>
                    <div class="col-lg-3">
                        <button class="box btn-primary"id="icf20">-</button>
                        <button class="box border-success"id="icf19">1</button>
                        <button class="box btn-primary" id="icf18">+</button>
                    </div>
                    <div class="col-lg-2">
                        <input type="submit" class="kaju_masala_add" id="btns" value="Add">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="col-lg-8 menu1">
                <div class="row">
                    <div class="col-lg-2">
                        <img src="Image/dish/main_course2.jpg" >
                    </div>
                    <div class="col-lg-4">
                        <h6 id="paneer_butter_masala">Paneer Butter Masala</h6>
                        <p>&#8377<span id="paneer_butter_masala_price"> 268</span> </p>
                    </div>
                    <div class="col-lg-3">
                        <button class="box btn-primary"id="icf23">-</button>
                        <button class="box border-success"id="icf22">1</button>
                        <button class="box btn-primary" id="icf21">+</button>
                    </div>
                    <div class="col-lg-2">
                        <input type="submit" class="paneer_butter_masala_add" id="btns" value="Add">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="col-lg-8 menu1">
                <div class="row">
                    <div class="col-lg-2">
                        <img src="Image/dish/main_course3.jpg" >
                    </div>
                    <div class="col-lg-4">
                        <h6 id="punjabi_paneer">Punjabi Paneer</h6>
                        <p>&#8377<span id="punjabi_paneer_price"> 230 </span> </p>
                    </div>
                    <div class="col-lg-3">
                        <button class="box btn-primary"id="icf26">-</button>
                        <button class="box border-success"id="icf25">1</button>
                        <button class="box btn-primary" id="icf24">+</button>
                    </div>
                    <div class="col-lg-2">
                        <input type="submit" class="punjabi_paneer_add" id="btns" value="Add">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="col-lg-8 menu1">
                <h4>Roti</h4>
                <div class="row">
                    <div class="col-lg-2">
                        <img src="Image/dish/roti.jpg" >
                    </div>
                    <div class="col-lg-4">
                        <h6 id="roti">Roti</h6>
                        <p>&#8377<span id="roti_price"> 07</span></p>
                    </div>
                    <div class="col-lg-3">
                        <button class="box btn-primary"id="icf29">-</button>
                        <button class="box border-success"id="icf28">1</button>
                        <button class="box btn-primary" id="icf27">+</button>
                    </div>
                    <div class="col-lg-2">
                        <input type="submit" class="roti_add" id="btns" value="Add">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="col-lg-8 menu1">
                <div class="row">
                    <div class="col-lg-2">
                        <img src="Image/dish/roti2.jpg" >
                    </div>
                    <div class="col-lg-4">
                        <h6 id="btr">Butter Tandoori Roti</h6>
                        <p>&#8377 <span id="btr_price">30</span></p>
                    </div>
                    <div class="col-lg-3">
                        <button class="box btn-primary"id="icf32">-</button>
                        <button class="box border-success"id="icf31">1</button>
                        <button class="box btn-primary" id="icf30">+</button>
                    </div>
                    <div class="col-lg-2">
                        <input type="submit" class="btr_add" id="btns" value="Add">
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            
            <div class="col-lg-8 menu1">
                <div class="row">
                    <div class="col-lg-2">
                        <img src="Image/dish/nan.jpg" >
                    </div>
                    <div class="col-lg-4">
                        <h6 id="nan" >Nan</h6>
                        <p>&#8377 <span id="nan_price">18</span></p>
                    </div>
                    <div class="col-lg-3">
                        <button class="box btn-primary"id="icf35">-</button>
                        <button class="box border-success"id="icf34">1</button>
                        <button class="box btn-primary" id="icf33">+</button>
                    </div>
                    <div class="col-lg-2">
                        <input type="submit" class="nan_add" id="btns" value="Add">
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
    <div class="container-fluid footer_final">
        <div class="row">
            <div class="col-lg-4">
                <p id="footer">Copyright &copy 2020</p>
            </div>
            <div class="col-lg-4">
                <p id="footer1">Follow Us On</p>
            </div>
            <div class="col-lg-4">
                <img id="footer_img" src="Images/footer/insta.png">
                <img id="footer_img" src="Images/footer/facebook.png">
                <img id="footer_img" src="Images/footer/twiter.png">
                <img id="footer_img" src="Images/footer/mail.png">
            </div>
            
        </div>
    </div>
    <!------Order Bill Window-->
    
    <div class="col-lg-4 bill jumbotron" id="bill-reciept">
        
        <p id="your_order" >Your Order</p>
        <ul id="menu_list" style="list-style-type:none;">
            <li id="list1"></li>
            <li id="list2"></li>
            <li id="list3"></li>
            <li id="list4"></li>
            <li id="list5"></li>
            <li id="list6"></li>
            <li id="list7"></li>
            <li id="list8"></li>
            <li id="list9"></li>
            <li id="list10"></li>
            <li id="list11"></li>
            <li id="list12"></li>
        </ul>
        <h5 id="final_bill12"></h5>
        <input type="submit" value="Show Bill" id="final_bill_btn">
        <button type="button" onclick="printJS({ printable: 'bill-reciept', type: 'html', header: 'Name : <?php  echo $_SESSION['name'];?>, Amigos_Kitchen  - Bill ' })"> Print Bill </button>
    </div>
</body>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/food.js"></script>
<script type="text/javascript" src="js/amigos_kitchen.js"></script>
<script src="js/print.min.js"></script>
</html>
