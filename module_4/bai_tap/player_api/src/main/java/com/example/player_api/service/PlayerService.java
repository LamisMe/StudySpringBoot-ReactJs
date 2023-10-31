package com.example.player_api.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.player_api.model.Player;
import com.example.player_api.repository.IPlayerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PlayerService implements IPlayerService {
    @Autowired
    private IPlayerRepository playerRepository;

    @Override
    public List<Player> findAll() {
        return playerRepository.findAll();
    }

    @Override
    public void delete(Player player) {
        playerRepository.delete(player);
    }

    @Override
    public void add(Player player) {
        playerRepository.save(player);
    }

    @Override
    public void update(Player player) {
        playerRepository.save(player);
    }

    @Override
    public Player findById(int id) {
        Optional<Player> player =playerRepository.findById(id);
        if (player.isPresent()){
            return player.get();
        }
        return null;
    }
}