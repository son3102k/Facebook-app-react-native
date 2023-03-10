import {
  View,
  Modal,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { useState, useEffect } from "react";
import color from "../../constants/color/color";
import { Ionicons, Feather, SimpleLineIcons } from "@expo/vector-icons";
import { Avatar } from "../../components/home-screen/Avatar";
import { AllFriendOptionModal } from "../../components/home-screen/AllFriendOptionModal";
import { AllFriendSortModal } from "../../components/home-screen/AllFriendSortModal";

export const AllFriendScreen = ({ modalVisible, setModalVisible }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [friendList, setFriendList] = useState([
    {
      id: 0,
      username: "Minh Chu",
      avatar:
        "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      same_friends: "0",
    },
    {
      id: 1,
      username: "Minh Chu",
      avatar:
        "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      same_friends: "144",
    },
    {
      id: 2,
      username: "Minh Chu",
      avatar:
        "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      same_friends: "0",
    },
    {
      id: 3,
      username: "Minh Chu",
      avatar:
        "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      same_friends: "144",
    },
    {
      id: 4,
      username: "Minh Chu",
      avatar:
        "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      same_friends: "144",
    },
    {
      id: 5,
      username: "Minh Chu",
      avatar:
        "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      same_friends: "144",
    },
    {
      id: 6,
      username: "Minh Chu",
      avatar:
        "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      same_friends: "144",
    },
    {
      id: 7,
      username: "Minh Chu",
      avatar:
        "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      same_friends: "144",
    },
    {
      id: 8,
      username: "Minh Chu",
      avatar:
        "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      same_friends: "144",
    },
    {
      id: 9,
      username: "Minh Chu",
      avatar:
        "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg",
      same_friends: "144",
    },
  ]);

  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      presentationStyle="overFullScreen"
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <FlatList
        refreshing={refreshing}
        ListHeaderComponent={
          <ListHeaderComponent setModalVisible={setModalVisible} />
        }
        data={friendList}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        stickyHeaderIndices={[0]}
        overScrollMode="never"
      />
    </Modal>
  );
};

const renderItem = ({ item }) => (
  <Item
    avatar={item.avatar}
    index={item.id}
    username={item.username}
    same_friends={item.same_friends}
  />
);

const Item = ({ avatar, index, username, same_friends }) => {
  const [optionVisible, setOptionVisible] = useState(false);
  const [sortVisible, setSortVisible] = useState(false);

  return (
    <>
      {index === 0 && (
        <View style={styles.header2Container}>
          <Text style={styles.subText1}>9 b???n b??</Text>
          <TouchableOpacity style={styles.sortButton}>
            <Text style={styles.textSort} onPress={() => setSortVisible(true)}>
              S???p x???p
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.itemContainer}>
        <View style={styles.avatar}>
          <Avatar width={90} height={90} source={avatar} />
        </View>

        <View style={styles.subItemContainer}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Text style={styles.usernameText}>{username}</Text>
          </View>

          {parseInt(same_friends) > 0 && (
            <Text style={styles.sameFriendText}>{same_friends} b???n chung</Text>
          )}
        </View>

        <SimpleLineIcons
          name="options"
          size={20}
          color={color.IconGray}
          onPress={() => setOptionVisible(true)}
        />
      </View>

      <AllFriendOptionModal
        setModalVisible={setOptionVisible}
        modalVisible={optionVisible}
        username={username}
        avatar={avatar}
      />
      <AllFriendSortModal
        setModalVisible={setSortVisible}
        modalVisible={sortVisible}
      />
    </>
  );
};

const SearchIcon = () => <Feather name="search" size={22} color="black" />;

const ListHeaderComponent = ({ setModalVisible }) => (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
      <View style={{ flexDirection: "row" }}>
        <Ionicons
          name="arrow-back-outline"
          size={26}
          color="black"
          onPress={() => setModalVisible(false)}
        />
        <Text
          style={{
            fontSize: 20,
            paddingLeft: 15,
          }}
        >
          T???t c??? b???n b??
        </Text>
      </View>

      <SearchIcon />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    backgroundColor: color.White,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#d9dbda",
  },
  header2Container: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  subText1: {
    fontSize: 22,
    fontFamily: "Roboto-Bold",
  },

  itemContainer: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  subText: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
  },
  itemContainer: {
    marginTop: 15,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 15,
  },
  subItemContainer: {
    flexDirection: "column",
    flex: 1,
  },
  avatar: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  usernameText: {
    fontSize: 20,
    fontFamily: "Roboto-Bold",
  },
  sameFriendText: {
    fontSize: 16,
    color: color.GrayText,
    paddingBottom: 5,
  },
  sortButton: {
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  textSort: {
    fontSize: 20,
    color: color.MainBlue,
  },
});
