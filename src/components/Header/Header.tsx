import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-blue-500 flex justify-around text-center items-center shadow-md">
      <div>
        <img className="w-40" src="https://i.pinimg.com/originals/9e/39/23/9e3923825ba4a4fa967858f980b8460f.png" />
      </div>
      <div>
        <ul className="flex">
          <li className="text-black text-lg mr-16"><Link to="/">Home</Link></li>
          <li className="text-black text-lg mr-16"><Link to="/pokedex">Pokédex</Link></li>
          <li className="text-black text-lg mr-16"><Link to="/legendaries">Legendaries</Link></li>
          <li className="text-black text-lg mr-16"><Link to="/documentation">Documentation</Link></li>
        </ul>
      </div>
    </header>
  );
}
