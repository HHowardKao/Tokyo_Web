import React from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

const Expense: React.FC = () => {
  return (
    <Container>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="relative mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4 relative">
              支出管理
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-pink-300 to-pink-500"></div>
            </h1>
          </div>

          {/* 分帳系統卡片 */}
          <div className="max-w-4xl mx-auto mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Settle Up 分帳系統
                  </h2>
                  <h3 className="text-xl text-gray-600 mb-2">
                    Group Expense Management
                  </h3>
                </div>
                <a
                  href="https://settleup.app/group/-OQfz5_W1NSxjvVL9Si2/transactions?inviteHash=E1g59JdFqLxsph3NiGkh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-200 mt-4 md:mt-0"
                >
                  <span>進入分帳</span>
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
                  <span className="font-medium">功能特色：</span>
                  即時記帳、多人分帳、帳單管理
                </p>
                <p>
                  <span className="font-medium">使用方式：</span>
                  點擊上方按鈕進入分帳系統，可直接開始記錄支出
                </p>
                <p>
                  <span className="font-medium">注意事項：</span>
                  請記得定期同步並備份資料
                </p>
              </div>
            </div>
          </div>

          {/* 分帳說明圖片 */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg">
              <div className="relative aspect-[16/9]">
                <img
                  src="/images/expense.png"
                  alt="Settle Up 分帳系統介面"
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

export default Expense;
