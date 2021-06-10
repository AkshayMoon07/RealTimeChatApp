import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 50,
        marginRight: 15,
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        padding: 10,
    },
    midContainer: {
        justifyContent: 'space-around',
    },
    leftContainer: {
        flexDirection: "row",
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey'
    },
    time: {
        fontSize: 14,
        color: 'grey'
    },

})

export default styles;