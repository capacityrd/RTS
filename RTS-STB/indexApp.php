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
			background-color:#c02E10;
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
			top:0px;
			border:10px solid lightgray;
		}
		
		
		
		
		
		

.loader{
	border:3px solid #d6336c;
	width:200px;
	height:200px;
	border-radius:50%; 
	border-left-color: transparent;
  border-right-color: transparent;
	animation:rotate 2s cubic-bezier(0.26, 1.36, 0.74,-0.29) infinite;
}
#loader2{
	border:3px solid #3bc9db;
	width:220px;
	height:220px;
	position:relative;
	top:-216px;
	border-left-color: transparent;
  border-right-color: transparent;
	animation:rotate2 2s cubic-bezier(0.26, 1.36, 0.74,-0.29) infinite;
}
#loader3{
	border:3px solid #d6336c;
	width:240px;
	height:240px;
	position:relative;
	top:-452px;
	border-left-color: transparent;
  border-right-color: transparent;
	animation:rotate 2s cubic-bezier(0.26, 1.36, 0.74,-0.29) infinite;
}
#loader4{
	border:3px solid #3bc9db;
	width:260px;
	height:260px;
	position:relative;
	top:-708px;
	border-left-color: transparent;
  border-right-color: transparent;
	animation:rotate2 2s cubic-bezier(0.26, 1.36, 0.74,-0.29) infinite;
}
@keyframes rotate{
	0%{transform:rotateZ(-360deg)}
	100%{transform:rotateZ(0deg)}
}
@keyframes rotate2{
	0%{transform:rotateZ(360deg)}
	100%{transform:rotateZ(0deg)}
}
#text{
	color:white;
	font-family:Arial;
	font-size:20px;
	position:relative;
	top:-857px;
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
  
  <body onload="document.getElementById('cargando').style.display = 'none'">
  
  <!--<div id="cargando" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index:100000; background: white url(https://media.tenor.com/images/367d33e5722ca8bd3c4eb387c5facfaf/tenor.gif) no-repeat center center">-->
  <div id="cargando" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index:100000; background-color:white">
  
	  <center><br><br><br>
		<div class="loader" id="loader"></div>
		<div class="loader" id="loader2"></div>
		<div class="loader" id="loader3"></div>
		<div class="loader" id="loader4"></div>

		<span id="text">LOADING...</span><br>

  
  </div>
	<!--<div align="center" class="titulo">
		Canales RETEVISA
	</div>-->
	<div class="contenedorPrinc">
	
	<!--
	<div class="titleBar">RTS</div>
	
	<input class="form-control" type="text" name="users" id="users" onkeyup="showUser(this.value)" />
	-->
	
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
			
			if($_GET['q']==null){
				$q = "";
			}else{
				$q = $_GET['q'];
			}
		
			$conexion=mysqli_connect("localhost","id3159803_root","admin", "id3159803_dcsocialweb_db") or die("Problemas en la conexion");
			$result = mysqli_query($conexion, "select * from RTS_STB WHERE (channelName like '%".$q."%' or channelNumber like '%".$q."%' or block like '%".$q."%') and  status = 1 order by channelNumber asc");
			while ($reg=mysqli_fetch_array($result)){
				/*
				echo "<div align=center class='contenedorFotos'>";
				echo "<a href='uploads/".$reg['pictureName']."' target='_blank'>";
				echo "<img class='imgAll' src='uploads/";
				echo $reg['pictureName'];
				echo "' />";
				echo "</a>";
				echo "<label class='pictTitle'>".$reg['pictureTitle']."</label>";
				echo "<label class='pictComm'>".$reg['comments']."</label>";
				echo "</div><hr/>";*/
				
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
			mysqli_close($conexion);
		?>
	</div>
	<br/><br/>

	<!--
	<div class="container-fluid">
		<div class="item" onclick="window.open('https://mi.tv/co/canales/tnt')">
			<div align="center" class="logo">
				<img src="Logos/TNT.png">
				<span class="channelNumber">03</span>
			</div>
			<div class="detalle">
				<span class="channelName">TNT</span>
			</div>
		</div>
		
		<div class="item" onclick="window.open('https://mi.tv/co/canales/golden')">
			<div align="center" class="logo">
				<img src="Logos/Golden.png">
				<span class="channelNumber">06</span>
			</div>
			<div class="detalle">
				<span class="channelName">Golden</span>
			</div>
		</div>
		
		<div class="item" onclick="window.open('https://mi.tv/co/canales/animal-planet')">
			<div align="center" class="logo">
				<img src="Logos/Animal Planet.png">
				<span class="channelNumber">38</span>
			</div>
			<div class="detalle">
				<span class="channelName">Animal Planet</span>
			</div>
		</div>
	</div>
	-->
	</div>
	</body>
</html>