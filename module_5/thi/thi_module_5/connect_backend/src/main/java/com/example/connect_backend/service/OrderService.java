package com.example.connect_backend.service;

import com.example.connect_backend.model.OrderEntity;
import com.example.connect_backend.repository.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;

    @Override
    public Page<OrderEntity> getAllOrder(Pageable pageable, String name) {
        return orderRepository.showListOrder(pageable,"%"+name+"%");
    }

    @Override
    public void deleteOrder(Integer id) {
        orderRepository.deleteOrder(id);
    }

    @Override
    public Optional<OrderEntity> findById(Integer id) {
        return orderRepository.findById(id);
    }

    @Override
    public OrderEntity findByIdTo(Integer id) {
        return orderRepository.findById(id).get();
    }

    @Override
    public void saveOrder(OrderEntity orderEntity) {
        orderRepository.save(orderEntity);
    }
}
