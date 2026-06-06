import {Link} from 'react-router'
export default function HomePage(){
    return(
        <div>
        <h1>
            List of all games:
        </h1><div>
          <Link to="/about-us"><p>about us page</p></Link>
        </div>
        </div>
    )
}