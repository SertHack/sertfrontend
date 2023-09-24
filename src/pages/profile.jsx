import React from 'react';
import Navbar from '../components/navbar'

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'
];

const names = {
  'qwerty': "Declan Amoka",
  'sameer': "Sameer Choala",
  'varrun': "Varrun Patel",
  'jay': "Jayro Ramerez"
}

function Friend(data) {
    return (
      <div style={{ marginLeft: '1em' }}>
        <img
          src="https://i.imgur.com/MK3eW3As.jpg"
          alt={data.username}
          style={{ margin:'.1vw', width: '15%', maxWidth: '10em', float: 'left' }}
        />
        <div style={{ marginLeft: '5em' }}>
          <h2 style={{ color: 'white', fontSize: '1.1em', marginBottom: '-.3em' }}>{names[data.username]}</h2>
          <h3>{data.username}</h3>
        </div>
        <br/><br/>
      </div>
    );
}

const Profile = () => {
  const user = {
    username: 'jpatel05',
    name: 'Jai Patel',
    pronoun: 'he/him',
    school: 'UMD',
    year: 'Freshman',
    major: 'Computer Science',
    profilePicture: 'https://avatars.githubusercontent.com/u/61297975?v=4',
    bio: 'I like riding bikes on the trailers near my house and taking long walks on the beach with my dog Charlie. I like riding bikes on the trailers near my house and taking long walks on the beach with my dog Charlie. I like riding bikes on the trailers near my house and taking long walks on the beach with my dog Charlie.',
    friends: ['qwerty', 'sameer', 'varrun', 'jay'],
    joinDate: 1695490761
  };

  const joinDate = new Date(1000 * user.joinDate);

  return (
    <>
      <Navbar/>
      <div className="columns">
          <div className='column is-one-third'>
            {/* Profile Info */}
              <div style={{ padding: '1.5em' }}>
                  <img style={{ borderRadius: '50%', width: '12em' }} src={user.profilePicture} alt={user.name} />
                  <h2 className="subtitle" style={{ color: 'white', fontSize: '1.45em', marginTop: '.2em', fontWeight: 600 }}>{user.name}</h2>
                  <p style={{ marginTop: "-1.6em" }}>
                    {user.username}{'pronoun' in user && ` · ${user.pronoun}`}
                    </p>
                  <input type="submit" style={{ marginTop: '1.8em', fontSize: '1em', padding: '.2em 1.8em', cursor: 'pointer', color: 'black' }} name="commit" value={`Add ${user.username}`} title={`Add ${user.username}`} aria-label={`Add ${user.username}`}/>
                  <p style={{ marginTop: '.8em', color: 'white', fontSize: '1.15em', fontWeight: 'lighter' }}>{user.year} @ {user.school} | {user.major}</p>
                  <h3 className="subtitle" style={{ fontWeight: 'bold', color: 'white', marginTop: '1em', fontSize: '1.2em' }}>Bio:</h3>
                  <p style={{ color: 'white', marginTop: '-.8em', maxWidth: '90%' }}>{user.bio}</p>
                  <br/>
                  <p style={{ fontSize: '1.1em', marginTop: '1em'}}>Joined {months[joinDate.getMonth()]} {joinDate.getFullYear()}</p>
                  {/* <div style={{ marginTop: '1.2em' }}>
                    <h3 className="subtitle" style={{color: 'white', float: 'left', fontSize: '' }}>
                      Friends: {user.friends.length}
                    </h3>
                    <input type="text" style={{ marginLeft:  '3em' }} placeholder='Search friends...' />
                  </div> */}
              </div>
          </div>
          {/* Name and Posts */}
          <div className='column is-one-half' style={{ padding: 0 }}>
            <h1 className="title" style={{ color: 'white', marginTop: '1em', textAlign: 'center', fontSize: '2.5em' }}>Hi👋, I'm {user.name}</h1>   
            <div style={{ backgroundColor: 'white', width: '100%', height: '85  %' }}>
            </div>
          </div>
          {/* Friends Stuff */}
          <div className='column is-one-third'>
            <div style={{ marginTop: '1.2em' }}>
              <h3 className="subtitle" style={{color: 'white', float: 'left', fontSize: '1.5em', fontWeight: 550 }}>
                Friends: {user.friends.length}
              </h3>
              <div>
                <input type="text" style={{ marginLeft: '1.8em', fontSize: '1em', marginTop: '.2em' }} placeholder='Search friends...' />
                <button style={{ background: '#121212', border: 'none', fontSize: '1.3em', marginLeft: '-1.5em' , marginTop: '.5em'}}>🔍</button>
              </div>
            </div>
            <div className='friends' style={{ marginTop: '2em' }}>
              {user.friends.map((username,i) => <Friend username={username} key={i} />)}
            </div>
          </div>
      </div>
    </>
  )
};

export default Profile;