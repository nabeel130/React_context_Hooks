import React , { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
    // static contextType = ThemeContext;
    render() { 
        // console.log(this.context);
        // const { isLight , light , dark } = this.context;
        // const theme = isLight ? light  : dark;
        
        return ( 
            <ThemeContext.Consumer>{(context) => {

                 const { isLight , light , dark } = context;
                 const theme = isLight ? light  : dark; 

                return(
                    <nav style={{ background: theme.ui , color: theme.syntax}}>
                       <h1>Context App</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                )
            }}</ThemeContext.Consumer>
        
         );
    }
}
 
export default Navbar;