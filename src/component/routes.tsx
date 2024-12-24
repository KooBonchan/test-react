import { Calculator } from './page/Calculator';
import { CounterPage } from './page/Counter';
import DocumentManager from './page/DocumentManager';
import { EmotionDiary } from './page/EmotionDiary';
import { TodoManager } from './page/TodoManager';
import { RouteMetadata } from './RouteMetadata';

export const routes: RouteMetadata[] = [
  {
    tabName: 'Doc',
    route: '/',
    element: <DocumentManager />,
  },
  {
    tabName: 'Calc',
    route: '/calculator',
    element: <Calculator />,
  },
  {
    tabName: 'Todo',
    route: '/todos',
    element: <TodoManager />,
  },
  {
    tabName: 'Count',
    route: '/counter',
    element: <CounterPage />,
  },
  {
    tabName: 'Diary',
    route: '/diary',
    element: <EmotionDiary />,
  },
];
