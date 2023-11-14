package com.example.exam_md4.service;

import com.example.exam_md4.model.NewsType;
import com.example.exam_md4.repository.INewsTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class NewsTypeService implements INewsTypeService{
    @Autowired
    private INewsTypeRepository newsTypeRepository;
    @Override
    public List<NewsType> showNewsTypeList() {
        return newsTypeRepository.findAll();
    }
}
