window.subir1 = function() {
	var scroller = $(window).scrollTop()
  	var altura = $(window).outerHeight()
  	var abajo = ($('#bigfootercanal').offset().top)-altura
  	var bt_subir = ($('#bigfootercanal').offset().top)-103
  	var subir = '<div class="btn-subir">Ir Arriba</div>'
  	var arriba = ($('.mod-filter').offset().top)+25
  	if($('.btn-subir').length == 0){
  		//console.log('carga')
  		$('body').append(subir);
  		$('.btn-subir').on('click',function(){
  			$(window).scrollTop(0);
  		});
  	}
  	if(scroller <= (arriba -1)){
  		$('.btn-subir').hide()
  	}
  	else if(scroller >= abajo){
  		$('.btn-subir').removeAttr('style')
  		$('.btn-subir').attr('style','position:absolute; right:60px; top:'+bt_subir+'px');
  		$('.btn-subir').fadeIn()
  	}
  	else if(scroller >= arriba || scroller <= (abajo-1)){
  		$('.btn-subir').removeAttr('style')
  		$('.btn-subir').attr('style','position:fixed; bottom:30px; right:60px')
  		$('.btn-subir').show()
  	}
}

window.up = function(){
	$(window).scrollTop(0);	
}

function subir() {
	var scroller = $(window).scrollTop();
	var altura = $(window).outerHeight();
	var abajo = ($('#bigfootercanal').offset().top) - altura;
	var bt_subir = ($('#bigfootercanal').offset().top) - 103;
	var subir = '<div class="btn-subir">Ir Arriba</div>';
	var arriba = ($('.com-filter-alp li:last-child').offset().top) + 25;
	if ($('.btn-subir').length == 0) {
		//console.log('carga')
		$('body').append(subir);
		$('.btn-subir').on('click', function() {
			$(window).scrollTop(0);
		});
	}
	if (scroller <= (arriba - 1)) {
		$('.btn-subir').hide();
	} 
	else if (scroller >= abajo) {
		$('.btn-subir').removeAttr('style');
		$('.btn-subir').attr('style', 'position:absolute; right:60px; top:' + bt_subir + 'px');
		$('.btn-subir').fadeIn();
	}
	else if (scroller >= arriba || scroller <= (abajo - 1)) {
		$('.btn-subir').removeAttr('style');
		$('.btn-subir').attr('style', 'position:fixed; bottom:30px; right:60px');
		$('.btn-subir').show();
	}
}

function subir1(){
      	var scroller = $(window).scrollTop()
      	var altura = $(window).outerHeight()
      	var abajo = ($('#bigfootercanal').offset().top)-altura
      	var bt_subir = ($('#bigfootercanal').offset().top)-103
      	var subir = '<div class="btn-subir">Ir Arriba</div>'
      	var arriba = ($('.mod-filter').offset().top)+25
      	if($('.btn-subir').length == 0){
      		//console.log('carga')
      		$('body').append(subir);
      		$('.btn-subir').on('click',function(){
      			$(window).scrollTop(0);
      		});
      	}
      	if(scroller <= (arriba -1)){
      		$('.btn-subir').hide()
      	}
      	else if(scroller >= abajo){
      		$('.btn-subir').removeAttr('style')
      		$('.btn-subir').attr('style','position:absolute; right:60px; top:'+bt_subir+'px');
      		$('.btn-subir').fadeIn()
      	}
      	else if(scroller >= arriba || scroller <= (abajo-1)){
      		$('.btn-subir').removeAttr('style')
      		$('.btn-subir').attr('style','position:fixed; bottom:30px; right:60px')
      		$('.btn-subir').show()
      	}
      }
	  
function sinGrilla(){
      	//console.log('inicio SG')
      	$('.com-filter-expand').stop().slideUp();
      	$('.mod-filter .elem-planCanales').off('click');
      	$('.cerrarExpand').off('click');
      	$('.com-filter-alp >').off('click')
      	$('.mod-filter .elem-planCanales').addClass('disabled').removeClass('active');
      	if( $(".elem-planCanales").length >=1){
      		$('.mod-filter .elem-planCanales i').addClass('icon-chevron-down');
      	}
      	//sirve para colocar el activo al filtro de las letras
      	$('.com-filter-alp >').on('click',function(){
      		var $this = $(this)
      		var letra = $this.data('letter')
      		$('.com-filter-alp >').removeClass('activo');
      		$this.addClass('activo');
      	});
      	$(window).off('scroll').stop
      	$('.btn-subir').remove()
      	if($('.com-filter-alp').length >= 1){
      		//console.log('hay filtro')
      		$(window).on('scroll',subir)
      	}
      	else if($('.com-filter-alp').length == 0){
      		//console.log('hay filtro')
      		$(window).on('scroll',subir1)
      	}
      	//console.log('fin SG')
      	preLoader(1)
      	return false
      }

function filtroGrgrilla(){
      	//console.log('inicio')
      	//Sirve para crear el acordeon del filtro
      	$('.mod-filter .elem-planCanales').on('click',function(){
      		$(this).toggleClass('active');
      		if( $('.mod-filter .elem-planCanales').hasClass('active') ){
      			$('.com-filter-expand').stop().slideDown();
      			$('.mod-filter .elem-planCanales i').addClass('icon-chevron-up')
      			$('.mod-filter .elem-planCanales i').removeClass('icon-chevron-down')
      		}
      		else{
      			$('.com-filter-expand').stop().slideUp();
      			$('.mod-filter .elem-planCanales i').addClass('icon-chevron-down')
      			$('.mod-filter .elem-planCanales i').removeClass('icon-chevron-up')
      		}
      	});
      	//Sirve para el boton de cerrar de adentro del filtro
      	$('.cerrarExpand').on('click',function(){
      		$('.mod-filter .elem-planCanales').trigger('click')
      	});
      	//activa el filtro al entrar
      	$('.mod-filter .elem-planCanales').trigger('click')
      	//abilita el boton
      	$('.mod-filter .elem-planCanales').removeClass('disabled');
      	$(window).off('scroll').stop
      	$('.btn-subir').remove()
      	if($('.com-filter-alp').length == 0){
      		//console.log('hay filtro')
      		$(window).on('scroll',subir1)
      	}
      	preLoader(1)
      	//console.log('fin')
      	return false
      }
//filtroGrgrilla();   //estando aqui falla
$('.mod-filter .filtroR').on('change',
	function() {
		valor = $('.mod-filter .filtroR select').val();
		preLoader(0);
		switch (valor) {
		case 'CAT':
			$('#categoria-div').show();
			$('.com-filter-alp').hide();
			$('#alfab-div').hide();
			$('#numerico-div').hide();
			filtroGrgrilla();
			removeOrderBy();
			
			//$('.mod-grillaCompleta').load('grilla-canales.html .mod-grillaCompleta',filtroGrgrilla);
			break;
		case 'NUM':
			$('#categoria-div').hide();
			$('.com-filter-alp').hide();
			$('#alfab-div').hide();
			$('#numerico-div').show();
			sinGrilla();
			removeOrderBy();
			$('.order-by a').children("span").addClass("sort-icon-alt");
			sortTable(1,1); 
			
			$('.order-by a').on('click', function(){
			      	$this = $(this);
			      	if ( $this.children("span").hasClass("sort-icon") ){
			      		//ordenar descendentemente y cambiar icono a ascendente
			      		var n = $(this).parent().parent().prevAll().length;
			      	    sortTable(1,n);
			      		$this.children("span").addClass("sort-icon-alt").removeClass("sort-icon");
			      	} else {
			      		var n = $(this).parent().parent().prevAll().length;
			      	    sortTable(-1,n);
			      		$this.children("span").addClass("sort-icon").removeClass("sort-icon-alt");
			      	}
			 });
			//$('.mod-grillaCompleta').load('grilla-canales-num.html .mod-grillaCompleta',sinGrilla);
			break;
		case 'ALF':
			$('#categoria-div').hide();
			$('.com-filter-alp').show();
			$('#alfab-div').show();
			$('#numerico-div').hide();
			sinGrilla();
			removeOrderBy();
			//$('.mod-grillaCompleta').load('grilla-canales-alfa.html .mod-grillaCompleta',sinGrilla);
		}
	});
//filtroGrgrilla();

var removeOrderBy=function(){
	if($('.order-by a').children("span").hasClass("sort-icon")){
		$('.order-by a').children("span").removeClass("sort-icon");
	}
	
	if($('.order-by a').children("span").hasClass("sort-icon-alt")){
		$('.order-by a').children("span").removeClass("sort-icon-alt");
	}
}

function getCheckSelectedIndex(object){
	var check = new Array();	
	if(object.length == undefined)	{
		if (object.checked) {
			check.push(object.value);
		}
	} else {	
		for(var i=0; i<object.length; i++) {
			if (object[i].checked) {
				check.push(object[i].value);
			}
		}
	}
	return check;
}

function filtra(tipo){	
	preLoader(0);
	if(tipo == "cat"){
//		var chkCat = getCheckSelectedIndex(document.getElementById("frmPln").filtroCat);
		var chkCat = getCheckSelectedIndex($('input[name="filtroCat"]'));
		var categs = $("#categoriasIDS").val().split(",");
		if (chkCat.length > 0)	{
			for(var i=0; i<categs.length; i++){
				if($.inArray(categs[i], chkCat) >= 0){
					$("#"+categs[i]).show();
				}else
					$("#"+categs[i]).hide();
			}
		}else{
			for(var i=0; i<categs.length; i++){
				$("#"+categs[i]).show();
			}
		}
	}
	if(tipo == "pln"){
		var chkPlan = getCheckSelectedIndex($('input[name="filtroPln"]'));
		if (chkPlan.length > 0)	{
			if($.inArray("1", chkPlan) >= 0){
				$(".com-grilla .elem-planAvanzado").show();
			}else
				$(".com-grilla .elem-planAvanzado").hide();
			if($.inArray("2", chkPlan) >= 0){
				$(".com-grilla .elem-planSuperior").show();
			}else
				$(".com-grilla .elem-planSuperior").hide();
			if($.inArray("3", chkPlan) >= 0){
				$(".com-grilla .elem-planExtra").show();
			}else
				$(".com-grilla .elem-planExtra").hide();
			if($.inArray("4", chkPlan) >= 0){
				$(".com-grilla .elem-planBasico").show();
			}else
				$(".com-grilla .elem-planBasico").hide();
		}else{
			$(".com-grilla .elem-planAvanzado").show();
			$(".com-grilla .elem-planSuperior").show();
			$(".com-grilla .elem-planExtra").show();
			$(".com-grilla .elem-planBasico").show();
		}
	}
	preLoader(1);
}

//función para hacer el :contains como caseINsensitive
$.extend($.expr[":"], {
	"containsIN": function(elem, i, match, array) {
		return (elem.textContent || elem.innerText || "").toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
	}
});

function buscar(){
	$( "table.com-girillaPlanT, table.com-girillaPlanT #canal").show();
	var busca = $("#buscador").val();
	if(busca.length > 0)
		$( "table.com-girillaPlanT, table.com-girillaPlanT #canal").not(":containsIN('"+busca+"')" ).hide();
}

function handle(e){
	if(e.keyCode === 13){
		buscar();
	}
//	return false;
}

function limpiar_search(){
	//alert("limpia-busqueda")
	$('#buscador').val('');
	buscar();
	/*
	$('#buscador').focus(function() {
        $(this).val('');
        buscar();
    });
	*/
}

function limpiafiltros(){
	//alert("Ejecuta limpia filtros");
	//filtroGrgrilla();
	$('input:checkbox[name=filtroCat]:checked').each(function(){$(this).attr('checked',false)});
	filtra('cat');
}


$( document ).ready(function() {
	filtroGrgrilla();
	//Activa el botón subir con el scroll
	$(window).on('scroll',subir1);
});


function sortTable(f,n){
	  var rows = $('#numerico-div table tbody  tr').get();

	  rows.sort(function(a, b) {

	  var A = Number(($(a).children('td').eq(n).text().toUpperCase()).split('-')[0]);
	  var B = Number(($(b).children('td').eq(n).text().toUpperCase()).split('-')[0]);
	  if(A==Number.NaN){ A=0;}
	  if(B==Number.NaN){ B=0;}
	  if(A < B) {
	    return -1*f;
	  }
	  if(A > B) {
	    return 1*f;
	  }
	  return 0;
	  });

	  $.each(rows, function(index, row) {
	    $('#numerico-div table').children('tbody').append(row);
	  });
	}