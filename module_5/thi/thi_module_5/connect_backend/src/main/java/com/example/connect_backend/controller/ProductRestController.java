package com.example.connect_backend.controller;

import com.example.connect_backend.model.ProductEntity;
import com.example.connect_backend.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/products")
public class ProductRestController {
    @Autowired
    private IProductService productService;
    @GetMapping
    public ResponseEntity<List<ProductEntity>> getList(){
        List<ProductEntity> productEntities = productService.getALlProduct();
        if ((productEntities.isEmpty())){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(productEntities,HttpStatus.OK);
        }
    }
}
