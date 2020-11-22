<?php   
    session_start();
    if(!isset($_SESSION['id'])) // If session is not set then redirect to Login Page
        {
        header("Location:Login.php");
        }   
?>

<!DOCTYPE html>
<html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>
        List Of Hotel's
        </title>
        <link rel="stylesheet" type="text/css" href="bootstrap/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="stylesheet" type="text/css" href="css/style1.css">
        <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    </head>
    <body>
       
        <!---------------------------------Header------------------------------------------>
        <div class="container-fluid header">
            <div class="row">
                <div class="col-lg-7">
                    <marquee> <img id="header_img" src="Image/bike.png"> </marquee>
                </div>
                <div class="col-lg-5">
                    <p id="header_title"><b> <em> Online Food Order </em><br>
                        <span id="profile_div"> <a href="profile.php"> <i class="fa fa-user fa-5x fa-fw" aria-hidden="true"></i>  <?php  echo $_SESSION['name'];?> </a>  </span>   </b>
                        <?php echo "<a href='logout.php'> Logout</a> "; ?>
                    </p>
                </div>
            </div>
        </div>
        
        <!--------------------------------Mainu List---------------------------------------->
        
        <div class="container main_body">
            <div class="row mean_view">
                <!-----Row1---------->
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-5">
                            <img id="hotel_img" src="Image/mutton.jpg">
                        </div>
                        <div class="col-lg-7">
                            <p id="hotel_name"><b><a href="amigos_kitchen.php">Amigos Kitchen</a></b></p>
                            <P id="hotel_about">Casual Dining - Cidco Aurangabad</P>
                            <P id="item_details">North Indian,Chinese,Mughlai,Sandwich,Beverages</P>
                            <p id="hotel_about">Min &#8377 150</p> <!---- &#8377 used for Rupes Symbol-->
                            <p id="hotel_about">Up to 40 Min</p>
                            <p id="hotel_about">Accept Cash & Online Payment</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-5">
                            <img id="hotel_img" src="Image/ashoka.jpg">
                        </div>
                        <div class="col-lg-7">
                            <p id="hotel_name"><b><a href="Ashokas.html">Ashoka's Veg Restaurant</a></b></p>
                            <p id="hotel_about">Quick Bites - Nirala Bazar</p>
                            <P id="item_details">South Indian,North Indian,Chinese,Pizza,Sandwich,Desserts</P>
                            <p id="hotel_about">Min &#8377 170</p> <!---- &#8377 used for Rupes Symbol-->
                            <p id="hotel_about">Up to 43 Min</p>
                            <p id="hotel_about">Accept Cash & Online Payment</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-----Row2---------->
            <div class="row">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-5">
                            <img id="hotel_img" src="Image/cake.jpg">
                        </div>
                        <div class="col-lg-7">
                            <p id="hotel_name"><b><a href="cake_N_Bake.html">Cake 'n' Bake</a></b></p>
                            <p id="hotel_about">Quick Bites - Usmanpura - </p>
                            <P id="item_details">Bakery,Fast Food,Beverages</P>
                            <p id="hotel_about">Min &#8377 300</p> <!---- &#8377 used for Rupes Symbol-->
                            <p id="hotel_about">Up to 30 Min</p>
                            <p id="hotel_about">Accept Cash & Online Payment</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-5">
                            <img id="hotel_img" src="Image/pizza.jpg">
                        </div>
                        <div class="col-lg-7">
                            <p id="hotel_name"><b><a href="Smokin'_Joe's.html">Smokin' Joe's</a></b></p>
                            <p id="hotel_about">Casual Dining - Nirala Bazar</p>
                            <P id="item_details">Pizza,Fast Food, Sandwich,wraps</P>
                            <p id="hotel_about">Min &#8377 230</p> <!---- &#8377 used for Rupes Symbol-->
                            <p id="hotel_about">Up to 44 Min</p>
                            <p id="hotel_about">Accept Cash & Online Payment</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-----Row3---------->
            <div class="row">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-5">
                            <img id="hotel_img" src="Image/bombay.jpg">
                        </div>
                        <div class="col-lg-7">
                            <p id="hotel_name"><b><a href="bombay.html">Bombay Bandra Famous Faluda & Chat</a></b></p>
                            <p id="hotel_about">Quick Bites - Shahgunj</p>
                            <P id="item_details">Desserts,Fast Food,Beverages</P>
                            <p id="hotel_about">Min &#8377 50</p> <!---- &#8377 used for Rupes Symbol-->
                            <p id="hotel_about">Up to 43 Min</p>
                            <p id="hotel_about">Accept Cash & Online Payment</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-5">
                            <img id="hotel_img" src="Image/rajshahi.jpg">
                        </div>
                        <div class="col-lg-7">
                            <p id="hotel_name"><b><a href="Raj_shahi.html">Raj Shahi Pure Veg Restaurant</a></b></p>
                            <p id="hotel_about">Quick Bites - Shahgunj</p>
                            <P id="item_details">North Indian,Biryani,Chinese,Sandwich</P>
                            <p id="hotel_about">Min &#8377 150</p> <!---- &#8377 used for Rupes Symbol-->
                            <p id="hotel_about">Up to 43 Min</p>
                            <p id="hotel_about">Accept Cash & Online Payment</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-----Row4---------->
            <div class="row">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-5">
                            <img id="hotel_img" src="Image/shahi.jpg">
                        </div>
                        <div class="col-lg-7">
                            <p id="hotel_name"><b><a href="shahibhoj.html">Shahi Bhoj</a></b></p>
                            <p id="hotel_about">Quick Bites - Chikalthana</p>
                            <P id="item_details">North Indian</P>
                            <p id="hotel_about">Min &#8377 280</p> <!---- &#8377 used for Rupes Symbol-->
                            <p id="hotel_about">Up to 43 Min</p>
                            <p id="hotel_about">Accept Cash & Online Payment</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-5">
                            <img id="hotel_img" src="Image/jalebi.jpg">
                        </div>
                        <div class="col-lg-7">
                            <p id="hotel_name"><b><a href="green.html">Green Leaf</a></b></p>
                            <p id="hotel_about">Casual Dining - Chikalthana</p>
                            <P id="item_details">North Indian,Chinese,Maharashtrian,Beverages</P>
                            <p id="hotel_about">Min &#8377 130</p> <!---- &#8377 used for Rupes Symbol-->
                            <p id="hotel_about">Up to 43 Min</p>
                            <p id="hotel_about">Accept Cash & Online Payment</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-----Row5---------->
            <div class="row">
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-5">
                            <img id="hotel_img" src="Image/kabab.jpg">
                        </div>
                        <div class="col-lg-7">
                            <p id="hotel_name"><b><a href="Kareem's_kitchen.html">Kareem's Kabab & Biryani</a></b></p>
                            <p id="hotel_about">Casual Dining - Chikalthana</p>
                            <P id="item_details">North indian,Biryani,Mughlai,Rolls</P>
                            <p id="hotel_about">Min &#8377 170</p> <!---- &#8377 used for Rupes Symbol-->
                            <p id="hotel_about">Up to 30 Min</p>
                            <p id="hotel_about">Accept Cash & Online Payment</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="row">
                        <div class="col-lg-5">
                            <img id="hotel_img" src="Image/samosa.jpg">
                        </div>
                        <div class="col-lg-7">
                            <p id="hotel_name"><b><a href="Krishna.html">Krishna Chat House And Sandwich Center</a></b></p>
                            <p id="hotel_about">Takeaway,Delivery - Mondha</p>
                            <P id="item_details">Fast Food,</P>
                            <p id="hotel_about">Min &#8377 50</p> <!---- &#8377 used for Rupes Symbol-->
                            <p id="hotel_about">Up to 23 Min</p>
                            <p id="hotel_about">Accept Cash & Online Payment</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!---Footer-->
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
    </body>
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
</html>