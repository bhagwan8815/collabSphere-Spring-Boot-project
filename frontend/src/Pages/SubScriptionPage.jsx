import React from "react";
import SubScription from "../Components/SubScription"
const plans = [
  {
    plan: "Free",
    price: 0,
    features: [
      "Add only 3 projects",
      "Basic Task Management",
      "Project Collaboration",
      "Basic Reporting",
      "Email Notifications",
      "Basic Access Control",
    ],
  },
  {
    plan: "Monthly Paid Plan",
    price: 799,
    features: [
      "Add unlimited project",
      "Access to live chat",
      "Add unlimited team member",
      "Advanced Reporting",
      "Priority Support",
      "Customization Options",
      "Integration Support",
      "Advanced Security",
      "Training and Resources",
      "Access Control",
      "Custom Workflows",
    ],
    current: true,
  },
  {
    plan: "Annual Paid Plan",
    price: 6711,
    features: [
      "Add unlimited project",
      "Access to live chat",
      "Add unlimited team member",
      "Advanced Reporting",
      "Priority Support",
      "Everything which monthly plan has",
    ],
    discount: "30%",
  },
];

const loadRazorpay = () => {
  const script = document.createElement("script");
  script.src = "https://checkout.razorpay.com/v1/checkout.js";
  script.async = true;
  document.body.appendChild(script);
};

const handlePayment = (amount) => {
  loadRazorpay();

  const options = {
    key: "jkflsfgiorsekgjls", // Replace with your Razorpay key
    amount: amount * 100, // in paise
    currency: "INR",
    name: "YourApp",
    description: "Plan Purchase",
    handler: function (response) {
      alert(`Payment ID: ${response.razorpay_payment_id}`);
    },
    theme: {
      color: "#0f172a",
    },
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

const SubScriptionPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">Pricing</h1>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        {plans.map((p, index) => (
          <SubScription
            key={index}
            {...p}
            onClick={() => {
              if (!p.current) handlePayment(p.price);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SubScriptionPage

