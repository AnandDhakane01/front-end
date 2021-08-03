function updateName(nameData) {
  return {
    type: "UPDATE_NAME",
    payload: nameData
  };
}

function updateEmail(mailData) {
  return {
    type: "UPDATE_EMAIL",
    payload: mailData 
  };
}

export { updateName, updateEmail };
