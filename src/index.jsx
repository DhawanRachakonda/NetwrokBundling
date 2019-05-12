import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import Skeleton from './skeleton.jsx';

const YMAL = React.lazy(() => import('./components/good_bandwidth/simple-slide.jsx'));

import Routes from './routes/routes.jsx';

__webpack_public_path__ = `/assets/js/${CURRENT_BANDWIDTH}/`;
function App() {
  return (
    <Skeleton>
      
      {CURRENT_BANDWIDTH == '4g' && <Suspense fallback={<div>Loading YAML...</div>}>
        <YMAL/>
      </Suspense>}
      <Routes />
    </Skeleton>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
