package com.ranab.CollabSphere.service;

import com.ranab.CollabSphere.model.Comment;

import java.util.List;

public interface CommentsService {

    Comment createComment(Long issueId,Long userId , String comment) throws Exception;

    void deleteComments(Long commentId, Long userId) throws Exception;

    List<Comment> findCommentByIssueId(Long issueId);
}
