
function print_px_tpt (TPT_URL){
 
    var axel = Math.random() + "";
    var random_num = axel * 10000000000000;
    var oBody=document.getElementsByTagName("body")[0];
    var px_url=TPT_URL;
      
    px_url = px_url.replace('[cachebuster]', random_num);
    px_url = px_url.replace('[random]', random_num); 
    px_url = px_url.replace('[timestamp]', random_num);
 
    if (px_url != undefined ) {
        var img = document.createElement('img');
        img.src = px_url;
        img.setAttribute('height', '1px');
        img.setAttribute('width', '1px');
        img.setAttribute('class', 'tpt');
        oBody.appendChild(img);        
    }
 
 
}
 
function twUniversal (twitterId, custom_href) {
	
	var tw_document_href = encodeURIComponent(tw_document_href);
	var twURL_1 = "https://analytics.twitter.com/i/adsct?p_id=Twitter&p_user_id=0&txn_id="+txn_id+"&events=%5B%5B%22pageview%22%2Cnull%5D%5D&tw_sale_amount=0&tw_order_quantity=0&tw_iframe_status=0&tpx_cb=twttr.conversion.loadPixels&tw_document_href="+tw_document_href+"&random=[random]";
	var twURL_2 = "//t.co/i/adsct?p_id=Twitter&p_user_id=0&txn_id="+txn_id+"&events=%5B%5B%22pageview%22%2Cnull%5D%5D&tw_sale_amount=0&tw_order_quantity=0&tw_iframe_status=0";
	print_px_tpt (twURL_1);
	print_px_tpt (twURL_2);
}
 

twUniversal ('xxxx', document.location.href+"#click-on-something");

