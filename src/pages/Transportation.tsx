import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import TransportationCard from "../components/TransportationCard";
import AccordionSection from "../components/AccordionSection";

const Transportation: React.FC = () => {
  const subwayContent = {
    dailyRoutes: {
      day1: {
        date: "Day1 (6/14)",
        routes: ["住宿CheckIn: 上野站 (銀座線) -> 田原町站 (銀座線)"],
      },
      day2: {
        date: "Day2 (6/15)",
        routes: [
          "去程: 田原町站 (銀座線) -> 新橋站 (銀座線) -> 新橋站 (橫須賀線) -> 鎌倉站 (橫須賀線)",
          "回程: 藤澤站 (東海道本線) -> 上野站 (東海道本線) -> 上野站 (銀座線) -> 田原町站 (銀座線)",
        ],
      },
      day3: {
        date: "Day3 (6/16)",
        routes: [
          "東京大學: 田原町站 (銀座線) -> 上野廣小路站 (銀座線) -> 走路至上野御徒町站 (大江戶線) -> 本鄉三丁目站 (大江戶線)",
          "阿美橫丁: 本鄉三丁目站 (大江戶線) -> 上野御徒町站 (大江戶線) -> 走路至上野廣小路站",
          "晴空塔去程: 上野廣小路站 (銀座線) -> 淺草站(銀座線) -> 淺草站(淺草線) -> 押上站(淺草線)",
          "晴空塔回程: 押上站 (淺草線) -> 淺草站(淺草線) -> 淺草站(銀座線) -> 田原町站 (銀座線)",
        ],
      },
      day4: {
        date: "Day4 (6/17)",
        routes: [
          "去程: 計程車",
          "回程: 舞濱站(JR京葉線) -> 八丁堀站(JR京葉線) -> 八丁堀站(JR京葉線) -> 上野站(日比谷線) -> 上野站(銀座線) -> 田原町站 (銀座線)",
        ],
      },
      day5: {
        date: "Day5 (6/18)",
        routes: [
          "明治神宮: 田原町站 (銀座線) -> 表參道 (銀座線) -> 表參道 (千代田線) -> 明治神宮前站 (千代田線)",
          "澀谷:  表參道 (銀座線) -> 澀谷站 (銀座線)",
          "回程: 澀谷站 (銀座線) -> 田原町站 (銀座線)",
        ],
      },
      day6: {
        date: "Day6 (6/19)",
        routes: ["機場路線: 田原町站 (銀座線) ⇔ 上野站 (銀座線)"],
      },
    },
  };

  const transportationData = [
    {
      title: "機票資訊",
      imagePaths: ["airplane.jpg"],
      description: `去程：6/14(六) 13:00 台北 → 17:15 東京
回程：6/19(四) 15:45 東京 → 18:25 台北
航空公司：國泰航空
去程航班：CX450
回程航班：CX451
機場：桃園國際機場  ⇔ 成田國際機場 `,
    },
    {
      title: "Skyliner 特急列車",
      imagePaths: ["Skyliner.webp"],
      description: `成田機場 ⇔ 上野站
票價：來回935台幣
車程時間：約40分鐘
注意事項：在線上先買好Skyliner車票者，記得先到售票處或服務中心 (皆在車站入口旁)，出示憑證更換成實體車票
營運時間：07:30-22:30
參考資訊 :https://bobbyworld.tw/2024-02-18-2977/`,
    },
    {
      title: "東京地鐵與JR",
      imagePaths: ["subway.png", "JR.jpg"],
      customContent: (
        <div className="space-y-4">
          {Object.values(subwayContent.dailyRoutes).map((day) => (
            <AccordionSection key={day.date} title={day.date}>
              <ul className="list-disc pl-4 space-y-2">
                {day.routes.map((route, index) => (
                  <li key={index} className="text-gray-600">
                    {route}
                  </li>
                ))}
              </ul>
            </AccordionSection>
          ))}
        </div>
      ),
    },
    {
      title: "江之島電鐵",
      imagePaths: ["enoden.png", "enoden2.png"],
      description: `江之島電鐵是連接鎌倉站和藤澤站之間的鐵路路線，是鎌倉市和藤澤市之間的重要交通工具。
路線：鎌倉站 ⇔ 藤澤站
特色：沿著海岸線行駛的復古電車
`,
    },
  ];

  return (
    <Container>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="relative mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4 relative">
              交通資訊
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-300 to-pink-500"></div>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {transportationData.map((item, index) => (
              <TransportationCard
                key={index}
                title={item.title}
                imagePaths={item.imagePaths}
                description={item.description}
                customContent={item.customContent}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Transportation;
