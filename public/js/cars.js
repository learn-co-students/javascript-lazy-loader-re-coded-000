"use strict";
var counter=3
// this is the base API url
var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
  // this function shold return a string of properly formatted html
  // refer to app/views/index.erb lines 16 - 22 for an example of how
  // to format three cars, each in a div with a class "col-md-4", in a 
  // div with a class "row"

      var formated='<div class="row">'

      $.each(carsJSON,function(i,item){
      	formated=formated+'<div class="col-md-4 car">'+'<h2>'+item["Make"]+'</h2>';
      	formated=formated+'<p><strong>Model:</strong> '+item["Model"]+'</p>';
      	formated=formated+'<p><strong>Year:</strong> '+item["Year"]+'</p></div>';
      })
      formated=formated+"</div>"
      return formated;


}

function addCarsToDOM(carsJSON) {
  // this function should pass carsJSON to formatCars() and then 
  // add the resulting HTML to the div with an id of "cars"

  $('#cars').append(formatCars(carsJSON));

}

function fetchJSON() {
  // this function will make the ajax call
  // on success of the ajax call, it will pass the returned data
  // to addCarsToDOM()

  ////
        $.ajax({
        url: baseUrl+counter+"/3",
        contentType: 'application/json',
        dataType: 'jsonp',
        success: function(data) {
          
             addCarsToDOM(data)  ; 
             counter++;    
        }
      });

}