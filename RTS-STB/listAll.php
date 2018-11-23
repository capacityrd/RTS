<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8"> 
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js"></script>
	
	<style>
		html, body, .container-fluid{
			margin:0;
			padding:0;
			width:100%;
		}
		.titulo{
			position:fixed;
			top:0;
			width:100%;
			background-color:#000000;
			color:#FFFFFF;
			font-size:8vw;
		}
		.container-fluid{
			position:relative;
			top:20px;
			
		}
		
		
		@media screen and (max-width:1024px){
			.item{
				position:relative;
				width:100%;
				height:auto;
				min-height:30%;
				background-color:white;
				color:gray;
				border:5px solid #efebee;
				cursor:pointer;
			}
			.logo{
				display:inline-block;
				width:30%;
				position:relative;
			
			}
			.logo img{
				width:100%;
				height:auto;
			}
			.detalle{
				display:inline-block;
				width:68%;
			}	
			.channelName{
				margin-left:2vw;
				font-size:8vw;
				position: relative;
				//top: -50px;
			}
			.channelNumber{
				font-size:4vw;
			}
			.spanRD{
				position:absolute;
				width:10%;
				right:0;
			}
			.spanRD img{
				width:100%;
				height:auto;
			}
		}
		
		
		@media screen and (min-width:1025px){
			.item{
				position:relative;
				width:10%;
				height:auto;
				min-height:100px;
				background-color:white;
				color:gray;
				border:5px solid #efebee;
				cursor:pointer;
				display:inline-block;
			}
			.logo{
				display:inline-block;
				width:100%;
				position:relative;
			
			}
			.logo img{
				width:80%;
				height:auto;
			}
			.detalle{
				display:inline-block;
				width:68%;
			}	
			.channelName{
				//margin-left:2vw;
				font-size:1vw;
				position: relative;
				//top: -50px;
			}
			.channelNumber{
				font-size:1vw;
			}
			.spanRD{
				position:absolute;
				width:10%;
				right:0;
				display:none;
			}
			.spanRD img{
				width:100%;
				height:auto;
				display:none;
			}
		}
		
		
		
		.item-lightblue{
			background-color:lightblue;
		}
		.item-infantil{
			background-color:yellow;
		}
		.item-movies{
			background-color:#D02E10;
			color:#FFFFFF;
		}
		.item-entretenimiento{
			background-color:pink;
		}
		.item-culture{
			background-color:orange;
			color:#000000;
		}
		.item-musical{
			background-color:purple;
			color:#FFFFFF;
		}
		.item-religion{
			background-color:lightgreen;
			color:#FFFFFF;
		}
		.item-news{
			background-color:green;
			color:#FFFFFF;
		}
		.item-intl{
			background-color:darkblue;
			color:#FFFFFF;
		}
		
		.contenedorPrinc{
			position:relative;
		}
		.titleBar{
			position:fixed;
			top:0;
			z-index:1000;
			background-color:#000;
			color:#FFF;
			text-align:center;
			width:100%;
			font-size:20pt;
		}
		#users{
			position:fixed;
			top:35px;
			z-index:1000;
			border:10px solid lightgray;
		}
		#txtHint{
			position:relative;
			top:100px;
			border:10px solid lightgray;
		}
	</style>
	<script>
	function showUser(str) {
		/*if (str == "") {
			document.getElementById("txtHint").innerHTML = "";
			return;
		} else 
		{ */
			if (window.XMLHttpRequest) {
				// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp = new XMLHttpRequest();
			} else {
				// code for IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					document.getElementById("txtHint").innerHTML = this.responseText;
				}
			};
			xmlhttp.open("GET","getuser.php?q="+str,true);
			xmlhttp.send();
		//}
	}
	</script>
  </head>
  
  <body>
	<!--<div align="center" class="titulo">
		Canales RETEVISA
	</div>-->
	<div class="contenedorPrinc">
	
	<div class="titleBar">RTS</div>
	
	<input class="form-control" type="text" name="users" id="users" onkeyup="showUser(this.value)" />
	
	<div class="container-fluid" id="txtHint">
		
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
			
			echo "<table>";
			echo "<tr>"."<td></td>"."<td></td>"."<td></td>"."<td></td>"."<td></td>"."</tr>";
		
			$conexion=mysqli_connect("localhost","id3159803_root","admin", "id3159803_dcsocialweb_db") or die("Problemas en la conexion");
			$result = mysqli_query($conexion, "select * from RTS_STB WHERE status = 1 order by channelNumber asc");
			while ($reg=mysqli_fetch_array($result)){

				
				echo "<tr  onclick=window.open('".$reg['URL']."')>";
				echo "<td align='center'>";
				echo "<img class='logo' src='../Logos/".$reg['image'].".png'>";
				
				echo "</td>";
				echo "<td><span class='channelNumber'>".$reg['channelNumber']."</span></td>";
				echo "<td>";
				echo "<span class='channelName'>".$reg['channelName']."</span>";
				if($reg['block'] == "Locales"){
					echo "<span class='spanRD'><img src='../Logos/RD.png'></span>";
				}
				if($reg['block'] == "Internacionales"){
					echo "<span class='spanRD'><img src='../Logos/".$reg['country'].".png'></span>";
				}
				
				echo "</td>";
				echo "</tr>";
				
			}
			mysqli_close($conexion);
			echo "</table>";
		?>
	</div>
	<br/><br/>

	
	</div>
	</body>
</html>