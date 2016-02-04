import React,{ Component } from "react";
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
class NavBar extends Component {

  render(){
  	let styles = {
  		tabs: {
  			width: '390px',
  			position: 'absolute',
  			right: '60px',
  			textTransform: 'uppercase'
  		},
  		tab: {
  			height: '60px',
  			color: '#fff'
  		},
  		inkBar: {
  			height: '4px',
  			marginTop: '-4px'
  		}
  	};
    return (
    	<div className="app-header">
    		<Tabs style={styles.tabs} tabItemContainerStyle={{backgroundColor:'transprent'}} inkBarStyle={styles.inkBar}>
    			<Tab style={styles.tab} label="Home" />
    			<Tab style={styles.tab} label="Account" />
    			<Tab style={styles.tab} label="About" />
    		</Tabs>
    	</div>		
      )
  }
}

export default NavBar;