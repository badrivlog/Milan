import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import UserLogin from "./pages/user/UserLogin"


const App = () => {
    return (
        <>


            <Router>
                <Routes>
                    {/* //* Home routes */}

                    <Route exact path='/' element={<Home />} />

                    {/* //* Auth routes - USER*/}

                    {/* <Route exact path='/user/register' element={<UserRegister />} /> */}
                    <Route exact path='/user/login' element={ <UserLogin />} />

                    {/* //* Auth routes - CLUBS*/}

                    {/* <Route exact path='/user/register' element={<ClubLogin />} />
                    <Route exact path='/user/login' element={<ClubRegister />} /> */}

                    {/* //* Display Routes */}
                    {/* <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} /> */}

                    {/* //* Donations */}
                    {/* <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<Home />} /> */}
                </Routes>
            </Router>


        </>
    )
}

export default App