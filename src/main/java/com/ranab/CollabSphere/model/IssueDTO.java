package com.ranab.CollabSphere.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class IssueDTO {

    private Long id;
    private String title;
    private String description;

    private String status;

    private Long projectId;
    private String priority;
    private LocalDate dueDate;
    private List<String> tags = new ArrayList<>();
    private Project project;

    private User assignee;


    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getStatus() {
        return status;
    }

    public Long getProjectId() {
        return projectId;
    }

    public String getPriority() {
        return priority;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public List<String> getTags() {
        return tags;
    }

    public Project getProject() {
        return project;
    }

    public User getAssignee() {
        return assignee;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public void setAssignee(User assignee) {
        this.assignee = assignee;
    }
}
