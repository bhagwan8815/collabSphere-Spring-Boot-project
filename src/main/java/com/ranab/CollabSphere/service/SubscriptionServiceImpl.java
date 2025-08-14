package com.ranab.CollabSphere.service;

import com.ranab.CollabSphere.model.PlanType;
import com.ranab.CollabSphere.model.Subscription;
import com.ranab.CollabSphere.model.User;
import com.ranab.CollabSphere.repository.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;

@Service
public class SubscriptionServiceImpl implements SubscriptionService {

    @Autowired
    private UserService userService;

    @Autowired
    private SubscriptionRepository subscriptionRepository;

    // ❌ Removed self-injection of SubscriptionService

    @Override
    public Subscription createSubscription(User user) {
        Subscription subscription = new Subscription();
        subscription.setUser(user);
        subscription.setSubscriptionStartDate(LocalDate.now());
        subscription.setGetSubscriptionEndDate(LocalDate.now().plusMonths(12));
        subscription.setValid(true);
        subscription.setPlanType(PlanType.FREE);
        return subscriptionRepository.save(subscription);
    }

    @Override
    public Subscription getUserSubscription(Long userId) throws Exception {
        Subscription subscription = subscriptionRepository.findByUserId(userId);
        if (!this.isValid(subscription)) { // ✅ Use "this" instead of self-injection
            subscription.setPlanType(PlanType.FREE);
            subscription.setGetSubscriptionEndDate(LocalDate.now().plusMonths(12));
            subscription.setSubscriptionStartDate(LocalDate.now());
        }
        return subscriptionRepository.save(subscription);
    }

    @Override
    public Subscription upgradeSubscription(Long userId, PlanType planType) {
        Subscription subscription = subscriptionRepository.findByUserId(userId);
        subscription.setPlanType(planType);
        subscription.setSubscriptionStartDate(LocalDate.now());
        if (planType.equals(PlanType.ANNUALLY)) {
            subscription.setGetSubscriptionEndDate(LocalDate.now().plusMonths(12));
        } else {
            subscription.setGetSubscriptionEndDate(LocalDate.now().plusMonths(1));
        }
        return subscriptionRepository.save(subscription);
    }

    @Override
    public boolean isValid(Subscription subscription) {
        if (subscription.getPlanType().equals(PlanType.FREE)) {
            return true;
        }
        LocalDate endDate = subscription.getGetSubscriptionEndDate();
        LocalDate currentDate = LocalDate.now();
        return endDate.isAfter(currentDate) || endDate.isEqual(currentDate);
    }
}










//package com.ranab.CollabSphere.service;
//
//import com.ranab.CollabSphere.model.PlanType;
//import com.ranab.CollabSphere.model.Subscription;
//import com.ranab.CollabSphere.model.User;
//import com.ranab.CollabSphere.repository.SubscriptionRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Lazy;
//import org.springframework.stereotype.Service;
//
//import java.time.LocalDate;
//
//@Service
//public class SubscriptionServiceImpl implements SubscriptionService{
//
//    @Autowired
//    private UserService userService;
//
//    @Autowired
//    @Lazy
//    private SubscriptionRepository subscriptionRepository;
//    @Autowired
//    private SubscriptionService subscriptionService;
//    @Override
//    public Subscription createSubscription(User user) {
//        Subscription subscription = new Subscription();
//
//        subscription.setUser(user);
//        subscription.setSubscriptionStartDate(LocalDate.now());
//        subscription.setGetSubscriptionEndDate(LocalDate.now().plusMonths(12));
//        subscription.setValid(true);
//        subscription.setPlanType(PlanType.FREE);
//        return subscriptionRepository.save(subscription);
//    }
//
//    @Override
//    public Subscription getUserSubscription(Long userId) throws Exception {
//        Subscription subscription = subscriptionRepository.findByUserId(userId);
//      if(!isValid(subscription)){
//          subscription.setPlanType(PlanType.FREE);
//          subscription.setGetSubscriptionEndDate(LocalDate.now().plusMonths(12));
//          subscription.setSubscriptionStartDate(LocalDate.now());
//      }
//      return subscriptionRepository.save(subscription);
//    }
//
//    @Override
//    public Subscription upgradeSubscription(Long userId, PlanType planType) {
//        Subscription subscription = subscriptionRepository.findByUserId(userId);
//        subscription.setPlanType(planType);
//        subscription.setSubscriptionStartDate(LocalDate.now());
//        if(planType.equals(PlanType.ANNUALLY)){
//            subscription.setGetSubscriptionEndDate(LocalDate.now().plusMonths(12));
//
//        }else{
//            subscription.setGetSubscriptionEndDate(LocalDate.now().plusMonths(1));
//        }
//        return subscriptionRepository.save(subscription);
//    }
//
//    @Override
//    public boolean isValid(Subscription subscription) {
//        if(subscription.getPlanType().equals(PlanType.FREE)){
//            return true;
//        }
//        LocalDate endDate = subscription.getGetSubscriptionEndDate();
//        LocalDate currentDate = LocalDate.now();
//
//        return endDate.isAfter(currentDate) || endDate.isEqual(currentDate);
//
//    }
//}
