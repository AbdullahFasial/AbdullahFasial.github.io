function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    return true;
}

function toggleDescription(descriptionId, buttonElement) {
    var description = document.getElementById(descriptionId);

    if (description.style.display === "none") {
        description.style.display = "block";
        buttonElement.textContent = "Hide Description";
    } else {
        description.style.display = "none";
        buttonElement.textContent = "Show Description";
    }
}

window.onload = function () {
    var footer = document.querySelector("footer");

    if (footer) {
        var newParagraph = document.createElement("p");
        var currentDate = new Date();
        var text = document.createTextNode("Page loaded on: " + currentDate);
        newParagraph.appendChild(text);
        footer.appendChild(newParagraph);
    }

    var quote = document.querySelector("blockquote");

    if (quote) {
        quote.addEventListener("mouseover", function () {
            quote.style.backgroundColor = "#e6f0ff";
            quote.style.fontStyle = "normal";
            quote.style.padding = "10px";
            quote.style.borderRadius = "8px";
            quote.style.transition = "0.3s";
        });

        quote.addEventListener("mouseout", function () {
            quote.style.backgroundColor = "";
            quote.style.fontStyle = "italic";
            quote.style.padding = "";
            quote.style.borderRadius = "";
        });
    }
};