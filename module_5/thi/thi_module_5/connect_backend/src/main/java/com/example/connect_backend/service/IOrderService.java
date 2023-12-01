package com.example.connect_backend.service;

import com.example.connect_backend.model.OrderEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface IOrderService {
    Page<OrderEntity> getAllOrder(Pageable pageable, String name);
    void deleteOrder(Integer id);
    Optional<OrderEntity> findById(Integer id);
    OrderEntity findByIdTo(Integer id);
    void saveOrder(OrderEntity orderEntity);
}
