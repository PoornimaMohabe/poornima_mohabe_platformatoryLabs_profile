import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../utils/url";

const EditProfilePage = () => {
  const { id: userId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    city: "",
    pincode: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/profile/${userId}`)
      .then((res) => {
        setFormData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch user:", err.message);
        setLoading(false);
      });
  }, [userId]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await axios.put(`${BASE_URL}/api/profile/${userId}`, formData);
      alert("Profile updated successfully!");
      navigate(`/profile?id=${userId}`);
    } catch (err) {
      console.error("Update failed:", err.message);
      alert("Failed to update profile.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-blue-600 border-t-transparent mx-auto mb-4"></div>
        <p className="text-lg text-gray-600">Loading profile...</p>
      </div>
    </div>
  );

  const formFields = [
    { name: "name", label: "Full Name", type: "text", placeholder: "Enter your full name" },
    { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email address" },
    { name: "mobileNumber", label: "Mobile Number", type: "text", placeholder: "Enter your mobile number" },
    { name: "city", label: "City", type: "text", placeholder: "Enter your city" },
    { name: "pincode", label: "Pincode", type: "text", placeholder: "Enter your pincode" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4 shadow-sm">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Edit Profile</h1>
          <p className="text-gray-600">Update your personal information</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field) => (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-none text-gray-900 placeholder-gray-400"
                    required
                  />
                </div>
              ))}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {saving ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => navigate(`/profile?id=${userId}`)}
                  disabled={saving}
                  className="bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 disabled:bg-gray-50 disabled:cursor-not-allowed text-gray-700 disabled:text-gray-400 font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Cancel</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* additional info  */}

         <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Keep your information up to date</h3>
              <p className="text-sm text-gray-600">Your profile information helps us provide you with a better experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;



// import { useState } from "react";

// const EditProfilePage = () => {
//   // Demo state for UI showcase
//   const [formData, setFormData] = useState({
//     name: "John Doe",
//     email: "john.doe@example.com",
//     mobileNumber: "+1 234 567 8900",
//     city: "New York",
//     pincode: "10001",
//   });
//   const [loading, setLoading] = useState(false);
//   const [saving, setSaving] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = () => {
//     setSaving(true);
//     // Simulate API call
//     setTimeout(() => {
//       setSaving(false);
//       alert("Profile updated successfully!");
//     }, 2000);
//   };

//   if (loading) return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center">
//       <div className="text-center">
//         <div className="relative">
//           <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-200 border-t-indigo-600 mx-auto mb-6"></div>
//           <div className="absolute inset-0 rounded-full bg-indigo-100 opacity-20 animate-pulse"></div>
//         </div>
//         <div className="space-y-2">
//           <h3 className="text-xl font-semibold text-gray-800">Loading your profile</h3>
//           <p className="text-gray-500">Please wait while we fetch your information...</p>
//         </div>
//       </div>
//     </div>
//   );

//   const formFields = [
//     { 
//       name: "name", 
//       label: "Full Name", 
//       type: "text", 
//       placeholder: "Enter your full name",
//       icon: "👤"
//     },
//     { 
//       name: "email", 
//       label: "Email Address", 
//       type: "email", 
//       placeholder: "Enter your email address",
//       icon: "✉️"
//     },
//     { 
//       name: "mobileNumber", 
//       label: "Mobile Number", 
//       type: "text", 
//       placeholder: "Enter your mobile number",
//       icon: "📱"
//     },
//     { 
//       name: "city", 
//       label: "City", 
//       type: "text", 
//       placeholder: "Enter your city",
//       icon: "🏙️"
//     },
//     { 
//       name: "pincode", 
//       label: "Pincode", 
//       type: "text", 
//       placeholder: "Enter your pincode",
//       icon: "📍"
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-8 px-4">
//       <div className="max-w-3xl mx-auto">
//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
//           <div className="absolute top-1/2 -left-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
//         </div>

//         {/* Header */}
//         <div className="text-center mb-12 relative">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
//             <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//             </svg>
//           </div>
//           <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
//             Edit Your Profile
//           </h1>
//           <p className="text-gray-600 text-lg">Update your personal information with ease</p>
//           <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-4"></div>
//         </div>

//         {/* Form Card */}
//         <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden">
//           <div className="p-10">
//             <div className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {formFields.map((field, index) => (
//                   <div key={field.name} className={`${field.name === 'name' || field.name === 'email' ? 'md:col-span-2' : ''}`}>
//                     <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
//                       <span className="text-lg">{field.icon}</span>
//                       {field.label}
//                     </label>
//                     <div className="relative group">
//                       <input
//                         type={field.type}
//                         name={field.name}
//                         value={formData[field.name]}
//                         onChange={handleChange}
//                         placeholder={field.placeholder}
//                         className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 outline-none text-gray-900 placeholder-gray-400 bg-white/50 backdrop-blur-sm group-hover:border-indigo-300"
//                         required
//                       />
//                       <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-200/50">
//                 <button
//                   onClick={handleSubmit}
//                   disabled={saving}
//                   className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:ring-4 focus:ring-indigo-200 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//                 >
//                   {saving ? (
//                     <>
//                       <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
//                       <span>Saving Changes...</span>
//                     </>
//                   ) : (
//                     <>
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                       </svg>
//                       <span>Save Changes</span>
//                     </>
//                   )}
//                 </button>
                
//                 <button
//                   onClick={() => alert("Cancelled")}
//                   disabled={saving}
//                   className="bg-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 border-2 border-gray-200 hover:border-gray-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                   <span>Cancel</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Additional Info Card */}
//         <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
//           <div className="flex items-center gap-3">
//             <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
//               <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//             </div>
//             <div>
//               <h3 className="font-semibold text-gray-800">Keep your information up to date</h3>
//               <p className="text-sm text-gray-600">Your profile information helps us provide you with a better experience.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProfilePage;