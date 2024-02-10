import React, { useState, useContext } from "react";

import {
    AccountBackground,
    AccountCover,
    AccountContainer,
    AuthButton,
    AuthInput,
    Title,
    ErrorContainer
} from '../components/account.styles';
import { Text } from '../../../components/typography/text.component';
import { SpacerComponent } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error, isLoading } = useContext(AuthenticationContext);
    return (
        <AccountBackground>
            <AccountCover />
            <Title>Meals To Go</Title>
            <AccountContainer>
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <SpacerComponent size="large">
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                </SpacerComponent>
                {error && (
                    <ErrorContainer size="large">
                        <Text variant="error">{error}</Text>
                    </ErrorContainer>
                )}
                <SpacerComponent size="large">
                    {!isLoading ? (
                        <AuthButton
                            icon="lock-open-outline"
                            mode="contained"
                            onPress={() => onLogin(email, password)}
                        >
                            Login
                        </AuthButton>
                    ) : (
                            <ActivityIndicator animating={true} color={colors.brand.primary} />
                    )}
                </SpacerComponent>
            </AccountContainer>
            <SpacerComponent size="large">
                <AuthButton mode="contained" onPress={() => navigation.goBack()}>
                    Back
                </AuthButton>
            </SpacerComponent>
        </AccountBackground>
    );
};