import React, { Component } from "react";
import { useTheme, useThemeUpdate } from "../context/ThemeContext";
export default class ClassContextComponent extends Component {
  darkTheme = useTheme();
  toggleTheme = useThemeUpdate();
  themeStyles = {
    backgroundColor: this.darkTheme ? "#333" : "#CCC",
    color: this.darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  render() {
    return <div style={this.themeStyles}>Class Theme Context Component</div>;
  }
}
