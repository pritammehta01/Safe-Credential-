const navbar = () => {
   return (
            <nav className="justify-between flex items-center px-4 h-12 bg-slate-900 text-white  ">
                <div className="logo font-bold text-xl text-green-600 flex">
                    &lt;
                    <span className="text-white">&nbsp;Safe </span>
                    <span className="hidden md:block">&nbsp;Credential&nbsp; </span>/&gt;
                    </div>
                <ul className="flex gap-4">
                    <li className="flex items-center hover:font-bold"><ion-icon name="home-sharp"></ion-icon><a className="hidden md:block" href="">&nbsp;Home</a></li>|
                    <li className="flex items-center hover:font-bold"><a className="hover:font-bold" href="">About</a></li>|
                    <li className="flex items-center hover:font-bold"><ion-icon name="chatbubble-ellipses"></ion-icon><a className="hidden md:block" href="">&nbsp;Contact Us</a></li>|
                    <li className="flex items-center hover:font-bold"><ion-icon name="person"></ion-icon><a className="hidden md:block" href="">&nbsp;Profile</a></li>
                </ul>
            </nav>
   )
}

export default navbar
