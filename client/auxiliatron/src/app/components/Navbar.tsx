interface Props {
  children: JSX.Element;
}

export const Navbar = ({ children }: Props) => {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        backgroundColor: "gray",
        borderRadius: "10px",
        alignItems: "center",
      }}
    >
      {children}
    </nav>
  );
};
