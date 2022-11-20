import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import { RightArrowIcon } from '../icons';
import { colors } from '../assets/theme';
import React from 'react';
const Category:  React.FC<
{
    isSelected: boolean;
    name: string;
    image: any;
}>= ({image, isSelected, name}) => {
    return <View style={
        [styles.categoryContainer,
        {
            backgroundColor: isSelected ? colors.primary : '#fff',
        }]
    }>
        <Image source={image} />
        <Text style={
            styles.categoryName
        }>{name}</Text>
        <View style={[styles.circle, {
            backgroundColor: isSelected ? '#fff' : colors.secondary
        }]}>
            <RightArrowIcon isSelected={isSelected}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    categoryContainer: {
        alignItems: 'center',
        paddingVertical: 20,
        width: 130 ,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
    	    height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    categoryName: {
        fontSize: 14 ,
        fontFamily: 'Montserrat-Bold',
        marginTop: 15,
        marginBottom: 25
    },
    circle: {
        width: 30 ,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Category;