import { Injectable } from "@nestjs/common";
import { ProductsRepository } from "./Products.respository";
import { Product } from "./Entities/Product.entity";
import { CreateProductDto } from "./Dtos/CreateProduct.dto";
import { UpdateProductDto } from "./Dtos/UpdateProduct.dto";

@Injectable () 
export class ProductsService {

    constructor (private readonly productsRepository: ProductsRepository){}

    async preloadProductsSeed(): Promise<void> {
        return await this.productsRepository.preloadProductsSeed();
    }

    async getProducts(page:number, limit:number): Promise<Product[]> {
        return await this.productsRepository.getProducts(page, limit)
    }

    async getProductById(id: string): Promise<Product> {
        return await this.productsRepository.getProductById(id);
    }

    async createProduct(product: CreateProductDto): Promise<string> {
        return await this.productsRepository.createProduct(product);
    }

    async updateProduct(id: string, product: UpdateProductDto): Promise<string> {
        return await this.productsRepository.updateProduct(id, product);
    }

    async deleteProduct(id: string): Promise<string> {
        return await this.productsRepository.deleteProduct(id);
    }
    
}