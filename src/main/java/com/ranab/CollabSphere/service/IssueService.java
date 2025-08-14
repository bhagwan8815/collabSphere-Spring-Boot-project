package com.ranab.CollabSphere.service;

import com.ranab.CollabSphere.model.Issue;
import com.ranab.CollabSphere.model.User;
import com.ranab.CollabSphere.request.IssueRequest;

import java.util.List;
import java.util.Optional;

public interface IssueService {
    Issue getIssueById(Long issueId) throws Exception;
    List<Issue> getIssueByProjectId(Long projectId) throws Exception;

    Issue createIssue(IssueRequest issue, User user) throws Exception;

    void deleteIssue(Long issueId,Long userid) throws Exception;

    Issue addUserToIssue(Long issueId, Long userId) throws Exception;

    Issue updateStatus(Long issueId,String status) throws Exception;


}
