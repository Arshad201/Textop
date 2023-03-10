import React, { useState } from 'react';
import './TextBox.css';
import Alert from '../Component/Alert/Alert.js';
import { FiSun, FiMoon } from 'react-icons/fi';

const TextBox = () => {
    const [text,setText] = useState('Write Something!');
    const [alert, setAlert] = useState({show : false});
    const [theme, setTheme] = useState(false);


    const handleAlert = (msg) =>{

      setAlert({
        show : true,
        message : msg
      });

      setTimeout(() => {
        setAlert({
          show : false,
          message : ""
        });
      }, 2000);
    }

    const handleTheme =()=>{
      setTheme(!theme);
    }

    theme ? document.body.style.background = 'black' : document.body.style.background = 'white';

    const handleRemove =()=>{
        setText("");
        handleAlert("Text removed successfully!");
    }

    const handleCopy =()=>{

      document.getElementById('textscr').select();
      navigator.clipboard.writeText(text);
      handleAlert(`Copied! : ${text.slice(0, 120)}`);

    }

    const handleUpper =()=>{
        setText(text.toUpperCase());
        handleAlert("Text is converted to Uppercase successfully!");

    }

    const handllower =()=>{
        setText(text.toLowerCase());
        handleAlert("Text is converted to lowercase successfully!");

    }

    const handleCapitalize =()=>{

        const arr = text.split(" ");

        for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
      
        }

        const str2 = arr.join(" ");

        setText(str2)
      handleAlert("Text Capitalize successfully!");


    }
          
    const handleExtraSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      handleAlert("Extra spaces removed successfully!");
    }

    const countWord =(text)=>{

      const wordArr = text.split(" ");

      let count = 0;
      for (let i = 0; i < wordArr.length; i++) {

        if(wordArr[i]!==""){
          count+=1;
        }
        
      }
      return count;
    }

    const countchar =(text)=>{

      const charArr = text.split("");

      let count = 0;

      for (let i = 0; i < charArr.length; i++) {

        if(charArr[i]!==" "){
          count+=1;
        }
        
      }
      return count;
    }

    const countSentence =(text)=>{

      const sentenceArr = text.split(".");

      let count = 0;
      for (let i = 0; i < sentenceArr.length; i++) {

        if(sentenceArr[i].trim().length!==0){
          count+=1;
        }
        
      }
      return count;
      
    }
  return (
    <>

    <Alert alertData={alert} />
    {
      theme ? <FiSun className={`themeIcon ${theme && 'darkTheme'}`} onClick={handleTheme}/> : <FiMoon className={`themeIcon`} onClick={handleTheme}/>
    }
    <div className={`topResult  ${theme && 'darkTheme'}`}>
    <span>
        <b>Words - </b> {countWord(text)}
        </span>
        <span>
        <b>Characters - </b>{countchar(text)}
        </span>
        <span>
        <b>Sentence - </b>{countSentence(text)}
        </span>
    </div> 
    <div className={`textBox`} style={theme ? {border : '1px solid white'} : {}}>
      <textarea value={text} id='textscr' onChange={(e)=>setText(e.target.value)} rows="10" style={theme ? {background : 'blue'} : {}}></textarea>
      <div className="buttons">
        <button className="btns" disabled={text.length===0 ? true : false} onClick={handleRemove}>Remove</button>
        <button className="btns" disabled={text.length===0 ? true : false}  onClick={handleCopy}>Copy</button>
        <button className="btns" disabled={text.length===0 ? true : false}  onClick={handleUpper}>UpperCase</button>
        <button className="btns" disabled={text.length===0 ? true : false}  onClick={handllower}>LowerCase</button>
        <button className="btns" disabled={text.length===0 ? true : false}  onClick={handleCapitalize}>Capitalize</button>
        <button className="btns" disabled={text.length===0 ? true : false}  onClick={handleExtraSpace}>Remove Space</button>
      </div>
    </div>
    <div className={`result ${theme && 'darkTheme'}`}>
      <b>Summary -</b>
        <span>
        {text.length === 0 ? 'Nothing is Found!' : text}
        </span>
    </div>
    </>
  )
}

export default TextBox
