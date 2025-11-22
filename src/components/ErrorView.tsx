import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { translations } from "../i18n/translations";
import { FC } from "react";

interface Props {
  onRetry: () => void;
  language: "en" | "zh";
}

export const ErrorView: FC<Props> = ({ onRetry, language }) => {
  const i18n = translations[language];

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{i18n.errorMessage}</Text>

      <TouchableOpacity style={styles.button} onPress={onRetry}>
        <Text style={styles.buttonText}>{i18n.retry}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  message: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 24,
  },
  button: {
    backgroundColor: "#000",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
});
