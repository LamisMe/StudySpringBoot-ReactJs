package com.example.player_api.repository;

import com.example.player_api.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPlayerRepository extends JpaRepository<Player,Integer> {
}
