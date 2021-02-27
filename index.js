/* Start of Recent Changes code */
// This is just to display the recent changes from GitHub (where we're hosting our website)
function setGitLogs() {
  fetch("https://api.github.com/repos/hccdevy/hccdevy.github.io/commits")
    .then((response) => response.json())
    .then((commits) => {
      let git = document.querySelector(".git");
      git.innerHTML = "";

      for (let i = 0; i < 21; i++) {
        let modified = new Date(commits[i].commit.committer.date)
          .toString()
          .slice(0, 25);
        let message = commits[i].commit.message;
        let url = commits[i].html_url;

        let commit = document.createElement("li");
        commit.innerHTML = `<p>${modified}:
        <a href=${url} target="_blank">${message}</a></p>`;
        console.log(commit);
        git.appendChild(commit);
      }
    });
}
setGitLogs();
/* End of recent changes code */
