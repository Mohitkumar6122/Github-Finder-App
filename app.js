const github = new GitHub();
const ui = new UI();

// search input
var searchUser = document.getElementById("Search");

searchUser.addEventListener("keyup", (e) => {
  //get input text
  const userText = e.target.value;

  if (userText !== "") {
    // make http call for userdata
    github.getUserdata(userText).then((data) => {
      console.log(data);
      if (data.message == "Not Found") {
        console.log("not found");
        // show alert
        ui.showAlert("User not found", "alert alert-danger");
      } else {
        // show profile
        ui.showProfile(data);
      }
    });
    console.log(userText);

    //  make http call for userrepos
    github.getUserrepos(userText).then((data) => {
      console.log(data);

      ui.showRepos(data);
    });
    console.log(userText);
  } else {
    // clear profile

    ui.clearProfile();
  }
});
