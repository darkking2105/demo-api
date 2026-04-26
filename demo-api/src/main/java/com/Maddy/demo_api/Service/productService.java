package com.Maddy.demo_api.Service;

import com.Maddy.demo_api.Exception.ResourceNotFoundException;
import com.Maddy.demo_api.Model.Product;
import com.Maddy.demo_api.Repository.productRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class productService {
    private productRepository repository;
    public productService(productRepository productRepository) {
        this.repository= productRepository;
    }
    public Product getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Product not found with id: " + id));
    }
    public List<Product> getALl(){
        return repository.findAll();
    }
    public Product save(Product product){
        return repository.save(product);
    }

    public Product update(Long id, Product updated) {
        Product existing = repository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Product not found with id: " + id));
        existing.setName(updated.getName());
        existing.setDescription(updated.getDescription());
        existing.setPrice(updated.getPrice());
        return repository.save(existing);
    }

    public void delete(Long id){
        repository.deleteById(id);
    }
}
