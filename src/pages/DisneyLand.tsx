import React, { useState } from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { Table, Tooltip, Image } from "antd";
import type { ColumnsType } from "antd/es/table";

interface AreaInfo {
  key: string;
  area: string;
  description: string;
  attractions: string[];
}

interface TipsInfo {
  key: string;
  category: string;
  tips: string[];
  note?: string;
}

const DisneyLand: React.FC = () => {
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);

  const columns: ColumnsType<AreaInfo> = [
    {
      title: "區域名稱",
      dataIndex: "area",
      key: "area",
      width: 150,
      className: "!bg-rose-100 !text-rose-800 font-medium",
      render: (text) => (
        <div className="font-bold text-lg text-rose-900 text-center">
          {text}
        </div>
      ),
    },
    {
      title: "特色介紹",
      dataIndex: "description",
      key: "description",
      className: "!bg-rose-100 !text-rose-800 font-medium",
      render: (text) => (
        <div className="text-gray-700 leading-relaxed text-center">{text}</div>
      ),
    },
    {
      title: "內含遊樂設施",
      dataIndex: "attractions",
      key: "attractions",
      className: "!bg-rose-100 !text-rose-800 font-medium",
      width: 280,
      render: (attractions: string[]) => (
        <div className="space-y-2">
          {attractions.map((attraction, index) => (
            <Tooltip key={index} title="點擊可查看更多資訊" placement="left">
              <div
                className="p-2 rounded-lg transition-all duration-300 hover:bg-rose-50 hover:shadow-md cursor-pointer border border-transparent hover:border-rose-200 text-center"
                onClick={() => console.log(`Clicked: ${attraction}`)}
              >
                {attraction}
              </div>
            </Tooltip>
          ))}
        </div>
      ),
    },
  ];

  const data: AreaInfo[] = [
    {
      key: "1",
      area: "世界市集",
      description:
        "這裡是從園區入口直通城堡廣場的必經通道。\n以 20 世紀初懷舊的美式街道為設計概念，\n當時是電燈、汽車剛發明的年代，\n也是華特剛開始建立迪士尼傳奇的時代。\n沿路兩旁都是迪士尼服飾、配件、周邊商品等賣店，\n不論入園或出園前都可以在這邊採購一番！",
      attractions: ["雙層巴士"],
    },
    {
      key: "2",
      area: "明日樂園",
      description:
        "最多必玩設施聚集的重點區域！\n整區以科幻時尚的銀白色為基調，\n打造趨商而科技的未來世界。",
      attractions: [
        "太空山",
        "巴斯光年星際歷險",
        "怪獸的歡樂之旅",
        "怪獸電力公司「迷藏總發電」",
        "星際旅行：冒險舞航",
        "幸會史迪奇",
      ],
    },
    {
      key: "3",
      area: "卡通城",
      description:
        "這裡是米奇與好朋友們共同居住、工作、遊玩的城鎮，\n整個園區大量使用繽紛卡通色，\n不論是建築物、字體、攤販都溫暖可愛，\n充滿想像力，彷彿走進迪士尼人物們的真實宇宙！",
      attractions: ["米奇公館會米奇", "艾芝迷你雲霄飛車", "兔子蹦蹦卡通慢車"],
    },
    {
      key: "4",
      area: "夢幻樂園",
      description:
        "聚集了愛麗絲夢遊仙境、白雪公主、仙履奇緣、\n美女與野獸、小小世界等迪士尼最人氣的電影動畫宇宙，\n一圓少女們心中永遠的公主夢。",
      attractions: [
        "美女與野獸「城堡奇緣」",
        "小熊維尼獵蜜記",
        "幽靈公館",
        "愛麗絲的午茶派對",
        "小小世界",
        "城堡旋轉木馬",
        "白雪公主冒險旅程",
        "仙履奇緣草話大廳",
        "小飛象",
        "小飛快天空之旅",
        "小木偶奇遇記",
      ],
    },
    {
      key: "5",
      area: "動物天地",
      description:
        "與西部樂園緊鄰，以美國河畔隔開兩園區。\n這裡以飛濺山的朱紅色山脈為中心，\n整體打造猶如踏本營的探險世界。",
      attractions: ["飛濺山", "海獅克萊姆木舟歷險"],
    },
    {
      key: "6",
      area: "西部樂園",
      description:
        "以「巨雷山」的美國西部山脈為中心，\n園區內充斥礦石車、蒸汽船、汽笛聲等元素，\n重現昔日西部拓荒時的淘金世界，彷彿所有夢想都有機會實現！",
      attractions: ["巨雷山", "蒸氣馬克吐溫號", "祠堂溜船之旅巨木筏"],
    },
    {
      key: "7",
      area: "探險樂園",
      description:
        "耳邊開始響起南島音樂，眼前看見中式建築、非洲浩亭、\n南洋稻草屋等異國建築物。沿著河岸聽聚文明，\n一起乘著海盜船，勇闖大自然中的冒險世界！",
      attractions: [
        "西部沿河巡遊",
        "加勒比海盜",
        "叢林巡航：勇闖野生世界",
        "提基神殿：史迪奇呈獻「Aloha E Komo Mai!」",
      ],
    },
  ];

  const tipsColumns: ColumnsType<TipsInfo> = [
    {
      title: "類別",
      dataIndex: "category",
      key: "category",
      width: 150,
      className: "!bg-rose-100 !text-rose-800 font-medium",
      render: (text) => (
        <div className="font-bold text-lg text-rose-900 text-center">
          {text}
        </div>
      ),
    },
    {
      title: "攻略重點",
      dataIndex: "tips",
      key: "tips",
      className: "!bg-rose-100 !text-rose-800 font-medium",
      render: (tips: string[]) => (
        <div className="space-y-2">
          {tips.map((tip, index) => (
            <div key={index} className="p-2 text-center">
              {tip}
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "備註",
      dataIndex: "note",
      key: "note",
      width: 200,
      className: "!bg-rose-100 !text-rose-800 font-medium",
      render: (text) => (
        <div className="text-center italic text-gray-600">{text || "無"}</div>
      ),
    },
  ];

  const tipsData: TipsInfo[] = [
    {
      key: "1",
      category: "門票購買",
      tips: [
        "建議提前在官網購買電子門票",
        "可選擇1日券或多日券",
        "多日券較為划算",
      ],
      note: "旺季時需提前2-3個月購買",
    },
    {
      key: "2",
      category: "抵達方式",
      tips: ["JR舞濱站下車", "搭乘迪士尼度假區線即可抵達", "從東京站約35分鐘"],
      note: "建議提前30分鐘抵達",
    },
    {
      key: "3",
      category: "遊玩順序",
      tips: [
        "開園時先衝熱門設施",
        "建議使用 Disney Premier Access",
        "中午用餐時間可看表演",
      ],
      note: "熱門設施：太空山、大雷山",
    },
    {
      key: "4",
      category: "必備物品",
      tips: ["舒適的走路鞋", "園區地圖", "行動電源", "雨具"],
    },
    {
      key: "5",
      category: "用餐建議",
      tips: [
        "建議提前預約餐廳",
        "可下載官方APP查詢餐廳",
        "避開12:00-13:00用餐尖峰",
      ],
      note: "特色餐廳需提前預約",
    },
  ];

  return (
    <Container>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="relative mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4 relative">
              迪士尼樂園區域介紹
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-rose-300 to-rose-400"></div>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/disney2.jpg"
                alt="迪士尼樂園圖片2"
                className="w-full h-[300px] object-cover"
                preview={{
                  mask: <div className="text-lg">點擊查看大圖</div>,
                }}
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/disney3.jpg"
                alt="迪士尼樂園圖片3"
                className="w-full h-[300px] object-cover"
                preview={{
                  mask: <div className="text-lg">點擊查看大圖</div>,
                }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <Table
              columns={columns}
              dataSource={data}
              pagination={false}
              bordered
              onRow={(record) => ({
                onMouseEnter: () => setHoveredRow(record.key),
                onMouseLeave: () => setHoveredRow(null),
              })}
              rowClassName={(record) =>
                `transition-all duration-300 ${
                  hoveredRow === record.key ? "bg-rose-50" : ""
                }`
              }
              className="[&_.ant-table-thead>tr>th]:!py-4
                        [&_.ant-table-thead>tr>th]:!text-lg
                        [&_.ant-table-thead>tr>th]:!text-center
                        [&_.ant-table-tbody>tr>td]:!align-middle 
                        [&_.ant-table-tbody>tr>td]:!py-6
                        [&_.ant-table-tbody>tr>td]:!px-6
                        [&_.ant-table-tbody>tr>td]:!whitespace-pre-line
                        [&_.ant-table]:!text-base
                        [&_.ant-table-thead>tr>th]:!border-b-2
                        [&_.ant-table-thead>tr>th]:!border-rose-200
                        [&_.ant-table-tbody>tr>td]:!border-rose-100
                        [&_.ant-table-tbody>tr:hover>td]:!bg-transparent
                        [&_.ant-table]:!border-rose-100"
            />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              行程攻略
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Table
                columns={tipsColumns}
                dataSource={tipsData}
                pagination={false}
                bordered
                className="[&_.ant-table-thead>tr>th]:!py-4
                          [&_.ant-table-thead>tr>th]:!text-lg
                          [&_.ant-table-thead>tr>th]:!text-center
                          [&_.ant-table-tbody>tr>td]:!align-middle 
                          [&_.ant-table-tbody>tr>td]:!py-6
                          [&_.ant-table-tbody>tr>td]:!px-6
                          [&_.ant-table-tbody>tr>td]:!whitespace-pre-line
                          [&_.ant-table]:!text-base
                          [&_.ant-table-thead>tr>th]:!border-b-2
                          [&_.ant-table-thead>tr>th]:!border-rose-200
                          [&_.ant-table-tbody>tr>td]:!border-rose-100
                          [&_.ant-table]:!border-rose-100"
              />
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-rose-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                參考網站
              </h2>
              <div className="flex items-center p-4 bg-rose-50 rounded-lg hover:bg-rose-100 transition-colors duration-300">
                <img
                  src="/images/disney-logo.png"
                  alt="Tokyo Disneyland Logo"
                  className="w-12 h-12 object-contain mr-4"
                />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    東京迪士尼樂園官方網站
                  </h3>
                  <a
                    href="https://www.tokyodisneyresort.jp/tc/tdl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-600 hover:text-rose-700 hover:underline flex items-center"
                  >
                    www.tokyodisneyresort.jp/tc/tdl/
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-600">
            <p className="text-sm">
              提示：將滑鼠移到遊樂設施上可以查看更多資訊
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DisneyLand;
