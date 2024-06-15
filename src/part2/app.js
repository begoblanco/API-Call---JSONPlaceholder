const path = "https://jsonplaceholder.typicode.com/users";

async function getData() {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();
    console.log(data);
    return data;

  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

function addTableRow(user) {
    const row = document.createElement('tr');

    const userId = document.createElement('td');
    userId.textContent = user.id;
    row.appendChild(userId);

    const userName = document.createElement('td');
    userName.textContent = user.name;
    row.appendChild(userName);

    const userCity = document.createElement('td');
    userCity.textContent = user.address.city;
    row.appendChild(userCity);

    return row;
}

function render(data) {
    const tableContent = document.querySelector('#data-table tbody');
    tableContent.innerHTML = ''; 

    data.forEach(user => {
        const row = addTableRow(user);
        tableContent.appendChild(row);
    });
}

async function start() {
    const data = await getData();
    render(data);
}

start();







