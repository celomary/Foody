import {View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { HatIcon, StarIcon } from '../icons';
import {colors} from '../assets/theme'
import React from 'react';

const Item: React.FC<
{
    id: number;
    name: string;
    image: any;
    price: number;
    rating: number;
    navigation: any;
}> = ({
    id,
    name,
    image,
    rating,
    navigation
}) => {

    return <Pressable onPress={()=>{
        navigation.navigate('detail',  {
            id,
        })
    }} style={[styles.itemContainer, styles.row]}>
       <View>
            <View style={
                [
                    styles.row,
                    styles.padding
                ]
            }>
                <HatIcon />
                <Text style={
                    [
                        styles.topText
                    ]
                }>top of the week</Text>
            </View>
            <View style={
                [styles.itemHeader, {
                    paddingHorizontal: 26,
                }]
            }>
                <Text style={
                    [
                        styles.title
                    ]
                }>
                    {name}
                </Text>
                <Text style={
                    styles.subTitle
                }>
                    Weight 540 gr
                </Text>
            </View>
            <View style={styles.itemBottom}>
                <View style={
                    styles.buttonLeft
                }>
                    <Text style={
                        styles.buttonLeftText
                    }>
                        +
                    </Text>
                </View>
                <View style={[
                    styles.row,
                    styles.starContainer
                ]}>
                    <StarIcon />
                    <Text style={styles.starContainerText}>{rating.toFixed(1)}</Text>
                </View>
            </View>
        </View>
        <View style={{
            position: 'relative'
        }}>
            <Image source={image} style={{
                position: 'absolute',
                left: -20,
                top: -85
                
            }}/>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: "#000",
        width: '98%',
        marginHorizontal: '1%',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        overflow: 'hidden',
        elevation: 2,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    padding: {
        paddingTop: 24,
        paddingHorizontal: 24
    },
    topText: {
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
        marginLeft: 10,
        color: colors.textHeader
    },
    title: {
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
        color: colors.textHeader
    },
    subTitle: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular',
        color: colors.textSubHeader
    },
    itemHeader: {
        marginTop: 20
    },
    itemBottom: {
        flexDirection: 'row',
        marginTop: 30,
    },
    buttonLeft: {
        width: 90,
        height: 53,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 20,
    },
    buttonLeftText: {
        fontSize: 20,
        fontFamily: 'Montserrat-Regular',
    },
    starContainer: {
        alignItems: 'center',
        marginLeft: 15
    },
    starContainerText: {
        marginLeft: 5,
        fontSize: 12,
        fontFamily: 'Montserrat-Bold',
    }
})
export default Item;