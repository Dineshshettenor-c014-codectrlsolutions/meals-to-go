import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { Text } from "../typography/text.component";
import { SpacerComponent } from "../spacer/spacer.component";
import React from "react";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({ favourites, onNavigate }) => {
    if (!favourites.length) {
        return null;
    }
    return (
        <FavouritesWrapper>
            <SpacerComponent variant="left.large">
                <Text variant="caption">Favourites</Text>
            </SpacerComponent>

            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                {favourites.map((restaurant) => {
                    const key = restaurant.name;
                    return (
                        <SpacerComponent key={key} position="left" size="medium">
                            <TouchableOpacity
                                onPress={() =>
                                    onNavigate("RestaurantDetail", {
                                        restaurant,
                                    })
                                }
                            >
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </SpacerComponent>
                    );
                })}
            </ScrollView>
        </FavouritesWrapper>
    );
};