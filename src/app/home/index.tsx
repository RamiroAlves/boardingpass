import { ImageBackground, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Flight } from "@/components/flights";
import { Info } from "@/components/info";

import { styles } from "@/app/home/styles";
import { colors } from "@/styles/colors";

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

      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label="São Paulo" value="GRU" />

            <View style={styles.duration}>
              <Ionicons name="airplane-sharp" size={32} color={colors.black} />
              <Text style={styles.hours}>9h 45min</Text>
            </View>

            <Flight label="Nova York" value="JFK" />
          </View>

          <Text style={styles.label}>Passageiro</Text>
          <Text style={styles.name}>Ramiro Alves</Text>

          <View style={styles.details}>
            <View style={styles.inline}>
              <Info label="Data" value="17 de Nov." />
              <Info label="Embarque" value="17:25" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
