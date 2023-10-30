import { LightningElement, wire } from 'lwc';
import getAgents from '@salesforce/apex/AgentService.getAgents';

export default class AgentsList extends LightningElement {
  
  @wire(getAgents)
  agents;
  
}