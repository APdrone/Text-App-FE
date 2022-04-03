import React, { useEffect, useState } from "react";
import Form from "../components/Form/Form";
import UserWords from "../components/UserWords/UserWords";
import { createWord, deleteWord, getAllWords } from "../utils/apiRoutes";
import "./HomePage.css";

const Homepage = () => {
  const [wordList, setWordList] = useState([]);
  const [currentWord, setCurrentWord] = useState("");

  useEffect(() => {
    // fetch("http://127.0.0.1:4000/api/v1/words")
    fetch(getAllWords)
      .then((res) => res.json())
      .then(({ data }) => setWordList(data.words));
  }, [wordList.length]);

  const AddWordList = (newWord) => {
    // fetch("http://127.0.0.1:4000/api/v1/words", {
    fetch(createWord, {
      method: "POST",
      body: JSON.stringify({ word: newWord }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    setWordList([...wordList, newWord]);
  };

  const deleteWordList = (id) => {
    // fetch(`http://127.0.0.1:4000/api/v1/words/${id}`, {
    fetch(`${deleteWord}/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    let newWordList = [...wordList];
    newWordList = newWordList.filter((word) => word._id !== id);

    setWordList(newWordList);
  };

  const EditWordList = (id) => {
    const foundWord = wordList.find((word) => word._id === id);
    setCurrentWord(foundWord);
  };

  return (
    <div className="container">
      <Form addWord={AddWordList} selectedWord={currentWord} />
      <UserWords
        list={wordList}
        deleteWord={deleteWordList}
        editWord={EditWordList}
      />
    </div>
  );
};

export default Homepage;
