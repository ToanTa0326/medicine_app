import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Drugs from "../Drugs/Drugs";
import Interaction from "../Interaction/Interaction";
import InteractionDetail from "../Interaction/InteractionDetails";
import DrugDetails from "../Drugs/DrugDetails";
import { useNavigation } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

const MedicineNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drugs" component={Drugs} />
      <Stack.Screen name="DrugDetails" component={DrugDetails} />
      <Stack.Screen name="Interaction" component={Interaction} />
      <Stack.Screen name="InteractionDetail" component={InteractionDetail} />
    </Stack.Navigator>
  );
};

export default MedicineNavigator;
