var ordenCarrito = 0;
var posCarritoInicial;
var anchoCarritoInicial;
var anchoProductoEnCarrito = 120;

function actualizaStockProducto($item, incremento) {
	var stock = parseInt($item.children(".stock").html().replace("Stock ", ""));
	
	if (stock+incremento >= 0) {
		stock += incremento;
		$item.children(".stock").html("Stock " + stock).hide();
		$item.children(".stock").html("Stock " + stock).fadeIn(300);
		if (stock == 0) {
			$item.find(".stock").addClass("agotado");
			$item.unbind("dblclick");
		}
		else {
			if (stock == 1 && incremento == 1) {
				$item.find(".stock").removeClass("agotado");
				establece_evento_dblclick_items($item);
			}
		}
	}
}

function actualizaNumeroProductosPedidos(incremento) {
	var numProductosPedido = parseInt($("#citem").val());
	numProductosPedido += incremento;
	$("#citem").val(numProductosPedido).hide();
	$("#citem").val(numProductosPedido).fadeIn( 600 );
}

function actualizaPrecioTotal($item, incremento) {
	var precioPedido = parseInt($("#cprice").val());
	precioPedido += parseInt(incremento);
	$("#cprice").val(precioPedido + " €");
}

function incrementaAnchoCarrito(incremento) {
	$("#cart_items").width($("#cart_items").width() + incremento);
}

function anyadeProductoAlCarrito($item) {
	var $delete = $('<a href="" class="delete"></a>');

	var id = "c"+$item.attr("id");
	$copia = $item.clone().attr("id", id).addClass('icart').prepend($delete);
	$copia.children(":not(a)").andSelf().css("cursor", "default").find(".stock").hide();
	$copia.hide();
	$width = $item.css("width");
	$copia.css("width", "0px");
	
	$("#cart_items").prepend($copia);
	$copia.toggle();
	$copia.animate( {width: $width}, {queue: false, duration: 600});
	$("#btn_comprar").fadeIn( 600 );
	$("#btn_clear").fadeIn( 600 );
}

function desplazaCarritoIzquierda(desplazamiento) {
	var pos = $("#cart_items").offset();
	
	if (pos.left + desplazamiento <= posCarritoInicial.left)
		pos.left += desplazamiento;
	else
		pos.left = posCarritoInicial.left;
		
	$("#cart_items").offset(pos);
}

function desplazaCarritoDerecha(desplazamiento) {
	var pos = $("#cart_items").offset();
	var ancho = $("#cart_items").width();
	var der = pos.left + ancho;
	
	if (der - desplazamiento >= posCarritoInicial.left + anchoCarritoInicial)
		pos.left -= desplazamiento;
	else
		pos.left = posCarritoInicial.left + anchoCarritoInicial - ancho;

	$("#cart_items").offset(pos);
}

function establece_evento_dblclick_items($items) {
	$items.dblclick(function() {
		actualizaStockProducto($(this), -1);

		actualizaNumeroProductosPedidos(1);
			
		actualizaPrecioTotal($(this), parseInt($(this).children(".price").html()));
		
		anyadeProductoAlCarrito($(this));

		var numArticulosCarrito = $("#cart_items").children().length;
		if (numArticulosCarrito > 4) {
			incrementaAnchoCarrito(anchoProductoEnCarrito);
			$("#btn_prev").fadeIn( 600 );
			$("#btn_next").fadeIn( 600 );
		}
	});
}

function eliminaProductoDelCarrito($item) {
	var id = $item.attr("id");
	id = id.substring(1);
	
	actualizaStockProducto($("#"+id), 1);
	
	actualizaNumeroProductosPedidos(-1);
	
	actualizaPrecioTotal($item, -parseInt($item.children(".price").html()));
	
	var pos = $("#cart_items").offset();
	
	var numArticulosCarrito = $("#cart_items").children().length-1;
	if (numArticulosCarrito >= 4) {
		incrementaAnchoCarrito(-anchoProductoEnCarrito);
		
		var anchoCarrito = $("#cart_items").width();
		var der = pos.left + anchoCarrito;
		if (der < posCarritoInicial.left + anchoCarritoInicial)
			pos.left = posCarritoInicial.left;
	}
	else {
		pos.left = posCarritoInicial.left;
	}
	
	$("#cart_items").offset(pos);

	$item.remove();

	if (numArticulosCarrito <= 0) {
		$("#btn_comprar").fadeOut( 600 );
		$("#btn_clear").fadeOut( 600 );
	}
	if (numArticulosCarrito <= 4) {
		$("#btn_prev").fadeOut( 600 );
		$("#btn_next").fadeOut( 600 );
	}
}

//Document.ready
$(function() {
	anchoCarritoInicial = $("#cart_items").width();
	posCarritoInicial = $("#cart_items").offset();

	establece_evento_dblclick_items($(".item"));
	
	$(document).on("click", ".delete", function() {
		var parentElement = $(this).parent();
		$(parentElement).fadeOut(  600 , function() {
			eliminaProductoDelCarrito(parentElement);
		} );
		
		return false;
	});
	
	$("#btn_clear").click(function(evento) {
		$(".delete").trigger("click");
	});
	
	var desplazamiento = parseInt(50);
	$("#btn_prev").mouseover(function(evento) {
		desplazaCarritoIzquierda(50);
	}).mouseout(function() {
		$("#cart_items").stop(true, false);
	});

	$("#btn_next").click(function(evento) {
		desplazaCarritoDerecha(50);
	});

	$("#nav_left").children().hide();
});