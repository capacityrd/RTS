<!DOCTYPE html>
<html>
<head>
<style>
table {
    width: 100%;
    border-collapse: collapse;
}

table, td, th {
    border: 1px solid black;
    padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
			function getBackColor($bloque){
				$r = "#FFFFFF";
				if($bloque == "Sports"){
					$r = "item-lightblue";
				}
				if($bloque == "Infantiles"){
					$r = "item-infantil";
				}
				if($bloque == "Movies"){
					$r = "item-movies";
				}
				if($bloque == "Entretenimiento"){
					$r = "item-entretenimiento";
				}
				if($bloque == "Culture"){
					$r = "item-culture";
				}
				if($bloque == "Musical"){
					$r = "item-musical";
				}
				if($bloque == "Religion"){
					$r = "item-religion";
				}
				if($bloque == "News"){
					$r = "item-news";
				}
				if($bloque == "Internacionales"){
					$r = "item-intl";
				}
				return $r;
			}
$q = ($_GET['q']);
//echo $q;

$con = mysqli_connect('localhost','id3159803_root','admin','id3159803_dcsocialweb_db');
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"id3159803_dcsocialweb_db");

$sql="SELECT * from RTS_STB WHERE (channelName like '%".$q."%' OR channelNumber like '%".$q."%' OR block like '%".$q."%') and status = 1 order by channelNumber asc";
$result = mysqli_query($con,$sql);


while($reg = mysqli_fetch_array($result)) {
   echo "<div class='item ".getBackColor($reg['block'])."' onclick=window.open('".$reg['URL']."')>";
				echo "<div align='center' class='logo'>";
				echo "<img src='../Logos/".$reg['image'].".png'>";
				echo "<span class='channelNumber'>".$reg['channelNumber']."</span>";
				echo "</div>";
				echo "<div class='detalle'>";
				echo "<span class='channelName'>".$reg['channelName']."</span>";
				if($reg['block'] == "Locales"){
					echo "<span class='spanRD'><img src='../Logos/RD.png'></span>";
				}
				if($reg['block'] == "Internacionales"){
					echo "<span class='spanRD'><img src='../Logos/".$reg['country'].".png'></span>";
				}
				
				echo "</div>";
				echo "</div>";
}

mysqli_close($con);
?>
</body>
</html>