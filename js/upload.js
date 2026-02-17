async function uploadCV(){

const file = document.getElementById("cvFile").files[0];

const formData = new FormData();
formData.append("file", file);

const response = await fetch("/.netlify/functions/ats-score", {

method: "POST",
body: formData

});

const result = await response.json();

alert("ATS Score: " + result.score);

}
