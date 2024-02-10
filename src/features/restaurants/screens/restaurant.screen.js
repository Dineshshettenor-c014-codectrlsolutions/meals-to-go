import { TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { RestaurantInfoCardComponent } from '../components/restaurant-info-card.component';

import styled from 'styled-components/native';
import { SpacerComponent } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.components';

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';

import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { Search } from '../components/search.component';
import { RestaurantList } from '../components/restaurant-list.styles';

import { FadeInView } from '../../../components/animations/fade.animation';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

// const RestaurantList = styled(FlatList).attrs({
//     contentContainerStyle: {
//         padding: 16,
//     },
// })``;
const LoadingContainer = styled.View`
position:absolute;
top:50%;
left:50%;
`;
const Loading = styled(ActivityIndicator)`
margin-left:-25px
`;
export const RestaurantsScreen = ({ navigation }) => {
    const { isLoading, error, restaurants } = useContext(RestaurantsContext);
    const [isToggled, setIsToggled] = useState(false);
    const { favourites } = useContext(FavouritesContext);
    // console.log(favourites);

    // console.log(error);
    // console.log(navigation);
    return (
        <SafeArea>
            {isLoading &&
                (
                    <LoadingContainer>
                        <Loading
                            animating={true}
                            size={50}
                            color={MD2Colors.blue200} />
                    </LoadingContainer>
                )}
            <Search
                isFavouritesToggled={isToggled}
                onFavouritesToggle={() => setIsToggled(!isToggled)}
            />
            {isToggled && (
                <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />
            )}
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", {
                            restaurant: item
                        })}>
                            <SpacerComponent position="bottom" size="large">
                                <FadeInView>
                                    <RestaurantInfoCardComponent restaurant={item} />
                                </FadeInView>
                            </SpacerComponent>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    );
};
//const RestaurantListView = styled.View`
//  flex: 1;
//padding: ${(props) => props.theme.space[3]};
//`;