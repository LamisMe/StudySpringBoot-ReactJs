package com.example.exam_md4.dto;

import com.example.exam_md4.model.NewsType;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.time.LocalDate;
import java.time.Period;

public class NewsDto implements Validator {
    private String title;
    private String content;
    private String startDate;
    private String endDate;
    private NewsType newsType;

    public NewsDto() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public NewsType getNewsType() {
        return newsType;
    }

    public void setNewsType(NewsType newsType) {
        this.newsType = newsType;
    }

    @Override
    public boolean supports(Class<?> clazz) {
        return false;
    }

    @Override
    public void validate(Object target, Errors errors) {
        NewsDto newsDto = (NewsDto) target;
        if (newsDto.title.equals("")) {
            errors.rejectValue("title", null, "Không được để trống");
        }
        if (LocalDate.parse(newsDto.startDate).isBefore(LocalDate.now())) {
            errors.rejectValue("startDate", null, "Không được nhập ngày quá khứ");
        }
        if (LocalDate.parse(newsDto.endDate).isBefore(LocalDate.now())) {
            errors.rejectValue("endDate", null, "Không được nhập ngày quá khứ");
        }
        if (LocalDate.parse(newsDto.endDate).isBefore(LocalDate.parse(newsDto.startDate))) {
            errors.rejectValue("endDate", null, "Không được nhập ngày trước ngày đăng");
        }
        if (newsDto.endDate.equals("")) {
            errors.rejectValue("endDate", null, "Không được để trống");
        }
        if (newsDto.startDate.equals("")) {
            errors.rejectValue("startDate", null, "Không được để trống");
        }
        if (newsDto.content.equals("")) {
            errors.rejectValue("content", null, "Không được để trống");
        }
        Period period = Period.between(LocalDate.parse(newsDto.startDate),LocalDate.parse(newsDto.endDate));
        if (period.getMonths() > 2){
            errors.rejectValue("endDate", null, "Ngày kết thúc không được quá 60 ngày so với ngày đăng tin");

        }
    }
}
