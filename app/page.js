export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#0a0a0a",
      color: "#fff",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Pamskie Exchange</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "40px", maxWidth: "600px", textAlign: "center" }}>
        Trade PAM/SOL — the official token of the Pamskie brand. 
        Hold PAM coins, earn rewards when shopping on Pamskie.com, 
        or swap them for Solana via Phantom Wallet.
      </p>

      {/* Coin Chart Placeholder */}
      <div style={{ background: "#1a1a1a", padding: "20px", borderRadius: "10px", width: "100%", maxWidth: "800px" }}>
        <h2 style={{ marginBottom: "10px" }}>Live PAM/SOL Chart</h2>
        <div style={{ height: "400px", background: "#111", borderRadius: "8px", textAlign: "center", lineHeight: "400px" }}>
          🔗 Coin chart widget will go here
        </div>
      </div>
    </main>
  );
}
