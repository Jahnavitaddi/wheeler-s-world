html>
<head>
<title>markslist</title>
<style>
body{
border:1px;
}
header{
   color:Brown;
   text-align:center;
   padding:10px;
   font-size:25px;
  }
  html{
           border:2px solid;
   }
  img
  {
  style=width:90px;height:90px;float:left;
}
.text{
       border:1px solid;
       width:23vw;
       height:27vh;
       text-align:center;
       margin-left:40vw;
       margin-bottom:10px;
       }
       .btn{
       margin-left:3vw;
       margin-top:1vh;
       }
   Table{
  Border:1px solid;
  width:60vw;
  margin-left:20vw;
  } 
  td{
  border:1px solid;
  height:4vh;
  }
       </style>
 </head>
<body>
<header><img src="/home/madirinavyasri/Downloads/rgukt.png"padding left:10px>
<center>RAGIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES::ONGOLE</center><br>
   <center>               ENGINEERING SEM-1 EXAMINATION,MARCH-2023</center><hr>
</header>
<div class="text">
<h1>MARKS MEMO</h1>
<form action="<?php echo $_SERVER['PHP_SELF'];?>"method="post">
<label for="roll">ROLL NUMBER:</label>
<input type="text"id="rno"name="rno" required>
<div class="btn">
    <input type="submit" value="submit">
    <button>Print</button>
</div>
</div>
<table>
<?php
$roll=$_POST['rno'];
$con=mysqli_connect("localhost","root","","minnu")or die("unable to connect");
$sql="select*from markslist where roll='$roll' ";
$result=mysqli_query($con,$sql);
while($row=mysqli_fetch_row($result))
{
?>
<tr>
<td><b>roll:</b></td>
<td colspan=2>
  <?php echo $row[0]; ?>
</td>
</tr>
<tr>
  <td><b>candidate name</b>
   </td><td colspan=2>
      <?php echo $row[1]; ?></td>
</tr>
<tr>
  <td><b>father name:</b></td>
   <td colspan=2>
      <?php echo $row[2]; ?>
   </td>
</tr>
<tr>
  <td><b>SUBJECT</b></td>
  <td><b>SECURED MARKS</b></td>
  <td><b>RESULT</b></td>
</tr>
<tr>
  <td>PH:</td>
  <td colspan="2"><?php echo $row[3]; ?></td>
</tr>
<tr>
  <td>WT:</td>
  <td><?php echo $row[4]; ?></td>
  <td><?php
     if ($row[4]>35)
     {
        echo"Pass";
     }
      else
      {
        echo "Fail";
      }?>
   </td>
</tr>
<tr>
   <td>CD:</td>
   <td><?php echo $row[5]; ?></td>
   <td><?php 
       if ($row[5]>35)
       {
         echo"Pass";
       } 
       else
       { 
       echo "Fail";
       }?>
   </td>
</tr>
<tr>
  <td>COA:</td>
  <td><?php echo $row[6]; ?></td>
  <td><?php 
     if ($row[6]>35)
     {
       echo"Pass";
     } 
     else
     {
       echo "Fail";
     }?>
  </td>
</tr>
<tr>
 <td>DSP:</td>
 <td><?php echo $row[7]; ?></td>
 <td><?php
     if ($row[7]>35)
      {
        echo"Pass";
      } 
      else
      {
      echo "Fail";
      }?>
  </td>
</tr>
<tr>
  <td>OR:</td>
  <td><?php echo $row[8]; ?></td>
  <td><?php
     if ($row[7]>35)
     { 
       echo"Pass";
     } 
     else
     {
        echo "Fail";
     }?>
  </td>
</tr>
<tr>
 <td>TOTAL:</td>
 <td colspan=2><?php $total=$row[4]+$row[5]+$row[6]+$row[7]+$row[8]; echo $total;?></td>
</tr>
<tr>
  <td>RESULT:</td>
  <td colspan=2><?php 
    if($total>450)
    { 
       echo "FIRST DIVISION";
    }
    elseif($total>350)
    {
       echo"SECOND DIVISION";
    }
    else
    {
       echo"THIRD DIVISION";
    }?>
   </td>
</tr>
<?php
}
?>
</table>
</body>
</html>
