// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

// Fetch all users
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then(users => {
    console.log("Users:", users);

    // Example: Fetch posts for the first user
    if (users.length > 0) {
      const userId = users[0].id;
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    }
  })
  .then(response => response && response.json())
  .then(posts => {
    if (posts) {
      console.log("Posts from first user:", posts);
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
  
