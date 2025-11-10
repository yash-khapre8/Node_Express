// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


 async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

getData();
