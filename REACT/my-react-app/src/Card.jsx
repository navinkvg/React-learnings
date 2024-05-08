import profilepic from './assets/Profile.jpg';
function Card()
{   
    return(
    <>
    <div className = "card"> 
    <img className="pic" src={profilepic} alt="Profile picture"/>
    <h2 className ="Bio"> Navin </h2>
    <p>Java developer<br/> React </p>
    </div>
    </>
    
    );
}

export default Card