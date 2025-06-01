import React from "react";
import Container from "../components/Container";
import Navbar from "../components/Navbar";

const Hotel: React.FC = () => {
  return (
    <Container>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="relative mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4 relative">
              住宿資訊
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-300 to-pink-500"></div>
            </h1>
          </div>

          {/* 飯店資訊卡片 */}
          <div className="max-w-4xl mx-auto mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    変なホテル東京 浅草田原町
                  </h2>
                  <h3 className="text-xl text-gray-600 mb-2">
                    Henn na Hotel Tokyo Asakusa Tawaramachi
                  </h3>
                </div>
                <a
                  href="https://tokyo-asakusa-tawaramachi.hennnahotel.com/zh-hant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-200 mt-4 md:mt-0"
                >
                  <span>官方網站</span>
                  <svg
                    className="w-4 h-4 ml-2"
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

              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium">地址：</span>3 Chome-19番地8号
                  Kotobuki, Taito City, Tokyo 111-0042
                </p>
                <p>
                  <span className="font-medium">最近車站：</span>
                  東京地下鐵銀座線「田原町站」步行4分鐘
                </p>
                <p>
                  <span className="font-medium">特色：</span>
                  機器人服務、自助入住、現代化設施
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="w-full flex justify-center mb-8">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7348693420367!2d139.79157999999998!3d35.708141499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f36ab21f05b%3A0x9241dab287ff62c9!2sHenn%20na%20Hotel%20Tokyo%20Asakusa%20Tawaramachi!5e0!3m2!1szh-TW!2stw!4v1748766983482!5m2!1szh-TW!2stw"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Henn na Hotel Tokyo Asakusa Tawaramachi Location"
              />
            </div>
          </div>

          {/* 飯店圖片 */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-[16/9]">
                <img
                  src="/images/Hotel.png"
                  alt="Henn na Hotel Tokyo Asakusa Tawaramachi"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hotel;
