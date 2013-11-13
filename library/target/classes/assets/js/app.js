$(":button").click(function() {
	var isbn = this.id;
	var myURL= 'v1/books/'+isbn +'?status=lost';
	var btn= ':button#'+isbn;
	$.ajax({
		url:myURL,
		type:'PUT',
			
		success: function(){
			alert('About to report lost on ISBN ' + isbn);
			location.reload();	
			
		}
	});	
	
	$(btn).attr("disabled",true);
});


