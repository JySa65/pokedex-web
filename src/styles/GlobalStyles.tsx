import { createGlobalStyle } from "styled-components";
import tw, { theme, globalStyles } from "twin.macro";

const GlobalStyles = createGlobalStyle({
  ...globalStyles,
  body: {
    ...tw`antialiased`,
    ...tw`bg-dark-neutral`,
    margin: 0,
    lineHeight: "inherit",
    // backgroundColor: theme`colors.orange.900`,
  },
});

export default GlobalStyles;
