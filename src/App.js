import "./styles.css";

import React, { useState } from "react";

export default function Seven() {
  const [str, setstr] = useState();
  const [alphabets, setalphabets] = useState();
  const [number, setnumber] = useState();
  const [special, setspecial] = useState();
  const [alphabetstemp, setalphabetstemp] = useState("");
  const [numbertemp, setnumbertemp] = useState("");
  const [specialtemp, setspecialtemp] = useState("");
  // const [str22alpha,setstr2alpha]=useState("");
  // const [str22num,setstr2num]=useState("");
  // const [str22special,setstr2special]=useState("");
  var str1 = "";
  var str2 = "";
  const getdata = (e) => {
    if (e.target.name == "input1") {
      str1 = e.target.value;
      //console.log(str1);
    } else {
      str2 = e.target.value;
      //console.log(str2);
    }
  };

  const operation2 = () => {
    let str2alpha = "";
    let str2num = "";
    let str2special1 = "";

    for (let i = 0; i < str2.length; i++) {
      if (
        (str2[i] >= "A" && str2[i] <= "Z") ||
        (str2[i] >= "a" && str2[i] <= "z")
      ) {
        str2alpha = str2alpha + str2[i];
      } else if (str2[i] >= "0" && str2[i] <= "9") {
        str2num = str2num + str2[i];
      } else {
        str2special1 = str2special1 + str2[i];
      }
    }
    let resultalpha = [];
    let resultnum = [];
    let resultspecial = [];
    // console.log(a)
    // console.log(n)
    // console.log(s)
    console.log(resultalpha);

    console.log(resultalpha);
    let astr1 = alphabetstemp;
    let astr2 = str2alpha;
    let nstr1 = numbertemp;
    let nstr2 = str2num;
    let sstr1 = specialtemp;
    let sstr2 = str2special1;

    for (let i = 0; i < astr1.length; i++) {
      console.log("i:" + i);
      for (let j = 0; j < astr2.length; j++) {
        console.log("j:" + j);
        for (let k = astr1.charCodeAt(i); k <= astr2.charCodeAt(j); k++) {
          console.log("k:" + k);
          resultalpha.push(String.fromCharCode(k));
        }
      }
    }

    for (let i = 0; i < nstr1.length; i++) {
      for (let j = 0; j < nstr2.length; j++) {
        for (let k = nstr1.charCodeAt(i); k <= nstr2.charCodeAt(j); k++) {
          console.log("k:" + k);
          resultnum.push(String.fromCharCode(k));
        }
      }
    }

    for (let i = 0; i < sstr1.length; i++) {
      for (let j = 0; j < sstr2.length; j++) {
        for (let k = sstr1.charCodeAt(i); k <= sstr2.charCodeAt(j); k++) {
          console.log("k:" + k);
          resultspecial.push(String.fromCharCode(k));
        }
      }
    }

    setalphabets(resultalpha.join(""));
    setnumber(resultnum.join(""));
    setspecial(resultspecial.join(""));
  };

  const operation = () => {
    let alpha = "";
    let num = "";
    let special1 = "";

    for (let i = 0; i < str1.length; i++) {
      if (
        (str1[i] >= "A" && str1[i] <= "Z") ||
        (str1[i] >= "a" && str1[i] <= "z")
      ) {
        alpha = alpha + str1[i];
      } else if (str1[i] >= "0" && str1[i] <= "9") {
        num = num + str1[i];
      } else {
        special1 = special1 + str1[i];
      }
    }
    setalphabetstemp(alpha);
    setnumbertemp(num);
    setspecialtemp(special1);
  };

  return (
    <div
      style={{ textAlign: "center", marginTop: "60px", marginLeft: "100px" }}
    >
      <p>
        {" "}
        7.Same as 5th question. Compare 1st input with 2nd input, After
        comparing if qualify B alphabet with E then print B-E alphabets. If we
        have 5 in 1st input and 1 in 2nd input printing should be 5-1. Spl
        characters ignore. Length should be max 4 only *
      </p>
      <br />
      <br />
      <label>Please Enter 1st String: </label>
      <input
        type="text"
        name="input1"
        onBlur={operation}
        onChange={getdata}
        autoComplete="off"
      />
      <br />
      <br />
      <label>Please Enter 2nd Sring: </label>
      <input
        type="text"
        name="input2"
        onBlur={operation2}
        onChange={getdata}
        autoComplete="off"
      />
      <h4>alphabets:={alphabets}</h4>
      <h4>numbers:={number}</h4>
      <h4>special:={special}</h4>
        
    </div>
  );
}
