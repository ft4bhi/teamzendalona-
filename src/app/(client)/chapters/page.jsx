'use client'
import {useEffect,useState} from 'react';
import ChapterCard from "../components/chapter/ChapterCard.jsx"

const Chapters = () => {
  const [chapters,setchapters] =useState([]);

useEffect(() => {
  const fetchChapters =async () => {
    const res = await fetch ('/data/chapters.json');
    const data = await res.json();
    setchapters(data);
  };

  fetchChapters();
},[]);
    return(       
  <div className="">
    <div className="">
      {chapters.map((chapter, index) => (
        <ChapterCard key={index} chapter={chapter} />
      ))}
    </div>
  </div>
);
};

