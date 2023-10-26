package com.example.quan_ly_cau_thu.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class AOPConfig {
    @Pointcut("execution(* com.example.quan_ly_cau_thu.controller.PlayerController.show*(..))")
    public void showAllMethodPointCut(){}

    @Before("showAllMethodPointCut()")
    public void beforeCallMethod(JoinPoint joinPoint){
        System.out.println("Start method : " + joinPoint.getSignature().getName());
    }
    @AfterReturning("showAllMethodPointCut()")
    public void afterThrowingCallMethod(JoinPoint joinPoint){
        System.out.println("End method : " + joinPoint.getSignature().getName());
    }
}
