import Container from "../components/Container";
import Navbar from "../components/Navbar";
import { Table, Image } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useMediaQuery } from "react-responsive";

interface TipsInfo {
  key: string;
  category: string;
  tips: Array<{
    name: string;
    image?: string;
  }>;
  note?: string;
}

const DisneyLand: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const tipsColumns: ColumnsType<TipsInfo> = [
    {
      title: "遊玩順序",
      dataIndex: "category",
      key: "category",
      width: isMobile ? 100 : 180,
      className: "!bg-rose-50 !text-rose-800 font-medium",
      render: (text) => (
        <div className="font-bold text-base md:text-lg text-rose-900 text-center py-2 px-3 rounded-lg bg-rose-100/50">
          {text}
        </div>
      ),
      fixed: "left",
    },
    {
      title: "設施活動",
      dataIndex: "tips",
      key: "tips",
      className: "!bg-rose-50 !text-rose-800 font-medium",
      render: (tips: Array<{ name: string; image?: string }>) => (
        <div className="space-y-4 py-2 md:py-4 min-w-[280px]">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {tip.image && (
                <img
                  src={`/images/${tip.image}.jpg`}
                  alt={tip.name}
                  className="w-full md:w-[160px] h-[120px] md:h-[100px] object-cover rounded-lg"
                />
              )}
              <div className="flex-1 text-center md:text-left mt-2 md:mt-0">
                <div className="text-gray-800 font-medium text-sm md:text-lg">
                  {tip.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "備註",
      dataIndex: "note",
      key: "note",
      width: isMobile ? 120 : 220,
      className: "!bg-rose-50 !text-rose-800 font-medium",
      render: (text) => (
        <div className="text-gray-700 text-sm md:text-base p-2 md:p-3 bg-rose-100/30 rounded-lg whitespace-pre-wrap min-w-[100px]">
          {text || "無"}
        </div>
      ),
      fixed: "right",
    },
  ];

  const tipsData: TipsInfo[] = [
    {
      key: "1",
      category: "明日樂園",
      tips: [
        {
          name: "怪獸電力公司「迷藏巡迴車」",
          image: "game1",
        },
        {
          name: "星際旅行：冒險續航",
          image: "game2",
        },
        {
          name: "杯麵歡樂之旅",
          image: "game11",
        },
      ],
      note: "要排很久的話就就3選2",
    },
    {
      key: "2",
      category: "夢幻樂園",
      tips: [
        {
          name: "美女與野獸「城堡奇緣」",
          image: "game6",
        },
        {
          name: "仙履奇緣童話大廳",
          image: "game5",
        },
        {
          name: "小飛俠天空之旅",
          image: "game7",
        },
        {
          name: "小熊維尼獵蜜記",
          image: "game8",
        },
        {
          name: "幽靈公館",
          image: "game9",
        },
      ],
      note: "美女與野獸=>DPA快速通關\n小熊維尼和幽靈公館=>優先入場卡",
    },
    {
      key: "3",
      category: "卡通城",
      tips: [
        {
          name: "米奇公館會米奇",
        },
      ],
      note: "超閒再去",
    },
    {
      key: "4",
      category: "動物天地",
      tips: [
        {
          name: "飛濺山",
          image: "game4",
        },
      ],
      note: "直接玩或是DPA快速通關",
    },
    {
      key: "5",
      category: "西部樂園+探險樂園",
      tips: [
        {
          name: "加勒比海盜",
          image: "game3",
        },
      ],
      note: "依時間安排",
    },
    {
      key: "6",
      category: "表演活動",
      tips: [
        {
          name: "午間遊行 (13:40)",
          image: "game12",
        },
        {
          name: "城堡燈光秀 (19:30)",
          image: "game13",
        },
        {
          name: "晚間遊行 (20:25)",
          image: "game14",
        },
      ],
      note: "建議提前15-30分鐘到場",
    },
  ];

  const MobileView = () => (
    <div className="space-y-6">
      {tipsData.map((item) => (
        <div
          key={item.key}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="bg-rose-50 p-3">
            <div className="font-bold text-lg text-rose-900 text-center">
              {item.category}
            </div>
          </div>

          <div className="p-4 space-y-4">
            {item.tips.map((tip, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-rose-50/20 p-3 rounded-xl"
              >
                {tip.image && (
                  <img
                    src={`/images/${tip.image}.jpg`}
                    alt={tip.name}
                    className="w-full h-[180px] object-cover rounded-lg mb-3"
                  />
                )}
                <div className="text-gray-800 font-medium text-base text-center">
                  {tip.name}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-rose-50/30 p-3 border-t border-rose-100">
            <div className="text-gray-700 text-sm text-center">
              {item.note || "無"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const DesktopView = () => (
    <div className="overflow-x-auto">
      <Table
        columns={tipsColumns}
        dataSource={tipsData}
        pagination={false}
        bordered
        className="
          [&_.ant-table-thead>tr>th]:!bg-rose-50
          [&_.ant-table-thead>tr>th]:!py-4
          [&_.ant-table-thead>tr>th]:!text-lg
          [&_.ant-table-thead>tr>th]:!font-bold
          [&_.ant-table-thead>tr>th]:!text-rose-900
          [&_.ant-table-thead>tr>th]:!text-center
          [&_.ant-table-tbody>tr>td]:!align-top
          [&_.ant-table-tbody>tr>td]:!bg-white
          [&_.ant-table-tbody>tr:hover>td]:!bg-rose-50/30
          [&_.ant-table-tbody>tr>td]:!transition-colors
          [&_.ant-table-tbody>tr>td]:!duration-300
          [&_.ant-table]:!border-rose-100
          [&_.ant-table-cell]:!border-rose-100/50
          [&_.ant-table-cell]:!p-4
        "
      />
    </div>
  );

  return (
    <Container>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-2 md:px-6 py-4 md:py-8">
          <div className="relative mb-8 md:mb-12">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-4 relative">
              迪士尼樂園攻略
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-rose-300 to-rose-400"></div>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/disney2.jpg"
                alt="迪士尼樂園地圖"
                className="w-full h-[300px] object-cover"
                preview={{
                  mask: <div className="text-lg">點擊查看園區地圖</div>,
                }}
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/disney3.jpg"
                alt="迪士尼樂園地圖"
                className="w-full h-[300px] object-cover"
                preview={{
                  mask: <div className="text-lg">點擊查看園區地圖</div>,
                }}
              />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            {isMobile ? <MobileView /> : <DesktopView />}
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
        </div>
      </div>
    </Container>
  );
};

export default DisneyLand;
