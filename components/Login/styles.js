import { StyleSheet } from "react-native";
import STYLES from "../../constant/styles";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 40,
  },
  viewBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    color: STYLES.mainColor,
    fontSize: 24,
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    transform: [{ translateX: -8 }],
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "600",
    color: STYLES.mainColor,
    paddingVertical: 24,
  },
  inputBox: {
    gap: 16,
    flex: 1,
    position: "relative",
    marginVertical: 8,
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    color: STYLES.blackText,
  },
  innerContainer: {
    borderWidth: 0,
  },
  input: {
    flex: 1,
    backgroundColor: "#ECF1FF",
    color: STYLES.mainColor,
    fontSize: 20,
    borderRadius: 13,
  },
  forgetText: {
    textAlign: "right",
    fontSize: 12,
    color: STYLES.mainColor,
    fontWeight: "500",
  },
});
