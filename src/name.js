console.log(`Hello from app.js`);

const person = {
    id: 101,
    name: "yash",
    
    // Function to display details
    displayDetails: function() {
      console.log(`Person ID: ${this.id}`);
      console.log(`Person Name: ${this.name}`);
    }
  };
  
  // Call the function
  person.displayDetails();