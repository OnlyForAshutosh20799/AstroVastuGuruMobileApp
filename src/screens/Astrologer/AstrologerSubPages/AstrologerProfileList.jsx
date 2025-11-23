import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput,
  Modal,
  Dimensions,
} from 'react-native';
import tw from 'twrnc';
import { useTheme } from '../../../Context/ThemContext';

const { width } = Dimensions.get('window');
const isTablet = width >= 768;

// ---- Sample Data ---- //
const astrologers = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: ['Naomi Suzuki', 'Rakesh Kapoor', 'Ananya Kapoor'][i % 3],
  lang: ['Hindi', 'English', 'Chinese'][i % 3],
  skills: ['Love', 'Career', 'Marriage'],
  rating: (4.5 + Math.random() * 0.4).toFixed(1),
  exp: `${3 + (i % 9)} Years`,
  image: 'https://randomuser.me/api/portraits/women/' + ((i % 40) + 1) + '.jpg',
}));

const skillOptions = ['Love', 'Career', 'Marriage'];
const languageOptions = ['Hindi', 'English', 'Chinese'];

const AstrologerProfileList = ({ navigation }) => {
  const { theme } = useTheme();
  const isDark = theme.mode === 'dark';

  // ---------- States ---------- //
  const [searchText, setSearchText] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [filteredData, setFilteredData] = useState(astrologers);

  const [skillModal, setSkillModal] = useState(false);
  const [languageModal, setLanguageModal] = useState(false);

  // ---------- Filtering Logic ---------- //
  const applyFilters = () => {
    let temp = astrologers;

    if (searchText.trim() !== '') {
      temp = temp.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    if (selectedSkill) {
      temp = temp.filter(item => item.skills.includes(selectedSkill));
    }

    if (selectedLanguage) {
      temp = temp.filter(item => item.lang === selectedLanguage);
    }

    setFilteredData(temp);
  };

  // ---------- Render Card ---------- //
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('IndividualAstrologerProfilePage', { data: item })
      }
      activeOpacity={0.7}
      style={[
        tw`flex-row items-center py-3 px-4 mb-3`,
        {
          backgroundColor: isDark ? '#1C1C1C' : '#FFF',
          borderRadius: 14,
          elevation: 3,
          shadowOpacity: 0.15,
          shadowRadius: 6,
        },
      ]}
    >
      <Image
        source={{ uri: item.image }}
        style={{
          width: isTablet ? 75 : 55,
          height: isTablet ? 75 : 55,
          borderRadius: 14,
        }}
      />

      <View style={tw`ml-3 flex-1`}>
        <Text
          style={{
            fontSize: isTablet ? 20 : 16,
            fontWeight: '600',
            color: theme.text,
          }}
        >
          {item.name}
        </Text>

        <Text
          style={{
            fontSize: isTablet ? 14 : 12,
            color: theme.subText,
            marginTop: 2,
          }}
        >
          {item.skills.join(', ')}
        </Text>

        <View style={tw`flex-row items-center mt-1`}>
          <Text
            style={{
              fontSize: isTablet ? 14 : 12,
              color: theme.subText,
            }}
          >
            {item.lang}
          </Text>

          <Text
            style={{
              marginLeft: 12,
              fontSize: isTablet ? 15 : 13,
              color: theme.primary,
              fontWeight: '600',
            }}
          >
            ⭐ {item.rating}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('IndividualAstrologerProfilePage', { data: item })
        }
        style={{
          backgroundColor: theme.primary,
          paddingHorizontal: 12,
          paddingVertical: 6,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: '#fff', fontSize: 12, fontWeight: '600' }}>
          View Profile
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  // ---------- Modal Component ---------- //
  const OptionModal = ({ visible, onClose, title, options, onSelect }) => (
    <Modal visible={visible} transparent animationType="fade">
      <View style={tw`flex-1 bg-[#00000088] justify-center items-center`}>
        <View
          style={[
            tw`w-10/12 rounded-xl p-5`,
            { backgroundColor: isDark ? '#1E1E1E' : '#FFF' },
          ]}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: '700',
              color: theme.text,
              marginBottom: 12,
            }}
          >
            {title}
          </Text>

          {options.map((opt, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => {
                onSelect(opt);
                onClose();
              }}
              style={tw`py-2`}
            >
              <Text style={{ fontSize: 16, color: theme.text }}>{opt}</Text>
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
        {
          backgroundColor: theme.background,
        },
      ]}
    >
      {/* SEARCH + FILTERS */}
      <View style={tw`p-4`}>
        {/* Search Input */}
        <TextInput
          placeholder="Search Astrologer by name"
          placeholderTextColor={theme.subText}
          value={searchText}
          onChangeText={setSearchText}
          style={{
            backgroundColor: isDark ? '#1C1C1C' : '#F8F8F8',
            color: theme.text,
            paddingVertical: 12,
            paddingHorizontal: 15,
            borderRadius: 12,
            fontSize: 16,
            marginBottom: 12,
          }}
        />

        {/* Filter Row */}
        <View style={tw`flex-row items-center`}>
          {/* Skill */}
          <TouchableOpacity
            onPress={() => setSkillModal(true)}
            style={{
              flex: 1,
              backgroundColor: isDark ? '#1C1C1C' : '#F8F8F8',
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderRadius: 12,
              marginRight: 8,
            }}
          >
            <Text style={{ color: theme.text, fontSize: 15 }}>
              {selectedSkill || 'Select Skill'}
            </Text>
          </TouchableOpacity>

          {/* Language */}
          <TouchableOpacity
            onPress={() => setLanguageModal(true)}
            style={{
              flex: 1,
              backgroundColor: isDark ? '#1C1C1C' : '#F8F8F8',
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderRadius: 12,
              marginRight: 8,
            }}
          >
            <Text style={{ color: theme.text, fontSize: 15 }}>
              {selectedLanguage || 'Language'}
            </Text>
          </TouchableOpacity>

          {/* Apply Filters */}
          <TouchableOpacity
            onPress={applyFilters}
            style={{
              backgroundColor: theme.primary,
              paddingVertical: 12,
              paddingHorizontal: 15,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: '#FFF', fontWeight: '600' }}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* LIST */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-6 px-4`}
      />

      {/* MODALS */}
      <OptionModal
        visible={skillModal}
        onClose={() => setSkillModal(false)}
        title="Select Skill"
        options={skillOptions}
        onSelect={opt => setSelectedSkill(opt)}
      />

      <OptionModal
        visible={languageModal}
        onClose={() => setLanguageModal(false)}
        title="Select Language"
        options={languageOptions}
        onSelect={opt => setSelectedLanguage(opt)}
      />
    </View>
  );
};

export default AstrologerProfileList;
