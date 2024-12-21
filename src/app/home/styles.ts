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
  },
  ticket: {
    backgroundColor: colors.white,
    borderRadius: 22,
    overflow: "hidden",
    paddingBottom: 24,
    width: "100%"
  },
  content: {
    padding: 20
  },
  flight: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 52,
    width: "100%"
  },
  duration: {
    alignItems: "center"
  },
  hours: {
    color: colors.gray[800],
    fontSize: 14,
    fontFamily: fontFamiy.regular
  },
  label: {
    color: colors.gray[400],
    fontSize: 12,
    fontFamily: fontFamiy.regular,
    textTransform: "uppercase"
  },
  name: {
    color: colors.black,
    fontSize: 24,
    fontFamily: fontFamiy.bold,
  },
  details:{
    marginTop: 52
  },
  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  footer: {
    flexDirection: "row",
    gap: 22,
    padding: 20,
    width: "100%"
  },
  footerContent: {
    flex: 1,
    gap: 24
  }
});
