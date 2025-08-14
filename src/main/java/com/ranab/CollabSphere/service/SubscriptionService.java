package com.ranab.CollabSphere.service;

import com.ranab.CollabSphere.model.PlanType;
import com.ranab.CollabSphere.model.Subscription;
import com.ranab.CollabSphere.model.User;

public interface SubscriptionService {

    Subscription createSubscription(User user);

    Subscription getUserSubscription(Long userId)throws Exception;
    Subscription upgradeSubscription(Long userId, PlanType planType);
    boolean isValid(Subscription subscription);

}
