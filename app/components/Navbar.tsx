import {Link} from "react-router";

const Navbar = () =>{
    return (
        <nav className={"navbar"}>
            <Link to={"/"}>
                <p className={"font-bold text-2xl text-gradient"}>RESUME ANALYZER</p>
            </Link>
            <Link to={"/upload"} className={"primary-button w-fit"}>Upload Resume</Link>
        </nav>
    )
};

export default Navbar;