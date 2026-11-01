// Job Creation page — Vanilla JavaScript

const jobForm = document.getElementById("job-creation-form");
const priceRangeCheckbox = document.getElementById("usePriceRange");
const minRateInput = document.getElementById("minRate");
const maxRateInput = document.getElementById("maxRate");

function getSelectedValue(name) {
    return document.querySelector(`input[name="${name}"]:checked`)?.value || "";
}

function updatePriceRange() {
    const enabled = priceRangeCheckbox.checked;
    maxRateInput.hidden = !enabled;
    maxRateInput.disabled = !enabled;
    if (!enabled) maxRateInput.value = "";
    maxRateInput.min = minRateInput.value || "0";
}

priceRangeCheckbox.addEventListener("change", updatePriceRange);
minRateInput.addEventListener("input", () => {
    maxRateInput.min = minRateInput.value || "0";
});

jobForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!jobForm.reportValidity()) return;

    const usePriceRange = priceRangeCheckbox.checked;
    const job = {
        jobTitle: document.getElementById("jobTitle").value.trim(),
        jobCategory: document.getElementById("jobCategory").value,
        employmentType: getSelectedValue("employmentType"),
        jobLocation: getSelectedValue("jobLocation"),
        deadline: document.getElementById("deadline").value,
        openings: Number(document.getElementById("openings").value),
        startDate: document.getElementById("startDate").value,
        endDate: document.getElementById("endDate").value,
        currency: "INR",
        minRate: minRateInput.value === "" ? null : Number(minRateInput.value),
        maxRate: usePriceRange && maxRateInput.value !== "" ? Number(maxRateInput.value) : null,
        usePriceRange,
        description: document.getElementById("description").value.trim(),
        company: document.getElementById("company").value,
        branch: document.getElementById("branch").value,
        contactPerson: document.getElementById("contactPerson").value.trim(),
        phoneNumber: `${document.getElementById("countryCode").value} ${document.getElementById("phoneNumber").value.trim()}`
    };

    console.log("Job Details:", job);
    alert("Job details submitted successfully!");
});

document.getElementById("draft-button").addEventListener("click", () => {
    const draft = Object.fromEntries(new FormData(jobForm).entries());
    draft.usePriceRange = priceRangeCheckbox.checked;
    localStorage.setItem("jobDraft", JSON.stringify(draft));
    alert("Draft saved in this browser.");
});

document.getElementById("back-button").addEventListener("click", () => {
    window.history.back();
});

updatePriceRange();
