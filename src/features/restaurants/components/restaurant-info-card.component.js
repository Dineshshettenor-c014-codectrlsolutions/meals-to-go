import { SpacerComponent } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import {
    RestaurantCardCover,
    Info,
    RestaurantCard,
    Section,
    Rating,
    SectionEnd,
    Icon,
    Address,
} from './restaurant-info-card.styles';
import { View } from "react-native";
import { Favourite } from '../../../components/favourites/favourite.component';
export const RestaurantInfoCardComponent = ({ restaurant = {} }) => {
    const {
        name = 'Some Restaurant',
        icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
        photos = [
            'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
        ],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId,
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <View>
                <Favourite restaurant={restaurant} />
                <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            </View>
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>Rating : {rating}</Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error">CLOSED TEMPORARILY</Text>
                        )}
                        <SpacerComponent position="left" size="large">
                            <Text>{isOpenNow ? 'Open' : 'Close'}</Text>
                        </SpacerComponent>
                        <SpacerComponent position="left" size="large">
                            <Icon source={{ uri: icon }} />
                        </SpacerComponent>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};
