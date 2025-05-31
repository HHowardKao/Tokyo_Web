import React, { useState } from "react";
import ImagePreviewModal from "./ImagePreviewModal";

interface TransportationCardProps {
  title: string;
  imagePaths: string[];
  description?: string;
  customContent?: React.ReactNode;
}

const TransportationCard: React.FC<TransportationCardProps> = ({
  title,
  imagePaths,
  description,
  customContent,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 將文字中的URL轉換為可點擊的連結
  const renderDescription = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);

    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            {part}
          </a>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="p-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            {title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {imagePaths.map((path, index) => (
              <div
                key={index}
                className="relative aspect-[16/9] overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(`/images/${path}`)}
              >
                <img
                  src={`/images/${path}`}
                  alt={`${title} 圖片 ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
          {description && (
            <div className="text-gray-600 whitespace-pre-line">
              {renderDescription(description)}
            </div>
          )}
          {customContent}
        </div>
      </div>

      <ImagePreviewModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ""}
        imageAlt={title}
      />
    </>
  );
};

export default TransportationCard;
