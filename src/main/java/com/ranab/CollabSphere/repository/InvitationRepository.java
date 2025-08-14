package com.ranab.CollabSphere.repository;

import com.ranab.CollabSphere.model.Invitation;
import com.ranab.CollabSphere.service.InvitationService;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InvitationRepository extends JpaRepository<Invitation,Long> {

    Invitation findByToken(String token);

    Invitation findByEmail(String email);
}

