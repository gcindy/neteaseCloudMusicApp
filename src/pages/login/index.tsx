import { useState, useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, InputItem, Toast } from "@ant-design/react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks";
import { mineStyle } from "../../styles";

let timer: any;

const LoginScreen = () => {
  const { usersInstance } = useStore();

  const COUNTDOWN_SECONDS = 60;

  const [timing, setTiming] = useState(false); // 计时中标识
  const [second, setSecond] = useState(COUNTDOWN_SECONDS); // 当前秒数
  const [phone, setPhone] = useState<string>("13666683140");
  const [captcha, setCaptcha] = useState<string>("");

  useEffect(() => {
    clearInterval(timer);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let timer: any;

    const countdown = () => {
      setSecond(preSecond => {
        if (preSecond <= 1) {
          setTiming(false);
          // 重置秒数
          return COUNTDOWN_SECONDS;
        } else {
          timer = setTimeout(countdown, 1000);
          return preSecond - 1;
        }
      });
    };
    // 开始倒计时
    if (timing) {
      timer = setTimeout(countdown, 1000);
    }
    return () => clearTimeout(timer);
  }, [timing]);

  const goLogin = async () => {
    if (!phone) {
      Toast.info("请输入账号");
      return false;
    }
    if (!captcha) {
      Toast.info("请输入验证码");
      return false;
    }

    const res: any = await usersInstance.login({ phone, captcha });

    if (res.code == 200) {
      console.log("res", res);
    } else {
      console.log("msg=====>>>", res.msg);
      Toast.info(res.msg);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#C83D3C",
        flex: 0,
      }}>
      <View style={mineStyle.mineWrapper}>
        <Text style={mineStyle.loginTitle}>登录</Text>
        <View style={mineStyle.loginWrapper}>
          <InputItem
            error
            type="phone"
            value={phone}
            placeholder="请输入用户名"
            placeholderTextColor="#f2f2f2"
            onChange={(value: any) => {
              setPhone(value);
            }}
          />

          <InputItem
            type="password"
            value={captcha}
            placeholder="请输入密码"
            placeholderTextColor="#f2f2f2"
            extra={
              <Pressable onPress={() => setTiming(true)}>
                <View>
                  <Text> {timing ? `${second}s后重新发送验证码` : "发送验证码"}</Text>
                </View>
              </Pressable>
            }
            onChange={(value: any) => {
              setCaptcha(value);
            }}
          />

          <Button type="primary" style={mineStyle.button} onPress={() => goLogin()}>
            登录
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default observer(LoginScreen);
