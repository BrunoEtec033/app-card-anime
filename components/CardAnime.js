import { View, Text, Image, StyleSheet } from "react-native";

export default function CardAnime({
  id = "0",
  title = "Título desconhecido",
  genre = "Gênero não especificado",
  episodes = "?",
  rating = "N/A",
  image = null,
}) {
  return (
    <View style={styles.card}>
      {image && (
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.meta}>{genre}</Text>
        <Text style={styles.meta}>{episodes} eps</Text>
        <Text style={styles.meta}>{rating}/10</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 12,
  },
  image: {
    width: 80,
    height: 80,
  },
  content: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  meta: {
    fontSize: 12,
    color: "#555",
  },
});
