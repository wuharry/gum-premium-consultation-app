import { FC, useCallback } from "react";
import { View, Linking, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import { SupportedLanguage } from "../types/language.types";
import { PrimaryButton } from "../components/PrimaryButton";

interface ActionButtonsProps {
  language: SupportedLanguage;
}
export const ActionButtons: FC<ActionButtonsProps> = ({ language }) => {
  const { t } = useTranslation();

  // Handle "Book appointment" button press
  const handleBookAppointment = useCallback(() => {
    Linking.openURL("https://gainmiles.simplybook.asia/v2/");
  }, []);

  // Handle WhatsApp button press
  const handleWhatsApp = useCallback(() => {
    const message = t("whatsappMessage");

    const url = `https://wa.me/85260300900?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  }, [t]);

  return (
    <View style={styles.container}>
      <PrimaryButton
        title={t("bookAppointment")}
        onPress={handleBookAppointment}
      />
      <PrimaryButton title={t("whatsappUs")} onPress={handleWhatsApp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
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
