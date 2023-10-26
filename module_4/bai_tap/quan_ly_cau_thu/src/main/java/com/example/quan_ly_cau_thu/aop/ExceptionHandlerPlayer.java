package com.example.quan_ly_cau_thu.aop;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionHandlerPlayer {
    @ExceptionHandler({NullPointerException.class, NumberFormatException.class})
    public String showErrorPlayer(){
     return "errorPlayer";
    }
}
