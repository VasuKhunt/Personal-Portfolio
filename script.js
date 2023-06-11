function sendemail() {
    Email.send({
        SecureToken: "93ec77c5-d6ef-48b7-a78d-68eff9c85c95",
        To : 'khuntv82@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact From Inquiry",
        Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br Phone No.: " + document.getElementById("phone").value
        + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert("Messsage Sent Succesfully")
    );
    
}