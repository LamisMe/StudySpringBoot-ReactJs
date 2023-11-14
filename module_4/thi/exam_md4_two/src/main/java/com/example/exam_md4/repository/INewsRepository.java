package com.example.exam_md4.repository;

import com.example.exam_md4.model.News;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface INewsRepository extends JpaRepository<News,Integer> {
    @Query(value = "select * from news n" +
            " join news_type nt on nt.id = n.news_type_id " +
            " where n.is_deleted = 0 and n.title like:titleSearch and nt.name_news_type like:nameNewsType",nativeQuery = true)
    Page<News> showPageNews(Pageable pageable, @Param("titleSearch") String titleSearch,@Param("nameNewsType") String nameNewsType);

    @Transactional
    @Modifying
    @Query(value = "update news " +
            "set is_deleted = 1 " +
            "where id =:idDelete",nativeQuery = true)
    void deleteNews(@Param("idDelete") int idDelete);
}
