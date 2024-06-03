import React,{useEffect, useState} from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";

export default function Fetch() {

    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState([])

    useEffect(
        () => {
            fetch('http://localhost:5000/api/Customer')
                .then((resp) => resp.json())
                .then((json) => setDados(json.Customer))
                .catch(() => (alert("Erro ao carregar Customer")))
                .finally(() => setCarregando(false))
        }, []
    )

    return(
        <View> 
            {
                carregando ? <ActivityIndicator> : (
                    <FlatList>
                        data = {dados}                            
                    </FlatList>
                )
            }
        </View>
    )
}