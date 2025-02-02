"use client";
import { useState, useRef, useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

interface Language {
  code: string;
  label: string;
}

const languages: Language[] = [
  { code: "en", label: "English" },
  { code: "bn", label: "বাংলা" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
];

export default function LanguageToggle() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-full shadow border"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaGlobe className="w-5 h-5" />
        {languages.find((lang) => lang.code === selectedLanguage)?.label}
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 ${
                selectedLanguage === lang.code
                  ? "font-semibold text-blue-600"
                  : ""
              }`}
              onClick={() => {
                setSelectedLanguage(lang.code);
                setIsOpen(false);
              }}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
