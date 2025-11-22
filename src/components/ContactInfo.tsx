import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import { translations } from "../i18n/translations";

interface Props {
  language: "en" | "zh";
}

export const ContactInfo: React.FC<Props> = ({ language }) => {
  const i18n = translations[language];

  const handleCallPhone = () => {
    Linking.openURL("tel:+85228934402");
  };

  const handleSendEmail = () => {
    Linking.openURL("mailto:memberservice@gumhk.com");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.contactInfo}</Text>

      <TouchableOpacity onPress={handleCallPhone}>
        <Text style={styles.link}>Hotline: {i18n.hotline}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSendEmail}>
        <Text style={styles.link}>Email: {i18n.email}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F9F9F9",
    marginTop: 16,
  },
  text: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  link: {
    fontSize: 14,
    color: "#007AFF",
    marginTop: 8,
  },
});
