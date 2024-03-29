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
    <title>Login</title>
    <?php 
    $con=mysqli_connect('localhost','root',"",'project'); 
    $name=$_POST["name"];
    $password=$_POST["password"];
    ?>

    <style>
    a{
        text-decoration:none;
    }
        .error{
            color:red;
            font-family:'Times New Roman', Times, serif;
            margin-left:600px;
            margin-top:50px;
        }
    </style>
</head>
<body>

    <div class="container">
        <div class="myform">
        <form action = "<?php $_PHP_SELF ?>" method="post">
                <h2>LOGIN</h2>
                <input type="text" placeholder="User Name" name="name">
                <input type="password" placeholder="Password" name="password">
                <button class="button" type="submit">LOGIN</button>
                <h4>Don't have an account?Createone?<a href="signup1.php">Signup</a></h4>
            </form>
        </div>
        <div>
            <div class="image">
                <img src="ww.jpeg" alt="image" width="300px" >
            </div>
        </div>
    </div>

    <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $sql="select * from signup where name='$name' ";
            $result = mysqli_query($con, $sql);
        if ($result->num_rows > 0) {
            while($row = mysqli_fetch_assoc($result)) {
            $pass = $row["password"];
            }
            if($password==$pass){
                header("location:wheelersworld.html");
            }
            else{
               ?> <h2 class="error">Wrong password</h2><?php
            }
        }
        else{
                ?><h2 class="error">Account Not Found</h2><?php
        }
        }
    ?>
</body>
</html>
