import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCog,
  FaChalkboardTeacher,
  FaBook,
  FaUserGraduate,
  FaMoneyBill,
  FaClipboardList,
  FaCalendarAlt,
  FaSuitcase,
  FaCloudUploadAlt,
  FaMoneyCheckAlt,
  FaTags,
  FaBus,
  FaPhoneAlt,
  FaDoorOpen,
  FaUserCheck,
  FaSms,
  FaFileAlt,
  FaFileInvoice,
  FaBell,
  FaMobileAlt,
  FaVideo,
  FaFileArchive,
  FaUsersCog,
  FaUserClock,
  FaLaptopCode,
  FaCalculator,
  FaFileInvoiceDollar,
  FaIdCard,
  FaFileSignature,
  FaFileExcel,
  FaCertificate,
  FaStore,
  FaTools,
  FaGraduationCap,
  FaCalendarWeek,
  FaBookReader,
  FaIdCardAlt,
  FaFileUpload,
  FaUserFriends,
  FaGlobe,
  FaAward,
  FaCommentDots,
  FaBookOpen,
  FaUserTie,
  FaCalendarDay,
  FaComments,
  FaRunning,
  FaClipboardCheck,
  FaUserCog,
  FaWhatsapp,
} from "react-icons/fa";

import { IoMdAdd, IoMdRemove } from "react-icons/io";

const Sidebar = ({ toggleSidebar, isMobile }) => {
  const [openSection, setOpenSection] = useState(null);
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [selectedSubItem, setSelectedSubItem] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
    setSelectedSection(section);
  };

  const getButtonClass = (section) =>
    `w-full flex justify-between items-center px-2 py-2 rounded hover:bg-gray-100 mb-1 transition ${
      selectedSection === section
        ? "text-blue-600 font-semibold"
        : "text-[#757373]"
    }`;

  const getItemClass = (section) =>
    `flex items-center justify-between px-2 py-2 rounded font-semibold cursor-pointer mb-1 transition ${
      selectedSection === section ? "text-blue-600" : "text-[#757373]"
    }`;

  const getSubItemClass = (name) =>
    `cursor-pointer transition block w-full px-2 py-1 rounded hover:text-blue-600 ${
      selectedSubItem === name
        ? "text-blue-600 font-semibold"
        : "text-[#757373]"
    }`;

  const handleSubItemClick = (section, name) => {
    setSelectedSection(section);
    setSelectedSubItem(name);
    if (isMobile) toggleSidebar(); // auto-close on mobile
  };

  const slugify = (text) =>
    // "/admin/" +
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");

  const menuConfig = [
          {
      icon: <FaHome className="text-base" />,
      label: "Dashboard",
      key: "dashboard",
      subItems: [
        "Dashboard",
        "Inventory Dashboard",
        "Dashboard-2",
        "Birthday Dashboard",
        "Timetable Dashboard",
        "Leave Dashboard",
        "Account Dashboard",
        "Homework Dashboard",
        "Attendance Dashboard",
        "RFID Attendance Dashboard",
        "Remainders Dashboard",
        "Enquiry Dashboard",
        "Transport Attendance Dashboard",
        "Admin Dashboard",
        "Curcular Dashboard",
        "Mobile App Dashboard",
        "Fees Followup Dashboard",
        "Tags Followup Dashboard",
        "Set Dashboard",
      ],
    },
  ]
  // 🔍 Smart Search Logic
  const filteredMenu = menuConfig
    .map((menu) => {
      const labelMatch = menu.label
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const subItemsMatch = menu.subItems.filter((sub) =>
        sub.toLowerCase().includes(searchQuery.toLowerCase())
      );

      if (labelMatch) {
        return menu; // full menu if label matches
      } else if (subItemsMatch.length > 0) {
        return { ...menu, subItems: subItemsMatch }; // filtered subItems
      } else {
        return null;
      }
    })
    .filter(Boolean); // remove nulls
  return (
    <div className="w-full h-[95%] px-3 pt-4 text-sm font-medium">
      <h2 className="text-[#757373] font-bold mb-3 text-xs uppercase tracking-widest">
        Menu
      </h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search menu..."
        className="w-full mb-3 px-2 py-1 border rounded text-sm"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="overflow-y-auto h-[calc(100%-2rem)]">
        {filteredMenu.map(({ icon, label, key, subItems }) => (
          <div key={key}>
            {subItems.length === 0 ? (
              <div
                onClick={() => {
                  setSelectedSection(key);
                  setSelectedSubItem("");
                  if (isMobile) toggleSidebar();
                }}
                className={getItemClass(key)}
              >
                <div className="flex items-center gap-3">
                  {icon}
                  <span>{label}</span>
                </div>
              </div>
            ) : (
              <>
                <button
                  onClick={() => toggleSection(key)}
                  className={getButtonClass(key)}
                >
                  <span className="flex items-center gap-3">
                    {icon}
                    {label}
                  </span>
                  {openSection === key ? <IoMdRemove /> : <IoMdAdd />}
                </button>

                {openSection === key && (
                  <ul className="ml-8 mb-2 border-l border-blue-500 pl-3 space-y-1 text-sm">
                    {subItems.map((sub) => (
                      <li key={sub}>
                        <Link
                           to={`/admin/${slugify(label)}/${slugify(sub)}`}
                          className={getSubItemClass(sub)}
                          onClick={() => handleSubItemClick(key, sub)}
                        >
                          {sub}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
