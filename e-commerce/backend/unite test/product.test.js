const Product = require('../models/product');
let newProduct = new Product({
    name: "M150",
    img: "M150",
    description: "Power",
    Catag: "Drink"
  });

test ('Pass All',() =>{
    expect(newProduct.Catag).not.toBe(null)
});

let newProduct1 = new Product({
    name: "M150",
    img: "M150",
    description: "Power",
    Catag: null
  });

test("Catag can not null",() =>{
    expect(newProduct1.Catag).toBe(null);
});