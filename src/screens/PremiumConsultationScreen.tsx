import { FC, useCallback, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import { useTranslation } from "react-i18next";

import { useSpecialists } from "../hooks/useSpecialists";
import { SpecialistCard } from "../components/SpecialistCard";
import { ServiceHours } from "../components/ServiceHours";
import { ActionButtons } from "./ActionButtons";
import { ContactInfo } from "../components/ContactInfo";
import { ErrorView } from "../components/ErrorView";
// @ts-expect-error: allow importing image asset without module declaration
import BannerImage from "../../assets/banner.png";
import { SupportedLanguage } from "../types/language.types";

export const PremiumConsultationScreen: FC = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState<SupportedLanguage>(
    i18n.language === "zh"
      ? SupportedLanguage.Chinese
      : SupportedLanguage.English
  );
  const [bottomInset, setBottomInset] = useState(0);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => [280, 400], []);

  const { data: specialists, isLoading, isError, refetch } = useSpecialists();

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => {
      const next =
        prev === SupportedLanguage.English
          ? SupportedLanguage.Chinese
          : SupportedLanguage.English;

      const nextCode = next === SupportedLanguage.English ? "en" : "zh";
      if (i18n.language !== nextCode) {
        i18n.changeLanguage(nextCode);
      }

      return next;
    });
  }, [i18n]);

  // Loading state
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  // Error state
  if (isError) {
    return (
      <SafeAreaView style={styles.container}>
        <ErrorView onRetry={refetch} />
      </SafeAreaView>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container} edges={["top"]}>
        {/* Language toggle button */}
        <TouchableOpacity
          style={styles.languageButton}
          onPress={toggleLanguage}
        >
          <Text style={styles.languageText}>
            {language === SupportedLanguage.English ? "中文" : "EN"}
          </Text>
        </TouchableOpacity>

        <ScrollView
          contentContainerStyle={[
            styles.scrollContent,
            { paddingBottom: bottomInset + 40 },
          ]}
        >
          {/* Top banner */}
          <View style={styles.banner}>
            <Image
              source={BannerImage}
              style={styles.bannerImage}
              resizeMode="cover"
            />
          </View>

          {/* Title section */}
          <View style={styles.titleSection}>
            <Text style={styles.subtitle}>{t("titleLine1")}</Text>
            <Text style={styles.title}>{t("titleLine2")}</Text>
            <Text style={styles.description}>{t("subtitle")}</Text>
          </View>

          {/* Specialist list */}
          <View style={styles.specialistList}>
            {specialists?.map((specialist) => (
              <SpecialistCard
                key={specialist.id}
                specialist={specialist}
                language={language}
              />
            ))}
          </View>

          {/* Contact information */}
          <ContactInfo />

          {/* Agreement */}
          <View style={styles.agreementContainer}>
            <Text style={styles.agreementText}>⚠️ {t("agreement")}</Text>
          </View>
        </ScrollView>

        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          backgroundStyle={styles.bottomSheetBackground}
          handleIndicatorStyle={styles.bottomSheetIndicator}
        >
          <View
            style={styles.bottomSheetContent}
            onLayout={(event) => {
              const { height } = event.nativeEvent.layout;
              setBottomInset(height);
            }}
          >
            <ServiceHours />
            <ActionButtons language={language} />
          </View>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  languageButton: {
    position: "absolute",
    top: 50,
    right: 16,
    zIndex: 10,
    backgroundColor: "#000",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  languageText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },
  banner: {
    height: 200,
    backgroundColor: "#D4C5A0",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  titleSection: {
    padding: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#999",
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
  specialistList: {
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 16,
  },
  bottomSheetBackground: {
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  bottomSheetIndicator: {
    backgroundColor: "#999",
    width: 40,
  },
  bottomSheetContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
  },
  agreementContainer: {
    padding: 16,
    backgroundColor: "#FFF9E6",
    margin: 16,
    borderRadius: 8,
  },
  agreementText: {
    fontSize: 12,
    color: "#666",
    lineHeight: 18,
  },
});
