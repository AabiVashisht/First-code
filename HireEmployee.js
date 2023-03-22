import React, {useState} from'react';
import { View, Text, SafeAreaView ,TouchableOpacity,Button,Image,StyleSheet, Picker,RadioButton,ScrollView, TextInput } from 'react-native';





const HireEmployee = ({ navigation }) => {

  const [EmployeeID, setEmployeeID] = useState('');
  const [EmployeeName, setEmployeeName] = useState('');
  const [Bloodgroup, setBloodgroup] = useState('');
  const [Designation, setDesignation] = useState('');
  const [MaritualStatus, setMaritualStatus] = useState('');
  const [FatherName, setFatherName] = useState('');
  const [MotherName, setMotherName] = useState('');
  const [Address, setAddress] = useState('');
  const [Pincode, setPincode] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [Email, setEmail] = useState('');
  const [Department, setDepartment] = useState('');
  const [City, setCity] = useState('');


  const handleSubmitPress = ()=>{

    if(!EmployeeID){
      alert('Please fill Employee ID');
      return;
    }
    if(!EmployeeName){
      alert('Please fill Employee Name');
      return;
    }
    if(!Designation){
      alert('Please fill Designation');
      return;
    }
    if(!MaritualStatus){
      alert('Please fill Designation');
      return;
    }
    if(!FatherName){
      alert('Please fill Designation');
      return;
    }
    if(!MotherName){
      alert('Please fill Designation');
      return;
    }
    if(!Address){
      alert('Please fill Designation');
      return;
    }
    if(!Pincode){
      alert('Please fill Designation');
      return;
    }
  }


  return (
    <SafeAreaView style={{flex:1}}>
    <ScrollView style={{}} >
        <View style={{flex:1,width:'100%',flexWrap:'wrap',backgroundColor:'lightblue'}}>
            <View style={{width:'100%'}}>
              <Text style={{fontSize:30,fontWeight:"bold",textAlign:"center",justifyContent:"center",alignItems:"center"}}>Hire Employee</Text>
            </View>
            <View style={{width:'90%',marginTop:30,flexDirection:'row',marginLeft:'5%',justifyContent:'center'}}>
              <TouchableOpacity>
                <Text style={{width:100,height:100,borderWidth:2,textAlign:"center",paddingTop:30}}>
                  Upload Photo
                </Text>
              </TouchableOpacity>
              <View style={{backgroundColor:'white',height:40,width:'30%',marginLeft:"40%",borderRadius:5,marginTop:30}}>
                <TouchableOpacity onPress={()=> navigation.navigate('SearchEmployee')}>
                  <Text style={{fontWeight:'bold',height:40,paddingTop:10,textAlign:'center'}}>Show All</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:30,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5,}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Employee ID
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}} onChangeText={(EmployeeID) => setEmployeeID(EmployeeID)}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Employee Name
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}} onChangeText={(EmployeeName) => setEmployeeName(EmployeeName)}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Gender
              </Text>

            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Blood Group
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}} onChangeText={(Bloodgroup) => setBloodgroup(Bloodgroup)}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Designation
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}} onChangeText={(Designation) => setDesignation(Designation)}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Maritual Status
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}} onChangeText={(MaritualStatus) => setMaritualStatus(MaritualStatus)}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Father Name
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}} onChangeText={(FatherName) => setFatherName(FatherName)}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Mother Name
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}} onChangeText={(MotherName) => setMotherName(MotherName)}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Address
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}} onChangeText={(Address) => setAddress(Address)}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Pin Code
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}} onChangeText={(Pincode) => setPincode(Pincode)}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                City
              </Text>
              {/* <Picker style={{width:'50%'}} selectedValue={City} onValueChange={(itemValue) => {
                        setCity(itemValue);}}>

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

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Mobile No.
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}} onChangeText={(MobileNo) => setMobileNo(MobileNo)}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Email
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}} onChangeText={(Email) => setEmail(Email)}></TextInput>
            </View>

            <View style={{paddingTop:5,paddingBottom:5,backgroundColor:'white',flexDirection:'row',width:'90%',marginTop:25,marginLeft:'5%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3,borderRadius:5}}>
              <Text style={{width:'40%',fontWeight:'bold',fontSize:20,marginLeft:10}}>
                Department
              </Text>
              <TextInput style={{borderBottomWidth:2,width:'50%'}} onChangeText={(Department) => setDepartment(Department)}></TextInput>
            </View>

            <View style={{width:'50%',marginTop:25,marginLeft:'25%',ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3}}>
              <Button title='Submit' onPress={handleSubmitPress}></Button>
            </View>




        </View>
    </ScrollView>
    </SafeAreaView>

  );
}
export default HireEmployee;

const styles= StyleSheet.create({

  Shadow:{ShadowColor:'#171717',shadowOffset:{width:-2,height:4},shadowOpacity:0.2,shadowRadius:3}

})
