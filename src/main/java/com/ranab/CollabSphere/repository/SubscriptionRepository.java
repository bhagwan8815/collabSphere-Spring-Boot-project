package com.ranab.CollabSphere.repository;

import com.ranab.CollabSphere.model.Subscription;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
      @Bean
     Subscription findByUserId(Long userId);

}
