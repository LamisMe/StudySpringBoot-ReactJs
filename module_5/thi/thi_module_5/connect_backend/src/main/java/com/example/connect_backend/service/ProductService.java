package com.example.connect_backend.service;

import com.example.connect_backend.model.ProductEntity;
import com.example.connect_backend.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService{
    @Autowired
    private IProductRepository productRepository;

    @Override
    public List<ProductEntity> getALlProduct() {
        return productRepository.findAll();
    }
}
