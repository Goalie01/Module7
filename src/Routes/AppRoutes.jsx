// special component containing all the possible routes for this app
// any props passed into AppRoutes will also be passed onto
// child components using {...props}

import { Routes, Route } from "react-router-dom"
import Homepage from "../Pages/Homepage";
import DashboardPage, {DashboardMessages, DashboardTasks} from "../Pages/DashboardPage";
import AboutPage from "../Pages/About";
import PageNotFound from "../Pages/PageNotFound";
import BitcoinRates from "../compoents/bitcoinRates";
import LoginForm from "../compoents/LoginForm";
import PostsPage, { Post, PostList } from "../Pages/PostsPage";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes(props) {

    return (
        <Routes>
            index matches on default/home URL: /
            <Route index element={<Homepage {...props} />} />
    
            {/* nested routes, matches on /dash/tasks etc */}
            <Route path="dash" element={<DashboardPage {...props} />}>
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>
    
            <Route path='/about' element={<AboutPage {...props} />} />
    
            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}
    
// export default AppRoutes;
// // Name this file AppRoutes.jsx and store in new folder 'routes'

// Lab 4

// function AppRoutes(props) {

//     return (
//         <Routes>
//             {/* index matches on default/home URL: / */}
//             <Route index element={<Homepage {...props} />} />

//             <Route path="login" element={<LoginForm {...props} />} />

//             <Route path="bitcoin" element={<BitcoinRates {...props} />} />
    
//             <Route path="*" element={<PageNotFound />} />

//             <Route path='/posts' element={<PostsPage {...props} />} >
// <Route index element={<PostList />} />
// {/* dynamic param taken from route, stored in variable called id */}
// <Route path=":id" element={<Post />} />
// </Route>

            
//         </Routes>
//     )
// }
    
// export default AppRoutes;
// Name this file AppRoutes.jsx and store in new folder 'routes'



function AppRoutes(props) {

        return (
            <Routes>

    <Route path="dash" element={<ProtectedRoute>
        <DashboardPage {...props} /></ProtectedRoute>}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
        </Route>
        <Route path="login" element={<LoginForm/>} />          

    
                
            </Routes>
        )
    }
        
    export default AppRoutes;




