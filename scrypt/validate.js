const formsValidationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__line",
    inputErrorClass: "popup__line_error",
    errorClassActive: "error_active",
    submitButtonSelector: ".popup__save",
    submitButtonErrorClass: "popup__save_disabled"
}
function enableValidation(data) {
    const forms = [...document.querySelectorAll(data.formSelector)]
    forms.forEach(form => addFormListeners(form, data))
}

function addFormListeners(form, config) {
    form.addEventListener("submit", handleSubmit)
    form.addEventListener("input", () => setSubmitButtonState(form, config))
    const inputs = [...form.querySelectorAll(config.inputSelector)]
    inputs.forEach(input => input.addEventListener("input", () => checkInput(form, input, config)))
    setSubmitButtonState(form, config)
}

function checkInput(form, input, config) {
    if(input.validity.valid) {
        hideError(form, input, config)
    } else {
        showError(form, input, config)
    }
}

function showError(form, input, config) {
    input.classList.add(config.inputErrorClass)
    const errorElement = form.querySelector(`#${input.id}-error`)
    errorElement.classList.add(config.errorClassActive)
    errorElement.textContent = input.validationMessage
}

function hideError(form, input, config) {
    input.classList.remove(config.inputErrorClass)
    const errorElement = form.querySelector(`#${input.id}-error`)
    errorElement.classList.remove(config.errorClassActive)
    errorElement.textContent = ""
}

function setSubmitButtonState(form, config) {
    const button = form.querySelector(config.submitButtonSelector)
    button.disabled = !form.checkValidity()
    button.classList.toggle(config.submitButtonErrorClass, !form.checkValidity())
}

function handleSubmit(e) {
    e.preventDefault()
}

enableValidation(formsValidationConfig)


