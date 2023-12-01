package com.example.connect_backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "products")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private Integer price;
    @OneToMany(mappedBy = "productEntity")
    @JsonBackReference
    private Set<OrderEntity> orderEntitySet;

    public ProductEntity() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Set<OrderEntity> getOrderEntitySet() {
        return orderEntitySet;
    }

    public void setOrderEntitySet(Set<OrderEntity> orderEntitySet) {
        this.orderEntitySet = orderEntitySet;
    }
}
