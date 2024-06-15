const path = "https://jsonplaceholder.typicode.com/users";

async function getData() {
  const userId = document.getElementById("user-id").value;
  if (!userId) {
    return "Please enter a user ID";
  }

  const userData = `${path}/${userId}`;

  try {
    const response = await fetch(userData);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();
    renderUserInfo(data);

    console.log(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
    document.getElementById('user-info').innerHTML = "User not found";
  }
}

function renderUserInfo(user) {
  const userInfoDiv = document.getElementById("user-info");
  userInfoDiv.innerHTML = `<p>Name: ${user.name}</p> <p>Phone: ${user.phone}</p>`;
}

document.getElementById("data-button").addEventListener("click", getData);
