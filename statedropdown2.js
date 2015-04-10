/**
 * Created by ian on 11/12/2014.
 */

function preparePage() {

    var req;
    var reqCity;


    function getRequestObject() {

        if(window.XMLHttpRequest) {
            req = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            req = new ActiveXObject("Microsoft.XMLHTTP");
        }

        return req;
    }

    document.getElementById("country").onclick = function() {

        if( document.getElementById("country").value != 'US'  ) {

            document.getElementById("city").innerHTML =


                '<div class="form-block">' +
                '<span class="form-label">City</span>' +
                '<input class="input_text" type="text" name="city" size="50" maxlength="40"  />' +
                '</div><br />';

        } else {

            document.getElementById("city").innerHTML =

            '<div class="form-block">' +
            '<span class="form-label">City</span>' +

            '<select class="input_text" name="city" style="width:245px; color:#CCC;">' +
                '<option value="" >Select Country and State First</option>' +
            '</select><br />' +


            '</div>';




        }


        var strURL = "includes/findState.php?country="+document.getElementById("country").value;

        req = getRequestObject();
        req.onreadystatechange = function() {
            if(req.readyState == 4) {
                document.getElementById("stateSelect").innerHTML = req.responseText;










            }
        };

        req.open("GET", strURL, true);
        req.send(null);
    };





    document.getElementById("stateSelect").onchange = function() {


        if( document.getElementById("country").value == 'US'  ) {

            var strURLCity = "includes/findTown.php?state=" + document.getElementById("stateSelect").value;
            reqCity = getRequestObject();

            reqCity.onreadystatechange = function () {

                if (reqCity.readyState == 4) {
                    document.getElementById("city").innerHTML = reqCity.responseText;
                }

            };

            reqCity.open("GET", strURLCity, true);
            reqCity.send(null);


        }

    };





}


window.onload = function() {
   preparePage();
};

