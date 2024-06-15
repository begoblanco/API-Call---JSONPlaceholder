const path = "https://jsonplaceholder.typicode.com/users";

async function getData() {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}


getData();
