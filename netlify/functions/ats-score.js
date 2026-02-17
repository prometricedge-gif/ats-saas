exports.handler = async function(event) {

return {

statusCode: 200,

body: JSON.stringify({

score: 85,
message: "Your CV is good"

})

};

};
