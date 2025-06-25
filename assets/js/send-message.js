function sendMessage()
{
    const serviceID = "service_8sx6wca";
    const templateID = "template_1buadn6";

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
    }

    emailjs.send(serviceID, templateID, params)
    .then(response => console.log("SUCCESS:" + response.status))
    .catch(error => console.log("ERROR:", error))
}
