import React from 'react';
import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Post from '../components/post';
import user from '../Images/Profile.jpeg';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
];

const names = {
  'qwerty': "Declan Amoka",
  'sameer': "Sameer Choala",
  'varrun': "Varrun Patel",
  'jay': "Jayro Ramerez",
  'XxgregxX': "Greg Sanchez",
  "henryTheGoat": "Henry White",
  "bennyG": "Benny Gray"
}

function Friend(data) {
  return (
    <div className="friend" name={names[data.username]} style={{ marginLeft: '1em' }}>
      <img
        src={user}
        alt={data.username}
        style={{ margin: '.1vw', width: '15%', maxWidth: '10em', float: 'left', borderRadius: '30%' }}
      />
      <div style={{ marginLeft: '5em' }}>
        <h2 style={{ color: 'white', fontSize: '1.1em', marginBottom: '-.3em' }}>{names[data.username]}</h2>
        <h3>{data.username}</h3>
      </div>
      <br /><br />
    </div>
  );
}

const Profile = () => {
  // let [username, setUsername] = useState("");
  // let [name, setName] = useState("");
  // let [year, setYear] = useState("");
  // let [major, setMajor] = useState("");
  // let [joinDate, setJoinDate] = useState("");

  let [userData, setUserData] = useState("");

  useEffect(() => {

    fetch('/api/user', {
      method: 'GET'
    })
    .then(async response => {
     console.log(response);
     let data = await response.json();
  
     setUserData(data)
      console.log(userData);
    })

  }, []);

  const user = {
    username: userData.username,
    name: userData.name,
    pronoun: 'he/him',
    school: 'UMD',
    year: userData.year,
    major: userData.major,
    profilePicture: user,
    bio: "Hey there! I'm all about embracing life's adventures and sharing them with you. From hiking through majestic mountains to lounging on tropical beaches, I'm on a mission to explore the beauty of our world one step at a time. My camera is my trusty sidekick, capturing the moments and memories that make life extraordinary. When I'm not out adventuring, you'll find me immersed in the pages of a good book or jamming to my favorite tunes. Food and travel go hand in hand, so I'm also a certified foodie always on the hunt for delicious eats. Yoga keeps me grounded, and my furry friend is my constant companion on this journey we call life. Join me on this wild ride, and let's inspire each other to live our best lives! ✨ #AdventureAwaits 🌄🌊🌌",
    friends: ['qwerty', 'sameer', 'varrun', 'jay', 'XxgregxX', 'henryTheGoat', 'bennyG'],
    joinDate: userData.joinDate
  };

  const posts = [
    { name: 'Jai Patel', caption: "Exciting news! I just landed an awesome internship opportunity with a leading tech company. Hard work pays off — don't be afraid to chase your dreams!", time: new Date(1695490761) },
    { name: 'Jai Patel', caption: "Wanted to share some good news — my classes are going really well this semester. It's all about staying organized and staying motivated!", time: new Date(1695460729) },
    { name: 'Jai Patel', caption: "Just had a delicious and healthy lunch today. It's amazing how a good meal can boost your energy and mood. Take care of yourself, folks!", time: new Date(1695180764) },
    { name: 'Jai Patel', caption: "I'm thrilled to announce that I've been selected to lead a student project at my university. It's a great chance to gain leadership skills and collaborate with talented peers.", time: new Date(1695190763) },
    { name: 'Jai Patel', caption: "Today's workout was epic! Nothing like some exercise to clear your mind and stay fit. Remember, taking care of your health is an investment in your future. 💪", time: new Date(1695490367) },
  ]
  const dateForJoining = new Date(1000 * user.joinDate);

  const hideFriends = function(event) {
    const friendDivs = document.getElementsByClassName('friend');
    const searchValue = event.target.value;
    for (const div of friendDivs) {
      if (!div.getAttribute('name').includes(searchValue)) div.style.display = 'none';
      else div.style.display = 'block';
    }
  }

  return (
    <>
      <Navbar />
      <div className="columns">
        <div className='column is-one-third'>
          {/* Profile Info */}
          <div style={{ padding: '1.5em' }}>
            <img style={{ borderRadius: '50%', width: '12em' }} src={user.profilePicture} alt={user.name} />
            <h2 className="subtitle" style={{ color: 'white', fontSize: '1.45em', marginTop: '.2em', fontWeight: 600 }}>{user.name}</h2>
            <p style={{ marginTop: "-1.6em" }}>
              {user.username}{'pronoun' in user && ` · ${user.pronoun}`}
            </p>
            <input type="submit" style={{ marginTop: '1.8em', fontSize: '1em', padding: '.2em 1.8em', cursor: 'pointer', color: 'black' }} name="commit" value={`Add ${user.username}`} title={`Add ${user.username}`} aria-label={`Add ${user.username}`} />
            <p style={{ marginTop: '.8em', color: 'white', fontSize: '1.15em', fontWeight: 'lighter' }}>Class of {user.year} <span style={{ fontWeight: 'bold' }}>@</span> {user.school} | {user.major}</p>
            <h3 className="subtitle" style={{ fontWeight: 'bold', color: 'white', marginTop: '1em', fontSize: '1.2em' }}>Bio:</h3>
            <p style={{ color: 'white', marginTop: '-.8em', maxWidth: '90%' }}>{user.bio}</p>
            <br />
            <p style={{ fontSize: '1.1em', marginTop: '1em' }}>Joined {months[dateForJoining.getMonth()]} {dateForJoining.getFullYear()}</p>
          </div>
        </div>
        {/* Name and Posts */}
        <div className='column is-one-half' style={{ padding: 0 }}>
          <h1 className="title" style={{ color: 'white', marginTop: '1em', textAlign: 'center', fontSize: '2.5em' }}>Hi👋, I'm {user.username}</h1>
          <div style={{ width: '100%', height: '85  %' }}>
            <Post data={posts[0]} />
            <Post data={posts[1]} />
            <Post data={posts[2]} />
            <Post data={posts[3]} />
            <Post data={posts[4]} />
          </div>
        </div>
        {/* Friends Stuff */}
        <div className='column is-one-third'>
          <div style={{ marginTop: '1.2em' }}>
            <h3 className="subtitle" style={{ color: 'white', float: 'left', fontSize: '1.5em', fontWeight: 550 }}>
              Friends: {user.friends.length}
            </h3>
            <div>
              <input type="text" style={{ marginLeft: '1.8em', fontSize: '1em', marginTop: '.2em' }} placeholder='Search friends...' onChange={hideFriends} />
              {/* <button style={{ background: '#121212', border: 'none', fontSize: '1.3em', marginLeft: '-1.5em' , marginTop: '.5em'}}>🔍</button> */}
            </div>
          </div>
          <div className='friends' style={{ marginTop: '2em' }}>
            {user.friends.map((username, i) => <Friend username={username} key={i} />)}
          </div>
        </div>
      </div>
    </>
  )
};

export default Profile;