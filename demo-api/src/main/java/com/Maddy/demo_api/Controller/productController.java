package com.Maddy.demo_api.Controller;

import com.Maddy.demo_api.Model.Product;
import com.Maddy.demo_api.Service.productService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins ="*")

public class productController {
    private productService service;
    public productController(productService service){
        this.service = service;
    }
    @GetMapping
    public List<Product> getAll(){
        return service.getALl();
    }
    @PostMapping
    public ResponseEntity<Product> create(@RequestBody Product product){
        return ResponseEntity.ok(service.save(product));
    }
    @DeleteMapping ("/{id}")
    public ResponseEntity<Void> delete(@PathVariable long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
