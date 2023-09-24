import { useContext } from "react";
import { Theme } from "../context/Theme";

const useTheme = () => useContext(Theme);

export default useTheme;
