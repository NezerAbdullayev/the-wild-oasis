import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from 'react-router-dom';

//rect query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

//styles
import GlobalStyles from './styles/GlobalStyles';
//pages
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Login from './pages/Login';
import Settings from './pages/Settings';
import NewUsers from './pages/Users';
import Error from './pages/PageNotFound';
import AppLayout from './ui/AppLayout';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime: 60 * 1000,
      },
   },
});




function App() {
   return (
      <QueryClientProvider client={queryClient}>
         <ReactQueryDevtools initialIsOpen={false} />

         <GlobalStyles />
         <Router>
            <Routes>
               <Route element={<AppLayout />}>
                  <Route
                     path="/"
                     element={<Navigate replace to="/dashboard" />}
                  />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="bookings" element={<Bookings />} />
                  <Route path="cabins" element={<Cabins />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="newUsers" element={<NewUsers />} />
                  <Route path="*" element={<Error />} />
               </Route>

               <Route path="account" element={<Account />} />
               <Route path="login" element={<Login />} />
            </Routes>
         </Router>

         <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
               success:{
                  duration:3000
               },
               error:{
                  duration:5000,
               },
               style:{
                  fontSize:"16px",
                  maxWidth: "500px",
                  padding:  "16px 24px",
                  backgroundColor: "var(--color-grey-0",
                  color: "var(--color-grey-700"
               }
            }}
         />
      </QueryClientProvider>
   );
}

export default App;
