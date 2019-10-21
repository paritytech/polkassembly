import React, { useContext } from 'react'
import {UserDetailsContext} from '../../util/UserDetailsProvider'
// import { LatestPostsQuery } from '../../generated/graphql';

// interface Props {
//   data: LatestPostsQuery;
// }

// const className = 'MainPage';

const Login: React.FC = () => {
    const { id, username, setUserDetails } = useContext(UserDetailsContext)
    const handleClick = () => {
        setUserDetails({id:12, username:'blabla'})
    }
       return (
        <>
            <div onClick={handleClick}>setLogin</div>
            <div>Login - {id} - {username}</div>
        </>
//   <div className={className}>
//     <h3>Latest posts</h3>
//     <ul className={`${className}__list`}>
//       {!!data.posts &&
//         data.posts.map(
//           (post, i) =>
//             !!post && (
//               <li key={i} className={`${className}__item`}>
//                 {post.author.name} ({post.creation_date}): {post.content}
//               </li>
//             ),
//         )}
//     </ul>
//   </div>
);
}
 

export default Login;