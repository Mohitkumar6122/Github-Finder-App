class UI {
  constructor() {
    this.profile = document.getElementById("profile");
    this.repos = document.getElementById("repos");
  }

  // display profile and ui
  showProfile(user) {
    console.log(user);
  
    const options = { month: "long", day: "numeric", year: "numeric" };
    const date = new Date(user.created_at);
    const time = new Intl.DateTimeFormat("en-IN", options).format(date);
    this.profile.innerHTML = `
    <div class="card card-body mt-4">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${user.avatar_url}">
          <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View Profile</a>
        </div>

        <div class="col-md-9">
          <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge badge-success">Followers: ${user.followers}</span>
          <span class="badge badge-info">Following: ${user.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company : ${user.company}</li>
            <li class="list-group-item">Website/Blog : ${user.blog}</li>
            <li class="list-group-item">Location : ${user.location == null ? 'International' : user.location}</li>
            <li class="list-group-item">Member Since : ${time}</li>
        </div>
      </div>

    </div>
    <h3 class="page-heading mb-3 mt-3">Latest Repos</h3>
    `;
  }

  // show repos
  showRepos(repos) {
    let output = "";

    repos.forEach(function (repo) {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Output repos
    document.getElementById("repos").innerHTML = output;
  }

  // show alert message
  showAlert(message, className) {
    // clear remaining alerts if any
    this.clearAlert();
    // create div
    const div = document.createElement("div");

    div.className = className;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent
    const container = document.querySelector(".searchContainer");
    // get search box
    const search = document.querySelector("#search");
    // add message box
    container.insertBefore(div, search);

    // timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  //  clear alert
  clearAlert() {
    const current = document.querySelector(".alert");

    if (current) {
      current.remove();
    }
  }

  // clear profile
  clearProfile() {
    this.profile.innerHTML = "";
    this.repos.innerHTML = "";
  }
}
