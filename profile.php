<?php   session_start();  ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
        <title>
        Profile Page
        </title>
        <link rel="stylesheet" type="text/css" href="bootstrap/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="stylesheet" type="text/css" href="css/style1.css">
        <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
    </head>
    <body style="background-color: #ff652f;">

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
                        <span id="profile_div"> <a href="profile.php"> <i class="fa fa-user fa-5x fa-fw" aria-hidden="true"></i>  <?php  echo $_SESSION['name'];?> </a>  </span>   </b>
                        <?php echo "<a href='logout.php'> Logout</a> "; ?>
                    </p>
                </div>
            </div>
        </div>
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