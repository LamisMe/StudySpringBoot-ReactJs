package com.example.quan_ly_cau_thu.repository;

import com.example.quan_ly_cau_thu.model.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITeamRepository extends JpaRepository<Team,Integer> {
}
