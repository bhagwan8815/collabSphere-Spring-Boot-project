package com.ranab.CollabSphere.service;

import com.ranab.CollabSphere.model.Invitation;
import jakarta.mail.MessagingException;

public interface InvitationService {
    public void sendInvitation (String email, Long projectId) throws MessagingException;


    public Invitation acceptInvitation(String token, Long userId) throws  Exception;

    public String getTokenByUserMail(String userEmail) throws Exception;
    void deleteToken(String token) throws Exception;
}
