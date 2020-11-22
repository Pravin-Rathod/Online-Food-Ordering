<?php  
    session_start();   // session starts with the help of this function
    if(isset($_SESSION['id']))   // Checking whether the session is already there or not if
    // true then header redirect it to the dashboard page directly
    {
    header("Location:dashboard.php");
    }
    if(isset($_POST['signin']))   // it checks whether the user clicked Signin button or not
    {
        require_once 'dbconnect.php';
        $mobile = $_POST['mobile'];
        $password = $_POST['password'];
        $sql = "SELECT * FROM registr WHERE  mobile = '$mobile' AND password = '$password'";
        $result = mysqli_query($connect, $sql);
       
         
       
        if (  mysqli_num_rows($result) >  0)
        {
            $row = mysqli_fetch_assoc($result);
                $_SESSION['id'] = $row['id'];
                $_SESSION['name'] = $row['name'];
                $_SESSION['username'] = $row['username'];
                $_SESSION['email'] = $row['email'];
                $_SESSION['password'] = $row['password'];
                $_SESSION['mobile'] = $row['mobile'];
                $_SESSION['address'] = $row['address'];
                echo '<script type="text/javascript"> window.open("dashboard.php","_self");</script>';            //  On Successful Login redirects to dashboard.php
            
        }
        else
        {
            echo "invalid UserName or Password";
        }
        
    }
?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- Additional meta tags -->
        <meta name="author" content="Pravin Rathod">
        <meta name="keywords" content="web designer, web developer, web services">
        <!-- Page Title -->
        <title> Online Food Order </title>
        <!-- Favicon -->
        <link rel="icon" href="img/pk-favicon.png">
        <!-- Bootstrap CSS (Bootstrap version 4.0.0) -->
        <link rel="stylesheet" href="bootstrap\bootstrap.min.css">
        <!-- External CSS -->
        <link rel="stylesheet" href="css/style.css">
        <!-- Font Awesome version 4.7.0 -->
        <link rel="stylesheet" href="css/font-awesome.min.css">
    </head>
    <body>
        <video autoplay muted loop id="myVideo">
            <source src="img/pizza.mp4" type="video/mp4">
        </video>
        <div class="container login-page">
            <div class="row">
                <div class="col-12 ">
                    <form action="login.php" method="POST" >
                        
                        <h1 class="h3 mb-3 font-weight-normal" style="color: white;">Please sign in</h1>
                        <input type="tel" class="form-control" placeholder="Enter Mobile No." name="mobile" required autofocus>
                        <br>
                        <input type="password" class="form-control" placeholder="Enter Password" required name="password">
                        <br>
                        <button class="btn btn-lg btn-primary btn-block" type="submit" name="signin">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
        
        
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/popper.min.js"></script>
        <script type="text/javascript" src="js/bootstrap.min.js"></script>
        <!-- JQuery Library -->
        <script type="text/javascript" src="js/jquery-3.4.1.min.js"></script>
    </body>
</html>