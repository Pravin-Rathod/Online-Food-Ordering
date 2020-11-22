<?php   session_start();  ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
        <title>        Update Page        </title>
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
                        <span id="profile_div"> <a href="profile.php"> <i class="fa fa-user fa-5x fa-fw" aria-hidden="true"></i>  <?php if(isset($_POST['update'])) echo $_POST['name']; else
                                echo $_SESSION['name']; ?> </a>  </span>   </b>
                        <?php echo "<a href='logout.php'> Logout</a> "; ?>
                    </p>
                </div>
            </div>
        </div>
        <form action="" method="POST" style="background-color: #32c5dc; padding: 20px;">
            <table>
                <tr>
                    <td> Name</td>
                    <td><input type="text" name="name"  
                               value="<?php if(isset($_POST['update'])) echo $_POST['name']; else
                                echo $_SESSION['name']; ?>">
                    </td>
                </tr>
                <tr>
                    <td>Username </td>
                    <td><input type="text" name="username" value="<?php if(isset($_POST['update'])) echo $_POST['username']; else echo $_SESSION['username']; ?>">
                    </td>
                </tr>
                <tr>
                    <td>Email </td>
                    <td><input type="email" name="email" value="<?php if(isset($_POST['update'])) echo $_POST['email']; else
                                echo $_SESSION['email']; ?>"></td>
                </tr>
                <tr>
                    <td> Password</td>
                    <td><input type="text" name="password" value="<?php if(isset($_POST['update'])) echo $_POST['password']; else
                                echo $_SESSION['password']; ?>"></td>
                </tr>
                <tr>
                    <td>Mobile No </td>
                    <td> <input type="tel" name="mobile" value="<?php if(isset($_POST['update'])) echo $_POST['mobile']; else
                                echo $_SESSION['mobile']; ?>"></td>
                </tr>
                <tr>
                    <td>Address </td>
                    <td><input type="text" name="address" value="<?php if(isset($_POST['update'])) echo $_POST['address']; else
                                echo $_SESSION['address']; ?>"></td>
                </tr>
                <tr>
                    <td colspan="2"> <input type="submit" value="Update" name="update" id="update"></td>
                    <td></td>
                </tr>
            </table>
        </form>



         <?php
        require_once 'dbconnect.php';

        if (isset($_POST['update'])) {
            if (!empty($_POST['name'])) {
                $name = $_POST['name'];
                $username = $_POST['username'];
                $email = $_POST['email'];
                $password = $_POST['password'];
                $mobile = $_POST['mobile'];
                $address = $_POST['address'];
                $sql="UPDATE registr SET name = '".$name."', username = '".$username."', email = '".$email."', password = '".$password."', mobile = '".$mobile."', address = '".$address."' WHERE id = '".$_SESSION['id']."'";
                $result = mysqli_query($connect, $sql);
                if ( $result) {
                    echo "Data Updated Successfully! <br>";
                }
                else {
                    echo "Name Could not update: ".  mysqli_error();
                }
            }
            else{
                echo "Sorry! Name can not be blank.";
            }
        }
        // Close connection
        mysqli_close($connect);
?>
        
                    
        
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
        <div id="div1"></div>
    </body>
    <script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
   
</html>