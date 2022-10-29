import React from "react";

import { NativeBaseProvider } from "./context/native-base";
import { NavigationProvider } from "./context/navigation";

const App = ({ children }) => (
	<NativeBaseProvider>
		<NavigationProvider>{children}</NavigationProvider>
	</NativeBaseProvider>
);

export default App;
