import * as React from 'react';
import { View, Text, SafeAreaView ,TouchableOpacity,Button,Image,StyleSheet, Picker,RadioButton,ScrollView, TextInput } from 'react-native';




const EditEmployeeDetails = ({ navigation }) => {
  const [state,setState]=React.useState('Edit Details');


  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView  >
        <View style={{flex:1,width:'100%',height:'100%',backgroundColor:'lightblue'}}>
            <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center",justifyContent:"center",alignItems:"center"}}>{state}</Text>
            <View style={{backgroundColor:'white',height:180,width:'40%',justifyContent:'center',marginLeft:"30%",marginTop:"7%"}}>
              <Text onPress={()=>{
                setTimeout(()=>{
                  setState('Text 1');
                },0)
                setTimeout(()=>{
                  setState('Text 2');
                },0)
                setTimeout(()=>{
                  setState('Text 3');
                },0)


              }} style={{textAlign:'center',}}>Upload Photo</Text>
            </View>
            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:30,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Employee ID
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%',textAlign:"center"}}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Employee Name
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Gender
              </Text>

            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Blood Group
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Designation
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Maritual Status
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Father Name
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Mother Name
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Address
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Pin Code
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                City
              </Text>
              {/* <Picker style={{width:'50%'}}>
              <Picker.Item label="Select" value="Select"/>
                <Picker.Item label="Pathankot" value="Pathankot"/>
                <Picker.Item label="Sujanpur" value="Sujanpur"/>
                <Picker.Item label="mamoon" value="mamoon"/>
                <Picker.Item label="Dinanagar" value="Dinanagar"/>
                <Picker.Item label="Gurdaspur" value="Gurdaspur"/>
                <Picker.Item label="Amritsar" value="Amritsar"/>
                <Picker.Item label="Jasur" value="Jasur"/>
              </Picker> */}
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Mobile No.
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Email
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',height:65,marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2}}>
              <Text style={{width:'42%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Department
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}}></TextInput>
            </View>
            <View style={{width:'90%',marginTop:25,marginLeft:'5%',flexDirection:'row',ShadowColor:'#171717',marginBottom:20}}>
              <View style={{width:"30%",marginLeft:'10%',marginRight:"10%"}}>
                <Button title='Update' ></Button>
              </View>
              <View style={{width:"30%",marginLeft:'10%',marginRight:"10%"}}>
                <Button title='Cancel' ></Button>
              </View>

            </View>
        </View>
    </ScrollView>
    </SafeAreaView>

  );
}
export default EditEmployeeDetails;


