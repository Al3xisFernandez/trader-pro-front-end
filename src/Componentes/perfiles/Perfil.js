// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// export default function Perfil () {
//     const {user, isAuthenticated, isLoading} = useAuth0();
//     if (isLoading){
//         return <div> Loading...</div>
//     }
//     return (
//         isAuthenticated && (
//             <div className="perfil">
//                 <img src={user.picture} alt={user.name}/>
//                 <h6>{user.name}</h6>
//             </div>
//         )
//     );
// // 
// };