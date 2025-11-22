// App.tsx

import { GestureHandlerRootView } from "react-native-gesture-handler"; //讓所有會用手勢的元件能正常運作
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"; //讓 BottomSheetModal 可以在整個應用中共享 context
import { PremiumConsultationScreen } from "./src/screens";

// 建議放在 component 外面，避免每次 re-render 重建
const queryClient = new QueryClient();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <BottomSheetModalProvider>
          <PremiumConsultationScreen />
        </BottomSheetModalProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
