#quote-box {
  background-color: white;
  margin: auto;
  width: 60%;
  max-width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  padding: 15px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 20px;
  /**
  The border radius property in the regular Bootstrap was not something that I wanted to use.
Consequently, I decided to use this
 
*/
}

.button-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

button,
.btn {
  background-color: #007bff;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}

button:hover,
.btn:hover {
  background-color: #0056b3;
}

#quotes1,
#quotes2 {
  position: relative;
  top: -7px;
  size: 25px;
}
#quotes1 {
  margin-left: 4px;
}
#quotes2 {
  margin-right: 4px;
}
#author {
  font-family: Times New Roman;
}

#text {
  padding: 5px;
}

#author {
  margin-top: -5px;
}
#author h4,
#author span {
  margin-top: -10px;
  font-size: 15px;
}
#text h1 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 30px;
  margin-left: 4px;
  margin-right: 4px;
  padding-top: 5px;
}
/**
body {
    background-color: green;
}
*/

h1,
h4 {
  display: inline;
}
