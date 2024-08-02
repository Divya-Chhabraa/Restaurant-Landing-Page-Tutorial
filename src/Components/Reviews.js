import React, { useState, useEffect } from "react";
import { AiFillStar } from "react-icons/ai";
import "./reviews.css"; // Import the CSS file

const Reviews = () => {
  // Sample reviews data
  const reviews = [
    {
      name: "Karan Sethi",
      review: "I've been using CamConnect for my team meetings, and it's been a game changer. The video is crystal-clear, and connecting is always smooth. Couldn’t ask for more!",
      rating: 5,
    },
    {
      name: "Suresh Kumar",
      review: "CamConnect is hands down the best video conferencing tool I’ve tried. It was a breeze to set up, and it’s reliable every single time.",
      rating: 4,
    },
    {
      name: "Dilip Roy",
      review: "Loving the quality and how easy it is to use. Staying in touch with my family has never been this fun and hassle-free!",
      rating: 4.5,
    },
    {
      name: "Trisha Jain",
      review: "Using CamConnect for my webinars has been fantastic. The experience is seamless, and the quality is consistently top-notch.",
      rating: 5,
    },
    {
      name: "Anita Patel",
      review: "CamConnect has quickly become my go-to for online meetings. The video quality is exceptional, and the interface is super easy to navigate.",
      rating: 4.5,
    },
    {
      name: "Rajesh Sharma",
      review: "The video and audio quality on CamConnect are impressive. It’s made remote work a lot smoother and more efficient.",
      rating: 4,
    },
    {
      name: "Sneha Rao",
      review: "This tool is great for both personal and professional use. The user interface is really friendly, which makes using it a pleasure.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      review: "CamConnect performs excellently with clear video quality. It’s perfect for my client presentations and team discussions.",
      rating: 4.5,
    },
    {
      name: "Neha Gupta",
      review: "I’m really impressed with CamConnect. It’s easy to use and the video quality is outstanding for all my virtual meetings.",
      rating: 5,
    },
    {
      name: "Amit Deshmukh",
      review: "This tool is fantastic for seamless communication. It’s user-friendly, and the video quality has always been superb.",
      rating: 4,
    },
    {
      name: "Meera Nair",
      review: "My experience with CamConnect has been fantastic. The video and audio are always clear, and it’s incredibly easy to use.",
      rating: 4.5,
    },
    {
      name: "Ravi Malhotra",
      review: "CamConnect has really boosted our team collaboration. It’s a reliable and effective solution for our video conferencing needs.",
      rating: 4,
    },
    {
      name: "Pooja Verma",
      review: "CamConnect is a game-changer for online meetings. The video and audio quality are excellent, making my virtual meetings a breeze.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      review: "This is by far the best video conferencing tool I’ve used. The interface is intuitive and the quality is top-notch.",
      rating: 4.5,
    },
    {
      name: "Ritika Kapoor",
      review: "I’m really happy with CamConnect. The platform is easy to use and the video clarity is impressive.",
      rating: 5,
    },
    {
      name: "Kiran Reddy",
      review: "CamConnect has exceeded my expectations. It’s reliable, and the video quality is consistently good.",
      rating: 4,
    },
    {
      name: "Shreya Iyer",
      review: "This tool is fantastic with smooth video streaming and very user-friendly features. Highly recommend it!",
      rating: 4.5,
    },
    {
      name: "Manoj Joshi",
      review: "CamConnect has been a fantastic addition to our remote work setup. The video quality is excellent, and it’s very easy to use.",
      rating: 5,
    },
    {
      name: "Sonia Sharma",
      review: "The video and audio quality on CamConnect are superb. It’s very effective for virtual meetings and simple to use.",
      rating: 4.5,
    },
    {
      name: "Nikhil Agrawal",
      review: "I’m impressed with CamConnect. The video quality is great, and the interface is straightforward and intuitive.",
      rating: 4,
    },
    {
      name: "Divya Mehta",
      review: "CamConnect is perfect for all my video conferencing needs. The quality is top-notch and it’s very user-friendly.",
      rating: 5,
    },
  ];
  

  // State for active review
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to handle next review
  const nextReview = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  // Function to handle previous review
  const prevReview = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  // Automatically move to the next review every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(nextReview, 3000); // Change review every 3 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  });

  return (
    <div className="reviewcontainer">
      <h1 className="reviewhead">Feedback Highlights</h1>
      <div className="carousel-container">
        <div className="review-card">
          <p className="review-text">{reviews[activeIndex].review}</p>
          <div className="review-stars">
            {Array.from({ length: Math.floor(reviews[activeIndex].rating) }, (_, index) => (
              <AiFillStar key={index} />
            ))}
            {reviews[activeIndex].rating % 1 !== 0 && <AiFillStar className="half-star" />}
          </div>
          <h3 className="review-name">{reviews[activeIndex].name}</h3>
        </div>
        <div className="carousel-buttons">
          <button onClick={prevReview} className="carousel-button">
            ❮
          </button>
          <button onClick={nextReview} className="carousel-button">
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
