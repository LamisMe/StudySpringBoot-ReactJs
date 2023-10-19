package com.example.quan_ly_cau_thu.service;

import com.example.quan_ly_cau_thu.model.Player;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IPlayerService {
    Page<Player> findAllPlayer(Pageable pageable,String name);
    void deletedPlayer(Integer id);
    Player findById(int id);
    boolean createPlayer(Player player);
}
