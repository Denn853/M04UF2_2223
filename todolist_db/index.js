const http = require("http");

http.createServer(function (req, res) {

	let items = [
		{id_item: 1, item: "Comprar patatas"},
		{id_item: 2, item: "Hacer deberes de Rafa"},
		{id_item: 3, item: "Destruir el capitalismo"}
	];

	let items_json = JSON.stringify(items);

	// Solution CORS problem
	res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Max-Age', 2592000); // 30 days

	res.write(items_json);
	res.end();

}).listen(8080);
