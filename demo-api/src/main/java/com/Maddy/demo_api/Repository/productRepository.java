package com.Maddy.demo_api.Repository;


import com.Maddy.demo_api.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;


public interface productRepository extends JpaRepository<Product, Long> {
}

