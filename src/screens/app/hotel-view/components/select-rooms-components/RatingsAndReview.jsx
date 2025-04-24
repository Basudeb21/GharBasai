import { View, Text } from 'react-native'
import React from 'react'
import RatingAndReviewsStyles from './select-rooms-styles/RatingsAndReviewStyles'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import Entypo from 'react-native-vector-icons/dist/Entypo'
import AntDesign from 'react-native-vector-icons/dist/AntDesign'


import Colors from '../../../../../constants/Colors'

const RatingsAndReview = () => {
    return (
        <View style={RatingAndReviewsStyles.container}>
            <Text style={RatingAndReviewsStyles.headtxt}>Ratings & Review</Text>
            <View style={RatingAndReviewsStyles.subContainer}>
                <View style={RatingAndReviewsStyles.reviewContainer}>
                    <View style={RatingAndReviewsStyles.left}>
                        <Text style={RatingAndReviewsStyles.ratingCount}>4.0</Text>
                        <Text style={RatingAndReviewsStyles.ratingTxt}>very Good</Text>
                        <View style={RatingAndReviewsStyles.blueItemContainer}>
                            <MaterialIcons
                                name="reviews"
                                size={10}
                                color={Colors.BLUE}
                            />
                            <Text style={RatingAndReviewsStyles.blueTxt}>1,593 reviews</Text>
                        </View>
                        <View style={RatingAndReviewsStyles.blueItemContainer}>
                            <Entypo
                                name="video-camera"
                                size={10}
                                color={Colors.BLUE}
                            />
                            <Text style={RatingAndReviewsStyles.blueTxt}>2 videos</Text>
                        </View>
                    </View>
                    <View style={RatingAndReviewsStyles.right}>
                        <View style={RatingAndReviewsStyles.rightContainer}>
                            <Text style={RatingAndReviewsStyles.rateNumber}>5</Text>
                            <AntDesign
                                name="staro"
                                size={16}
                                color={Colors.THEME}
                            />
                            <View style={RatingAndReviewsStyles.outerLine}>
                                <View style={RatingAndReviewsStyles.innerLine}>

                                </View>
                            </View>
                        </View>
                        <View style={RatingAndReviewsStyles.rightContainer}>
                            <Text style={RatingAndReviewsStyles.rateNumber}>4</Text>
                            <AntDesign
                                name="staro"
                                size={16}
                                color={Colors.THEME}
                            />
                            <View style={RatingAndReviewsStyles.outerLine}>
                                <View style={RatingAndReviewsStyles.innerLine}>

                                </View>
                            </View>
                        </View>
                        <View style={RatingAndReviewsStyles.rightContainer}>
                            <Text style={RatingAndReviewsStyles.rateNumber}>3</Text>
                            <AntDesign
                                name="staro"
                                size={16}
                                color={Colors.THEME}
                            />
                            <View style={RatingAndReviewsStyles.outerLine}>
                                <View style={RatingAndReviewsStyles.innerLine}>

                                </View>
                            </View>
                        </View>
                        <View style={RatingAndReviewsStyles.rightContainer}>
                            <Text style={RatingAndReviewsStyles.rateNumber}>2</Text>
                            <AntDesign
                                name="staro"
                                size={16}
                                color={Colors.THEME}
                            />
                            <View style={RatingAndReviewsStyles.outerLine}>
                                <View style={RatingAndReviewsStyles.innerLine}>

                                </View>
                            </View>
                        </View>
                        <View style={RatingAndReviewsStyles.rightContainer}>
                            <Text style={RatingAndReviewsStyles.rateNumber}>1</Text>
                            <AntDesign
                                name="staro"
                                size={16}
                                color={Colors.THEME}
                            />
                            <View style={RatingAndReviewsStyles.outerLine}>
                                <View style={RatingAndReviewsStyles.innerLine}>

                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={RatingAndReviewsStyles.bottomContainer}>
                    <View style={RatingAndReviewsStyles.bottomContentContainer}>
                        <MaterialIcons
                            name="verified"
                            size={16}
                            color={Colors.THEME}
                        />
                        <Text style={RatingAndReviewsStyles.bottomTxtOne}>86% guest rated 4+</Text>
                    </View>
                    <View style={RatingAndReviewsStyles.bottomContentContainer}>
                        <MaterialIcons
                            name="verified"
                            size={16}
                            color={Colors.THEME}
                        />
                        <Text style={RatingAndReviewsStyles.bottomTxtOne}>93% guest recomanded</Text>
                    </View>

                </View>
            </View>
        </View >
    )
}

export default RatingsAndReview