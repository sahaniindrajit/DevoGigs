// components/CardWithForm.js
import * as React from "react";

export function CardWithForm() {
  return (
    <div className="w-[350px] p-4 bg-white shadow-lg rounded-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold">JOIN DevoGigs</h2>
        <p className="text-gray-600">ENTER YOUR DETAILS</p>
      </div>
      <div>
        <form>
          <div className="grid w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name" className="text-sm font-semibold">Name</label>
              <input
                id="name"
                placeholder="ENTER FULL NAME"
                className="border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="framework" className="text-sm font-semibold">Framework</label>
              <div className="relative">
                <select
                  id="framework"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                >
                  <option value="" disabled>Select</option>
                  <option value="next">Next.js</option>
                  <option value="sveltekit">SvelteKit</option>
                  <option value="astro">Astro</option>
                  <option value="nuxt">Nuxt.js</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100">
          Cancel
        </button>
        <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600">
          Deploy
        </button>
      </div>
    </div>
  );
}
