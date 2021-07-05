var $users = $("#users");
var $userDetails = $('#datadisplay');
let $userdata = [];


function displayUsers() {


  $userdata = $.ajax(
    {
      type: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
      success: function (users) {
        $.each(users, function (i, user) {
          $userdata = user[i];
          $users.append(
            `<li class="list-group-item">
              <div class="row">

                  <div class="col-md-4">
                    <img src="https://picsum.photos/100/100?rand=`+ user.id + `" class="img-fluid rounded-start" alt="ProfilePicture should be here">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">`+ user.name + `</h5>
                      <button type="button" onclick="display(`+ user.id + `)" class="btn  btn-outline-dark">Show Details</button>
                    </div>
                  </div>
                </div>

              </li>`
          )

        })
      }
    });
}
function display(id) {
  $.ajax(
    {
      type: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users/' + id + '',
      success: function (userDetails) {
        $userDetails.empty();
        $userDetails.append(
          `<div class="col-md-6">
          <form id="Details">
          <div class="form-group row">
          <label for="ID" class="col-sm-2 col-form-label">ID</label>
          <div class="col-sm-10">
          <input type="Text" class="form-control" id="Id" value="` + userDetails.id + `">
          </div>
          </div>
          <br>
          
          <div class="form-group row">
          <label for="name" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
          <input type="Text" class="form-control" id="Name" value="` + userDetails.name + `">
          </div>
          </div>
          <br>
          
          <div class="form-group row">
          <label for="userName" class="col-sm-2 col-form-label">User Name</label>
          <div class="col-sm-10">
          <input type="Text" class="form-control" id="userName" value="` + userDetails.username + `">
          </div>
          </div>
          <br>
          
          <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
          <input type="email" class="form-control" id="email" value="` + userDetails.email + `">
          
          </div>
          </div>
          <br>
          
          <div class="form-group row">
          <div class="col-sm-12">
          
          
          
          
          
          
          
          </div>
          </div>
          <br>
          <button type="button" class="btn-lg  btn-outline-dark" style="float: right;">Save</button>
          </form>            
          </div>
          <div class="col-md-6">
          
          <img src="https://picsum.photos/400/350?rand=`+ userDetails.id + `" class="img-fluid rounded-start" alt="ProfilePicture should be here">
          </div>

          `
        )
        console.log(userDetails.address.geo.lat)
        mapboxgl.accessToken = 'pk.eyJ1IjoicXVzYWlmYW5ub3VuIiwiYSI6ImNrcWhubG01NDBjczAydXFqNmFvdTZxMDYifQ.XrxPBCNrCjKZw0nOOf5qVA';
        var map = new mapboxgl.Map({
          container: 'map', // container ID
          style: 'mapbox://styles/mapbox/streets-v11', // style URL
          center: [userDetails.address.geo.lng, userDetails.address.geo.lat], // starting position [lng, lat]
          zoom: 10// starting zoom
        });
      }

    });
}


function initMap() {

  mapboxgl.accessToken = 'pk.eyJ1IjoicXVzYWlmYW5ub3VuIiwiYSI6ImNrcWhubG01NDBjczAydXFqNmFvdTZxMDYifQ.XrxPBCNrCjKZw0nOOf5qVA';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  });

}