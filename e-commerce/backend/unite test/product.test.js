const Product = require('../models/product');
test ('check test',() =>{
    expect("c").not.toBe("test")
});

// test("Catage is not null",() =>{
//     let newProduct = new Product({
//         name: req.body.name,
//         img: req.body.img,
//         description: req.body.description,
//         Catag: null
//     });

//     expect().toBeType('string');
// });

