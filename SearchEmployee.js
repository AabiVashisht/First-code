import * as React from 'react';
import { View, Text, SafeAreaView ,TouchableOpacity,ScrollView, TextInput } from 'react-native';





const SearchEmployee = ({ navigation }) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView  >
        <View style={{flex:1,width:'100%',height:'100%',backgroundColor:'lightblue'}}>
            <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center"}}>Search Employee</Text>
            <View style={{width:'90%',marginTop:70,flexDirection:'row',marginLeft:"5%"}}>
                <TextInput style={{borderBottomWidth:2,width:'62%',textAlign:"center",height:40}}></TextInput>
                <View style={{backgroundColor:'white',height:40,width:'36%',marginLeft:"2%",textAlign:'center'}}>
                    <TouchableOpacity onPress={{}}>
                      <Text style={{fontWeight:'bold',fontSize:18,height:40,paddingTop:6,textAlign:'center'}}>SEARCH</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{width:'90%',marginTop:20,flexDirection:'row',marginLeft:"5%"}}>
                <View style={{backgroundColor:'white',height:200,width:'39%',textAlign:'center',justifyContent:'center'}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('EmployeeDetails')}>
                      <Text style={{textAlign:'center'}}>Photo</Text>
                    </TouchableOpacity>
                </View>
                <View style={{backgroundColor:'white',height:200,width:'60%',marginLeft:"1%"}}>
                    <View style={{width:'100%',flexDirection:'row',paddingLeft:"2%",paddingTop:10}}>
                        <Text style={{backgroundColor:'white',width:'31%',fontSize:16}}>
                            Name
                        </Text>
                        <Text style={{width:"2%",fontWeight:"bold"}}>:</Text>
                        <Text style={{backgroundColor:'white',width:'67%',fontSize:16,textAlign:'center',justifyContent:'center'}}>
                            Amit
                        </Text>
                    </View>
                    <View style={{width:'100%',flexDirection:'row',paddingLeft:"2%",paddingTop:10}}>
                        <Text style={{backgroundColor:'white',width:'31%',fontSize:16}}>
                            Department
                        </Text>
                        <Text style={{width:"2%",fontWeight:"bold"}}>:</Text>
                        <Text style={{backgroundColor:'white',width:'67%',fontSize:16,textAlign:'center',justifyContent:'center'}}>
                            Quality
                        </Text>
                    </View>
                    <View style={{width:'100%',flexDirection:'row',paddingLeft:"2%",paddingTop:10}}>
                        <Text style={{backgroundColor:'white',width:'31%',fontSize:16}}>
                            Designation
                        </Text>
                        <Text style={{width:"2%",fontWeight:"bold"}}>:</Text>
                        <Text style={{backgroundColor:'white',width:'67%',fontSize:16,textAlign:'center',justifyContent:'center'}}>
                            Manager
                        </Text>
                    </View>
                    <View style={{width:'100%',flexDirection:'row',paddingLeft:"2%",paddingTop:10}}>
                        <Text style={{backgroundColor:'white',width:'31%',fontSize:16}}>
                            Address
                        </Text>
                        <Text style={{width:"2%",fontWeight:"bold"}}>:</Text>
                        <Text style={{backgroundColor:'white',width:'67%',fontSize:16,textAlign:'center',justifyContent:'center'}}>
                            H.No 247 Karoli, Pathankot
                        </Text>
                    </View>
                </View>
            </View>

            <View style={{width:'90%',marginTop:20,flexDirection:'row',marginLeft:"5%",marginBottom:'25%'}}>
                <View style={{backgroundColor:'white',width:'49%',textAlign:'center',justifyContent:'center'}}>
                    <View style={{backgroundColor:'white',height:40,textAlign:'center',justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=> navigation.navigate('EditEmployeeDetails')}>
                            <Text style={{fontWeight:'bold',fontSize:18,height:40,paddingTop:6,textAlign:'center'}}>EDIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{backgroundColor:'white',width:'50%',textAlign:'center',justifyContent:'center',marginLeft:"1%"}}>
                    <View style={{backgroundColor:'white',height:40,textAlign:'center',justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=> navigation.navigate('Delete')}>
                            <Text style={{fontWeight:'bold',fontSize:18,height:40,paddingTop:6,textAlign:'center'}}>DELETE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
    </SafeAreaView>

  );
}
export default SearchEmployee;


