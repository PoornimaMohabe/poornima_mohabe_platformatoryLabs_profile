import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/url";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id"); 
  const url = `${BASE_URL}/api/profile/${userId}`
  
  useEffect(() => {
    if (userId) {
      axios
        .get(url)
        .then((res) => setUser(res.data))
        .catch((err) => console.error(err.message));
    }
  }, [userId]);





if (!user) return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-200 border-t-indigo-600 mx-auto mb-6"></div>
          <div className="absolute inset-0 rounded-full bg-indigo-100 opacity-20 animate-pulse"></div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">Loading profile</h3>
          <p className="text-gray-500">Please wait while we fetch your information...</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">User Profile</h1>
          <p className="text-gray-600">Manage your account information</p>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-12 text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
              <img
                src={user.profileImage || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=96&h=96&q=80"}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-1">{user.name}</h2>
            <p className="text-blue-100 text-sm font-medium">Profile Information</p>
          </div>

          {/* Profile Details */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Mobile Number */}
              {user.mobileNumber && (
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Phone Number</p>
                    <p className="text-gray-900 font-medium">{user.mobileNumber}</p>
                  </div>
                </div>
              )}

              {/* Email */}
              {user.email && (
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Email Address</p>
                    <p className="text-gray-900 font-medium break-words">{user.email}</p>
                  </div>
                </div>
              )}

              {/* City */}
              {user.city && (
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">City</p>
                    <p className="text-gray-900 font-medium">{user.city}</p>
                  </div>
                </div>
              )}

              {/* Pincode */}
              {user.pincode && (
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Pincode</p>
                    <p className="text-gray-900 font-medium">{user.pincode}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Button */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link to={`/edit-profile/${userId}`}>
                <button className="w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;


// import { useEffect, useState } from "react";

// const ProfilePage = () => {
//   // Demo user data for UI showcase
//   const [user, setUser] = useState({
//     name: "Alex Johnson",
//     email: "alex.johnson@example.com",
//     mobileNumber: "+1 (555) 123-4567",
//     city: "San Francisco",
//     pincode: "94105",
//     profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=96&h=96&q=80"
//   });
//   const [loading, setLoading] = useState(false);

//   // Demo userId for navigation
//   const userId = "demo-user-123";

//   const handleEditProfile = () => {
//     alert("Navigate to edit profile page");
//   };

//   if (loading) return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
//       <div className="text-center">
//         <div className="relative">
//           <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-200 border-t-indigo-600 mx-auto mb-6"></div>
//           <div className="absolute inset-0 rounded-full bg-indigo-100 opacity-20 animate-pulse"></div>
//         </div>
//         <div className="space-y-2">
//           <h3 className="text-xl font-semibold text-gray-800">Loading profile</h3>
//           <p className="text-gray-500">Please wait while we fetch your information...</p>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 px-4">
//       <div className="max-w-4xl mx-auto">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
//           <div className="absolute top-1/2 -left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
//         </div>

//         {/* Header */}
//         <div className="text-center mb-12 relative">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
//             <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//             </svg>
//           </div>
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
//             Your Profile
//           </h1>
//           <p className="text-gray-600 text-lg">Manage your account information</p>
//           <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-4"></div>
//         </div>

//         {/* Profile Card */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
//           {/* Profile Header */}
//           <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 px-8 py-16 text-center relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-10">
//               <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//                 <defs>
//                   <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
//                     <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
//                   </pattern>
//                 </defs>
//                 <rect width="100" height="100" fill="url(#grid)" />
//               </svg>
//             </div>
            
//             {/* Profile Image */}
//             <div className="relative inline-block mb-6">
//               <div className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white transform hover:scale-105 transition-transform duration-300">
//                 <img
//                   src={user.profileImage}
//                   alt="profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               {/* Online Status Indicator */}
//               <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
//                 <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
//               </div>
//             </div>
            
//             <h2 className="text-3xl font-bold text-white mb-2">{user.name}</h2>
//             <p className="text-indigo-100 text-lg font-medium">Profile Dashboard</p>
            
//             {/* Decorative Elements */}
//             <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
//             <div className="absolute top-8 right-8 w-4 h-4 bg-white/30 rounded-full"></div>
//             <div className="absolute bottom-4 left-8 w-6 h-6 border-2 border-white/30 rounded-full"></div>
//           </div>

//           {/* Profile Details */}
//           <div className="p-10">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Phone Number */}
//               {user.mobileNumber && (
//                 <div className="group">
//                   <div className="flex items-center p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
//                     <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
//                       <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm font-bold text-gray-500 mb-1 flex items-center gap-2">
//                         📱 Phone Number
//                       </p>
//                       <p className="text-gray-900 font-bold text-lg">{user.mobileNumber}</p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Email */}
//               {user.email && (
//                 <div className="group">
//                   <div className="flex items-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
//                     <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
//                       <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm font-bold text-gray-500 mb-1 flex items-center gap-2">
//                         ✉️ Email Address
//                       </p>
//                       <p className="text-gray-900 font-bold text-lg break-words">{user.email}</p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* City */}
//               {user.city && (
//                 <div className="group">
//                   <div className="flex items-center p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
//                     <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
//                       <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm font-bold text-gray-500 mb-1 flex items-center gap-2">
//                         🏙️ City
//                       </p>
//                       <p className="text-gray-900 font-bold text-lg">{user.city}</p>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Pincode */}
//               {user.pincode && (
//                 <div className="group">
//                   <div className="flex items-center p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
//                     <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
//                       <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
//                       </svg>
//                     </div>
//                     <div className="flex-1">
//                       <p className="text-sm font-bold text-gray-500 mb-1 flex items-center gap-2">
//                         📍 Pincode
//                       </p>
//                       <p className="text-gray-900 font-bold text-lg">{user.pincode}</p>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Action Button */}
//             <div className="mt-12 pt-8 border-t border-gray-200/50">
//               <button 
//                 onClick={handleEditProfile}
//                 className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-200 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
//               >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//                 </svg>
//                 <span className="text-lg">Edit Profile</span>
//                 <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Quick Stats Card */}
//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 text-center hover:bg-white/80 transition-all duration-300">
//             <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <h3 className="font-bold text-gray-800 mb-1">Profile Complete</h3>
//             <p className="text-sm text-gray-600">All fields updated</p>
//           </div>
          
//           <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 text-center hover:bg-white/80 transition-all duration-300">
//             <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//               </svg>
//             </div>
//             <h3 className="font-bold text-gray-800 mb-1">Secure Account</h3>
//             <p className="text-sm text-gray-600">Protected & verified</p>
//           </div>
          
//           <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/30 text-center hover:bg-white/80 transition-all duration-300">
//             <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mx-auto mb-3 flex items-center justify-center">
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//               </svg>
//             </div>
//             <h3 className="font-bold text-gray-800 mb-1">Quick Access</h3>
//             <p className="text-sm text-gray-600">Easy to manage</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;