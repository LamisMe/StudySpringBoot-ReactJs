package com.example.exam_md4.repository;

import com.example.exam_md4.model.NewsType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface INewsTypeRepository extends JpaRepository<NewsType,Integer> {
}
