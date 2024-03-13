import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const ResetPassword = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View>
        <Text onPress={() => navigation.goBack()}>This is reset password</Text>
      </View>
    </SafeAreaView>
  );
};

export default ResetPassword;
