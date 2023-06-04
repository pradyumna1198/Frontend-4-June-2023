//GETMENU Function
 
function getMenu() {
    fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json')
      .then(response => response.json())
      .then(data => {
        // Get the container element
        const container = document.getElementById('container');
  
        // Create HTML content for the food items
        let html = '';
        data.forEach(food => {
          html += `<div>${food.name}: ${food.price}</div>`;
        });
  
        // Set the HTML content of the container
        container.innerHTML = html;
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }
  
  //Take order
  function takeOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        const burgers = ['Cheeseburger', 'Chicken Burger', 'Veggie Burger'];
        const order = {
          burgers: burgers[Math.floor(Math.random() * burgers.length)],
        };
        resolve(order);
      }, 2500);
    });
  }
  //Prepare order
  function orderPrep() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: false });
      }, 1500);
    });
  }
  //Pay order
  function payOrder() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ order_status: true, paid: true });
      }, 1000);
    });
  }
  //ThankYou 
  function thankyouFnc() {
    alert('Thank you for eating with us today!');
  }
  
  // Handle promises using async/await
  async function handlePromises() {
    try {
      getMenu();
      const order = await takeOrder();
      console.log('Order:', order);
      const orderStatus = await orderPrep();
      console.log('Order Status:', orderStatus);
      const paymentStatus = await payOrder();
      console.log('Payment Status:', paymentStatus);
      thankyouFnc();
    } catch (error) {
      console.log('Error:', error);
    }
  }
  
  // Call the main function to start the process
  handlePromises();
  