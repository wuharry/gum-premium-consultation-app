import { View, Text, StyleSheet } from "react-native";
import { FC } from "react";
import { useTranslation } from "react-i18next";

export const ServiceHours: FC = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("serviceHours")}</Text>
      <Text style={styles.text}>{t("serviceHoursTime")}</Text>
      <Text style={styles.text}>{t("serviceHoursWeekend")}</Text>
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
