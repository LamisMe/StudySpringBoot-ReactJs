package com.example.connect_backend.controller;

import com.example.connect_backend.dto.OrderDto;
import com.example.connect_backend.model.OrderEntity;
import com.example.connect_backend.service.IOrderService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@CrossOrigin("*")
@RestController
@RequestMapping("/api/orders")
public class OrderRestController {
    @Autowired
    private IOrderService orderService;
    @GetMapping
    public ResponseEntity<Page<OrderEntity>> getList(@PageableDefault(size = 2) Pageable pageable, @RequestParam(defaultValue = "0",required = false) int page,
                                                     @RequestParam(defaultValue = "",required = false) String name){
        Page<OrderEntity> orderEntities = orderService.getAllOrder(pageable,name);
        if ((orderEntities.isEmpty())){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }else {
            return new ResponseEntity<>(orderEntities,HttpStatus.OK);
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<OrderEntity> findById(@PathVariable Integer id){
      Optional<OrderEntity> orderEntity = orderService.findById(id);
        return orderEntity.map(entity -> new ResponseEntity<>(entity, HttpStatus.OK)).orElseGet(() -> new ResponseEntity<>(HttpStatus.NO_CONTENT));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable Integer id){
        Optional<OrderEntity> orderEntity = orderService.findById(id);
        if ((orderEntity.isEmpty())) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else {
            orderService.deleteOrder(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    @PostMapping
    public ResponseEntity<?> createPlayer(@RequestBody OrderDto orderDto){
        if (orderDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        OrderEntity orderEntity = new OrderEntity();
        BeanUtils.copyProperties(orderDto,orderEntity);
        orderService.saveOrder(orderEntity);
        return new ResponseEntity<>(orderEntity,HttpStatus.CREATED);
    }
    @PatchMapping("/{id}")
    public ResponseEntity<?> updatePlayer(@PathVariable int id,
                                          @RequestBody OrderDto orderDto){
        OrderEntity orderEntity = orderService.findByIdTo(id);
        if (orderDto == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        BeanUtils.copyProperties(orderDto,orderEntity);
        orderService.saveOrder(orderEntity);
        return new ResponseEntity<>(orderEntity,HttpStatus.OK);
    }
}