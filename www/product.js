document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

fetch('https://mielsj.be/GroceryApi/V1/products/Product/'+myParam)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(data);
    appendData(data);

  })
  .catch(function (err) {
    console.log(err);
  });

  function appendData(data) {
    var mainContainer = document.getElementById("myData");
        var div = document.createElement("div");
        div.innerHTML = ' Pr_ID: ' + data.pr_id + ' ' +' Pr_Naam: ' + data.pr_naam + '' + ' Pr_Prijs: ' + data.pr_prijs + '€';
        mainContainer.appendChild(div);
    

}



}
