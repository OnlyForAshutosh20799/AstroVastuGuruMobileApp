import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ServiceSection() {
  const services = [
    { name: "Match Making", icon: "heart-outline" },
    { name: "Panchang", icon: "calendar-outline" },
    { name: "Tarot Reading", icon: "book-outline" },
    { name: "Kundli", icon: "planet-outline" },
    { name: "Family Horoscope", icon: "people-outline" },
    { name: "Numerology", icon: "key-outline" },
    { name: "Remedies", icon: "medkit-outline" },
    { name: "Planet Transits", icon: "moon-outline" },
    { name: "Vastu", icon: "home-outline" },
    { name: "Zodiac Signs", icon: "star-outline" },
    { name: "Festivals", icon: "sparkles-outline" },
    { name: "Spirituality", icon: "flame-outline" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🔯 Our Services</Text>
      <View style={styles.grid}>
        {services.map((s, i) => (
          <TouchableOpacity key={i} activeOpacity={0.8} style={styles.cardWrapper}>
            <LinearGradient
              colors={["#FFD700", "#FF9933", "#E67300"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.card}
            >
              <Ionicons name={s.icon} size={26} color="#fff" />
              <Text style={styles.cardText}>{s.name}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "700",
    color: "#D97706",
    textAlign: "center",
    marginBottom: 15,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardWrapper: {
    width: "47%",
    marginBottom: 15,
  },
  card: {
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },
  cardText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
    marginTop: 6,
    textAlign: "center",
  },
});
