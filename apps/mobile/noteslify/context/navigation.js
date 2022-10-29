import React, { createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screen/home";

export const NavigationContext = createContext(Object.create(null));

export const NavigationProvider = () => {
	const Stack = createNativeStackNavigator();

	return (
		<NavigationContext.Provider value={{}}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</NavigationContext.Provider>
	);
};
