package vn.codegym.api_player.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.api_player.model.Team;

public interface ITeamRepository extends JpaRepository<Team,Integer> {
}
