//dominicana
var lobArrayCriterios = new Array();
var tb = '';

	function fLlenaCriterios(pstObjCriterios)
	{		
		debugger;
		var lobAyKeysCarByCategoria = Object.keys(pstObjCriterios);
		var lnuTotalKeysCarByCategoria = lobAyKeysCarByCategoria.length;


		for(var xCar=0; xCar < lnuTotalKeysCarByCategoria; xCar++)
		{
			if( $.inArray(pstObjCriterios[lobAyKeysCarByCategoria[xCar]].nombre_car, lobArrayCriterios) < 0 )
			{
				lobArrayCriterios.push(pstObjCriterios[lobAyKeysCarByCategoria[xCar]].nombre_car);

			}
		}

		return lobArrayCriterios;
	}

	function fobGetPlanById( pstIdPlan,pobOjbPlanes )
	{
		debugger;
		var lnuTotalPlanesByCategoria = pobOjbPlanes.length;

		for(var xPlan=0; xPlan < lnuTotalPlanesByCategoria; xPlan++)
		{
			var lstIdObjPlanes = pobOjbPlanes[xPlan].JSONDATA.id;
			if(pstIdPlan == lstIdObjPlanes)
			{
				return pobOjbPlanes[xPlan];
			}
		}
	}

	function fboVerificarPlanesSeleccionados(  )
	{
		debugger;
		var cat = $('#categoria_'+ tb ).val();
		var catalogo = $('#catalogo_'+tb).val();
		
		catalogo = tb;
		
		var JSONHTML = ($("#dvJSONTotalPlanes_"+ catalogo ).html());

			
		

		var objJSONTotal_Planes = $.parseJSON( JSONHTML );

		var lobAyKeysCarByCategoria = Object.keys( objJSONTotal_Planes );
		var lstIdPlan = "";
		var lstCategoria = "";
		var lobPlanesByCategoria = new Object();

		var lobArrayPlanesSel = new Array();
		var lstJSONPlanesSel = "";
		var lboExistioChecked=false;

		var lobAyCriterios_Planes = new Array();

		var subcat = $('#subcategoria_' + tb ).val();		

		$(".cbPlanes").each(function (  ){

			var $this = $(this);
			if( $this.is(":checked") )
			{
				lboExistioChecked=true;
				lstIdPlan = $this.data("plan");
				lstCategoria = 	$this.data("categoria");
				
				debugger;
				var auxArray=new Array();
				auxArray=Object.keys(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas);
				for(var index=0;index<auxArray.length;index++){
					
					console.log("objJSONTotal_Planes[ '"+lstCategoria+"'].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car=accentEncode(objJSONTotal_Planes['"+lstCategoria+"'].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car)");
					eval("objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car)");
					eval("objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car)");
					eval("objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car)");
					eval("objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car)");	
					eval("objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car)");	
					eval("objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car"+(index+1)+".nombre_car)");	



				}
				//--Criterios
				/*
				objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car6.nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car6.nombre_car)
				objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car6.nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car6.nombre_car)
				objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car2.nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car2.nombre_car)
				objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car2.nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car2.nombre_car)
				objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car3.nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car3.nombre_car)
				objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car3.nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car3.nombre_car)
				objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car4.nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car4.nombre_car)
				objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car4.nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car4.nombre_car)
				objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car5.nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car5.nombre_car)
				objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car5.nombre_car=accentEncode(objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas.car5.nombre_car)
				*/
				var lobCaracteristicasByCategoria = objJSONTotal_Planes[ ''+lstCategoria ].JSONCategoria.caracteristicas;
				var lnuTotalCriteriosPlanes = lobAyCriterios_Planes.length;

				

			//	if(lnuTotalCriteriosPlanes == 0)
			//	{
					//Obtener todas las caracteristicas de todos los planes
					lobAyCriterios_Planes = fLlenaCriterios(lobCaracteristicasByCategoria);
			//	}

				

				lobPlanesByCategoria = objJSONTotal_Planes[lstCategoria].Planes;



				var lobPlanConsultado = fobGetPlanById(lstIdPlan,lobPlanesByCategoria);
				lobArrayPlanesSel.push(lobPlanConsultado);

			}//Termina if( $this.is(":checked") )
		});

		if( lboExistioChecked )
		{


			lstJSONPlanesSel = JSON.stringify(lobArrayPlanesSel);
			$("#dv_json_planes_sel_"+categoria).html(lstJSONPlanesSel);
		}
		else
		{
			fResetComparadorSimple();
		}

		return lobAyCriterios_Planes;
	}

	function getDetalleComparadorTop(texto)
	{
		debugger;
		var resultado = '<tr><td class="first">' + texto + '</td>';
		return resultado;
	}

	function getDetalleComparadorMiddle(texto)
	{
		debugger;
		if ( texto == null || texto == 'undefined')
			var resultado = '<td> - </td>';
		else
			var resultado = '<td>' + texto + '</td>';

		return resultado;
	}

	function getDetalleComparadorBottom()
	{
		var resultado = '</tr>';
		return resultado;
	}

	function getDetallePie(pstPrecio, pstDestino)
	{
		var resultado =
				'<td>'+
					'<span class="price">RD$ '+pstPrecio+'</span><span class="tag">al mes</span>'+
					'<a destination="'+pstDestino+'" class="link comparador_detalle">Ver m\u00e1s<i class="icon-double-angle-right"></i></a>'+
				'</td>';
		return resultado;
	}

	function getCodigoParaCriterios_Top(pobCriteriosPlanes)
	{
		var lnuTotalCriterios = pobCriteriosPlanes.length;
		var lstDetalleComparadorTop = "";
		var lstCadenaResultado = "";
		var lstNombreCriterio = "";
		debugger;
		for(var xCriterio=0; xCriterio < lnuTotalCriterios; xCriterio++)
		{
			lstNombreCriterio = pobCriteriosPlanes[xCriterio].replace(/\s/g,'').replace(/-/g,'_').replace('.','');
			lstDetalleComparadorTop = getDetalleComparadorTop(pobCriteriosPlanes[xCriterio]);
			
			//decode
			
			lstCadenaResultado += "var resultadoCuerpo_"+lstNombreCriterio+" = '"+lstDetalleComparadorTop+"';";
		}

		return lstCadenaResultado;
	}

	function getCodigoParaCriterios_Middle(pobOjetoCarPlan,pobCriteriosPlanes)
	{
		debugger;
		var lobAyDetalleCarPlan = new Array();
		var lnuTotalCriterios = pobCriteriosPlanes.length;
		var lstDetalleComparadorMiddle = "";
		var lstCadenaResultado = "";
		var lstNombreCriterio = "";

		//--Llenado de arreglo auxiliar para Detalles de Caracteristicas
		var lobAyKeysCarPlan = Object.keys(pobOjetoCarPlan);
		
		/*
			for(var index=0;index<lobAyKeysCarPlan.length;index++){
			
				lobAyKeysCarPlan[index]=accentEncode(lobAyKeysCarPlan[index]);
				lobAyKeysCarPlan[index]=accentEncode(lobAyKeysCarPlan[index]);
			}
		*/
		/////////////////////////
		var lnuTotalKeysCarPlan = lobAyKeysCarPlan.length;
		for(var xKeyCarPl = 0; xKeyCarPl < lnuTotalKeysCarPlan; xKeyCarPl++)
		{
			
			lobAyDetalleCarPlan[  ( lobAyKeysCarPlan[xKeyCarPl].replace(/ /g,'')) ] = pobOjetoCarPlan [lobAyKeysCarPlan[xKeyCarPl] ] ;
			
		}
		var lnuTotalDetalleCarPlan = lobAyDetalleCarPlan.length;

		debugger;
		var auxNombreCriterio;
	//	if(lnuTotalDetalleCarPlan === lnuTotalCriterios)
	//	{
			for(var xCriterio=0; xCriterio < lnuTotalCriterios; xCriterio++)
			{
				lstNombreCriterio = ( pobCriteriosPlanes[xCriterio].replace(/\s/g,'').replace(/-/g,'_').replace('.','').replace(/ /g,'')  );				
				auxNombreCriterio=lstNombreCriterio;
				lstNombreCriterio=accentDecode(lstNombreCriterio);
				lstNombreCriterio=accentDecode(lstNombreCriterio);
				lstNombreCriterio=accentDecode(lstNombreCriterio);
				lstNombreCriterio=accentDecode(lstNombreCriterio);
				lstNombreCriterio=accentDecode(lstNombreCriterio);
				//console.log(lstNombreCriterio );
				lstNombreCriterio=lstNombreCriterio.replace(/ /g,'');
				//tag
				//console.log(lobAyDetalleCarPlan[ lstNombreCriterio ]);
				lstDetalleComparadorMiddle = getDetalleComparadorMiddle(lobAyDetalleCarPlan[ lstNombreCriterio ]);
				
				
				lstCadenaResultado += " resultadoCuerpo_"+auxNombreCriterio+" += '"+lstDetalleComparadorMiddle+"';";
				
				

				
			}
	//	}

		return lstCadenaResultado;
	}

	function getCodigoParaCriterios_Bottom(pobCriteriosPlanes)
	{
		var lnuTotalCriterios = pobCriteriosPlanes.length;
		var lstCadenaResultado = "";
		var lstDetalleComparadorBottom = "";
		var lstNombreCriterio = "";
		debugger;
		for(var xCriterio=0; xCriterio < lnuTotalCriterios; xCriterio++)
		{
			lstNombreCriterio = pobCriteriosPlanes[xCriterio].replace(/\s/g,'').replace(/-/g,'_').replace('.','');
			lstDetalleComparadorBottom = getDetalleComparadorBottom();
			lstCadenaResultado += "resultadoCuerpo_"+lstNombreCriterio+" += '"+lstDetalleComparadorBottom+"';";
		}

		return lstCadenaResultado;
	}

	function getCodigoParaCriterios_ResCuerpo(pobCriteriosPlanes)
	{
		debugger;
		var lnuTotalCriterios = pobCriteriosPlanes.length;
		var lstCadenaResultado = "";
		var lstNombreCriterio = "";

		for(var xCriterio=0; xCriterio < lnuTotalCriterios; xCriterio++)
		{
			lstNombreCriterio = pobCriteriosPlanes[xCriterio].replace(/\s/g,'').replace(/-/g,'_').replace('.','');
			lstCadenaResultado += "resultadoCuerpo += resultadoCuerpo_"+lstNombreCriterio+";";
		}
		return lstCadenaResultado;
	}

	function fPintaComparador(pobCriteriosPlanes)
	{
	
	//aqui hay chanchuyo

		debugger;
		//var catalogo = $('#catalogo_' + tb).val();
		var idDiv = "#dv_json_planes_sel_" + tb;
		//parsear aqui
		var divParseado=accentEncode($( idDiv ).html());
		divParseado=accentEncode(divParseado);
		//alert(divParseado);
		var JSONHTML = $.parseJSON( $( idDiv ).html() );

		
		var pObjJSONPlanesSelec = JSONHTML;
		var lnuTotalPlanesSel = pObjJSONPlanesSelec.length;
		var resultado = '';
		/*
		pobCriteriosPlanes[1]=accentEncode(pobCriteriosPlanes[1]);
		pobCriteriosPlanes[2]=accentEncode(pobCriteriosPlanes[2]);
		pobCriteriosPlanes[3]=accentEncode(pobCriteriosPlanes[3]);
		pobCriteriosPlanes[4]=accentEncode(pobCriteriosPlanes[4]);
		pobCriteriosPlanes[5]=accentEncode(pobCriteriosPlanes[5]);
		*/

		debugger;
		if(lnuTotalPlanesSel > 0)
		{
			var lstNombrePlan = "";
			var lstPrecioMes = "";
			var lstVerMas = "";

			var resultadoCabecera = '<thead><tr><th class="first"> </th>';
			var resultadoCuerpo = '<tbody>';
			var resultadoPie	= '<tfoot><tr><td class="first"></td>';
			//console.log(pobCriteriosPlanes[5])
			//pobCriteriosPlanes[5]=accentEncode(pobCriteriosPlanes[5])
			//console.log(pobCriteriosPlanes[5]);
			var lstCodigoTop = getCodigoParaCriterios_Top(pobCriteriosPlanes);
			debugger;
			
			eval(lstCodigoTop);
			//lstCodigoTop=accentDecode(lstCodigoTop);
			resultado +=
			'<h2>Comparar</h2>'+
			'<table class="tabla-planes-precios">';


			for(var xPlan=0; xPlan<lnuTotalPlanesSel; xPlan++)
			{
				lstNombrePlan = pObjJSONPlanesSelec[xPlan].JSONDATA.nombre;
				lstPrecioMes = pObjJSONPlanesSelec[xPlan].JSONDATA.precio;
				lstVerMas = pObjJSONPlanesSelec[xPlan].urlDetalle;
				var lobCaracPlan = pObjJSONPlanesSelec[xPlan].JSONDATA.caracteristicas;
				
				resultadoCabecera += '<th>'+lstNombrePlan+'</th>';
				
				//aqui
				var lstCodigoMiddle = getCodigoParaCriterios_Middle(lobCaracPlan,pobCriteriosPlanes);
				debugger;
				
				eval(lstCodigoMiddle);				
				//accentDecode(lstCodigoMiddle);
				resultadoPie += getDetallePie(lstPrecioMes, lstVerMas);
			}



			resultadoCabecera += '</tr></thead>';

			var lstCodigoBottom = getCodigoParaCriterios_Bottom(pobCriteriosPlanes);
			eval(lstCodigoBottom);

			resultadoPie += '</tr></tfoot>';

			var lstCodigoResCuerpo = getCodigoParaCriterios_ResCuerpo(pobCriteriosPlanes);
			eval(lstCodigoResCuerpo);
			debugger;
			resultadoCuerpo += '</tbody>';

			resultado += resultadoCabecera;
			resultado += resultadoCuerpo;
			resultado += resultadoPie;
			
			resultado += '</table>';
			resultado=accentDecode(resultado)//decodifica la salida
			//console.log(resultado);
			//var control = false;
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)
			resultado=accentDecode(resultado)

			debugger;
			$("#taComparador").val( resultado );
			$("#planes-precios-comparador-"+categoria).html(resultado);

            $('.js-lb-planes-precios-'+categoria).unbind( "fancybox" );
            $('.js-lb-planes-precios-'+categoria).unbind( "click" );
            $('.js-lb-planes-precios-'+categoria).unbind( );


			$('.js-lb-planes-precios-'+categoria).fancybox({
			      autoSize: true,
			      fitToView: true,
			      maxWidth: '100%',
			      scrolling   : 'hidden'
			    });

			$( '.js-lb-planes-precios-'+categoria ).trigger("click");

		}//Termina if(lnuTotalPlanesSel > 0)


		$('.comparador_detalle').click( function(){

				var url = $( this ).attr('destination');
				url += '?h'+ window.location.hash;
				window.top.location = url;

	     });

	}

	function fResetComparadorFull(pstCategoria , subCat , pstCatalogo )
	{
		$('#subcategoria_'+tb).val ( subCat );
		$('#categoria_'+tb).val ( pstCategoria );

		if ( pstCatalogo != '' )
		$('#catalogo_'+tb).val ( pstCatalogo );

		var objJSONTotal_Planes = $.parseJSON( $("#dvJSONTotalPlanes_" + pstCatalogo ).html() );

		//--Planes Seleccionados
		$("#dv_json_planes_sel").html('');

		//--Contenido Comparador
		$("#planes-precios-comparador").html('');

		//--Check
		$(".cbPlanes").each(function (i){
			$(this).attr('checked', false);
		});

		//comparador
		$('.limpia-comparador').trigger('click');

	}


	function fResetComparadorSimple()
	{
		$("#dv_json_planes_sel_"+categoria).html("");
		$("#planes-precios-comparador_"+categoria).html("");
	}

	function fComparar()
	{

		//console.log ( 'Obtener Criterios ' );
		var lobAyCriterios = fboVerificarPlanesSeleccionados();



		if(lobAyCriterios.length > 0)
		{
			//console.log ( 'Inicia pintar ' );	
			fPintaComparador(lobAyCriterios);
			//console.log ( 'termina pintar ' );
		}
		else
		{
			////alert("No seleccionaste nada");
		}

	}

//Funcion comparar

function comparar( cat ){
	debugger;
		tb=$('.ps.selected').attr('id_tab');

        
		categoria = cat;

		fComparar ();
	}

//end funcion comparar



$(document).ready(function () {

	
		try {
			$('.ps.selected').trigger('click');
			$('.selected a[href*="#plan-"]').trigger('click');			
		}catch (err){
            //console.log ( err ) ;
		}


$('.cbPlanes').click ( function (){


var seleccionados = 0;
 limpiaComparador ();
	$('.cbPlanes').each ( function (){


		if ( seleccionados == 5 ){
				$(this).prop('checked', false);
				return;
		}

		var $this = $(this);
			if( $this.is(":checked") )
			{
				seleccionados++;

				$( ".comparador-articulos p:first-child" ).html('Planes a Comparar <span>('+ seleccionados +')</span>')

				var li = $( ".comparador-articulos li:nth-child("+ (seleccionados) +")" ).addClass( "active" );

				$( li ).addClass( "active" );
				$( li ).html( '<span></span><div><div class="comparador-tag">'+ $(this).attr('data-plan') +'</div></div>' );

			}

	if ( seleccionados > 1 ){
		$('.comparador').show();

	} else {

		$('.comparador').hide();
	}

	});

});


/* Limpia comparador de tabs*/
$('.ps').click ( function (){

		$('.limpia-comparador').trigger( 'click' );

});


$('.limpia-comparador').click ( function (){

     
	$('.cbPlanes').each ( function (){
		$(this).prop('checked', false);
	});

	limpiaComparador ();
	$('.comparador').hide();

});




function limpiaComparador (){

	for (var i = 0; i < 6; i++) {
			$( ".comparador-articulos p:first-child" ).html('Planes a Comparar <span>(0)</span>')
			var li = $( ".comparador-articulos li:nth-child("+ (i) +")" );
				$( li ).removeClass( "active" );
				$( li ).html( '<span></span>' );
		}
}

//URL detalle

$('.detalle_planes').click( function(){

		var url = $( this ).attr('destination');
		url += '?h'+ window.location.hash;
		window.top.location = url;

	});



      $('.js-plan-view-more a').click(function(){
       $('.planes-precios .plan-element').show();
       $('.js-plan-view-more').hide();
       return false;
      });
      

}); // end ready


function limpiaString( texto ){

     var lboReturn = normalize ( texto );

     lboReturn = lboReturn.replace(/ /g,'');

     return lboReturn;
}


var normalize = (function() {
  var from = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç",
      to   = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc",
      mapping = {};
 
  for(var i = 0, j = from.length; i < j; i++ )
      mapping[ from.charAt( i ) ] = to.charAt( i );
 
  return function( str ) {
      var ret = [];
      for( var i = 0, j = str.length; i < j; i++ ) {
          var c = str.charAt( i );
          if( mapping.hasOwnProperty( str.charAt( i ) ) )
              ret.push( mapping[ c ] );
          else
              ret.push( c );
      }
      return ret.join( '' );
  }
 
})();

//Ver mas planes

      
      
      $(window).on('load', function(){
       $('.plan-row:nth-child(-n+3) .plan-element').show();       
      });
      
    

  function cleanComparador(){

  	var control = 1;
  	var total = $('.comparador').length;
  
  	$('.comparador').each ( function (){

  		if ( control <= total -1)
  			$( this ).remove();
  		control ++;

  	});

  }
  
  function accentEncode( tx )
{
	var rp = tx;
	//
	rp = rp.replace(/é/g, 'u00e9');

	/*
	rp = rp.replace("\n","<br>");
	rp = rp.replace(/á/g, 'u00e1');
	rp = rp.replace(/é/g, 'u00e9');
	rp = rp.replace(/í/g, 'u00ed');
	rp = rp.replace(/ó/g, 'u00f3');
	rp = rp.replace(/ú/g, 'u00fa');
	rp = rp.replace(/ñ/g, 'u00f1');
	rp = rp.replace(/ü/g, 'u00fc');
	
	rp = rp.replace(/Á/g, 'u00c1');
	rp = rp.replace(/É/g, 'u00c9');
	rp = rp.replace(/Í/g, 'u00cd');
	rp = rp.replace(/Ó/g, 'u00d3');
	rp = rp.replace(/Ú/g, 'u00da');
	rp = rp.replace(/Ñ/g, 'u00d1');
	rp = rp.replace(/Ü/g, 'u00dc');
	*/
	rp = rp.replace(/\./g, 'u00b7'); 
	rp = rp.replace(' ', 'u00a0');
	//
	return rp;
};

  function accentDecode( tx )
{
	var rp = tx;
	//
	rp = rp.replace('u00e9', /é/g);
	//rp = rp.replace("\n","<br>");
	/*rp = rp.replace(/á/g, 'u00e1');
	rp = rp.replace(/é/g, 'u00e9');
	rp = rp.replace(/í/g, 'u00ed');
	rp = rp.replace(/ó/g, 'u00f3');
	rp = rp.replace(/ú/g, 'u00fa');
	rp = rp.replace(/ñ/g, 'u00f1');
	rp = rp.replace(/ü/g, 'u00fc');
	//
	rp = rp.replace(/Á/g, 'u00c1');
	rp = rp.replace(/É/g, 'u00c9');
	rp = rp.replace(/Í/g, 'u00cd');
	rp = rp.replace(/Ó/g, 'u00d3');
	rp = rp.replace(/Ú/g, 'u00da');
	rp = rp.replace(/Ñ/g, 'u00d1');
	rp = rp.replace(/Ü/g, 'u00dc');*/
	rp = rp.replace('u00b7','.');
	rp = rp.replace('u00a0',' ');
	//
	return rp;
};

function muestra(href1){
	debugger;
	if(href1!=''){
			$.fancybox.close();
			// parent.ga('send', 'event',href2, 'click', 'Completa un formulario');
		    parent.jQuery.fancybox.open({href:href1,type: 'iframe' });		   
	
		}
};

function muestra2(href1, tipo){
	
	debugger;
	if( href1 != "undefined" || href1 != 'undefined' ) { 
		if( href1 != '' ) {	
			if( tipo == '3') {
				$.fancybox.close();
				// parent.ga('send', 'event',href2, 'click', 'Completa un formulario');
				parent.jQuery.fancybox.open({href:href1,type: 'iframe' });	
			}else if(tipo == '2') {
				window.open(href1, '_self');
			}else if(tipo == '1') {
				window.open(href1, '_blank');
			}
		}
	}
};

function muestraPromo(){
	document.getElementById("promoView").className += "visible";
	document.getElementById("verPromocion1").style.display='none';
	document.getElementById("verPromocion2").style.display='block';
	
}

function ocultaPromo(){
	document.getElementById("promoView").className = "promoView";
	document.getElementById("verPromocion1").style.display='block';
	document.getElementById("verPromocion2").style.display='none';
}