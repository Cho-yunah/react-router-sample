import React from 'react';
import Link from '../../components/Link';
import Switch, { Route } from '../../utils/Switch';

import Hello from '../Hello';
import My123 from '../My123';


function App() {
  return (

      <>
        <div>
          <ul>
            <li>
              <Link to="/hello">Move to hello</Link>
            </li>
            <li>
              <Link to="/my123">Move to my123</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/hello" component={Hello} />
          <Route path="/my123" component={My123} />
        </Switch>
      </>
  
  )
}

export default App;
