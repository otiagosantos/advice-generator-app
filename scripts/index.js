const AdviceGenerator = {
    getSlip: async () => {
        const requestURL = "https://api.adviceslip.com/advice";
        const request = new Request(requestURL);
        let response = await fetch(request, {
            method: 'GET',
            cache: "no-store"
        });
        let data = await response.json();
        console.log(data.slip.id);
        return data.slip;
    },    
    renderAdvice: (slip) => {
        const adviceId = document.querySelector(".advice--id");
        const adviceQuote = document.querySelector(".advice--quote");
    
        adviceId.innerHTML = slip.id;
        adviceQuote.innerHTML = slip.advice
    },
    execute: async () => {
        let slip = await AdviceGenerator.getSlip();
        AdviceGenerator.renderAdvice(slip);
    }
}

document.querySelector(".generate_button")
    .addEventListener("click", AdviceGenerator.execute)

AdviceGenerator.execute();
