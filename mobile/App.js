import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RelatoriosScreen from "./screens/RelatoriosScreen";
import SolicitacoesScreen from "./screens/SolicitacoesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Início">
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Meus Relatórios" component={RelatoriosScreen} />
        <Stack.Screen name="Minhas Solicitações" component={SolicitacoesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
