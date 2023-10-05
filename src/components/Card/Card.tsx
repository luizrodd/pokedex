import React from "react";
import { Link } from "react-router-dom";
interface Card {
  front_default: string;
  name: string;
  typeName: string;
  statsHpName: string;
  statsAttackName: string;
  statsHpNumber: string;
  statsAttackNumber: string;
  id: number;
}
const Card = ({
  statsAttackNumber,
  statsHpNumber,
  statsAttackName,
  statsHpName,
  front_default,
  name,
  typeName,
  id
}: Card) => {
  return (
    <div className={`border border-gray-300 rounded-lg p-4 w-64 m-10`}>
      <img
        src={front_default}
        alt={name}
        className={`w-20 h-20 mx-auto rounded-full ${
          typeName === "fire"
            ? "bg-red-300"
            : typeName === "water"
            ? "bg-blue-300"
            : typeName === "bug"
            ? "bg-green-300"
            : typeName === "electric"
            ? "bg-yellow-300"
            : "bg-gray-300"
        }`}
      />
      <div className="text-center mt-2">
        <h2 className="text-xl font-semibold"><Link to={`/pokedex/pokemon/${id}`}>{name}</Link></h2>
        <p className="text-gray-600">{typeName}</p>
      </div>
      <div className="flex justify-between mt-4">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-700">Ataque</span>
          <span className="text-lg font-semibold text-blue-500">
            {statsAttackNumber}
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-700">HP</span>
          <span className="text-lg font-semibold text-green-500">
            {statsHpNumber}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
