import { useState, useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, InputItem, Toast } from "@ant-design/react-native";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks";
import { mineStyle } from "../../styles";
import { setStorage } from "@/utils/storage";
import { Navigation } from "@/utils/navigation";

const LoginScreen = () => {
  const { usersInstance } = useStore();

  const COUNTDOWN_SECONDS = 60;

  const [timing, setTiming] = useState(false); // 计时中标识
  const [second, setSecond] = useState(COUNTDOWN_SECONDS); // 当前秒数
  const [phone, setPhone] = useState<string>("13666683140");
  const [captcha, setCaptcha] = useState<string>("");

  type result = {
    code: number;
    data: boolean;
  };

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
      getCaptcha();
      timer = setTimeout(countdown, 1000);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timing]);

  // 用户登录
  const goLogin = async () => {
    const res: any = await usersInstance.login({ phone, captcha });
    await setStorage("cookie", res.cookie && res.cookie);
    await setStorage("token", res.token && res.token);
    await setStorage("userinfo", JSON.stringify(res.profile));

    if (res.code == 200) {
      Navigation.back();
    }
  };

  // 获取音乐列表
  // const getSongList = async () => {
  //   const song_result = await usersInstance.getSong(96);
  //   console.log("song_result=====>>>", song_result);
  // };

  // 获取验证码
  const getCaptcha = async () => {
    const res: GlobalInstance.responseType<result> = (await usersInstance.getCaptcha(
      phone,
    )) as GlobalInstance.responseType<result>;
    if (res.data) Toast.success("发送成功");
  };

  // 校验验证码
  const checkVerificationCode = async () => {
    // getSongList();
    console.log("hahahah=====>>>");
    const res: GlobalInstance.responseType<result> = (await usersInstance.getCheckCaptcha(
      phone,
      captcha,
    )) as GlobalInstance.responseType<result>;

    if (res.data) {
      goLogin();
    } else {
      Toast.fail("验证码错误，请确认后重新输入");
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
            style={mineStyle.loginText}
            type="phone"
            value={phone}
            placeholder="请输入用户名"
            placeholderTextColor="#f2f2f2"
            onChange={(value: any) => {
              setPhone(value.replace(/\s*/g, ""));
            }}
          />

          <InputItem
            style={mineStyle.loginText}
            type="password"
            value={captcha}
            placeholder="请输验证码"
            placeholderTextColor="#f2f2f2"
            extra={
              <Pressable
                onPress={() => {
                  !timing ? setTiming(true) : Toast.info(`请在${COUNTDOWN_SECONDS}秒后重新获取验证码`);
                }}>
                <View>
                  <Text> {timing ? `${second}s后重新发送验证码` : "发送验证码"}</Text>
                </View>
              </Pressable>
            }
            onChange={(value: any) => {
              setCaptcha(value);
            }}
          />

          <Button type="primary" style={mineStyle.button} onPress={() => checkVerificationCode()}>
            登录
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default observer(LoginScreen);
