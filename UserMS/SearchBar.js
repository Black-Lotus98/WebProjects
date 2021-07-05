const charactersList = document.getElementById('users');
const searchBar = document.getElementById('search');
let userslist = [];

searchBar.addEventListener('keyup', (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = userslist.filter((users) => {
    return (
      users.name.toLowerCase().includes(searchString)
    );
  });
  displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    userslist = await res.json();
    displayCharacters(userslist);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (users) => {
  const htmlString = users
    .map((user) => {
      return `<li class="list-group-item">
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
    
      </li>`;
    })
    .join('');
  charactersList.innerHTML = htmlString;
};

loadCharacters();
