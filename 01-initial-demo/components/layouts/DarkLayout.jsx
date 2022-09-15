import styles from "./MainLayout.module.css";

export const DarkLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Dark</h3>
      {children}
    </div>
  );
};
