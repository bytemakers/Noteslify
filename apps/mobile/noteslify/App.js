import React from "react";
import { NativeBaseProvider } from "./context/native-base";
import { NavigationProvider } from "./context/navigation";

const App = ({ children }) => (
	<NavigationProvider>
		<NativeBaseProvider>{children}</NativeBaseProvider>
	</NavigationProvider>
);

export default App;
