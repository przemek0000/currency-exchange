{
    const calculate = (select, value) => {
        switch (select) {
            case "EUR":
                return value * 0.21;
            case "GBP":
                return value * 0.18;
            case "USD":
                return value * 0.22;
        }
    }

    const showResult = () => {
        const elementValue = document.querySelector(".js-value");
        const elementSelect = document.querySelector(".js-select");
        const elementResult = document.querySelector(".js-result");
        const value = elementValue.value;
        const select = elementSelect.value;
        const result = calculate(select, value);
        elementResult.innerText = `${value} PLN = ${result.toFixed(2)} ${select}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        showResult();
    }

    init = () => {
        const elementForm = document.querySelector(".js-form");
        elementForm.addEventListener("submit", onFormSubmit);
    }

    init()
}