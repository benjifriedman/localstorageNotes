"use client";

import React from "react";

const About = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          window.location.href = "/";
        }}
        className="cursor-pointer border-2 border-[rgb(var(--foreground-rgb))] p-4"
      >
        Back
      </button>
      <br />
      <br />
      <h1 className="font-mono mb-4">About this app</h1>
      <ul>
        <li>
          This is a simple note-taking app.
          <li>
            It does not send information over the internet. You can use it with
            airplane mode on th1plaines{" "}
          </li>
        </li>
      </ul>
    </div>
  );
};

export default About;
