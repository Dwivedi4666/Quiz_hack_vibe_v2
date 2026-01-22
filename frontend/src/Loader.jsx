function Loader() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* The Circular Spinner */}
      <div className="spinner"></div>

      <p style={{ marginTop: "15px", fontFamily: "sans-serif" }}></p>

      {/* Spinner CSS */}
      <style>{`
        .spinner {
          width: 100px;
          height: 100px;
          border: 5px solid #f3f3f3; /* Light grey background circle */
          border-top: 5px solid #6366f1; /* Blue spinning part */
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default Loader;
