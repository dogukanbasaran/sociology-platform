import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import IntroductionPage from "../pages/PublicPages/IntroductionPage"
import AboutPage from "../pages/PublicPages/AboutPage"
import SignInPage from "../pages/PublicPages/SignInPage"
import SignUpPage from "../pages/PublicPages/SignUpPage"
import SharedLayout from "../components/SharedLayout/SharedLayout"


import SourcesPage from "../pages/PrivatePages/SourcesPage"
import DashboardPage from "../pages/PrivatePages/DashboardPage"

import NotFoundPage from "../pages/NotFoundPage"

export default function Routing() {
  return <Router>
    <Routes>
        {/* PUBLIC */}
        <Route element={<SharedLayout/>}>
            <Route path="/" element={<IntroductionPage/>}/>
            <Route path="/about" element={<AboutPage/>}/>      
        </Route>
        <Route path="/sign-in" element={<SignInPage/>}/>
        <Route path="/sign-up" element={<SignUpPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
  </Router>
}
