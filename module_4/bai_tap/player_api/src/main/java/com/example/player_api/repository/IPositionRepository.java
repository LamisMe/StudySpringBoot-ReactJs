package com.example.player_api.repository;

import com.example.player_api.model.Position;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPositionRepository extends JpaRepository<Position,Integer> {
}
