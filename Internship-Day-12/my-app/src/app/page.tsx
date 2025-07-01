"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FaGithub , FaLinkedin } from "react-icons/fa";

export default function Home() {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = () => {
    alert("You are now following Owais Khiljee!");
    setIsFollowed(true);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6 place-items-center w-full">
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300 w-[550px] mx-auto">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/socailcard3.jpg"
              alt="Logo"
              width={100}
              height={100}
              className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-md mb-4 hover:scale-105 transition-transform duration-300"

            />
            <h2 className="text-xl font-semibold text-gray-800">
              Owais Khiljee
            </h2>
            <p className="text-indigo-600 text-sm mb-2">Web Developer</p>
            <p className="text-gray-600 text-sm mb-4 italic leading-relaxed tracking-wider">
              I am currently doing two internships side by side physically and
              remotely both . One at Verior and the other at a startup called
              ZetSol. I am also a student at the Mehran University of
              Engineering and Technology, Jamshoro, Pakistan. I am a full stack
              developer with a passion for creating beautiful and functional web
              applications.
            </p>
            {isFollowed ? (
              <button
                onClick={() =>
                  alert("You are already following Owais Khiljee!")
                }
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded cursor-not-allowed"
              >
                Following
              </button>
            ) : (
              <button
                onClick={handleFollow}
                className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors duration-300"
              >
                Follow
              </button>
            )}
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <Link
              href="https://github.com/Owais-dev55"
              target="_blank"
              className="text-gray-600  hover:text-indigo-500 transition-colors duration-300"
            >
              <FaGithub  className="w-8 h-8" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/owais-khilji-333owais2386556/"
              target="_blank"
              className="text-gray-600 hover:text-indigo-500 transition-colors duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </Link>
           
          </div>
          <div className="mt-6 text-gray-500 text-xs text-center">
            
        </div>
      </div>
    </div>
    </div>
  );
}
