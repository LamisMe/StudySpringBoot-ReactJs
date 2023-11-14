package com.example.exam_md4.controller;

import com.example.exam_md4.dto.NewsDto;
import com.example.exam_md4.model.News;
import com.example.exam_md4.service.INewsService;
import com.example.exam_md4.service.INewsTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping("/news")
public class NewsController {
    @Autowired
    private INewsService newsService;
    @Autowired
    private INewsTypeService newsTypeService;
    @GetMapping("")
    public String showPageNews(@RequestParam(defaultValue = "",required = false) String idType,
                               @RequestParam(defaultValue = "",required = false) String titleSearch,
                               @RequestParam(defaultValue ="0",required = false) int page,
                               Model model) {
        Pageable pageable = PageRequest.of(page,2);
        Page<News> newsPage = newsService.showPageNews(pageable,titleSearch,idType);
        model.addAttribute("newsPage",newsPage);
        model.addAttribute("idType",idType);
        model.addAttribute("titleSearch",titleSearch);
        model.addAttribute("newsTypeList",newsTypeService.showNewsTypeList());
        return "index";
    }

    @PostMapping("/delete")
    public String deleteNews(@RequestParam int id) {
        newsService.deleteNews(id);
        return "redirect:/news";
    }

    @GetMapping("/add")
    public String showFormCreateNews(Model model) {
        model.addAttribute("newsDto",new NewsDto());
        model.addAttribute("newsTypeList",newsTypeService.showNewsTypeList());
        return "create";
    }

    @PostMapping("/add")
    public String createNews(@Valid @ModelAttribute NewsDto newsDto,
                             BindingResult bindingResult,
                             Model model) {
        new NewsDto().validate(newsDto,bindingResult);
        if (bindingResult.hasErrors()){
            model.addAttribute("newsTypeList",newsTypeService.showNewsTypeList());
            return "create";
        }
        News news = new News();
        BeanUtils.copyProperties(newsDto,news);
        newsService.createNews(news);
        return "redirect:/news";
    }
}
