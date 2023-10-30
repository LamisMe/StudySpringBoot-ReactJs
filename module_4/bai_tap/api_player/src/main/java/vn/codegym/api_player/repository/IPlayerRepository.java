package vn.codegym.api_player.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.api_player.model.Player;

public interface IPlayerRepository extends JpaRepository<Player,Integer> {
}
