import { theme as proTheme } from "@chakra-ui/pro-theme";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import * as React from "react";
import { mode } from "@chakra-ui/theme-tools";

import Main from "./components/pages/Main/index";

export const App = () => {
  const themeMemo = React.useMemo(() => {
    return extendTheme({
      ...proTheme,
      styles: {
        global: (props: any) => ({
          ":not(.chakra-dont-set-collapse) > .chakra-collapse": {
            overflow: "visible !important",
          },
          body: {
            bg: mode("gray.50", "gray.700")(props),
          },
        }),
      },
      semanticTokens: {
        ...proTheme.semanticTokens,
        colors: {
          ...proTheme.semanticTokens.colors,
          "bg-subtle-gray": {
            _light: "bg-subtle",
            _dark: "gray.800",
          },
          "bg-subtle-hover": {
            _light: "gray.100",
            _dark: "gray.600",
          },
        },
      },
    });
  }, []);

  return (
    <ChakraProvider theme={themeMemo}>
      <ColorModeScript />
      <Main />
    </ChakraProvider>
  );
};
