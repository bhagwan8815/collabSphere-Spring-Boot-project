package com.ranab.CollabSphere.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    //tells JPA to automatically determine the generation stratefy for the primary key.
    private Long id;

    private  String content;
    private LocalDateTime createdDateTime;

    public Long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public LocalDateTime getCreatedDateTime() {
        return createdDateTime;
    }

    public User getUser() {
        return user;
    }

    public Issue getIssue() {
        return issue;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setCreatedDateTime(LocalDateTime createdDateTime) {
        this.createdDateTime = createdDateTime;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void setIssue(Issue issue) {
        this.issue = issue;
    }

    @ManyToOne
    private User user;


    @ManyToOne
    private Issue issue;
}
