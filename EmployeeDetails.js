import * as React from 'react';
import { View, Text, SafeAreaView ,ScrollView, TextInput } from 'react-native';




const EmployeeDetails = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView  >
        <View style={{flex:1,width:'100%',height:'100%',backgroundColor:'lightblue'}}>
            <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center",justifyContent:"center",alignItems:"center"}}>Employee Details</Text>
            <View style={{backgroundColor:'white',height:180,width:'40%',textAlign:'center',justifyContent:'center',marginLeft:"30%",marginTop:"7%"}}>
                    <Text>Photo</Text>
            </View>
            <View style={{width:'90%',marginTop:60,flexDirection:'row',marginLeft:"5%",height:30}}>
                <Text style={{backgroundColor:'white',width:'39%',textAlign:'center',fontSize:18,ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    Employee Name
                </Text>
                <Text style={{backgroundColor:'white',width:'60%',marginLeft:"1%",fontSize:18,textAlign:'center',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    Amit
                </Text>
            </View>
            <View style={{width:'90%',marginTop:25,flexDirection:'row',marginLeft:"5%",height:30}}>
                <Text style={{backgroundColor:'white',width:'39%',textAlign:'center',fontSize:18,shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    Employee ID
                </Text>
                <Text style={{backgroundColor:'white',width:'60%',marginLeft:"1%",textAlign:'center',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>

                </Text>
            </View>
            <View style={{width:'90%',marginTop:25,flexDirection:'row',marginLeft:"5%",height:30}}>
                <Text style={{backgroundColor:'white',width:'39%',textAlign:'center',fontSize:18,shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    Department
                </Text>
                <Text style={{backgroundColor:'white',width:'60%',marginLeft:"1%",textAlign:'center',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>

                </Text>
            </View>
            <View style={{width:'90%',marginTop:25,flexDirection:'row',marginLeft:"5%",height:30}}>
                <Text style={{backgroundColor:'white',width:'39%',textAlign:'center',fontSize:18,shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    Father Name
                </Text>
                <Text style={{backgroundColor:'white',width:'60%',marginLeft:"1%",textAlign:'center',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>

                </Text>
            </View>
            <View style={{width:'90%',marginTop:25,flexDirection:'row',marginLeft:"5%",height:30}}>
                <Text style={{backgroundColor:'white',width:'39%',textAlign:'center',fontSize:18,ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    Mother Name
                </Text>
                <Text style={{backgroundColor:'white',width:'60%',marginLeft:"1%",fontSize:18,textAlign:'center',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>

                </Text>
            </View>
            <View style={{width:'90%',marginTop:25,flexDirection:'row',marginLeft:"5%",height:30}}>
                <Text style={{backgroundColor:'white',width:'39%',textAlign:'center',fontSize:18,ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    Gender
                </Text>
                <Text style={{backgroundColor:'white',width:'60%',marginLeft:"1%",fontSize:18,textAlign:'center',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>

                </Text>
            </View>
            <View style={{width:'90%',marginTop:25,flexDirection:'row',marginLeft:"5%",height:30}}>
                <Text style={{backgroundColor:'white',width:'39%',textAlign:'center',fontSize:18,ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    Blood Group
                </Text>
                <Text style={{backgroundColor:'white',width:'60%',marginLeft:"1%",fontSize:18,textAlign:'center',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>

                </Text>
            </View>
            <View style={{width:'90%',marginTop:25,flexDirection:'row',marginLeft:"5%",height:30}}>
                <Text style={{backgroundColor:'white',width:'39%',textAlign:'center',fontSize:18,ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    Designation
                </Text>
                <Text style={{backgroundColor:'white',width:'60%',marginLeft:"1%",fontSize:18,textAlign:'center',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>

                </Text>
            </View>
            <View style={{width:'90%',marginTop:25,flexDirection:'row',marginLeft:"5%",height:30}}>
                <Text style={{backgroundColor:'white',width:'39%',textAlign:'center',fontSize:18,ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    Maritual Status
                </Text>
                <Text style={{backgroundColor:'white',width:'60%',marginLeft:"1%",fontSize:18,textAlign:'center',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>

                </Text>
            </View>
            <View style={{width:'90%',marginTop:25,flexDirection:'row',marginLeft:"5%",height:30}}>
                <Text style={{backgroundColor:'white',width:'39%',textAlign:'center',fontSize:18,ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    Address
                </Text>
                <Text style={{backgroundColor:'white',width:'60%',marginLeft:"1%",fontSize:18,textAlign:'center',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>

                </Text>
            </View>
            <View style={{width:'90%',marginTop:25,flexDirection:'row',marginLeft:"5%",height:30}}>
                <Text style={{backgroundColor:'white',width:'39%',textAlign:'center',fontSize:18,ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    City
                </Text>
                <Text style={{backgroundColor:'white',width:'60%',marginLeft:"1%",fontSize:18,textAlign:'center',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>

                </Text>
            </View>
            <View style={{width:'90%',marginTop:25,flexDirection:'row',marginLeft:"5%",height:30}}>
                <Text style={{backgroundColor:'white',width:'39%',textAlign:'center',fontSize:18,ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    Mobile Number
                </Text>
                <Text style={{backgroundColor:'white',width:'60%',marginLeft:"1%",fontSize:18,textAlign:'center',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>

                </Text>
            </View>
            <View style={{width:'90%',marginTop:25,flexDirection:'row',marginLeft:"5%",height:30}}>
                <Text style={{backgroundColor:'white',width:'39%',textAlign:'center',fontSize:18,ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
                    Email
                </Text>
                <Text style={{backgroundColor:'white',width:'60%',marginLeft:"1%",fontSize:18,textAlign:'center',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>

                </Text>
            </View>
        </View>
    </ScrollView>
    </SafeAreaView>

  );
}
export default EmployeeDetails;


