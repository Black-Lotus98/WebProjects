// unction search() {
//   var SearchUsers = document.getElementById("search").value;
//   var url = `https://jsonplaceholder.typicode.com/users/` + SearchUsers;
//   UrlExists(url, function (status) {
//     if (status === 200) {
//       if (SearchUsers != "") {

//         $.ajax(
//           {
//             type: 'GET',
//             url: url,
//             success: function (userDetails) {
//               $users.empty();
//               $users.append(
//                 `<li class="list-group-item">
//               <div class="card mb-3" style="max-width: 300px;">
//               <div class="row g-0">
//                 <div class="col-md-4">
//                 <img src="https://picsum.photos/100/100?rand=`+ userDetails.id + `" class="img-fluid rounded-start" alt="ProfilePicture should be here">
//                 </div>
//                 <div class="col-md-8">
//                 <div class="card-body">
//                 <h5 class="card-title">`+ userDetails.name + `</h5>
//                 <button type="button" onclick="display(`+ userDetails.id + `)" class="btn  btn-outline-dark">Show Details</button>
//                 </div>
//                 </div>
//                 </div>
//                 </div>
//                 </li>`
//               )

//               console.log(userDetails);
//             }

//           });
//       }
//     }
//     else if (status === 404) {
//       $users.empty();
//       $users.append("No Result");
//     } else {
//       alert("Unknown Error Ocured")
//     }
//     if (SearchUsers == "") {
//       $.ajax(
//         {
//           type: 'GET',
//           url: 'https://jsonplaceholder.typicode.com/users',
//           success: function (users) {
//             $users.empty();
//             $.each(users, function (i, user) {
//               $users.append(
//                 `<li class="list-group-item">
//                   <div class="card mb-3" style="max-width: 300px;">
//                   <div class="row g-0">
//                     <div class="col-md-4">
//                       <img src="https://picsum.photos/100/100?rand=`+ user.id + `" class="img-fluid rounded-start" alt="ProfilePicture should be here">
//                     </div>
//                     <div class="col-md-8">
//                       <div class="card-body">
//                         <h5 class="card-title">`+ user.name + `</h5>
//                         <button type="button" onclick="display(`+ user.id + `)" class="btn  btn-outline-dark">Show Details</button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </li>`
//               )
//             })
//           }
//         });
//     }
//   });


// }



