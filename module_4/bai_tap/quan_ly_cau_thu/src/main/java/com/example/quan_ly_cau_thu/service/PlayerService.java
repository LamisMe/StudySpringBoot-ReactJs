package com.example.quan_ly_cau_thu.service;

import com.example.quan_ly_cau_thu.model.Player;
import com.example.quan_ly_cau_thu.repository.IPlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class PlayerService implements IPlayerService {
    @Autowired
    private IPlayerRepository playerRepository;

    @Override
    public Page<Player> findAllPlayer(Pageable pageable, String name) {
        return playerRepository.findAllPlayer(pageable, "%" + name + "%");
    }

    @Override
    public void deletedPlayer(Integer id) {
        playerRepository.deletedPlayer(id);
    }

    @Override
    public Player findById(int id) {
        return playerRepository.findById(id).get();
    }
}
