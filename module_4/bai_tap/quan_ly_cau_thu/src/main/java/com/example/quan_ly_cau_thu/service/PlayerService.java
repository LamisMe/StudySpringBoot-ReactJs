package com.example.quan_ly_cau_thu.service;

import com.example.quan_ly_cau_thu.model.Player;
import com.example.quan_ly_cau_thu.repository.IPlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PlayerService implements IPlayerService {
    @Autowired
    private IPlayerRepository playerRepository;

    @Override
    public Page<Player> findAllPlayer(Pageable pageable, String name) {
        return playerRepository.findAllPlayer(pageable, "%" + name + "%");
    }

    @Transactional
    @Override
    public void deletedPlayer(Integer id) {
        playerRepository.deletedPlayer(id);
    }

    @Override
    public Player findById(int id) {
        return playerRepository.findById(id).get();
    }

    @Override
    public boolean createPlayer(Player player) {
        Player playerEntity = playerRepository.save(player);
        return playerEntity != null;
    }

    @Override
    public void updatePlayer(Player player) {
        playerRepository.save(player);
    }
}
