package com.example.connect_backend.repository;

import com.example.connect_backend.model.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<ProductEntity,Integer> {
}
