<?php
session_start();
error_reporting(0);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style1.css">
    <title>SIGNUP</title>
    <?php 
    $con=mysqli_connect('localhost','root',"",'project'); 
    $name=$_POST["name"];
    $mail=$_POST["mail"];
    $password=$_POST["password"];
    $uppercase = preg_match('@[A-Z]@', $password);
    $lowercase = preg_match('@[a-z]@', $password);
    $number    = preg_match('@[0-9]@', $password);
    $specialChars = preg_match('@[^\w]@', $password);
    ?>

<style>
a{
        text-decoration:none;
    }
.error{
            color:red;
            font-family:'Times New Roman', Times, serif;
            margin-left:550px;
            margin-top:50px;
        }
</style>
</head>
<body>

    <div class="container">
        <div class="myform">
        <form action = "<?php $_PHP_SELF ?>" method="post">
                <h2>SIGNUP</h2>
                <input type="text" placeholder="Name" name="name" required>
                <input type="text" placeholder="mail" name="mail" required>
                <input type="password" placeholder="Password" name="password" required>
                <button class="button" type="submit">SIGNUP</button>
                <h4>Already have an account?<a href="login.php">Login</a></h4>
            </form>
        </div>
        <div>
            <div class="image">
                <img src="wheelers world.jpeg" alt="image" width="300px" >
            </div>
        </div>
    </div>

    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $sql2="select * from signup where name='$name' ";
        $res = mysqli_query($con,$sql2);
        if($data= mysqli_fetch_array($res))
        { 
            ?><h3 class="error">Username already exists</h3><?php
        }
    else{
        if (empty($_POST["mail"])) {
            $emailErr = "Email is required";
          } else {
            // check if e-mail address is well-formed
            if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
              ?><h3 class="error">Invalid email format</h3><?php
            }
            else{
                if($password==null){ }
                elseif(!$uppercase || !$lowercase || !$number || !$specialChars || strlen($password) < 8) 
               { 
                ?><h3 class="error">*Password should be at least 8 characters,<br>one upper case letter, one digit,and one special character.</h3><?php
               }
               else{
                   header("location:wheelersworld.html");
                   $sql= "insert into signup values ('$name','$mail','$password')";
                    $res = mysqli_query($con,$sql);
                }
                }
        }
    }

}
    ?>
</body>
</html>
