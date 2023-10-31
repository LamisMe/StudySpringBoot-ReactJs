package com.example.player_api.service;

import com.example.player_api.model.Team;
import com.example.player_api.repository.ITeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService implements ITeamService{
    @Autowired
    private ITeamRepository teamRepository;
    @Override
    public List<Team> findAllTeam() {
        return teamRepository.findAll();
    }
}
