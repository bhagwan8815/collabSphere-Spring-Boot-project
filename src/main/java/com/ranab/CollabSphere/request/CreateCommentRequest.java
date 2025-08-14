package com.ranab.CollabSphere.request;

import lombok.Data;

@Data
public class CreateCommentRequest {
    private Long issueId;

    private String Content;

    public Long getIssueId() {
        return issueId;
    }

    public String getContent() {
        return Content;
    }

    public void setIssueId(Long issueId) {
        this.issueId = issueId;
    }

    public void setContent(String content) {
        Content = content;
    }
}
