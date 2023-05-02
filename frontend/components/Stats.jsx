import UserCount from "./UserCount";
import PostCount from "./postCount";
import GalleriesCount from "./GalleriesCount";

const Stats = () => {
  return ( 
    <div style={{border: 'none'}}>
      <UserCount />
      <PostCount />
      <GalleriesCount />
    </div>
  );
}

export default Stats;