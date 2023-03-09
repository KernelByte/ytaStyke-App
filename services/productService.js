class productService {

   constructor() {
      this.products = [];
      this.generate();
   };

   // Create a product
   create(pro) {
    this.products.push(pro);
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
   update(id, changes) {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1){
      throw new Error("product not found");
    }else{
      this.products[index] = changes;
      return {message : true};
    }
   };

   // Delete a product
   delete(id) {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1){
      throw new Error("product not found");
    }else{
      this.products.splice(index,1);
      return {message : true};
    }
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
