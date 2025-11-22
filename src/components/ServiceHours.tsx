import { View, Text, StyleSheet } from "react-native";
import { translations } from "../i18n/translations";
import { FC } from "react";

interface Props {
  language: "en" | "zh";
}

export const ServiceHours: FC<Props> = ({ language }) => {
  const i18n = translations[language];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{i18n.serviceHours}</Text>
      <Text style={styles.text}>{i18n.serviceHoursTime}</Text>
      <Text style={styles.text}>{i18n.serviceHoursWeekend}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  text: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 2,
  },
});
