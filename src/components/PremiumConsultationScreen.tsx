import { FC, useMemo, useRef, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet from "@gorhom/bottom-sheet";
import { useSpecialists } from "../hooks";
import { translations } from "../i18n/translations";
import {
  SpecialistCard,
  ServiceHours,
  ActionButtons,
  ContactInfo,
  Agreement,
  ErrorView,
} from "../components";

export const PremiumConsultationScreen: FC = () => {
  const [language, setLanguage] = useState<"en" | "zh">("en");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "35%"], []);
  const { data: specialists, isLoading, isError, refetch } = useSpecialists();

  const i18n = translations[language];

  // 載入中畫面
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  // 錯誤畫面
  if (isError) {
    return (
      <SafeAreaView style={styles.container}>
        <ErrorView onRetry={() => refetch()} language={language} />
      </SafeAreaView>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        {/* 語言切換按鈕 */}
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => setLanguage(language === "en" ? "zh" : "en")}
        >
          <Text style={styles.languageText}>
            {language === "en" ? "中文" : "EN"}
          </Text>
        </TouchableOpacity>

        <ScrollView>
          {/* 頂部橫幅 */}
          <View style={styles.banner}>
            <Text style={styles.bannerText}>Specialist Banner Image</Text>
          </View>

          {/* 標題區 */}
          <View style={styles.titleSection}>
            <Text style={styles.subtitle}>{i18n.title.split("\n")[0]}</Text>
            <Text style={styles.title}>{i18n.title.split("\n")[1]}</Text>
            <Text style={styles.description}>{i18n.subtitle}</Text>
          </View>

          {/* 專家列表 */}
          <View style={styles.specialistList}>
            {specialists?.map((specialist) => (
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

          {/* 底部空間（讓內容不被固定按鈕遮住）*/}
          <View style={{ height: 120 }} />
        </ScrollView>
        <BottomSheet
          ref={bottomSheetRef}
          index={0} // 初始狀態：第一個停靠點（25%）
          snapPoints={snapPoints}
          enablePanDownToClose={false} // 不允許完全關閉
          backgroundStyle={styles.bottomSheetBackground}
          handleIndicatorStyle={styles.bottomSheetIndicator}
        >
          <View style={styles.bottomSheetContent}>
            <ServiceHours language={language} />
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
  bannerText: {
    fontSize: 18,
    color: "#666",
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
  bottomSection: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    paddingVertical: 16,
    paddingBottom: 32,
  },
  bottomSheetBackground: {
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  bottomSheetIndicator: {
    backgroundColor: "#999",
    width: 40,
  },
  bottomSheetContent: {
    flex: 1,
    paddingBottom: 32,
  },
});
