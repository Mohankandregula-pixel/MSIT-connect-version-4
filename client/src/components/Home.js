import React, {useState, useEffect} from 'react'
import Noti from "../images/Noti.jpg";
import resource from "../images/resource.jpg";
import calender from "../images/calender.jpg";
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
                    <h2>{userName}</h2>
                    
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
            &nbsp;
            &nbsp;
            &nbsp;

<div className="container-fluid">
                     <div className="row">
                     <div className="col-4">
                    <div class="card">
                        <img src={Noti} alt="Noti" />
                        <div class="card-body">
                            <h5 class="card-title">Recent Notifications</h5>
                            <p class="card-text">
                            You can find all new recent Notifications here.
                            </p>&nbsp;
                            <p></p>
                            <a href="#" class="btn btn-primary">Click here</a>
                        </div>
                        </div>
                    </div>

                    <div className="col-4">
                    <div class="card">
                    <img src={resource} alt="resource" />
                        <div class="card-body">
                            <h5 class="card-title">Resource references</h5>
                            <p className="card-text">
                            Here you can find all the resources for your placement preparation.
                            </p>&nbsp;
                            <p></p>

                            <a href="/Resources"  class="btn btn-primary">Click here</a>
                        </div>
                        </div>
                    </div>


                    <div className="col-4">
                    <div class="card">
                    <img src={calender} alt="calender" />
                        <div class="card-body">
                            <h5 class="card-title">Important dates</h5>
                            <p class="card-text">
                            Make a schedule and start your preparation right now.
                            </p>&nbsp;
                            <p></p>

                            <a href="https://www.google.com/calendar/about/" class="btn btn-primary">Click here</a>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>



                
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
