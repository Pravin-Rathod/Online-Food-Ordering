 <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "onlinefoodreg";
        // Create connection
        $conn = mysqli_connect($servername, $username, $password, $dbname);
        // Check connection
        if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
        }
        $name = $_REQUEST['name'];
        $username = $_REQUEST['username'];
        $email = $_REQUEST['email'];
        $password = $_REQUEST['password'];
        $mobile = $_REQUEST['mobile'];
        $address = $_REQUEST['address'];

        $sql2 = "SELECT * FROM registr WHERE  mobile = $mobile";
        $result = mysqli_query($conn, $sql2);
        $row  =  mysqli_num_rows($result);
         if ( $row > 0) {
            echo "Sorry! This Number is already registered! ";
        }
        else{
            $sql = "INSERT INTO registr (name, username, email, password, mobile, address) VALUES ('$name', '$username', '$email', '$password','$mobile', '$address')";

                    if (mysqli_query($conn, $sql)) {
             header("Location:dashboard.html") ;
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }

        }
        // Close connection
        mysqli_close($conn);
?>
        
            