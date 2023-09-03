
'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Toprated() {
  const [data, setData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch("");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="toprated">
        <div className="topinfo">
          <h1>
            Projects in Need
            <br /> Support Great Ideas
          </h1>
          <p id="topp">
          Explore innovative projects seeking funding and <br />
          help turn great ideas into reality. Discover and
          <br /> support ventures that are making a positive impact.
        </p>
        </div>

        <Link href={"/"}>
          <div className="topposts-container">
            {data.map((item, index) => (
              <div className="topposts" key={index}>
                <img className="wimg" src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </>
  );
}
