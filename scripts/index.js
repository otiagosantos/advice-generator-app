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
        document.body.style.cursor = "progress";
        document.querySelector(".generate_button").style.backgroundColor = "#B9ffa8";

        let slip = await AdviceGenerator.getSlip();
        AdviceGenerator.renderAdvice(slip);

        document.body.style.cursor = "default";
        document.querySelector(".generate_button").style.backgroundColor = "var(--neon-green)";
    }
}

document.querySelector(".generate_button")
    .addEventListener("click", AdviceGenerator.execute)

AdviceGenerator.execute();
