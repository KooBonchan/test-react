import { Route, Routes, useNavigate } from 'react-router-dom';
import './Body.css';
import { routes } from './routes';

export function Body() {
  const navigate = useNavigate();
  
  return (
    <div className="body">
      <div className='nav'>
        {routes.map((route)=>(
          <button
            key={'tab_'+route.tabName.toLowerCase()}
            type="button"
            onClick={()=>navigate(route.route)}
          >
            {route.tabName}
          </button>
        ))}
      </div>
      <Routes>
      {routes.map(({route, element})=>(
        <Route key={'route_'+route} path={route + '/*'} element={element}/>
      ))}
      </Routes>
    </div>
  );
}

