package com.example.quan_ly_cau_thu.controller;

import com.example.quan_ly_cau_thu.dto.LikePlayerDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/likes")
public class LikeController {
    @GetMapping
    public ModelAndView showLike(@SessionAttribute(value = "like",required = false)LikePlayerDto like){
        return new ModelAndView("like/list","like",like);
    }
}
