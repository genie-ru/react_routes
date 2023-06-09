import { useNavigate, useSearchParams, Navigate } from "react-router-dom";



const Profile = () => {
    let navigate = useNavigate();
    const [searchParams] = useSearchParams();

    console.log(searchParams.get('profile'));
    return (
        <>
            <div>Profile</div>
            {/* <Navigate replace to="/"></Navigate> */}
            <button onClick={()=> navigate('/')}>
                Go to Home
            </button>
        </>
    );
}

export default Profile;