function sendemail() {
    Email.send({
        SecureToken: "6ae5ab62-c828-40fe-83f8-53dcf147d3a5",
        To : 'vmrecords01@gmail.com',
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
