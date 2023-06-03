import { useTheme, useThemeUpdate } from "../context/ThemeContext";

export default function FunctionContextComponent() {
  console.log("FunctionContextComponent Render");
  
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };

  return (
    <>
      <button onClick={toggleTheme}>ChangeTheme</button>
      <div style={themeStyles}>Function Theme Context Component</div>
    </>
  );
}
