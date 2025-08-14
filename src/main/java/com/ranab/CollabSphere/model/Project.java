package com.ranab.CollabSphere.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String description;
    private String category;  // frontend , backend , fullstack like this

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getCategory() {
        return category;
    }

    public List<String> getTags() {
        return tags;
    }

    public String getName() {
        return name;
    }

    public Chat getChat() {
        return chat;
    }

    public User getOwner() {
        return owner;
    }

    public List<Issue> getIssues() {
        return issues;
    }

    public List<User> getTeam() {
        return team;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public void setChat(Chat chat) {
        this.chat = chat;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public void setIssues(List<Issue> issues) {
        this.issues = issues;
    }

    public void setTeam(List<User> team) {
        this.team = team;
    }

    private List<String> tags= new ArrayList<>();

    @JsonIgnore
    @OneToOne(mappedBy = "project",cascade = CascadeType.ALL,orphanRemoval = true)
    private Chat chat;

    @ManyToOne
    private User owner;

    @OneToMany(mappedBy = "project",cascade = CascadeType.ALL,orphanRemoval = true )
    private List<Issue> issues = new ArrayList<>();


    @ManyToMany
    private List<User> team = new ArrayList<>();
}
