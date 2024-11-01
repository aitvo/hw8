
async function getGitHubProfile() {
  const username = document.getElementById("username").value; // get github user
  const url = `https://api.github.com/users/${username}`; // web api through username

  try {
      const response = await fetch(url); // fetch data
      const data = await response.json(); // convert to json

      // display profile picture
      const profilePicture = document.getElementById("profile-picture");
      profilePicture.innerHTML = `<img src="${data.avatar_url}" alt="Profile picture" width="150">`;

      //  name, blog, and created date of table
      document.getElementById("name").textContent = data.name || "Not available";
      document.getElementById("blog").innerHTML = data.blog ? `<a href="${data.blog}" target="_blank">${data.blog}</a>` : "Not available";
      document.getElementById("created").textContent = data.created_at ? new Date(data.created_at).toLocaleString() : "Not available";
      
  // if there's error, it will log
  } catch (error) {
      console.error("Error fetching user data:", error);
  }
}
