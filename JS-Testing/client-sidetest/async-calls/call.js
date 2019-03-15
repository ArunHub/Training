var Async = function() {
    
};

Async.prototype.fetch = function(cb) {
    $.ajax('http://apiapptrainingservice.azurewebsites.net/api/Products')
    .done(
        function (data) {
            cb(data) // function to be spied
        }
    );
};

var data =             {
    "ProductRowId": 207,
    "ProductId": "Prd 004778661",
    "ProductName": "Desktop",
    "Manufacturer": "AB",
    "CategoryName": "ECT",
    "Description": "Sample",
    "BasePrice": 1200
}



Async.prototype.postData = function (cb) {
    $.ajax('http://apiapptrainingservice.azurewebsites.net/api/Products', 'POST' , data)
    .done(function (data) {
        cb(data);
    })
}