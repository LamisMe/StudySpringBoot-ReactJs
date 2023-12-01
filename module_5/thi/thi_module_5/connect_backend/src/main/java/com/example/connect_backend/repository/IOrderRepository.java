package com.example.connect_backend.repository;

import com.example.connect_backend.model.OrderEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IOrderRepository extends JpaRepository<OrderEntity,Integer> {
    @Query(value = "select o.id,p.name,p.price,o.buy_date,o.code_order,o.product_id,o.quantity,o.status,o.total_price from orders o " +
            "left join products p on o.product_id = p.id " +
            "where o.status = 0 and p.name like:nameSearch ",nativeQuery = true)
    Page<OrderEntity> showListOrder(Pageable pageable, @Param("nameSearch") String nameSearch);
    @Modifying
    @Transactional
    @Query(value = "update orders o " +
            "set o.status = 1 " +
            "where o.id =:id ",nativeQuery = true)
    void deleteOrder(@Param("id") Integer id);
}
