package com.example.quan_ly_cau_thu.repository;

import com.example.quan_ly_cau_thu.model.Player;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IPlayerRepository extends JpaRepository<Player,Integer> {
    @Query(value = "select * from players where is_deleted = 0 and players.name like:name",nativeQuery = true)
    Page<Player> findAllPlayer(Pageable pageable, @Param("name") String name);
    @Modifying
    @Transactional
    @Query(value = "update players set is_deleted = 1 where players.id =:id",nativeQuery = true)
    void deletedPlayer(@Param("id") Integer id);
    
}
