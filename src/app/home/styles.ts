import { StyleSheet } from "react-native";
import { colors } from "@/styles/colors";
import { fontFamiy } from "@/styles/fontFamily";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },
  header: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  title: {
    color: colors.white,
    fontSize: 24,
    fontFamily: fontFamiy.extrabold
  },
  subtitle: {
    color: colors.gray[300],
    fontSize: 14,
    fontFamily: fontFamiy.medium
  }
});
