import React, { useCallback, useRef } from "react";

import { JitsiMeeting } from "@jitsi/react-native-sdk/index";

import { useNavigation } from "@react-navigation/native";

interface MeetingProps {
  route: any;
}

const Meeting = ({ route }: MeetingProps) => {
  const jitsiMeeting = useRef(null);
  const navigation = useNavigation();

  const { room } = route.params;

  const onReadyToClose = useCallback(() => {
    // @ts-ignore
    navigation.navigate("Home");
    // @ts-ignore
    jitsiMeeting.current.close();
  }, [navigation]);

  const eventListeners = {
    onReadyToClose,
  };

  return (
    // @ts-ignore
    <JitsiMeeting
      eventListeners={eventListeners as any}
      ref={jitsiMeeting}
      style={{ flex: 1 }}
      room={room}
      serverURL={"http://192.168.1.4:5222"} // config.js dosyasının URL'sini buraya belirtin
    />
  );
};

export default Meeting;
