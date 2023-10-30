package vn.codegym.api_player.service;


import vn.codegym.api_player.model.Player;

import java.util.List;

public interface IPlayerService {
    List<Player> findAll();
    void delete(Player player);
    void add(Player player);
    void update(Player player);
    Player findById(int id);
}
