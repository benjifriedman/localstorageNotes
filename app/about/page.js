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
        <li>This is a simple note-taking app.</li>
        <li>
          It does not send information over the internet. You can use it with
          airplane mode on.
        </li>
        <li>You can easily add, edit, and delete notes.</li>
        <li>The app is designed to be simple and intuitive to use.</li>
        <li>It&#39;s a great tool for organizing your thoughts and ideas.</li>
        <li>
          You can use it on any device, as it&#39;s responsive and works on all
          screen sizes.
        </li>
        <li>You can use just tab and enter to navigate around using the app</li>
        <li>
          The app is built with Next.js, a React framework, and Tailwind CSS, a
          utility-first CSS framework.
        </li>
      </ul>
    </div>
  );
};

export default About;
