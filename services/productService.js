class productService {

   constructor() {
      this.products = [];
      this.generate();
   };

   // Create a product
   create() {

   };

   // Find all products
   find() {
      return this.products;
   };

   // Find one product
   findOne(id) {
      return this.products.find(product => product.id === id);
   };

   // Update a product
   update() {

   };

   // Delete a product
   delete() {

   };

   generate() {
      this.products.push({
         "id": "10",
         "name": "yoniher",
         "age": 18
      },
         {
            "id": "20",
            "name": "Oscar",
            "age": 19
         }, {
         "id": "30",
         "name": "Luis",
         "age": 20
      })
   }
}

module.exports = productService;
