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
              <label htmlFor="name" className="text-sm font-semibold">First Name</label>
              <input
                id="name"
                type='text'
                placeholder="ENTER First NAME"
                className="border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <label htmlFor="surname" className="text-sm font-semibold">Last Name</label>
              <input
                id="surname"
                type='text'
                placeholder="ENTER Last NAME"
                className="border border-gray-300 rounded-lg p-2"
              />
              </div>

              <div className="flex flex-col space-y-1.5">
              <label htmlFor="email" className="text-sm font-semibold">E-mail</label>
              <input
                id="email"
                type='email'
                placeholder="ENTER EMAIL"
                className="border border-gray-300 rounded-lg p-2"

                required/>
              </div>

              <div className="flex flex-col space-y-1.5">
              <label htmlFor="collgename" className="text-sm font-semibold">College/Universtity Name</label>
              <input
                id="collgename"
                type='text'
                placeholder="ENTER College name"
                className="border border-gray-300 rounded-lg p-2"
              />
              </div>

            
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="Year" className="text-sm font-semibold">Current Year of University/College</label>
              <div className="relative">
                <select
                  id="Year"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                >
                  <option value='1' >1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  
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
          Submit
        </button>
      </div>
    </div>
  );
}
