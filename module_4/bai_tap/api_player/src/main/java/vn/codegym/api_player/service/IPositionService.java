package vn.codegym.api_player.service;

import vn.codegym.api_player.model.Position;

import java.util.List;

public interface IPositionService {
    List<Position> findAllPosition();
}
