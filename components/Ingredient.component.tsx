import {View, Image, StyleSheet} from 'react-native';
import React from 'react';



const Ingredient: React.FC<{
    image: any;
}> = ({image}) => {
    return <View style={
        styles.ingredientContainer
    }>
        <Image source={image} />  
    </View>
}

const styles = StyleSheet.create({
    ingredientContainer: {
        width: 100,
        height: 80,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    }
})
export default Ingredient;