import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigator from "./HomeNavigator";
import Signup from "../Signup/Signup";
import { useEffect, useState } from "react";
import Welcome from "../Welcome/Welcome";
import Login from "../Login/Login";
import ResetPassword from "../ResetPassword/ResetPassword";
import MedicineNavigator from "./MedicineNavigator";
import VoiceCallPage from "../Call/VideoCall";
import { useSelector } from "react-redux";
// import {
//   ZegoCallInvitationDialog,
//   ZegoUIKitPrebuiltCallWaitingScreen,
//   ZegoUIKitPrebuiltCallInCallScreen,
// } from "@zegocloud/zego-uikit-prebuilt-call-rn";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const user = useSelector((state) => state.user);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user.id !== null) {
      setIsLoggedIn(true);
    }
  }, [user]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <>
            {/* <ZegoCallInvitationDialog />
            <Stack.Screen
              options={{ headerShown: false }}
              name="ZegoUIKitPrebuiltCallWaitingScreen"
              component={ZegoUIKitPrebuiltCallWaitingScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="ZegoUIKitPrebuiltCallInCallScreen"
              component={ZegoUIKitPrebuiltCallInCallScreen}
            /> */}
            <Stack.Screen name="HomeNavigator" component={HomeNavigator} />
            <Stack.Screen name="MedicineNavigator" component={MedicineNavigator} />
            <Stack.Screen name="VideoCall" component={VoiceCallPage} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
