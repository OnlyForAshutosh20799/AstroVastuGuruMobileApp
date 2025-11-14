import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Modal,
  Dimensions,
  ScrollView,
} from "react-native";
import tw from "twrnc";
import { useTheme } from "../../../../Context/ThemContext";

const { width } = Dimensions.get("window");
const isTablet = width >= 768;

// ---- Original Data ---- //
const astrologers = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: ["Naomi Suzuki", "Rakesh Kapoor", "Ananya Kapoor"][i % 3],
  lang: ["Hindi", "English", "Chinese"][i % 3],
  skills: ["Love", "Career", "Marriage"],
  rating: (4.5 + Math.random() * 0.4).toFixed(1),
  exp: `${3 + (i % 9)} Years`,
  image:
    "https://randomuser.me/api/portraits/women/" + ((i % 40) + 1) + ".jpg",
}));

const skillOptions = ["Love", "Career", "Marriage"];
const languageOptions = ["Hindi", "English", "Chinese"];

const AstrologerListScreen = ({ navigation }) => {
  const { theme } = useTheme();
  const isDark = theme.mode === "dark";

  // ---------- States ---------- //
  const [searchText, setSearchText] = useState("");
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const [filteredData, setFilteredData] = useState(astrologers);

  const [skillModal, setSkillModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);

  // ---------- Filtering Logic ---------- //
  const applyFilters = () => {
    let temp = astrologers;

    if (searchText.trim() !== "") {
      temp = temp.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (selectedSkill) {
      temp = temp.filter((item) => item.skills.includes(selectedSkill));
    }

    if (selectedLanguage) {
      temp = temp.filter((item) => item.lang === selectedLanguage);
    }

    setFilteredData(temp);
    setSkillModal(false);
    setLanguageModal(false);
  };

  // ---------- Render Card ---------- //
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("AstrologerProfile", { data: item })}
      activeOpacity={0.7}
      style={[
        tw`flex-row items-center py-3 px-4 mb-1`,
        {
          backgroundColor: isDark ? "#1E1E1E" : "#fff",
          shadowColor: "#000",
          shadowOpacity: 0.07,
          shadowRadius: 4,
          elevation: 2,
          borderRadius: 12,
        },
      ]}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: isTablet ? 70 : 55,
          height: isTablet ? 70 : 55,
          borderRadius: 15,
        }}
      />

      <View style={tw`ml-3 flex-1`}>
        <View style={tw`flex-row justify-between items-center`}>
          <Text
            style={{
              fontSize: isTablet ? 20 : 16,
              fontWeight: "600",
              color: isDark ? "#fff" : "#111",
            }}
          >
            {item.name}
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("AstrologerProfile", { data: item })}
            style={tw`bg-blue-500 px-3 py-1 rounded-lg`}
          >
            <Text style={tw`text-white text-xs`}>View</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontSize: isTablet ? 15 : 13,
            color: isDark ? "#aaa" : "#666",
            marginTop: 1,
          }}
        >
          {item.skills.join(", ")}
        </Text>

        <View style={tw`flex-row items-center mt-1`}>
          <Text
            style={{
              fontSize: isTablet ? 14 : 12,
              color: isDark ? "#ccc" : "#555",
            }}
          >
            {item.lang}
          </Text>

          <Text
            style={{
              marginLeft: 12,
              fontSize: isTablet ? 15 : 13,
              color: "#E67E22",
              fontWeight: "600",
            }}
          >
            ⭐ {item.rating}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  // ---------- Modal Component ---------- //
  const OptionModal = ({ visible, onClose, title, options, onSelect }) => (
    <Modal visible={visible} transparent animationType="fade">
      <View style={tw`flex-1 bg-[#00000088] justify-center items-center`}>
        <View
          style={[
            tw`w-10/12 rounded-xl p-4`,
            { backgroundColor: isDark ? "#1F1F1F" : "#fff" },
          ]}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              marginBottom: 10,
              color: isDark ? "#fff" : "#111",
            }}
          >
            {title}
          </Text>

          {options.map((opt, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => onSelect(opt)}
              style={tw`py-2`}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: isDark ? "#eee" : "#333",
                }}
              >
                {opt}
              </Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity
            onPress={onClose}
            style={tw`mt-4 py-2 bg-red-500 rounded-lg`}
          >
            <Text style={tw`text-center text-white font-semibold`}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <View
      style={[
        tw`flex-1`,
        { backgroundColor: isDark ? "#121212" : "#F2F2F2" },
      ]}
    >
      {/* ---------------- Search + Filters ---------------- */}
      <View style={tw`p-4 bg-transparent`}>
        {/* Search */}
        <TextInput
          placeholder="Search Astrologer by name"
          placeholderTextColor={isDark ? "#aaa" : "#999"}
          value={searchText}
          onChangeText={setSearchText}
          style={[
            tw`px-4 py-3 rounded-xl mb-3`,
            {
              backgroundColor: isDark ? "#1F1F1F" : "#fff",
              color: isDark ? "#fff" : "#111",
              fontSize: 16,
            },
          ]}
        />

        {/* Filters Row */}
        <View style={tw`flex-row justify-between`}>
          <TouchableOpacity
            onPress={() => setSkillModal(true)}
            style={[
              tw`flex-1 mr-2 px-4 py-3 rounded-xl`,
              { backgroundColor: isDark ? "#1F1F1F" : "#fff" },
            ]}
          >
            <Text
              style={{
                color: isDark ? "#fff" : "#111",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              {selectedSkill ? selectedSkill : "Select Field"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setLanguageModal(true)}
            style={[
              tw`flex-1 ml-2 px-4 py-3 rounded-xl`,
              { backgroundColor: isDark ? "#1F1F1F" : "#fff" },
            ]}
          >
            <Text
              style={{
                color: isDark ? "#fff" : "#111",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              {selectedLanguage ? selectedLanguage : "Language"}
            </Text>
          </TouchableOpacity>
            {/* Apply Button */}
        <TouchableOpacity
          onPress={applyFilters}
            style={[
              tw`flex-1 ml-2 px-4 py-3 rounded-xl`,
              { backgroundColor: isDark ? "#1F1F1F" : "#fff" },
            ]}
        >
          <Text    style={{
                color: isDark ? "#fff" : "#111",
                fontSize: 15,
                fontWeight: "500",
              }}>
            Apply Filters
          </Text>
        </TouchableOpacity>
        </View>

      
      </View>

      {/* ---------------- List ---------------- */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-6 px-3`}
      />

      {/* ---------------- Modals ---------------- */}
      <OptionModal
        visible={skillModal}
        onClose={() => setSkillModal(false)}
        title="Select Skill"
        options={skillOptions}
        onSelect={(opt) => {
          setSelectedSkill(opt);
          setSkillModal(false);
        }}
      />

      <OptionModal
        visible={languageModal}
        onClose={() => setLanguageModal(false)}
        title="Select Language"
        options={languageOptions}
        onSelect={(opt) => {
          setSelectedLanguage(opt);
          setLanguageModal(false);
        }}
      />
    </View>
  );
};

export default AstrologerListScreen;
