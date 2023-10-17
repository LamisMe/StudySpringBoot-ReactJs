package com.example.quan_ly_cau_thu.service;

import com.example.quan_ly_cau_thu.model.Position;
import com.example.quan_ly_cau_thu.repository.IPositionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionService implements IPositionService{
    @Autowired
    private IPositionRepository positionRepository;
    @Override
    public List<Position> findAllPosition() {
        return positionRepository.findAll();
    }
}
