import { useState } from "react";
import "../../styles/JobCreation.css";

function JobCreation() {
    const [jobTitle, setJobTitle] = useState("");
    const [jobCategory, setJobCategory] = useState("");
    const [employmentType, setEmploymentType] = useState("");
    const [jobLocation, setJobLocation] = useState("");
    const [deadline, setDeadline] = useState("");
    const [openings, setOpenings] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [minRate, setMinRate] = useState("");
    const [maxRate, setMaxRate] = useState("");
    const [usePriceRange, setUsePriceRange] = useState(true);
    const [description, setDescription] = useState("");

    const [company, setCompany] = useState("");
    const [branch, setBranch] = useState("");
    const [contactPerson, setContactPerson] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const job = {
            jobTitle,
            jobCategory,
            employmentType,
            jobLocation,
            deadline,
            openings: Number(openings),
            startDate,
            endDate,
            currency: "INR",
            minRate: minRate === "" ? null : Number(minRate),
            maxRate: usePriceRange && maxRate !== ""
                ? Number(maxRate)
                : null,
            usePriceRange,
            description,
            company,
            branch,
            contactPerson,
            phoneNumber: `${countryCode} ${phoneNumber} `,
        };

        console.log("Job Details:", job);
        alert("Job details submitted successfully!");
    }

    return (
        <main className="job-creation-page">

            {/* Top Navigation */}
            <header className="job-topbar">
                <div className="job-navigation">
                    <button
                        type="button"
                        className="back-button"
                        onClick={() => window.history.back()}
                    >
                        ← Back
                    </button>

                    <div className="job-breadcrumb">
                        <span>Job List</span>
                        <span>/</span>
                        <strong className="active">Create Job</strong>
                    </div>
                </div>

                <div className="job-topbar-actions">
                    <button
                        type="button"
                        className="draft-button"
                        onClick={() => alert("Draft feature will be added later.")}
                    >
                        Save as Draft
                    </button>

                    <button
                        type="submit"
                        form="job-creation-form"
                        className="publish-button"
                    >
                        Publish Now →
                    </button>
                </div>
            </header>

            {/* Page Heading */}
            <div className="job-page-heading">
                <h1>Create Job</h1>
                <p>
                    Create a job posting by entering the job details below.
                </p>
            </div>

            {/* Main Content Layout */}
            <form
                id="job-creation-form"
                className="job-content-layout"
                onSubmit={handleSubmit}
            >

                {/* Left Side: Job Creation Form */}
                <section className="job-form-section">

                    <h2>Job Information</h2>

                    <div className="form-group">
                        <label htmlFor="jobTitle">Job Title</label>
                        <input
                            id="jobTitle"
                            type="text"
                            placeholder="Enter Job Title"
                            value={jobTitle}
                            onChange={(e) => setJobTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="jobCategory">Job Category</label>

                        <select
                            id="jobCategory"
                            value={jobCategory}
                            onChange={(e) => setJobCategory(e.target.value)}
                            required
                        >
                            <option value="" disabled>
                                Select Job Category
                            </option>

                            <option value="Housekeeping">Housekeeping</option>
                            <option value="Administration">Administration</option>
                            <option value="Customer Service">Customer Service</option>
                            <option value="IT & Technology">IT & Technology</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <span className="form-label">Employment Type</span>

                        <div className="form-options">
                            {[
                                "Part-time",
                                "Full-time",
                                "Internship",
                                "Contract",
                            ].map((type) => (
                                <label key={type} className="radio-option">
                                    <input
                                        type="radio"
                                        name="employmentType"
                                        value={type}
                                        checked={employmentType === type}
                                        onChange={(e) => setEmploymentType(e.target.value)}
                                        required
                                    />
                                    {type}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-group">
                        <span className="form-label">Job Location</span>

                        <div className="form-options">
                            {["Remote", "Hybrid", "On-site"].map((location) => (
                                <label key={location} className="radio-option">
                                    <input
                                        type="radio"
                                        name="jobLocation"
                                        value={location}
                                        checked={jobLocation === location}
                                        onChange={(e) => setJobLocation(e.target.value)}
                                        required
                                    />
                                    {location}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="deadline">Application Deadline</label>
                            <input
                                id="deadline"
                                type="date"
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="openings">Number of Openings</label>
                            <input
                                id="openings"
                                type="number"
                                placeholder="Enter Number of Openings"
                                min="1"
                                value={openings}
                                onChange={(e) => setOpenings(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="startDate">Start Date</label>
                            <input
                                id="startDate"
                                type="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="endDate">End Date</label>
                            <input
                                id="endDate"
                                type="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Rate Amount (₹ INR)</label>

                        <div className="rate-range">
                            <input
                                aria-label="Minimum rate"
                                type="number"
                                min="0"
                                placeholder="Enter Minimum rate"
                                value={minRate}
                                onChange={(e) => setMinRate(e.target.value)}
                            />

                            {usePriceRange && (
                                <input
                                    aria-label="Maximum rate"
                                    type="number"
                                    min={minRate || "0"}
                                    placeholder="Enter Maximum rate"
                                    value={maxRate}
                                    onChange={(e) => setMaxRate(e.target.value)}
                                />
                            )}
                        </div>

                        <label className="price-range-checkbox">
                            <input
                                type="checkbox"
                                checked={usePriceRange}
                                onChange={(e) =>
                                    setUsePriceRange(e.target.checked)
                                }
                            />
                            Use price range
                        </label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Job Description</label>
                        <textarea
                            id="description"
                            rows="6"
                            placeholder="Describe the job responsibilities..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                </section>

                {/* Right Side: Single Employer Details Card */}
                <aside className="employer-details-card">

                    <h2>Employer Details</h2>

                    <div className="form-group">
                        <label htmlFor="company">Company</label>
                        <select
                            id="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            required
                        >
                            <option value="" disabled> Select Company </option>
                            <option>Royal Thai Retreats</option>
                            <option>Other Company</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="branch">Branch</label>
                        <select
                            id="branch"
                            value={branch}
                            onChange={(e) => setBranch(e.target.value)}
                            required
                        >
                            <option value="" disabled> Select Branch </option>
                            <option>Phuket</option>
                            <option>Bangkok</option>
                            <option>Chiang Mai</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="contactPerson">Contact Person</label>
                        <input
                            id="contactPerson"
                            type="text"
                            placeholder="Enter Name"
                            value={contactPerson}
                            onChange={(e) => setContactPerson(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="countryCode">Phone Number</label>

                        <div className="phone-input-group">
                            <select
                                id="countryCode"
                                value={countryCode}
                                onChange={(e) =>
                                    setCountryCode(e.target.value)
                                }
                                aria-label="Country code"
                                required
                            >
                                <option value="" disabled> Select contry code </option>
                                <option value="+66">+66</option>
                                <option value="+91">+91</option>
                                <option value="+1">+1</option>
                            </select>

                            <input
                                type="tel"
                                aria-label="Phone number"
                                placeholder="Enter Phone Number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="employer-address">
                        <h3>Address Location</h3>

                        <p>
                            Krishna Market, Mathura.
                        </p>

                        <div className="map-preview">
                            <span>Map Preview</span>
                        </div>
                    </div>

                </aside>

            </form>
        </main>
    );
}

export default JobCreation;
