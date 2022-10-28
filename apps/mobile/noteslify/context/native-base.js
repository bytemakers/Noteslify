import React, { createContext } from "react";
import { extendTheme, NativeBaseProvider as NBProvider } from "native-base";

export const NativeBaseContext = createContext(Object.create(null));

export const NativeBaseProvider = ({ children }) => {
	const config = { useSystemColorMode: false, initialColorMode: "dark" };

	extendTheme(config);

	return (
		<NativeBaseContext.Provider value={{ config }}>
			<NBProvider>{children}</NBProvider>
		</NativeBaseContext.Provider>
	);
};
