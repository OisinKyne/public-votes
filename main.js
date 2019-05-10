console.log('Hello World!');


/**
 * Super light weight async get request for calling api.oireachtas.ie
 */
var HttpClient = function () {
    this.get = function (aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function () {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}

/**
 * Async function that returns a list of dail votes this week. 
 */
var getUpcomingVotes = function (aUrl, aCallback) {
    console.log('Getting dail votes.');
    var client = new HttpClient();
    client.get('https://api.oireachtas.ie/v1/legislation?bill_status=Current&bill_source=Government,Private%20Member&date_start=2019-05-01&date_end=2099-01-01&limit=50&chamber_id=&lang=en', function (response) {
        // do something with response
        console.log(response)
        aCallback(response)
    });
};

var handleOireachtasResponse = function (oireachtasResponse) {
    console.log('Handle response was called with: ');
    console.log(oireachtasResponse);
};

/**
 * Main script starts here
 */
getUpcomingVotes('fake_url', handleOireachtasResponse);