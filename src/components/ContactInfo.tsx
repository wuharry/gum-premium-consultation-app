import { FC, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import { useTranslation } from "react-i18next";

export const ContactInfo: FC = () => {
  const { t } = useTranslation();

  const handleCallPhone = useCallback(() => {
    Linking.openURL("tel:+85228934402");
  }, []);

  const handleSendEmail = useCallback(() => {
    Linking.openURL("mailto:memberservice@gumhk.com");
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("contactInfo")}</Text>
      <TouchableOpacity onPress={handleCallPhone}>
        <Text style={styles.link}>
          {t("hotlineLabel")}: {t("hotline")}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSendEmail}>
        <Text style={styles.link}>
          {t("emailLabel")}: {t("email")}
        </Text>
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
