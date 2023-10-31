package com.example.player_api.service;



import com.example.player_api.model.Player;

import java.util.List;

public interface IPlayerService {
    List<Player> findAll();
    void delete(Player player);
    void add(Player player);
    void update(Player player);
    Player findById(int id);
}