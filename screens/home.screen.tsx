import React from 'react';
import {SafeAreaView, Text, View, ScrollView,  Image, Dimensions, StyleSheet, TextInput,
FlatList} from 'react-native';
import { HomeIcon, SearchIcon } from '../icons';
import { colors } from '../assets/theme';
import Category from '../components/category.component';
import Item from '../components/Item.component';
import { useDataContext } from '../context';

const Home : React.FC<{
    navigation: any;
}> = ({navigation}) => {
    const categoriesData= [
        {
            id: 1,
            name: 'Pizza',
            image: require('../assets/images/pizza-icon.png'),
            isSelected: true
        },
        {
            id: 2,
            name: 'Seafood',
            image: require('../assets/images/shrimp-icon.png'),
            isSelected: false
        },
        {
            id: 3,
            name: 'Soft Drink',
            image: require('../assets/images/soda-icon.png'),
            isSelected: false
        }
    ];
    const {itemsData} = useDataContext();
    return <SafeAreaView style={[
        styles.homeContainer
    ]}>
        <ScrollView showsVerticalScrollIndicator={false} style={
            styles.wrapper
        }>
            <View style={styles.profile}>
                    <Image source={require('../assets/images/profile.png')} style={
                        styles.profileImage
                    } />
                    <HomeIcon />
            </View>
            <View style={styles.headerContainer}>
                <Text style={
                    styles.subHeader
                }>
                    Food
                </Text>
                <Text style={styles.header}>
                    Delivery
                </Text>
            </View>
            <View style={
                styles.searchContainer
            }>
                <SearchIcon />
                <View>
                <TextInput placeholder='Search...' style={
                    styles.textInputStyle
                } />
                </View>
            </View>
            <View style={styles.categoriesContainer}>
                <Text style={styles.categoriesHeader}>Categories</Text>
                <View style={
                    styles.categoriesListContainer
                }>
                    <FlatList
                        data={categoriesData}
                        renderItem={({item}) => <Category {...item}/>}
                        keyExtractor={item => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        contentContainerStyle={styles.categoriesList}
                    />
                </View>
            </View>
            <View style={
                [
                    styles.popularContainer,
                ]
            }>
                <Text style={styles.popularHeader}>Popular</Text>
                <View>
                    {
                        itemsData.map((item, index) => {
                            return <View key={item.id} style={{
                                marginBottom: index === itemsData.length - 1 ? 0 : 20
                            }}><Item  {...item} navigation={navigation}  /></View>
                        })
                    }
                </View>
            </View>
            <View 
            style={{height: 60}}/>
        </ScrollView>
    </SafeAreaView>
}


const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    wrapper: {
        width: Dimensions.get('screen').width * 0.9,
        marginHorizontal: Dimensions.get('screen').width  * 0.05,
        paddingTop: 40,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerContainer: {
        marginTop: 50
    },
    subHeader: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular'
    },
    header: {
        fontSize: 32,
        fontFamily: 'Montserrat-Bold',
        marginTop: 5
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
    },
    textInputStyle: {
        borderBottomWidth: 2,
        borderBottomColor: colors.textSubHeader,
        color: colors.textHeader,
        marginLeft: 10,
        fontSize: 14,
        padding: 5,
        width: Dimensions.get('screen').width * 0.84,
        fontFamily: 'Montserrat-Bold'
    },

    categoriesContainer: {
        marginTop: 30,
    },
    categoriesHeader: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 20
    },
    separator: {
        width: 20
    },
    categoriesList: {
        padding:5
    },
    categoriesListContainer: {
        width: Dimensions.get('screen').width * 0.9,
    },
    popularContainer: {
        marginTop: 30,
    },
    popularHeader: {
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 20
    }
})

export default Home;