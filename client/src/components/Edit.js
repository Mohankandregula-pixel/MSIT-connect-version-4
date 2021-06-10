import React, { useEffect, useState } from "react";

function Edit() {
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      // history.push('/login');
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  const handleChange = (e) => {
    setUserData({ [e.target.name]: e.target.value });
    console.log(userData);
  };

  return (
    <div style={{width: "100%"}}>
      <p>edit Profile</p>
      <div className="col-md-8 pl-5 about-info">
        <div className="tab-content profile-tab" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div className="row">
              <div className="col-md-6">
                <label>User Id</label>
              </div>
              <div className="col-md-6">
                <p>787865454546</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label>Name</label>
              </div>
              <div className="col-md-6 ">
                <input
                  type="text"
                  value={userData.name}
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label>Email</label>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  value={userData.email}
                  name="email"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label>Phone</label>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  value={userData.phone}
                  name="phone"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label>Profession</label>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  value={userData.work}
                  name="work"
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
