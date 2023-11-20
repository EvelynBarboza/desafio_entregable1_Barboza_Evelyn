/*class Product {
    constructor(title, description, price, code, stock){
        this.title = Reiki;
        this.description = TerapiaAlternativa;
        this.price = 800;
        this.code = 1;
        this.stock= 10;
    }
    
}*/

class ProductManager {
    constructor() {
        this.products = [];
        this.id = 1
        }
        addProduct(title, description, price, code, stock){
            if (title && description && price && code && stock){
                const verificationCode = this.products.some
                (product => product.code === code);
                if (verificationCode){
                    console.error("Codigo Repetido");
                }else{
                    let id = this.id++;
                    const newProduct = {id, title, description, price, code, stock};
                    this.products.push(newProduct);
                }
            }else{
                console.error("Complete todos los campos");
            }
        }

        getProduct(){
            return this.products;
        }

        getProductById(id){
            const productId = this.products.find(product => product.id === id);
            if (!productId){
                return console.error ("Not found")
            }else{
                return console.log("El producto solicitado es:", productoId);
            }
        }
    }

    const ProductManager = new ProductManager()

    ProductManager.addProduct()

const product1 = new Product("Reiki", "Terapia ALternativs", 800, 1, 10);
const product2 = new Product("Registros Akashicos", 1500, 2, 10);
const product3 = new Product("Masajes Relajantes", 700, 3, 10);
const product4 = new Product("Masajes Descontracturantes", 900, 4, 10);

productManager.addProduct(product1);
productManager.addProduct(product2);

productManager.getProductById(800);

console.log(productManager);