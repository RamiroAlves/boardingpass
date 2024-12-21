import { colors } from "@/styles/colors";
import { fontFamiy } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    label: {
        color: colors.gray[400],
        fontSize: 10,
        fontFamily: fontFamiy.regular,
        textTransform: "uppercase"
    },
    value: {
        color: colors.black,
        fontSize: 16,
        fontFamily: fontFamiy.medium,
    }
})