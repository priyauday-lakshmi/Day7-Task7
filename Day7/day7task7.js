//Day7 - Task 7
// Get all the countries from Asia continent /region using Filter function
// Get all the countries with a population of less than 2 lakhs using Filter function
// Print the total population of countries using reduce function
// Print the country which uses US Dollars as currency.



var request = new XMLHttpRequest();  

//step 02:  specify the API
request.open("GET", "https://restcountries.com/v3.1/all");

//step03: sending the request
request.send();



request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);
    
    // Print the list of Asian countries
    
    var asianCountries = result.filter((country) => country.region === 'Asia');
    
    console.log('Asian Countries:', asianCountries);


    //print all the countries with a population less tha 2 lakhs
    
    var countries = result.filter((country1) => country1.population < 200000 );

    console.log("Countries Population :", countries);



    // Print the total population of countries using reduce function

    var totalPopulation = result.reduce((acc, country) => acc + country.population, 0 );
    console.log("total Population:" , totalPopulation);


    // Print the country which uses US Dollars as currency.

     var dollarCurrency = result.filter((country) => country.currencies && country.currencies.USD && country.currencies.USD.name === "United States dollar" );
     console.log("Dollar currency:", dollarCurrency);

    
      


        
    
}
