import { Product } from './Tipos'

export class ProductManager {
    private products: Product[] = []
    private nextId: number = 1

    addProduct(name: string, price: number): void {
        const newProduct: Product = {
            id: this.nextId++,
            name,
            price,
        }
        this.products.push(newProduct)
        console.log(`Product added: ${name} (${price})`)
    }

    listProducts(): void {
        if (this.products.length === 0) {
            console.log("No products available.")
            return
        }
        console.log("Product list:")
        this.products.forEach((product) =>
            console.log(`ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`)
        )
    }

    deleteProduct(id: number): void {
        const index = this.products.findIndex((product) => product.id === id)
        if (index !== -1) {
            const deletedProduct = this.products.splice(index, 1)[0]
            console.log(`Product deleted: ${deletedProduct.name}`)
        } else {
            console.log(`Product with ID ${id} not found.`)
        }
    }
}