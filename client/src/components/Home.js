import React, {useState, useEffect} from 'react'
import Tpostatus from './Tpostatus';
import Statusview from './Statusview';

const Home = () => {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);
    const [userData, setUserData] = useState({});

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserName(data.name);
            setShow(true);
            setUserData(data);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    <h1>{userName}</h1>
                    <h2> { show ? 'Happy, to see you back' :  'We Are The MERN Developer' }</h2>
                </div>
            </div>
            <div>
            {userData.work == "TPO" &&( 
                <div className="container emp-profile">

                    <h1>TPO</h1>
                    <Tpostatus />
                    <br/>
                    <h1>Posts</h1>
                    <Statusview />
                    
                 

                </div>
            )}
                
                {userData.work == "student" &&(
                    <div > 
                        <div className="container emp-profile">
                        <h1>Posts</h1>
                       

                        <Statusview />
                      
                        </div>
                    </div>
                )}
                
            </div>
            
        </>
    )
}

export default Home
