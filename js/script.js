const fromText = document.querySelectorAll(".trans-text"),
selectTag = document.querySelectorAll(".subnav li");

// selectTag.forEach((tag, id) => {
//     for (let country_code in countries) {
//         let selected = id == 0 ? country_code == "vi-VN" ? "selected" : "" : country_code == "en-GB" ? "selected" : "";
//         let option = `<option ${selected} value="${country_code}">${countries[country_code]}</option>`;
//         tag.insertAdjacentHTML("beforeend", option);
//     }
// });
selectTag[0].addEventListener("click", () => {
    let text, apiUrl;
    for(let i = 0; i < fromText.length; i++) {
        let text = fromText[i].textContent.trim(), translateFrom, translateTo;
        translateFrom = "vi-VN"; translateTo = "en-GB"; 
        // if(!text) return;
        apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                fromText[i].textContent = data.responseData.translatedText;
                data.matches.forEach(data => {
                    if(data.id === 0) {
                        fromText[i].textContent = data.translation;
                    }
                });
            });
    }
});

selectTag[1].addEventListener("click", () => {
    let text, apiUrl;
    for(let i = 0; i < fromText.length; i++) {
        let text = fromText[i].textContent.trim(), translateFrom, translateTo;
        translateFrom = "en-GB"; translateTo = "vi-VN"; 
        if(!text) return;
        apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                fromText[i].textContent = data.responseData.translatedText;
                data.matches.forEach(data => {
                    if(data.id === 0) {
                        fromText[i].textContent = data.translation;
                    }
                });
            });
    }
});

