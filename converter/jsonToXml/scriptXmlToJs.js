function jtoxConvert(){

	var x2js = new X2JS;
	var jsonVla = document.getElementById("json_data").value

	var xmlMin = x2js.json2xml_str(JSON.parse(jsonVla))
	console.log(xmlMin)
	function formatXml(xml, tab) {
		var formatted = '', indent= '';
		tab = tab || '\t';
		xml.split(/>\s*</).forEach(function(node) {
		    if (node.match( /^\/\w/ )) indent = indent.substring(tab.length);
		    formatted += indent + '<' + node + '>\r\n';
		    if (node.match( /^<?\w[^>]*[^\/]$/ )) indent += tab;             
		});
		return formatted.substring(1, formatted.length-3);
	}
	console.log(formatXml(xmlMin, " "))
	document.getElementById("xml_data").value = formatXml(xmlMin, " ")
}
