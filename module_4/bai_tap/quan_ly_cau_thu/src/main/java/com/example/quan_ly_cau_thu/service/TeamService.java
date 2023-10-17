package com.example.quan_ly_cau_thu.service;

import com.example.quan_ly_cau_thu.model.Team;
import com.example.quan_ly_cau_thu.repository.ITeamRepository;
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
