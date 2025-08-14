package com.ranab.CollabSphere.controller;

import com.ranab.CollabSphere.model.Comment;
import com.ranab.CollabSphere.model.User;
import com.ranab.CollabSphere.request.CreateCommentRequest;
import com.ranab.CollabSphere.response.MessageResponse;
import com.ranab.CollabSphere.service.CommentsService;
import com.ranab.CollabSphere.service.UserService;
import org.hibernate.annotations.Comments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {
    @Autowired
    private CommentsService commentsService;
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<Comment> createComment(
            @RequestBody CreateCommentRequest req,
            @RequestHeader("Authorization")String jwt) throws Exception{

        User user = userService.findUserProfileByJwt(jwt);
        Comment createdComment = commentsService.createComment(
                req.getIssueId(), user.getId(), req.getContent());

        return new ResponseEntity<>(createdComment, HttpStatus.CREATED);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<MessageResponse> deleteComment(@PathVariable Long commentId, @RequestHeader("Authorization")String jwt) throws Exception{

        User user = userService.findUserProfileByJwt(jwt);

        commentsService.deleteComments(commentId,user.getId());
       MessageResponse resp = new MessageResponse();
        resp.setMessage("Comment deleted Successfully :");
        return new ResponseEntity<>(resp , HttpStatus.OK);
    }

    @GetMapping("/{issueId}")
    public ResponseEntity<List<Comment>> getCommentByIssueId(@PathVariable Long issueId){
        List<Comment> comments = commentsService.findCommentByIssueId(issueId);
        return new ResponseEntity<>(comments, HttpStatus.OK);

    }

}
