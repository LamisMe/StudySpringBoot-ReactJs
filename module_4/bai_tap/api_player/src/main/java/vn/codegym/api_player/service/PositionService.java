package vn.codegym.api_player.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.codegym.api_player.model.Position;
import vn.codegym.api_player.repository.IPositionRepository;

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
