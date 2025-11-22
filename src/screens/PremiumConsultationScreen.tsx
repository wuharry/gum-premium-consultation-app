import { FC, useState } from "react";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Text,
} from "react-native";

import {
  ErrorView,
  SpecialistCard,
  ContactInfo,
  Agreement,
  ServiceHours,
  ActionButtons,
} from "../components";
import { translations } from "../i18n/translations";
import { useSpecialists } from "../hooks/useSpecialists";

export const PremiumConsultationScreen: FC = () => {
  const [language, setLanguage] = useState<"en" | "zh">("en");
  // const [specialists, setSpecialists] = useState<Specialist[]>([]);

  const {
    data: specialists = [],
    isLoading,
    isError,
    refetch,
  } = useSpecialists();

  const i18n = translations[language];

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFF",
        }}
      >
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFF" }}>
        <ErrorView onRetry={refetch} language={language} />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      {/* 語言切換按鈕 */}
      <View
        style={{
          position: "absolute",
          top: 50,
          right: 16,
          zIndex: 10,
          backgroundColor: "#000",
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 16,
        }}
      >
        <TouchableOpacity
          onPress={() => setLanguage(language === "en" ? "zh" : "en")}
        >
          <Text style={{ color: "#FFF", fontSize: 12, fontWeight: "600" }}>
            {language === "en" ? "中文" : "EN"}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* 頂部橫幅圖片區 */}
        <View
          style={{
            height: 200,
            backgroundColor: "#D4C5A0",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 18, color: "#666" }}>
            Specialist Banner Image
          </Text>
        </View>

        {/* 標題 */}
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 16, color: "#999", marginBottom: 8 }}>
            {i18n.title.split("\n")[0]}
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 8,
            }}
          >
            {i18n.title.split("\n")[1]}
          </Text>
          <Text style={{ fontSize: 14, color: "#666", lineHeight: 20 }}>
            {i18n.subtitle}
          </Text>
        </View>

        {/* 專家列表 */}
        <View style={{ paddingHorizontal: 16 }}>
          {specialists.map((specialist) => (
            <SpecialistCard
              key={specialist.id}
              specialist={specialist}
              language={language}
            />
          ))}
        </View>

        {/* 聯絡資訊 */}
        <ContactInfo language={language} />

        {/* 協議 */}
        <Agreement language={language} />

        {/* 底部空間 */}
        <View style={{ height: 120 }} />
      </ScrollView>

      {/* 固定在底部的按鈕區 */}
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#FFF",
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
          paddingVertical: 16,
          paddingBottom: 32,
        }}
      >
        <ServiceHours language={language} />
        <ActionButtons language={language} />
      </View>
    </View>
  );
};
