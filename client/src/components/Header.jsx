import { BrowserRouter, Link } from "react-router-dom";

function Header() {
    return(
        <header>
            <BrowserRouter>
                <nav>
                    <div className="w-[100vw] h-20 p-5 bg-green-800 flex justify-between">
                        <div>
                            <p className="font-bold text-2xl text-white">Cabby</p>
                        </div>
                        <div className="text-white space-x-3">
                            <Link to="/">Home</Link>
                            <Link to="/signup">Signup</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                </nav>
            </BrowserRouter>
        </header>
    )
}

export default Header;