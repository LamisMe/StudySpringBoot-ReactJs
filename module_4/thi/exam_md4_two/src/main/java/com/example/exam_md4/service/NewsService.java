package com.example.exam_md4.service;

import com.example.exam_md4.model.News;
import com.example.exam_md4.repository.INewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class NewsService implements INewsService{
    @Autowired
    private INewsRepository newsRepository;

    @Override
    public Page<News> showPageNews(Pageable pageable, String title, String idType) {
        return newsRepository.showPageNews(pageable,"%"+title+"%","%"+idType+"%");
    }

    @Override
    public void deleteNews(int id) {
        newsRepository.deleteNews(id);
    }

    @Override
    public void createNews(News news) {
        newsRepository.save(news);
    }

    @Override
    public News findByNews(Integer id) {
        return newsRepository.findById(id).get();
    }
}
