package com.example.player_api.repository;

import com.example.player_api.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITeamRepository extends JpaRepository<Team,Integer> {
}
