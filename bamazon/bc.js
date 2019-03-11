// TESTER FILE

// const inquirer = require('inquirer')

// const mysql = require('mysql');

// const conn = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '12345678',
//     database: 'bamazon_db'

// });


// // Asking system to pull table products
// let custOrder = function(inventory) {
//   conn.end();
//   inquirer.prompt([ {
//     type: 'input',
//     name: 'choice',
//     message: '\n\rFirst, please pick the ID of the product you want to buy.',

//     confirm: function(value) {
//       return !isNaN(value) || value.toLowerCase() === 'q';
//     }
//     }
//   ])
//   // Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// // If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

//   .then((value) => {
//     //userResponse(value.choice);
//     let id = parseInt(value.choice);
//     console.log("test "+ id);

//     let product = itemQuantity(id, stock_quantity);
//     if (product) { 
//       custQuantity(product);
//     } else {
//       console.log('Insufficient quantity')

//     }
//     });
//   }

// let products = function() {
//   conn.query("SELECT * FROM products", function(err, res) {
//     if(err) throw err;
//     // console.log('connected as id ' + conn.threadId)
//     // console.log(res)
//     for(var i = 0; i < res.length; i++){
//       console.log(`${res[i].ID} || ${res[i].PRODUCT_NAME} || ${res[i].DEPARTMENT_NAME} || ${res[i].PRICE} || ${res[i].STOCK_QUANTITY}`);
//       // console.log(res[i].ID + res[i].PRODUCT_NAME + res[i].DEPARTMENT_NAME + res[i].PRICE + res[i].STOCK_QUANTITY);
//     }
//     //conn.end();
//     custOrder();
    
//   });
//   // conn.end();
  
// }

// products();
// // //Once information has been received, prompting customer the opportunity to make a choice of which item they want


//  // custOrder();
// // 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
// // * This means updating the SQL database to reflect the remaining quantity.
// // * Once the update goes through, show the customer the total cost of their purchase.

//     let custQuantity = function(product) {
//       inquirer.prompt([
//         {
//           type: 'input',
//           name: 'quantity',
//           message: 'Select Purchase Quantity?',
//           validate: function(value) {
//             return value > 0 || value.toLowerCase() === 'quantity';
//           }
//         }
//       ])
    
//       .then(function(value) {
//         custReponse(value.quantity);
//         let quantity = parseInt(value.quantity);
  
//         if (quantity > product.stock_quantity) {
//           console.log("Insufficient quantity, order must be less than " + product.stock_quantity);
//           products();
//         } else {
//           placeOrder(product, quantity);
//     }
//   });
// }
// let custOrder1 = (product, quantity) => {
//   conn.query('UPDATE products SET stock_quantity = stock_quantity - ? WHERE item id = ?') [quantity, product.id],
//   (error, response) => {
//     console.log(" You have purchased a quantity of " + quantity + " " + product.product_name);
//     products();
//   }
// };

// let itemQuantity = function(id, inventory) {
//   for (var i = 0; i < inventory.length; i++) {
//     if (inventory[i].item.id === id) {

//     }
//   }
//   return null;

// let custResponse = (function(choice){
//   if (choice.toLowerCase() === 'quantity') {
//     console.log('We love doing business with you!');
//   }

// });

// }
