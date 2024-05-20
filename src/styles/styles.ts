import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    alignItems: "center",
    paddingTop: 60,
  },
  header: {
    padding: 80,
  },
  title: {
    fontSize: 55,
    color: "#6959CD",
  },

  titleLogin: {
    fontSize: 42,
    color: "#6959CD",
    marginBottom: 40,
    marginTop: 30
  },
  textoBotao: {
    fontSize: 20,
    color: "#6959CD",
    textAlign: "center",
    fontWeight: "bold",
  },
  homeImage: {
    width: "100%",
    resizeMode: "contain",
    height: 180,
    marginBottom: 80,
    marginTop: 15,
  },
  homeButton: {
    borderRadius: 200,
    backgroundColor: "#87CEFA", // Pode ser ajustado conforme necessário
    shadowColor: "rgba(0, 0, 0, 0.48)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    marginBottom: 26,
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4, // Adiciona a elevação para sombra no Android
    padding: 10, // Pode ser ajustado conforme necessário
    width: 200,
    alignSelf: "center",
  },
  logo: {
    width: 420,
    height: 512,
    alignSelf: "center",
    resizeMode: "contain",
    marginTop: -130,
    marginBottom: -100,
  },
  loginContainer: {
    width: 312,
    backgroundColor: "#87CEFA",
    borderRadius: 50,
    padding: 10,
    alignSelf: "center",
    marginTop: 20,
    alignItems: "center",
  },
  buttonLogin: {
    borderRadius: 200,
    backgroundColor: "#ADD8E6", // Pode ser ajustado conforme necessário
    shadowColor: "rgba(0, 0, 0, 0.48)",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    marginBottom: 26,
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4, // Adiciona a elevação para sombra no Android
    padding: 19, // Pode ser ajustado conforme necessário
    width: 100,
    alignSelf: "center",
    alignItems: "center", 
  },
  inputLogin: {
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    elevation: 4,
    padding: 12,
    width: 150,
    margin: 13,
  },
});
