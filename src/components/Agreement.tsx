import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { translations } from "../i18n/translations";

interface Props {
  language: "en" | "zh";
}

export const Agreement: React.FC<Props> = ({ language }) => {
  const i18n = translations[language];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>⚠️ {i18n.agreement}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#FFF9E6",
    margin: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 12,
    color: "#666",
    lineHeight: 18,
  },
});
