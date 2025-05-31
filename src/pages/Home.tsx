import Container from "../components/Container";
import Navbar from "../components/Navbar";
import ImageCarousel from "../components/ImageCarousel";
import { Table, Tabs } from "antd";
import type { TabsProps } from "antd";
import "antd/dist/reset.css";
import { useEffect, useState } from "react";

interface DayData {
  key: string;
  time: string;
  day1: string;
  day2: string;
  day3: string;
  day4: string;
  day5: string;
  day6: string;
}

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const columns = [
    {
      title: () => <div className="text-center">時間</div>,
      dataIndex: "time",
      key: "time",
      width: isMobile ? 80 : 100,
      className: "text-lg font-medium text-center",
    },
    {
      title: () => <div className="text-center">行程內容</div>,
      dataIndex: "content",
      key: "content",
      className: "whitespace-pre-line text-base md:text-lg text-center",
    },
  ];

  const data = [
    {
      key: "1",
      time: "早上",
      day1: "家裡->桃園機場",
      day2: "鎌倉大佛\n+小町通商店街\n+鎌倉高校前平交道\n田原町站→新橋站\n(銀座線)\n新橋站→鎌倉站\n(橫須賀線)\n(大約1小時20分鐘)",
      day3: "雷門淺草寺\n(銀座至銀10分鐘)",
      day4: "東京迪士尼\n(約乘車約30分鐘)",
      day5: "明治神宮\n+竹下通\n+表參道",
      day6: "11:00退房\n+田原町站→上野站\n(銀座線3分鐘)\n上野站→成田機場\n(Skyliner40分鐘)",
    },
    {
      key: "2",
      time: "午餐",
      day1: "自行處理",
      day2: "自行處理",
      day3: "自行處理",
      day4: "自行處理",
      day5: "自行處理",
      day6: "自行處理",
    },
    {
      key: "3",
      time: "下午",
      day1: "13:00台北→17:15東京",
      day2: "江島神社\n+江之島\n+弁財天仲見世通",
      day3: "東京大學\n田原町站→上野廣小路站\n(銀座線)\n上野御徒町站→本鄉三丁目站\n(大江戶線)\n阿美橫町\n本鄉三丁目站→上野御徒町站\n走路至上野廣小路站\n(大江戶線)",
      day4: "東京迪士尼",
      day5: "澀谷+涉谷爆逛",
      day6: "15:45東京→18:25台北",
    },
    {
      key: "4",
      time: "晚餐",
      day1: "自行處理",
      day2: "自行處理",
      day3: "自行處理",
      day4: "自行處理",
      day5: "自行處理",
      day6: "自行處理",
    },
    {
      key: "5",
      time: "晚上",
      day1: "成田機場→上野站\n(skyliner40分鐘)\n上野站→田原町站\n(銀座線3分鐘)\n飯店Checkin\n(走路4分鐘)",
      day2: "續上+返回淺草\n藤澤站→上野站\n(東海道本線)\n上野站→田原町站\n(銀座線)",
      day3: "晴空塔(20:00入場)\n上野廣小路站→淺草站(銀座線)\n淺草站→押上站(淺草線)\n(約20分鐘)",
      day4: "東京迪士尼\n舞濱站→八丁堀站(JR京葉線)\n八丁堀站→上野站(日比谷線)\n上野站→田原町站(銀座線)",
      day5: "Shibuya Sky(傍晚)",
      day6: "回家",
    },
    {
      key: "6",
      time: "備註",
      day1: "",
      day2: "晉哥(全天)",
      day3: "晉哥(晴空塔)",
      day4: "",
      day5: "",
      day6: "晉哥(澀谷)",
    },
  ];

  const getDayData = (dayIndex: number) => {
    const dayKey = `day${dayIndex}` as keyof DayData;
    return [
      {
        key: "1",
        time: "早上",
        content: data[0][dayKey],
      },
      {
        key: "2",
        time: "午餐",
        content: data[1][dayKey],
      },
      {
        key: "3",
        time: "下午",
        content: data[2][dayKey],
      },
      {
        key: "4",
        time: "晚餐",
        content: data[3][dayKey],
      },
      {
        key: "5",
        time: "晚上",
        content: data[4][dayKey],
      },
      {
        key: "6",
        time: "備註",
        content: data[5][dayKey],
      },
    ];
  };

  const dates = [
    "6/14(三)",
    "6/15(四)",
    "6/16(一)",
    "6/17(二)",
    "6/18(三)",
    "6/19(四)",
  ];

  const items: TabsProps["items"] = dates.map((date, index) => ({
    key: String(index + 1),
    label: isMobile ? date.split("(")[0] : date,
    children: (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Table
          columns={columns}
          dataSource={getDayData(index + 1)}
          bordered
          pagination={false}
          scroll={{ x: true }}
          className="[&_.ant-table-thead>tr>th]:!bg-gray-800 [&_.ant-table-thead>tr>th]:!text-white
                    [&_.ant-table-thead>tr>th]:!text-base md:[&_.ant-table-thead>tr>th]:!text-lg [&_.ant-table-thead>tr>th]:!font-medium
                    [&_.ant-table-tbody>tr>td]:!py-2 md:[&_.ant-table-tbody>tr>td]:!py-4 
                    [&_.ant-table-tbody>tr>td]:!px-2 md:[&_.ant-table-tbody>tr>td]:!px-6
                    [&_.ant-table-tbody>tr:hover>td]:!bg-pink-50
                    [&_.ant-table-tbody>tr>td]:!align-middle [&_.ant-table-tbody>tr>td]:!text-center
                    [&_.ant-table]:!text-sm md:[&_.ant-table]:!text-base"
        />
      </div>
    ),
  }));

  return (
    <Container>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-2 md:px-4 py-4 md:py-8">
          <div className="mb-4 md:mb-8">
            <ImageCarousel />
          </div>
          <div className="relative mb-6 md:mb-12">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-4 relative">
              東京旅遊行程表
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-16 md:w-24 h-1 bg-gradient-to-r from-pink-300 to-pink-500"></div>
            </h1>
          </div>
          <Tabs
            items={items}
            className="[&_.ant-tabs-tab]:!text-base md:[&_.ant-tabs-tab]:!text-lg 
                      [&_.ant-tabs-tab.ant-tabs-tab-active]:!text-pink-500
                      [&_.ant-tabs-ink-bar]:!bg-pink-500
                      [&_.ant-tabs-nav]:!mx-1 md:[&_.ant-tabs-nav]:!mx-0"
            centered
            size={isMobile ? "small" : "middle"}
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
