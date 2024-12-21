import { styles } from "@/app/home/styles";
import { ImageBackground, Text, View } from "react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={require("@/assets/background.jpg")}
      >
        <View style={styles.overlay} />
        <Text style={styles.title}>Cartão de embarque</Text>
        <Text style={styles.subtitle}>Faltam 45 dias para sua viagem</Text>
      </ImageBackground>
    </View>
  );
}
