package com.ranab.CollabSphere.controller;

import com.ranab.CollabSphere.model.PlanType;
import com.ranab.CollabSphere.model.User;
import com.ranab.CollabSphere.response.PaymentLinkResponse;
import com.ranab.CollabSphere.service.UserService;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/payment")
public class PaymentController {

    @Value("${razorpay.api.key}")
    private String apikey;

    @Value("${razorpay.api.secret}")
    private String apiSecret;

    @Autowired
    private UserService userService;

    @PostMapping("/{planType}")
    public ResponseEntity<PaymentLinkResponse> createPaymentLink(
            @PathVariable PlanType planType,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserProfileByJwt(jwt);
        int amount = 799 * 100;  // Convert to paise

        if (planType == PlanType.ANNUALLY) {
            amount = amount * 12;
            amount = (int) (amount * 0.7);  // 30% discount applied
        }

        RazorpayClient razorpay = new RazorpayClient(apikey, apiSecret);

        JSONObject paymentLinkRequest = new JSONObject();
        paymentLinkRequest.put("amount", amount);
        paymentLinkRequest.put("currency", "INR");

        JSONObject customer = new JSONObject();
        customer.put("name", user.getFullName());
        customer.put("email", user.getEmail());
        paymentLinkRequest.put("customer", customer);

        JSONObject notify = new JSONObject();
        notify.put("email", true);
        paymentLinkRequest.put("notify", notify);

        paymentLinkRequest.put("callback_url", "http://localhost:5173/upgrade_plan/success?planType=" + planType);
        paymentLinkRequest.put("callback_method", "get");

        PaymentLink payment = razorpay.paymentLink.create(paymentLinkRequest);

        String paymentLinkId = payment.get("id").toString();
        String paymentLinkUrl = payment.get("short_url").toString();

        PaymentLinkResponse res = new PaymentLinkResponse();
        res.setPayment_link_url(paymentLinkUrl);
        res.setPayment_link_id(paymentLinkId);

        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }
}

