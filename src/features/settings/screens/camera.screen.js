import React, { useRef, useState, useEffect, useContext } from "react";
import { Camera, CameraType } from 'expo-camera';
import styled from "styled-components/native";
import { Text } from "react-native";
import { Button } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileCamera = styled(Camera)`
   width: 100%;
   height: 100%;
`;

const CameraContainer = styled.View`
   width: 100%;
   height: 100%;
`;

const CameraButton = styled(Button).attrs({
    mode: "contained",
    icon: "camera"
})`
   position: absolute;
   top: 30px;
   left: 80px;
`;

export const CameraScreen = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(false);
    const cameraRef = useRef(null);

    const snap = async () => {
        if (cameraRef && cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            console.log(photo);
            AsyncStorage.setItem(`picture`,photo.uri);
            navigation.goBack();
        }
    };

    useEffect(() => {
        (async () => {
            const { granted } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(granted);
        })();
    }, []);

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <CameraContainer>
            <ProfileCamera
                ref={camera => (cameraRef.current = camera)}
                ratio={"16:9"}
                type={CameraType.front}
                onCameraReady={() => {
                    console.log("Camera Ready");
                }}
            ></ProfileCamera>

            <CameraButton onPress={snap}>Snap!</CameraButton>
        </CameraContainer>
    );
};
