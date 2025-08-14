package com.ranab.CollabSphere.repository;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InviteRequest {

    private Long projectId;
    private String email;

    public Long getProjectId() {
        return projectId;
    }

    public String getEmail() {
        return email;
    }

    public void setProjectId(Long projectId) {
        this.projectId = projectId;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
