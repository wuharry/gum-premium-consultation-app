import { FC } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Specialist } from "../types/specialist.types";
import { SupportedLanguage } from "../types/language.types";

interface SpecialistCardProps {
  specialist: Specialist;
  language: SupportedLanguage;
}

export const SpecialistCard: FC<SpecialistCardProps> = ({
  specialist,
  language,
}) => {
  const displayName =
    language === SupportedLanguage.English
      ? specialist.name
      : specialist.nameZh;

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Image source={{ uri: specialist.imageUrl }} style={styles.image} />
      </View>
      <Text style={styles.name}>{displayName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "#CCCCCC",
    marginRight: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});
