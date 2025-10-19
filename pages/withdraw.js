export default function Withdraw() {
  return (
    <div style={{
      maxWidth: "600px",
      margin: "40px auto",
      fontFamily: "sans-serif",
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>
      <h2>Withdrawal Request</h2>
      <p>Please fill in your withdrawal details below:</p>

      <form action=https://formspree.io/f/mblzbold
        <label>Full Name:</label>
        <input type="text" name="name" required style={{ width: "100%", padding: "8px", margin: "8px 0" }} />

        <label>Phone Number:</label>
        <input type="text" name="phone" required style={{ width: "100%", padding: "8px", margin: "8px 0" }} />

        <label>Bank Name:</label>
        <input type="text" name="bank" required style={{ width: "100%", padding: "8px", margin: "8px 0" }} />

        <label>Account Number:</label>
        <input type="text" name="account" required style={{ width: "100%", padding: "8px", margin: "8px 0" }} />

        <label>Withdrawal Amount:</label>
        <input type="number" name="amount" required style={{ width: "100%", padding: "8px", margin: "8px 0" }} />

        <button type="submit" style={{
          background: "#0070f3",
          color: "white",
          border: "none",
          padding: "10px 16px",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Submit Withdrawal Request
        </button>
      </form>
    </div>
  );
}

