package vn.codegym.api_player.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import vn.codegym.api_player.model.Position;

public interface IPositionRepository extends JpaRepository<Position,Integer> {
}
