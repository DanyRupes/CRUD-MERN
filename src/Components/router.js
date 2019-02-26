import React from 'react'
import {  Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Form_sam from './Form_sam'
import Contents from './Contents';

// const Loading = props => {
//     if (props.error) {
//       return 'error';
//     } else if (props.timedOut) {
//       return 'timeout';
//     } else if (props.pastDelay) {
//       return 'delay';
//     } else {
//       return null;
//     }
//   };

// const routers= [
//     {
//         path:'/',
//         component:Loadable ({
//             loader : ()=> import('./Contents'),
//             loading: Loading,
//             render(loaded, props){
//               let Component = loaded.default;
//               console.log(this.props)
//               console.log(props)
//               return <Component {...props} />;
//             },
//             delay: 200,  
//             timeout: 10000,
//           })
//     }, 
//     {
//         path:'/register',
//         component:Loadable ({
//             loader : ()=> import('./Form_sam'),
//             loading: Loading,
//             delay: 200,  
//             timeout: 10000,
//           })
//     }, 
// ]


// key for contents 1 . register 2.
class Routers extends React.Component{

  constructor(props){
    super(props)

  }


componentWillMount(){
  // console.log(this.props)

}
// {routers.map (({component, path, exact}, index) => {
//   return (
//     <Route exact={true} path={path} component={component} key={component} /> 
//   );
// })}
// <Route state={this.state} exact path="/" render={(props) => <Contents {...props} state={this.props} />} />
// <Route path="/register" component={() => (<Form_sam  />)}/>
// <Route  path={path} component={component} key={component}
// /> 
  render(){
    return(
    <main>
      <Switch>
          <Route state={this.state}  exact path="/" render={(props) => <Contents {...props} state={this.props} />} />
          <Route state={this.state}  exact path="/home" render={(props) => <Contents {...props} />  } />
          <Route path="/register" render={(props) => <Form_sam {...props} state={this.props} /> }  state={this.props}/>
      </Switch>
      </main>
    )}
}

export default Routers