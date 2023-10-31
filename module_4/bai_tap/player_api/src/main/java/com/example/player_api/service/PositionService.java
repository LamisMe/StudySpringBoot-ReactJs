package com.example.player_api.service;

import com.example.player_api.model.Position;
import com.example.player_api.repository.IPositionRepository;
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
