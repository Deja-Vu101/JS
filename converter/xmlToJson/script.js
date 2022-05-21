function xmlToJsConvert(){
	var x2js = new X2JS();
	var xmlValue = document.getElementById("xmlData").value;
	console.log(xmlValue);
	var jsonValue = x2js.xml_str2json(xmlValue);
	console.log(jsonValue);
	document.getElementById("jsonData").innerHTML = JSON.stringify(jsonValue, null, 3);
}
