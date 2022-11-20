import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Dimensions, ScrollView, Image, FlatList, Pressable} from 'react-native';
import { useDataContext } from '../context';
import { WhiteStarIcon, LeftArrowIcon, RightArrowIcon} from '../icons';
import { colors } from '../assets/theme';
import Ingredient from '../components/Ingredient.component';

const Detail: React.FC<{
    route: any;
    navigation: any;
}> = ({
    route,
    navigation
}) => {
    const {id} = route.params;
    const {itemsData} = useDataContext();
    const item = itemsData.find((item)=>item.id.toString() === id.toString());
    const ingredients = [
        {
            id: 1,
            name: 'Tomato',
            image: require('../assets/images/tomato.png')
        },
        {
            id: 2,
            name: 'Cheese',
            image: require('../assets/images/cheese.png')
        },
        {
            id: 3,
            name: 'Ham',
            image: require('../assets/images/ham.png')
        },
        {
            id: 4,
            name: 'Garlic',
            image: require('../assets/images/garlic.png')
        }
    ]
    return <SafeAreaView style={
        styles.productContainer
    } >
        <ScrollView style={[
            styles.wrapperContainer,
        ]} showsVerticalScrollIndicator={false}>
            <View style={[
                styles.topDetailContainer
            ]}>
                <Pressable style={styles.backBtn} onPress={
                    ()=> {
                        navigation.goBack();
                    }
                }>
                    <LeftArrowIcon />
                </Pressable>
                <View style={styles.starContainer}>
                    <WhiteStarIcon />
                </View>
            </View>
            <View style={styles.productHeader}>
                <Text style={styles.productName}>
                    {item?.name}
                </Text>
                <Text style={
                    styles.productPrice
                }>
                    ${item?.price.toFixed(2)}
                </Text>
            </View>
            <View style={styles.containerDetails}>
                <View>
                    <View>
                        <Text style={
                            styles.detailsSubTitle
                        }>
                            Size
                        </Text>
                        <Text style={
                            styles.detailsTitle
                        }>
                            {item?.size}
                        </Text>
                    </View>
                    <View style={
                        styles.detailsNestedContainer
                    }>
                        <Text style={
                            styles.detailsSubTitle
                        }>
                            Crust
                        </Text>
                        <Text style={
                            styles.detailsTitle
                        }>
                            {item?.crust}
                        </Text>
                    </View>
                    <View style={
                        styles.detailsNestedContainer
                    }>
                        <Text style={
                            styles.detailsSubTitle
                        }>
                            Delivery in
                        </Text>
                        <Text style={
                            styles.detailsTitle
                        }>
                            {item?.delivery}
                        </Text>
                    </View>
                </View>
                <View>
                    <Image source={item?.image} style={styles.productImage} />
                </View>
            </View>
            <View style={
                styles.ingredientContainer
            }>
                <Text style={styles.ingredientTitle}>
                    Ingredients
                </Text>
                <FlatList
                    data={ingredients}
                    keyExtractor={(item)=>item.id.toString()}
                    renderItem={({item})=> <Ingredient image={item.image}  />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={()=><View style={styles.seperator} />}
                    contentContainerStyle={styles.ingredientList}
                />
            </View>
            <View style={
                styles.bottomBtn
            }>
                <Text style={
                    styles.bottomBtnText
                }>Place an order</Text>
                <RightArrowIcon isSelected={true} />
            </View>
            <View style={{
                height: 30
            }} />
        </ScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    productContainer: {
        backgroundColor: colors.background,
        flex: 1, 
    },
    wrapperContainer: {
    },
    topDetailContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        width: Dimensions.get('window').width * 0.9,
        marginHorizontal: Dimensions.get('window').width * 0.05,
    },
    backBtn: {
        width: 40,
        height: 40,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: colors.textSubHeader,
        alignItems: 'center',
        justifyContent: 'center',
    },
    starContainer: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    productHeader: {
        marginTop: 30,
        width: Dimensions.get('window').width * 0.9,
        marginLeft: Dimensions.get('window').width * 0.05,
    }, 
    productName: {
        fontSize: 32,
        fontFamily: 'Montserrat-Bold',
        width: '50%',
    },
    productPrice: {
        fontSize: 32,
        fontFamily: 'Montserrat-Bold',
        color: colors.secondary,
        marginTop: 15,
    },
    productImage: {
        position: 'absolute',
        left: -160,
        bottom: -98
    },
    containerDetails : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.9,
        marginLeft: Dimensions.get('window').width * 0.05,
        marginTop: 40
    },
    detailsNestedContainer: {
        marginTop: 15,
    },
    detailsSubTitle: {
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
        color: colors.textSubHeader,
        marginBottom: 5,
    },
    detailsTitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
    },
    seperator: {
        width: 20,
    },
    ingredientContainer: {
        width: Dimensions.get('window').width * 0.9,
        marginHorizontal: Dimensions.get('window').width * 0.05,
        marginTop: 30,
    },
    ingredientTitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 15,
    },
    ingredientList: {
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    bottomBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        width: Dimensions.get('window').width * 0.9,
        marginHorizontal: Dimensions.get('window').width * 0.05,
        backgroundColor: colors.primary,
        paddingVertical: 20,
        borderRadius: 30,
    },
    bottomBtnText: {
        marginRight: 10,
        fontSize: 14,
        fontFamily: 'Montserrat-Bold',
        
    }
})

export default Detail;