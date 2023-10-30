package vn.codegym.api_player.service;


import vn.codegym.api_player.model.Team;

import java.util.List;

public interface ITeamService {
    List<Team> findAllTeam();
}
