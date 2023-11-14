package com.example.exam_md4.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class NewsType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(columnDefinition = "varchar(50)")
    private String nameNewsType;
    @OneToMany(mappedBy = "newsType")
    private Set<News> newsSet;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameNewsType() {
        return nameNewsType;
    }

    public void setNameNewsType(String nameNewsType) {
        this.nameNewsType = nameNewsType;
    }

    public Set<News> getNewsSet() {
        return newsSet;
    }

    public void setNewsSet(Set<News> newsSet) {
        this.newsSet = newsSet;
    }

    public NewsType() {
    }
}
