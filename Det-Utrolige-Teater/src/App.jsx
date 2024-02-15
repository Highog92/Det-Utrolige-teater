import './Global.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from './Layouts/Main';
import { Homepage } from './Pages/Homepage';
import { ShowsEvents } from './Pages/Shows&Events';
import { Actors } from './Pages/Actors';
import { SignUp } from './Pages/SignUp';
import { Login } from './Pages/Login';

function App() {

  return (
    <>
      <BrowserRouter> {/* Route containeren der wrapper de forskellige ruter */}
        <Routes>{/* Top level component der lytter på hvad der er i url'en */}
          <Route path="/" element={<MainLayout title='Homepage' />}>{/* selve ruten */}
            {/* De to tomme paths=("/") er en nødvendighed ellers bliver det første man ser en blank outlet */}
            <Route path="/" element={<Homepage title="Homepage" />} />
            <Route path="/homepage" element={<Homepage title="Homepage" />} />
            <Route path="/showsevents" index element={<ShowsEvents title='Shows & events' />} />
            <Route path="/actors" index element={<Actors title='Actors' />} />
            <Route path="/login" index element={<Login title='Login' />} />
            <Route path="/signup" index element={<SignUp title='Signup' />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
