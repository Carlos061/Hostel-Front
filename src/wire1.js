import "./App.css";

const Page = () => {
  return (
    <div className="page">
      <div className="top-bar">
        <div className="top-bar-child" />
        <div className="title">Hostel Finder</div>
        <div className="navigation">
          <div className="textfield">
            <div className="text">Search in site</div>
            <img className="ic-search-icon" alt="" src="/icsearch.svg" />
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="item">
          <div className="frame">
            <div className="icon">😃</div>
          </div>
          <div className="title1">Home</div>
        </div>
        <div className="item">
          <div className="frame">
            <div className="icon">😊</div>
          </div>
          <div className="title1">Hostels</div>
        </div>
        <div className="item">
          <div className="frame">
            <div className="icon">👨‍🎓</div>
          </div>
          <div className="title1">Students</div>
        </div>
        <div className="item">
          <div className="frame">
            <div className="icon">🏫</div>
          </div>
          <div className="title1">Dean of Students</div>
        </div>
        <div className="item">
          <div className="frame">
            <div className="icon">👥</div>
          </div>
          <div className="title1">Hostel Managers</div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <b className="title6">Welcome to Hostel Finder</b>
          <div className="description">Find your perfect hostel</div>
          <div className="input">
            <div className="textfield1">
              <div className="text1">Search by hostel name</div>
            </div>
          </div>
          <div className="button">
            <div className="seconday">
              <div className="title7">Filter</div>
            </div>
            <div className="primary">
              <div className="title7">Search</div>
            </div>
          </div>
        </div>
        <img className="section-child" alt="" src="/vector-200.svg" />
      </div>
      <div className="section1">
        <div className="container1">
          <b className="title9">Featured Hostels</b>
          <div className="description1">Explore the best hostels on campus</div>
          <div className="button1">
            <div className="primary">
              <div className="title7">View All</div>
            </div>
          </div>
        </div>
        <div className="list">
          <div className="row">
            <div className="article">
              <div className="image-container">
                <div className="image" />
              </div>
              <div className="title-parent">
                <div className="title11">Hostel A</div>
                <div className="subtitle">Located near the library</div>
                <div className="subtitle1">
                  Single and double rooms available
                </div>
                <div className="user">
                  <div className="avatar">
                    <div className="avatar1" />
                    <div className="title-wrapper">
                      <div className="title12">Hostel Manager</div>
                    </div>
                  </div>
                  <div className="icon-buttons">
                    <div className="icon5">🌟</div>
                    <div className="icon5">❤️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="article">
              <div className="image-container">
                <div className="image" />
              </div>
              <div className="title-parent">
                <div className="title11">Hostel B</div>
                <div className="subtitle">Next to the sports complex</div>
                <div className="subtitle1">
                  Variety of room types to choose from
                </div>
                <div className="user">
                  <div className="avatar">
                    <div className="avatar1" />
                    <div className="title-wrapper">
                      <div className="title12">Hostel Manager</div>
                    </div>
                  </div>
                  <div className="icon-buttons">
                    <div className="icon5">🌟</div>
                    <div className="icon5">❤️</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className="section-item" alt="" src="/vector-2001.svg" />
      </div>
      <div className="section2">
        <div className="container">
          <b className="title15">Hostel Rankings</b>
          <div className="list1">
            <div className="item5">
              <div className="frame5">
                <div className="icon9">🥇</div>
              </div>
              <div className="frame-div">
                <div className="title16">Hostel C</div>
                <div className="subtitle4">Rated: 4.5/5</div>
              </div>
              <div className="subtitle5">Popular choice</div>
            </div>
            <div className="item5">
              <div className="frame5">
                <div className="icon9">🥈</div>
              </div>
              <div className="frame-div">
                <div className="title16">Hostel D</div>
                <div className="subtitle4">Rated: 4.3/5</div>
              </div>
              <div className="subtitle5">Great facilities</div>
            </div>
            <div className="item5">
              <div className="frame5">
                <div className="icon9">🥉</div>
              </div>
              <div className="frame-div">
                <div className="title16">Hostel E</div>
                <div className="subtitle4">Rated: 4.2/5</div>
              </div>
              <div className="subtitle5">Home away from home</div>
            </div>
          </div>
        </div>
        <img className="section-child" alt="" src="/vector-2002.svg" />
      </div>
      <div className="section3">
        <div className="container">
          <b className="title19">Hostel Registration</b>
          <div className="description2">
            Register your hostel to be listed on Hostel Finder
          </div>
          <div className="input1">
            <div className="title20">Hostel Name</div>
            <div className="textfield2">
              <div className="text1">Enter hostel name</div>
            </div>
          </div>
          <div className="input1">
            <div className="title20">Location</div>
            <div className="textfield2">
              <div className="text1">Enter hostel location</div>
            </div>
          </div>
          <div className="input1">
            <div className="title20">Contact Email</div>
            <div className="textfield2">
              <div className="text1">Enter contact email</div>
            </div>
          </div>
          <div className="button2">
            <div className="primary">
              <div className="title7">Submit</div>
            </div>
          </div>
        </div>
        <img className="section-child" alt="" src="/vector-2003.svg" />
      </div>
      <div className="section4">
        <div className="container">
          <b className="title15">Hostel Statistics</b>
          <div className="list2">
            <div className="metric">
              <div className="title25">Total Hostels</div>
              <div className="data">30</div>
              <div className="change">+2</div>
            </div>
            <div className="metric">
              <div className="title25">Occupancy Rate</div>
              <div className="data1">85%</div>
              <div className="change1">+5%</div>
            </div>
          </div>
        </div>
        <img className="section-child" alt="" src="/vector-2004.svg" />
      </div>
      <div className="section5">
        <div className="container5">
          <div className="title27">Contact</div>
          <div className="title28">About</div>
          <div className="title29">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
