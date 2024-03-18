import React from 'react';
import Link from '../../components/Link';


function App() {
  return (
    <div>
      <h1>메인 화면</h1>
      <Link to='/hi'>
        페이지 전환 링크
      </Link>
    </div>
  )
  // return (<Switch>
  //   <Redirect exact path='/' to='/login' />
  //   <Route  path='/login' component={Login}/>
  //   <Route  path='/signup' component={Signup} />
  //   <Route  path='/workspace/:workspace' component={Workspace} />
  // </Switch>);
}

export default App;
