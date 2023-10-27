package com.example.quan_ly_cau_thu.service;

import com.example.quan_ly_cau_thu.model.Player;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface IPlayerService {
    Page<Player> findAllPlayer(Pageable pageable,String name);
    void deletedPlayer(Integer id);
    Player findById(int id);
    Optional<Player> findByIdOptional(int id);
    boolean createPlayer(Player player);
    void updatePlayer(Player player);
    List<Player> findAll();
}
