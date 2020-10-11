/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    fetch('https://mielsj.be/GroceryApi/V1/products/Products')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);

  })
  .catch(function (err) {
    console.log(err);
  });

  function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.records.length; i++) {
        var div = document.createElement("div");
        var str = "See details"
        div.innerHTML = ' Pr_ID: ' + data.records[i].pr_id + ' ' +' Pr_Naam: ' + data.records[i].pr_naam + '' + ' Pr_Prijs: ' + data.records[i].pr_prijs + '€' + ' ' + str.link('ProductDetail.html?id='+data.records[i].pr_id);
        mainContainer.appendChild(div);
    }

}
}
