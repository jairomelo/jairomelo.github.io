$(document).ready(function () {
$.ajax({
    type: "GET",
    url: "produccion.xml",
    dataType: "xml",
    success: xmlParser
   });
});

function xmlParser(xml) {

$('#load').fadeOut();

$(xml).find("biblStruct[type='journalArticle']").each(function() {
	

	$(".items").append('<div class="contenedor"><div class="elemento"><p><b>' + $(this).find("author").text() + '</b>, "' + $(this).find("analytic").find("title[level='a']").text() + '," ' + $(this).find("monogr").find("title").text() + ', ' + $(this).find("biblScope[unit='volume']").text() + ', núm. ' + $(this).find("imprint").find("biblScope[unit='issue']").text() + ' (' + $(this).find("date").text() +'): ' + $(this).find("imprint").find("biblScope[unit='page']").text() + '. <a href="' + $(this).find("imprint").find("note[type='url']").text() + '" target="_blank">' + $(this).find("imprint").find("note[type='url']").text() + '</a> ' + $(this).find("analytic").find("idno[type='DOI']").text() + ' .</p></div></div>');
	$(".contenedor").fadeIn(1000);
});


$(xml).find("biblStruct[type='book']").each(function() {
	

	$(".libros").append('<div class="contenedor"><div class="elemento"><p><b>' + $(this).find("author").text() + '</b>,' + $(this).find("analytic").find("title[level='a']").text() + '<i>' + $(this).find("monogr").find("title").text() + '</i>, ' + $(this).find("biblScope[unit='volume']").text() + '' + $(this).find("imprint").find("biblScope[unit='issue']").text() + ' (' + $(this).find("date").text() +')' + $(this).find("imprint").find("biblScope[unit='page']").text() + '. <a href="' + $(this).find("imprint").find("note[type='url']").text() + '" target="_blank">' + $(this).find("imprint").find("note[type='url']").text() + '</a> ' + $(this).find("analytic").find("idno[type='DOI']").text() + ' .</p></div></div>');
	$(".contenedor").fadeIn(1000);
});


};

