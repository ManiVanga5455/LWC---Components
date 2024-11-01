import { LightningElement, wire } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'
export default class NavigateLWC extends NavigationMixin(LightningElement) {
    homePageHandler(){
        this[NavigationMixin.Navigate]({
            type:'standard__namedPage',
            attributes:{
                pageName:"home"
            }
        })
    }
    objectPageHandler(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:"Student_info__c",
                actionName: "new"
            }
        })
    }
    defaultObjectPageHandler(){
        const defaultValue = encodeDefaultFieldValues({
            Salesforce_Role__c: 'Admin'
        });
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:"Student_info__c",
                actionName: "new" },
                state:{
                    defaultFieldValues: defaultValue
                }
        })
    }
   
    webPageHandler(){
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'https://www.linkedin.com/feed/'
            }
        });
    }
    lwcHandler(){
        let direction ={
            componentDef : 'c:calculator'
        };
        let encodeDef = btoa(JSON.stringify(direction))
        //console.log(+encodeDef)
        this[NavigationMixin.Navigate]({
            type:'standard__webPage',
            attributes:{
                url:'/one/one.app#'+encodeDef 
    }
})
    }
    
}