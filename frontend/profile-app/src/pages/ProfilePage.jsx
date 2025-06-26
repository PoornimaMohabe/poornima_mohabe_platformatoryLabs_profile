import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id"); 

  useEffect(() => {
    if (userId) {
      axios
        .get(`http://localhost:4500/api/profile/${userId}`)
        .then((res) => setUser(res.data))
        .catch((err) => console.error(err.message));
    }
  }, [userId]);

  if (!user) return <div className="text-center mt-20 text-xl text-gray-600">Loading profile...</div>;

 
 
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-md mx-auto">
       
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
         
          <div className="bg-gradient-to-br from-blue-800 to-blue-900 px-8 pt-12 pb-20 text-center relative">
           
            <div className="relative z-10">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
                <img
                  src={user.picture || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=96&h=96&q=80"}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              
              
              <h1 className="text-2xl font-bold text-white mb-2">{user.name}</h1>
              <p className="text-blue-200 text-sm uppercase tracking-wide font-medium">USER PROFILE</p>
            </div>
          </div>

          
          <div className="px-8 py-8 space-y-6">
            
            {user.mobileNumber && (
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium">{user.mobileNumber}</p>
                </div>
              </div>
            )}

            
            {user.email && (
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-800 font-medium break-all">{user.email}</p>
                </div>
              </div>
            )}

            
            {(user.city) && (
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium leading-relaxed">
                  {user.city}
                  </p>
                </div>
              </div>
            )}

             {(user.pincode) && (
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex itxdvems-center justify-center flex-shrink-0 mt-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium leading-relaxed">
                  {user.pincode}
                  </p>
                </div>
              </div>
            )}
          </div>

         
          <div className="px-8 pb-8">
              <Link to={`/edit-profile/${userId}`}>
            <button 
             
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Edit Profile
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
