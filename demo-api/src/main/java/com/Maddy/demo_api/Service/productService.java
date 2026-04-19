package com.Maddy.demo_api.Service;

import com.Maddy.demo_api.Model.Product;
import com.Maddy.demo_api.Repository.productRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class productService {
    private productRepository repository;
    public productService(productRepository productRepository) {
        this.repository= productRepository;
    }
    public List<Product> getALl(){
        return repository.findAll();
    }
    public Product save(Product product){
        return repository.save(product);
    }
    public void delete(Long id){
        repository.deleteById(id);
    }
}
