import {Image, Text, View} from "react-native";

export default function EmptyList() {
    return (
        <View>
            <Image source={require("../assets/prancheta.png")} />
            <Text>Você ainda não tem tarefas cadastradas</Text>
            <Text>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}