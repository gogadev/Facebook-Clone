import React from "react";

import Story from "../story/Story";

import "./story-reel.style.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
        profileSrc="https://image.freepik.com/free-vector/profile-icon-male-avatar-hipster-man-wear-headphones_48369-8728.jpg"
        title="John Stone"
      />
      <Story
        image="https://i.pinimg.com/originals/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4.png"
        profileSrc="https://i.pinimg.com/originals/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4.png"
        title="Mia Nobu"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvbwa3ktSl_ZkEobiij5nJ-jgVP0J9SaDzmw&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvbwa3ktSl_ZkEobiij5nJ-jgVP0J9SaDzmw&usqp=CAU"
        title="Ciara Villa"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThBJv7Rmo5PK3Z95NXO1wJJmL0FC_TchBebA&usqp=CAU"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcThBJv7Rmo5PK3Z95NXO1wJJmL0FC_TchBebA&usqp=CAU"
        title="Tim Beast"
      />
      <Story
        image="https://ph-files.imgix.net/b8a427e6-70b2-4e9e-9830-374b24abf127?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=221.00000000000003&h=221.00000000000003&fit=max"
        profileSrc="https://ph-files.imgix.net/b8a427e6-70b2-4e9e-9830-374b24abf127?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=221.00000000000003&h=221.00000000000003&fit=max"
        title="Oli John"
      />
    </div>
  );
};

export default StoryReel;
