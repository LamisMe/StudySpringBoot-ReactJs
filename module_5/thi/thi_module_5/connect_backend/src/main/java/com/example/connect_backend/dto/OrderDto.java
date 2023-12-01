package com.example.connect_backend.dto;

import com.example.connect_backend.model.ProductEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

public class OrderDto implements Validator {
    private Integer id;
    private String codeOrder;
    private String buyDate;
    private Integer totalPrice;
    private Integer quantity;
    private ProductEntity productEntity;

    public OrderDto() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCodeOrder() {
        return codeOrder;
    }

    public void setCodeOrder(String codeOrder) {
        this.codeOrder = codeOrder;
    }

    public String getBuyDate() {
        return buyDate;
    }

    public void setBuyDate(String buyDate) {
        this.buyDate = buyDate;
    }

    public Integer getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(Integer totalPrice) {
        this.totalPrice = totalPrice;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public ProductEntity getProductEntity() {
        return productEntity;
    }

    public void setProductEntity(ProductEntity productEntity) {
        this.productEntity = productEntity;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        OrderDto orderDto = (OrderDto) target;
        if (orderDto.getQuantity() < 0){
            errors.rejectValue("quantity",null,"Không được nhập số bé hơn 0");
        }
        if (orderDto.getCodeOrder().equals("")){
            errors.rejectValue("codeOrder",null,"Không được để trống trường này");
        }
    }
}
