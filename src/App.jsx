import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

import HomePage from './components/HomePage';
import { UseExample1 } from './components/useExample/Joke';
import { UseExample2 } from './components/useExample/Posts';
import { UseExample3 } from './components/useExample/Message';
import { UseExample4 } from './components/useExample/Theme';
import { ActionExample1 } from './components/actionExample/Posts';
import { ActionExample2 } from './components/actionExample/ShoppingCart';
import { UseFormStatusExample } from './components/useFormStatusExample/Posts';
import AddToCartForm from './components/useActionStateExample/AddToCartForm';
import { UseOptimisticExample } from './components/useOptimisticExample/Message';
import { UseTransitionExample } from './components/useTransitionExample/Tabs';
import MainLayout from './layouts/MainLayout';
import { UseDeferredValueExample } from './components/useDefferedValueExample/SearchResults';
import CodeSnippet from './layouts/CodeSnippet';
import { CODE_SNIPPETS } from './assets/CodeSnippets';
import Aboutme from './components/Aboutme';
import Ai from './components/Ai';
import ChatWindow from './components/ChatWindow';
import TransitionPage from './components/useTransitionExample/TransitionPage';
import EffectPage from './components/useEffectExample/EffectPage';
import { SignIn, SignUp } from '@clerk/clerk-react';

const ProtectedRoutes = (
  <Route
    path='/'
    element={
      <>
        <SignedIn>
          <MainLayout />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </>
    }
  >
    <Route index element={<HomePage />} />
    <Route path='actions/1' element={<ActionExample1 />} />
    <Route path='actions/2' element={<ActionExample2 />} />
    <Route path='use/1' element={<UseExample1 />} />
    <Route path='use/2' element={<UseExample2 />} />
    <Route path='use/3' element={<UseExample3 />} />
    <Route path='use/4' element={<UseExample4 />} />
    <Route path='useformstatus' element={<UseFormStatusExample />} />
    <Route
      path='useActionState'
      element={
        <div className='relative mx-8 mt-6'>
          <div className='bg-[#010102] rounded-2xl py-6 px-2'>
            <AddToCartForm itemID='1' itemTitle='JavaScript: The Good Parts' />
            <AddToCartForm itemID='2' itemTitle='5000 V-Bucks Gift Card' />
          </div>
          <CodeSnippet string={CODE_SNIPPETS.useActionState} />
        </div>
      }
    />
    <Route path='usedeferredvalue' element={<UseDeferredValueExample />} />
    <Route path='useoptimistic' element={<UseOptimisticExample />} />
    <Route path='usetransition' element={<TransitionPage />} />
    <Route path='/useEffect' element={<EffectPage />} />
    <Route path='/aboutme' element={<Aboutme />} />
    <Route path='/ai' element={<Ai />} />
    <Route path='/chat' element={<ChatWindow />} />
  </Route>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    
      {ProtectedRoutes}

     
      <Route path='/sign-in' element={<SignIn routing='path' path='/sign-in' />} />
      <Route path='/sign-up' element={<SignUp routing='path' path='/sign-up' />} />

      
      <Route path='*' element={<Navigate to='/' />} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
