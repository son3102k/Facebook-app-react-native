import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import color from "../../constants/color/color";

export const TermAndPrivacyScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.header}>Finish signing up</Text>
                <Text style={styles.sub}>People who use our service may have uploaded your contact infomation to Facebook. <Text style={{color: color.MainBlue}}>Learn more</Text>.</Text>
                <Text/>
                <Text style={styles.sub}>By tapping Sign up, you agree to our <Text style={{color: color.MainBlue}}>Terms</Text>, <Text style={{color: color.MainBlue}}>Data Policy</Text> and <Text style={{color: color.MainBlue}}>Cookies Policy</Text>. You may receive SMS notifications from us and can opt out any time.</Text>
            </View>
            <View style={styles.nextButton}>
                <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate("ConfirmScreen")}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.White,
        flexDirection: "column"
    },
    textContainer: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    inputContainer: {
        flex: 4,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "column"
    },
    header: {
        fontSize: 18,
        marginBottom: 12,
        fontFamily: "Roboto-Medium"
    },
    sub: {
        textAlign: "center",
        color: color.GrayText,
        fontSize: 14,
        width: "90%",
    },
    nextButton: {
        flex: 4,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    button: {
        width: "90%",
        backgroundColor: color.MainBlue,
        height: 42,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6,
    },
    buttonText: {
        color: color.White
    },
});