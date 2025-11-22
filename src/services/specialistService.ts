import { Specialist } from "../types";

// 硬編碼的專家資料
const mockSpecialists: Specialist[] = [
  {
    id: "1",
    name: "Kan Chung",
    nameZh: "鍾先生",
    imageUrl: "https://via.placeholder.com/100/CCCCCC/666666?text=Kan",
  },
  {
    id: "2",
    name: "Alisa Mak",
    nameZh: "麥小姐",
    imageUrl: "https://via.placeholder.com/100/CCCCCC/666666?text=Alisa",
  },
  {
    id: "3",
    name: "Justin Liu",
    nameZh: "劉先生",
    imageUrl: "https://via.placeholder.com/100/CCCCCC/666666?text=Justin",
  },
];

// 模擬 API 呼叫
export const fetchSpecialists = async (): Promise<Specialist[]> => {
  // 模擬網路延遲
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return mockSpecialists;
};
