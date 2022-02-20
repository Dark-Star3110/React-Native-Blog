import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";

const MomoLogin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Text style={styles.helloText}>Xin chao!</Text>
          <Text style={styles.userText}>Dang Thanh Van</Text>
          <Text style={styles.userText}>0123456789</Text>
        </View>
      </View>

      <View style={styles.form}>
        <FontAwesome5 name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.inputPassword}
          keyboardType="numeric"
          autoFocus={true}
          secureTextEntry={true}
          placeholder="Nhập mật khẩu"
          placeholderTextColor="#929292"
        />
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.text}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.text}>Quên mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text style={styles.text}>Thoát tài khoản</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const TEXT: {
  [key: string]: any;
} = {
  color: "#fff",
  textAlign: "center",
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#b0006d",
    paddingTop: Constants.statusBarHeight,
  },
  content: {},
  textWrapper: {},
  helloText: {
    ...TEXT,
    fontSize: 20,
    lineHeight: 50,
    fontWeight: "bold",
  },
  userText: {
    ...TEXT,
    fontSize: 16,
    lineHeight: 30,
    fontWeight: "400",
  },
  form: {
    marginTop: 40,
    marginLeft: 50,
  },
  icon: {
    position: "absolute",
    top: 18,
    left: 24,
    zIndex: 1,
  },
  inputPassword: {
    height: 60,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 40,
    fontSize: 18,
    textAlign: "center",
  },
  loginBtn: {
    width: "80%",
    height: 60,
    marginTop: 16,
    backgroundColor: "#a4145b",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
  },
  action: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  actionBtn: {},
});

export default MomoLogin;
