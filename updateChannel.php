<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	
	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.css">
	<script src="http://code.jQuery.com/jquery-1.9.1.min.js"></script>
	<script src="http://code.jQuery.com/mobile/1.3.1/jquery.mobile-1.3.1.min.js"></script>
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
		$q = ($_GET['q']);
		$con = mysqli_connect('localhost','id3159803_root','admin','id3159803_dcsocialweb_db');
		if (!$con) {
			die('Could not connect: ' . mysqli_error($con));
		}
		mysqli_select_db($con,"id3159803_dcsocialweb_db");
	?>
	
	<form action="updateChannel.php" method="POST">
		
		<?php	
			if( strtoupper( $_SERVER['REQUEST_METHOD'] ) == "POST" ) { // Es un postback
				$sql="UPDATE RTS SET channelNumber = ".$_POST['txtNumber'].", channelName = '".$_POST['txtName']."', URL = '".$_POST['txtUrl']."', image = '".$_POST['txtImagen']."' WHERE ID = ".$_POST['txtId'];
				$result = mysqli_query($con,$sql);

				mysqli_close($con);
			} else { // Es un request normal
				$result = mysqli_query($con, "select * from RTS WHERE ID = ".$q);
				$reg=mysqli_fetch_array($result);
				echo "<input class='form-control' type='text' id='txtId' name='txtId' value='".$q."' readonly>";
				echo "<input class='form-control' type='text' id='txtNumber' name='txtNumber' value='".$reg['channelNumber']."' placeholder='No.Canal'>";
				echo "<input class='form-control' type='text' id='txtName' name='txtName' value='".$reg['channelName']."' placeholder='Nombre Canal'>";
				echo "<input class='form-control' type='text' id='txtUrl' name='txtUrl' value='".$reg['URL']."' placeholder='Url Prog.'>";
				echo "<input class='form-control' type='text' id='txtImagen' name='txtImagen' value='".$reg['image']."' placeholder='Url Prog.'>";
				if ($reg['status'] == 1){
					echo "<input class='form-control' type='checkbox' id='chkStatus' name='chkStatus' checked>";
				}else{
					echo "<input class='form-control' type='checkbox' id='chkStatus' name='chkStatus' >";
				}
			}  
		?>
		
		<?php	
			
		?>
			
			
			
		

		<input type="submit" value="Actualizar"/>

	</form>
	
	<script>
		function checkStatus(){
			var x = document.getElementById('chkStatus');
			if(x.checked) {
				return true;
			}
			return false;
		}
	</script>
</body>
</html>