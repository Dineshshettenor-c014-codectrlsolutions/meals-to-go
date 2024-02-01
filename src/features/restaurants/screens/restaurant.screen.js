import { FlatList } from 'react-native';
import React from 'react';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCardComponent } from '../components/restaurant-info-card.component';

import styled from 'styled-components/native';
import { SpacerComponent } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.components';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantListView = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16,
    },
})``;
export const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantList
                data={[
                    { name: 1 },
                    { name: 2 },
                    { name: 3 },
                    { name: 4 },
                    { name: 5 },
                    { name: 6 },
                    { name: 7 },
                    { name: 8 },
                    { name: 9 },
                    { name: 10 },
                    { name: 11 },
                    { name: 12 },
                    { name: 13 },
                    { name: 14 },
                ]}
                renderItem={() => (
                    <SpacerComponent position="bottom" size="large">
                        <RestaurantInfoCardComponent />
                    </SpacerComponent>
                )}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
};
