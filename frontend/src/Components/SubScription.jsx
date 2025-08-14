import React from "react";

const SubScription = ({ plan, price, features, current, onClick, discount }) => {
  return (
    <div className="bg-zinc-900 text-white p-6 rounded-xl shadow-md w-full max-w-sm">
      <h3 className="text-lg font-bold mb-2">{plan}</h3>
      <p className="text-2xl font-semibold mb-4">
        ₹{price} {plan === "Annual Paid Plan" && <span className="text-green-500 text-sm">({discount} off)</span>}
      </p>
      <button
        onClick={onClick}
        className={`w-full py-2 rounded-md text-white ${
          current ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
        disabled={current}
      >
        {current ? "Current Plan" : "Get Started"}
      </button>
      <ul className="mt-4 text-sm text-left list-disc list-inside space-y-1">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubScription;

