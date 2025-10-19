import { useState } from "react";

export default function Withdraw() {
  const [amount, setAmount] = useState("");
  const [bank, setBank] = useState("");
  const [account, setAccount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!amount || !bank || !account) {
      setMessage("Please fill in all fields.");
      return;
    }

    // Simulate submitting withdrawal request
    setMessage("Submitting your withdrawal request...");

    try {
      const res = await fetch("/api/withdraw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, bank, account }),
      });

      if (res.ok) {
        setMessage("✅ Withdrawal request submitted! Admin will review soon.");
        setAmount("");
        setBank("");
        setAccount("");
      } else {
        setMessage("❌ Failed to submit request. Try again.");
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Something went wrong.");
    }
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "50px auto",
        fontFamily: "sans-serif",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <h2>Withdraw Funds</h2>
      <p>Enter your withdrawal details below:</p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 10 }}>
          <label>Amount (R): </label><br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Bank Name: </label><br />
          <input
            type="text"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            placeholder="e.g. Capitec"
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 10 }}>
          <label>Account Number: </label><br />
          <input
            type="text"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
            placeholder="Enter account number"
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#0070f3",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Submit Request
        </button>
      </form>

      {message && (
        <p style={{ marginTop: 20, color: "#333" }}>{message}</p>
      )}
    </div>
  );
}
