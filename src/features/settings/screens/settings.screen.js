import React, { useContext, useState, useCallback } from "react";
import { TouchableOpacity } from "react-native-web";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.components";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";
import { SpacerComponent } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";
// import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;


export const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext);
    const [photo, setPhoto] = useState(null);

    const getProfilePicture = async () =>{
        const photoUri = await AsyncStorage.getItem('picture');
        setPhoto(photoUri);
    }
    useFocusEffect(
        useCallback(() => {
            getProfilePicture();
        }, [])
    );
    return (
        <SafeArea>
            <AvatarContainer>
                <TouchableOpacity onPress={()=> navigation.navigate('Camera')}>
                {!photo && (
                        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
                )}
                {photo && (
                        <Avatar.Image size={180} source={{uri:photo}} backgroundColor="#2182BD" />
                )}
                </TouchableOpacity>
                <SpacerComponent position="top" size="large">
                    <Text variant="label">user email address here</Text>
                </SpacerComponent>
            </AvatarContainer>
            <List.Section>
                <SettingsItem
                    style={{ padding: 16 }}
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => navigation.navigate("Favourites")}
                />
                <SettingsItem
                    style={{ padding: 16 }}
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door" />}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    );
};
