$(document).ready(function(){
	$('#stockData').DataTable({
		"processing": true,
		"ajax": {"url":"https://www.quandl.com/api/v3/datasets.json?database_code=NSE&per_page=100&sort_by=id&page=2&auth_token=KZCPhKDFd5JZwGdUJyUY",
					"dataSrc": "datasets"
		},
		"columns": [
            { "data": "id" },
            { "data": "name" },
            { "data": "description" },
            { "data": "refreshed_at" },
          	{ "data": "premium" }
          ]
    });
});