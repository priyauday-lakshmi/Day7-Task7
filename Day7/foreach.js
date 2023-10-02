// Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();  

//step 02:  specify the API
request.open("GET", "https://restcountries.com/v3.1/all");

//step03: sending the request
request.send();



request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);

    result.forEach(country => {
        var name = country.name;
        var capital = country.capital;
        var flag = country.flag;

        console.log("name:" , name);
        console.log("capital:" , capital);
        console.log("Flag: ", flag);
        
    });
    

}