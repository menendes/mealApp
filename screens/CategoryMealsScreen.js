import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';


const CategoryMealScreen = props =>{
    return(
        <View style={styles.screen}>
            <Text>The Category Meal screen!</Text>
            <Button title="go to meal detail" onPress={
              () =>{ props.navigation.navigate('MealDetail')} 
            }/>
            <Button title="go back" onPress={
                () => {
                    props.navigation.goBack();
                }
            }/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default CategoryMealScreen;