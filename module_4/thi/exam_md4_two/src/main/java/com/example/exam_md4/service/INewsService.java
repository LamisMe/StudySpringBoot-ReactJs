package com.example.exam_md4.service;

import com.example.exam_md4.model.News;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface INewsService {
    Page<News> showPageNews(Pageable pageable,String title,String idType);
    void deleteNews(int id);
    void createNews(News news);
    News findByNews(Integer id);
}
