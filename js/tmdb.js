// (function() {
// 	window.tmdb = {
// 		"api_key": "d1d7ccec36948efe0fe4750abc77836f",
// 		"base_uri": "http://api.themoviedb.org/3",
// 		"images_uri": "http://image.tmdb.org/t/p",
// 		"timeout": 5000,
// 		call: function(url, params, success, error){
// 			var params_str ="api_key="+tmdb.api_key;
// 			for (var key in params) {
// 				if (params.hasOwnProperty(key)) {
// 					params_str+="&"+key+"="+encodeURIComponent(params[key]);
// 				}
// 			}
// 			var xhr = new XMLHttpRequest();
// 			xhr.timeout = tmdb.timeout;
// 			xhr.ontimeout = function () {
// 				throw("Request timed out: " + url +" "+ params_str);
// 			};
// 			xhr.open("GET", tmdb.base_uri + url + "?" + params_str, true);
// 			xhr.setRequestHeader('Accept', 'application/json');
// 			xhr.responseType = "text";
// 			xhr.onreadystatechange = function () {
// 				if (this.readyState === 4) {
// 					if (this.status === 200){
// 						if (typeof success == "function") {
// 							success(JSON.parse(this.response));	
// 						}else{
// 							throw('No success callback, but the request gave results')
// 						}
// 					}else{
// 						if (typeof error == "function") {
// 							error(JSON.parse(this.response));
// 						}else{
// 							throw('No error callback')
// 						}
// 					}
// 				}
// 			};
// 			xhr.send();
// 			// tmdb.call(url, params, success, error);
// 		}
// 	}
// })()



// $("#click").click(function(){
// 	$.ajax({
// 		'url': "https://api.themoviedb.org/3/search/movie?api_key=d1d7ccec36948efe0fe4750abc77836f&query=The+Hangover",
// 		'type': 'GET',
// 		'dataType': "json",
// 		success: function(data, textStats, XMLHttpRequest) {
			
// 			// console.log(data);
// 			imageLinkPrinter(data);
		
// 		},
// 		error: function(data, textStatus, errorThrown) {
// 			console.log("error");
// 		}
// 	});
// });

// function imageLinkPrinter(imageLink){
// 	for(var i = 0; i < imageLink.results.length; i++){
// 		// console.log(imageLink.results[i];
// 		console.log(imageLink.results[i].backdrop_path);
// 	}

// }

