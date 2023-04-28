class ProductManager {
  constructor() {
    this.products = [];
  }

  getProducts() {
    console.log(this.products);
    return this.products;
  }

  #generateId() {
    let newID = 0;
    newID = this.products.length;
    return newID;
  }

  #verificationProducts(newProduct) {
    const verificationNewProduct = Object.values(newProduct).some(
      (values) => values === null || values === undefined || values === ``
    );
    return verificationNewProduct;
  }

  #verificationCode(code) {
    const searchCode = this.products.map((value) => value.code !== code);
    return searchCode;
  }

  getProductById(id) {
    const searchProduct = this.products.find((value) => {
      if (value.id == id) {
        return value;
      }
    });
    if (searchProduct == undefined) {
      return console.log("not found");
    } else {
      console.log(searchProduct);
      return searchProduct;
    }
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    let newProduct = {
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      sotck: stock,
    };
    // verifica si el elemento del objeto newProduct contiene una propiedad en null , undefined o ``
    const verification = this.#verificationProducts(newProduct);
    if (this.products.length == 0) {
      // si la condicion verification es false, se agrega el nuevo producto al array de products
      verification ? `` : this.products.push(newProduct);
      const rep = verification
        ? `Completar todos los datos`
        : `Registro Exitoso`;
      console.log(rep);
      return rep;
    } else {
      const verificationCode = this.#verificationCode(newProduct.code);
      // console.log("code:",verificationCode);
      // console.log("verificar producto completo:"verification);

      let x = !verification && verificationCode;
      x[0] ? (newProduct = { ...newProduct, id: this.generateId() }) : ``;
      x[0] ? this.products.push(newProduct) : ``;
      const rep = x[0]
        ? `Registro Exitoso`
        : `Producto ya registrado con el mismo codigo y/o completar todos los parametros`;
      console.log(rep);
      return rep;
    }
  }
}
