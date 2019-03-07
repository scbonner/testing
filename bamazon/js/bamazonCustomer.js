const inquirer = require('inquirer')

const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'bamazon_db'

});
//Attempting to throw something extra, like a banner
require('simple-banner').set("AN AMAZON-LIKE STOREFRONT", 0, 1);

//Establishing connections through callback function

conn.connect(function(err) {
  if(err) throw err;
    console.log('connected with id ${conn.thread}')
    conn.end();
 
    products();
});

let products = function() {
  conn.query("SELECT * FROM products", ) function(err, res) {
    if(err) throw err;
    console.log(res);
  };
};
//Prompt customer by giving them the opportunity to make a choice
let custOrder = function(inventory) {
  inquirer.prompt([ {
    type: 'input',
    name: 'choice',
    message: 'First, please pick the ID of the product you want to buy.',

    confirm: function(value) {
      return !isNaN(value) || value.toLowerCase() === 'q';
    }

    }
  ])

  .then((value) => {
    userResponse(value.choice);
    let id = parseInt(value.choice);
    let product = itemQuantity(id, inventory);

    if (product) {
      custQuantity(product);
    } else {

      console.log('Item not in stock.')

    products();

    }
    });
  }

    let custQuantity = function(product) {
      inquirer.prompt([
        {
          type: 'input',
          name: 'quantity',
          message: 'Select Purchase Quantity?',
          validate: function(value) {
            return value > 0 || value.toLowerCase() === 'q';

          }
        }
      ])
      .then((value) => {
        userResponse(value.quantity);
        let quantity = parseInt(value.quantity);
  
        if (quantity > product.stock_quantity) {
          console.log("Insufficient quantity, order must be less than " + product.stock_quantity);
          products();
        } else {
          placeOrder(product, quantity);
    }
  });
}
let placeOrder = function(product, quantity) {
  conn.query('UPDATE products SET stock quantity = stock quantity - ? WHERE item id = ?', [quantity, product.item_id],
  (error, response) => {
    console.log(" You have purchased a quantity of " + quantity + " " + product.product_name);
    products();
  }
);
}
let itemQuantity = function(id, inventory) {
  for (var i = 0; i < inventory.length; i++) {
    if (inventory[i].item.id === id) {

    }
  }
  return null;

let userResponse = function(choice) {
  if (choice.toLowerCase() === 'q') {
    console.log('We love doing business with you!');
    conn.end();
  }
}

}
