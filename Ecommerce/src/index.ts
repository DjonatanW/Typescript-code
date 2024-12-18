import { Product } from "./models/Product";
import { User } from "./models/User";
import { ProductType } from "../src/Types/index"
import { DiscountedProduct } from "./models/DiscountedProduct";

const user1 = new User('Djonatan', 'djonatan', 'dj@gmail.com')
const user2 = new User('Aleatório', 'Ale', 'Ale@gmail.com')

console.log(user1.toJson());

const produto1 = new Product('Abacate', 20, ProductType.Fruit)
const produto2 = new Product('Tomate', 5, ProductType.Fruit)

user1.addToCart(produto1)
user1.addToCart(produto2)

user2.addToCart(produto1)

user1.removeFromCart(produto2)

produto1.addComment('teste de comentario',user1)

produto1.show()

user1.showProduct()

produto1.addRate(4, user1)
produto1.addRate(3, user2)

produto1.show()
const discountedProduct = new DiscountedProduct('Banana', 10, 5)
console.log(discountedProduct.show());

