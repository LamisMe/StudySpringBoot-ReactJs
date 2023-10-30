package vn.codegym.api_player.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.codegym.api_player.model.Team;
import vn.codegym.api_player.repository.ITeamRepository;

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
