import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";

const Job = () => {
  const [jobs, setJobs] = useState([]);
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    jobType: "",
    salary: "",
  });

  // API Call function inside the component to access states
  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("Fetching jobs with:", { location, search });
      const response = await axios.get("http://localhost:3000/api/v1/job", {
        params: {
          location,
          search,
        },
      });

      console.log("API Response:", response.data); // Log the full API response
      if (response.data && response.data.results) {
        setJobs(response.data.results);
        console.log("Jobs fetched from API:", response.data.results); // Debugging log
      } else {
        setJobs([]);
        console.log("No jobs found in the response.");
      }
    } catch (error) {
      setError("Error fetching jobs");
      console.error("Error fetching jobs:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch jobs on initial render or when location/search is updated
  useEffect(() => {
    fetchJobs();
  }, [location, search]);

  const filteredJobs = useMemo(() => {
    console.log("Original jobs before filtering:", jobs); // Debugging log
    return jobs.filter((job) => {
      const { jobType, salary } = filters;

      return (
        (search === "" || job.title?.toLowerCase().includes(search.toLowerCase())) &&
        (location === "" || job.location?.toLowerCase().includes(location.toLowerCase())) &&
        (jobType === "" || job.type?.toLowerCase() === jobType.toLowerCase()) &&
        (salary === "" || job.salary >= parseInt(salary))
      );
    });
  }, [jobs, search, location, filters]);

  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <header className="bg-gray-200 py-6 px-4 md:px-6">
        <div className="container mx-auto flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 w-full p-2 rounded border border-gray-300"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
            >
              <option value="">All Locations</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Europe">Europe</option>
            </select>

            <button
              onClick={fetchJobs}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-10 px-4 md:px-6">
        {loading && <p>Loading jobs...</p>}
        {error && <p>{error}</p>}
        {filteredJobs.length === 0 ? (
          <div className="text-center text-gray-500">No jobs found matching your search.</div>
        ) : (
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded shadow-lg">
                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-bold">{job.title}</h2>
                      <p className="text-gray-500">{job.company}</p>
                    </div>
                    <span className="border border-gray-300 text-gray-500 px-2 py-1 rounded">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPinIcon className="w-5 h-5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="text-gray-700">{job.description}</div>
                  <button
                    className="ml-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                    onClick={() => window.open(job.applyUrl, "_blank")}
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default Job;
