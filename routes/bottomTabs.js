import React from 'react'
import {View, Text} from 'react-native';
import HomeStack from '../routes/homeStack'
import DonationStack from '../routes/donationStack'
import ProfileStack from '../routes/profileStack'
import ProfileScreen from '../screens/profile'
import Home from '../screens/home'
import ProblemScreen from '../screens/problem'
import Icon from 'react-native-vector-icons/FontAwesome5';

import {AntDesign} from '@expo/vector-icons';

import BottomNavigation, {FullTab, ShiftingTab, IconTab, Badge} from 'react-native-material-bottom-navigation'

class BottomTabs extends React.Component {
    tabs = [
        {
            key: 'home',
            icon: 'home',
            label: 'Home',
            barColor: '#1ba21e',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            badgeCount : 10
        }, {
            key: 'donation',
            icon: 'hand-holding-usd',
            label: "Donation",
            barColor: '#1ba21e',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            badgeCount : 0
        }, {
            key: 'problem',
            icon: 'exclamation-circle',
            label: "Problem",
            barColor: '#1ba21e',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            badgeCount : 0
        }, {
            key: 'user',
            icon: 'user-cog',
            label: 'Account',
            barColor: '#1ba21e',
            pressColor: 'rgba(255, 255, 255, 0.16)',
            badgeCount : 0
        }
    ]
    state = {
        activeTab: 'home',
    }


    renderIcon = icon => ({isActive}) =>{
        // if (isActive) {
            // return <AntDesign size={30} color="white" name={icon}/>
            
        // }else{
            return <Icon name={icon} size={22} style={{color : 'white'}} />
        // }

    } 
    renderTab = ({tab, isActive}) => { 
    const renBad = () =>  <Badge status='success'><Text style={{color : "white"}}>{tab.badgeCount}</Text></Badge>       
        return (
        <FullTab
            renderBadge={renBad}
            showBadge={tab.badgeCount > 0}
            isActive={isActive}
            key={tab.key}
            label={tab.label}
            renderIcon={this.renderIcon(tab.icon)}
        />
        )
    }

    loadingView = ()=>(
        <View style={{flex: 1, alignSelf : 'center', justifyContent : 'center'}}>
            <Text>loading..</Text>
        </View>
    )
    
    backDonation = ()=> this.setState({activeTab : 'donation'})
    activateToDonation = ()=> this.setState({activeTab : 'donation'})
    
    render() {
        return (
            <View style={{flex: 1}}>
                {
                this.state.activeTab === 'home'
                ? <HomeStack activateToDonation={this.activateToDonation}/>
                : this.state.activeTab === 'user'
                ? <ProfileStack />
                : this.state.activeTab === 'problem'
                ? <ProblemScreen backDonation = {this.backDonation}/>
                : this.state.activeTab === 'donation'
                ? <DonationStack/>
                : null
                }
                <BottomNavigation
                    activeTab={this.state.activeTab}
                    onTabPress={newTab =>{
                        if (newTab.key === 'donation'|| newTab.key === 'user' ) {
                            console.log(newTab.key, this.state);
                            this.setState({
                                activeTab : 'home' 
                            },()=>this.setState({activeTab : newTab.key})                                     )
                        }else{
                            return this.setState({activeTab: newTab.key})
                        }
                        
                    }}
                    renderTab={this.renderTab}
                    tabs={this.tabs}/>
            </View>
        )
    }
}

export default BottomTabs