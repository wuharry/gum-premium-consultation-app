import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import { translations } from "../i18n/translations";
import { FC } from "react";

interface Props {
  language: "en" | "zh";
}

export const ActionButtons: FC<Props> = ({ language }) => {
  const i18n = translations[language];

  // 點擊預約按鈕
  const handleBookAppointment = () => {
    Linking.openURL("https://gainmiles.simplybook.asia/v2/");
  };

  // 點擊 WhatsApp 按鈕
  const handleWhatsApp = () => {
    const message =
      language === "en"
        ? "Hello, I would like to learn more about MPF information."
        : "你好，我想了解更多有關強積金嘅資訊";
    const url = `https://wa.me/85260300900?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleBookAppointment}>
        <Text style={styles.buttonText}>{i18n.bookAppointment}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleWhatsApp}>
        <Text style={styles.buttonText}>{i18n.whatsappUs}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 12,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
