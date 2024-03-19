import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import { Channel, Chat, MessageInput, MessageList } from "stream-chat-expo";
import videoCallConfig from "../../videoCall.config";
import { useSelector } from "react-redux";

const ChatView = ({ channelId }) => {
  const chatClient = StreamChat.getInstance(videoCallConfig.accessKey);
  const userState = useSelector((state) => state.user);
  const [channel, setChannel] = useState(undefined);

  // Connect to the channel with the same ID as the video call
  useEffect(() => {
    const connectToChannel = async () => {
      const user = { id: userState?.id };

      await chatClient.connectUser(user, userState?.token);
      const channel = chatClient.channel("messaging", channelId);

      setChannel(channel);
      await channel.watch();
    };

    connectToChannel();

    // Cleanup
    return () => {
      channel?.stopWatching();
      chatClient.disconnectUser();
    };
  }, []);

  return (
    <>
      {chatClient && channel ? (
        <Chat client={chatClient}>
          <Channel channel={channel}>
            <MessageList />
            <MessageInput />
          </Channel>
        </Chat>
      ) : (
        <View>
          <Text>Loading Chat...</Text>
        </View>
      )}
    </>
  );
};

export default ChatView;
