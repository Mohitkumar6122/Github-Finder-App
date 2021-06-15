// More about Github API : https://docs.github.com/en/rest
class GitHub {
  constructor() {
    this.client_id = "45ebb6d8e84478c05bec";
    this.client_secret = "11ffca05704f88d486072382012903f147489b8c";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  getUserdata(user) {
    let url1 = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;

    return new Promise((resolve, reject) => {
      fetch(url1)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  getUserrepos(user) {
    var url2 = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;

    return new Promise((resolve, reject) => {
      fetch(url2)
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}
