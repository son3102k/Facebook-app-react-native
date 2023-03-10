import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import color from "../../constants/color/color";
import { Avatar } from "./Avatar";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const PostHeader = ({detail}) => {
    return (
      <TouchableHighlight
        onPress={() => {}}
        underlayColor={color.TouchableHighlightBorderWhite}
      >
        <View style={styles.container}>
          <View style={styles.avatar}>
            <Avatar
              source={
                "https://play-lh.googleusercontent.com/9_CDhcHHXGiDOnkhE7O3wkoa2muXfs2FNG03JWeOWs8CufQ-1QCVNVQm1_gyax1qGQ"
              }
            />
          </View>
          <View style={styles.name}>
            <Text style={styles.text}>Shoppe</Text>
            <View style={styles.status}>
              <Text style={styles.tinyText}>16h</Text>
              <Dot />
              <PublicIcon />
            </View>
          </View>
          {!detail && (
            <>
              <TouchableHighlight
                style={styles.moreButton}
                underlayColor={color.TouchableHighlightBorderWhite}
                onPress={() => {}}
              >
                <MoreIcon />
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.hideOption}
                underlayColor={color.TouchableHighlightBorderWhite}
                onPress={() => {}}
              >
                <CloseIcon />
              </TouchableHighlight>
            </>
          )}
        </View>
      </TouchableHighlight>
    );
}

const iconSize = 14;
const PublicIcon = () => <MaterialIcons name="public" size={iconSize} color={color.IconGray} />;
const Dot = () => <Entypo name="dot-single" size={8} color={color.IconGray} style={styles.dotSeparate}/>
const MoreIcon = () => <Feather name="more-horizontal" size={22} color={color.IconGray} />
const CloseIcon = () => <Ionicons name="close" size={22} color={color.IconGray} />

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: "2.5%",
        paddingRight: "2.5%"
    },
    avatar: {
        flex: 3,
        marginTop: 15,
        marginBottom: 15,
    },
    name: {
        flex: 13,
        height: 40,
        flexDirection: "column",
    },
    moreButton: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: 40,
        alignSelf: "flex-start"
    },
    hideOption: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        height: 40,
        alignSelf: "flex-start"
    },
    text: {
        color: color.Black,
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "klavika-bold"
    },
    status: {
        flexDirection: "row",
        flexWrap: "nowrap",
        alignItems: "center"
    },
    tinyText: {
        color: color.TextTinyGray,
        fontSize: 13
    },
    dotSeparate: {
        marginLeft: 5,
        marginRight: 5,
    }
});