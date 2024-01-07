import React from 'react'
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({name: '', email: '', message: ''});
  const handleChange = () => {};
  const handleFocus = () => {};
  const handleBlur = () => {};
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className="head-text">
          Get in touch
        </h1>
        <form action="" className="w-full flex flex-col gap-7 mt-14">
          <label htmlFor="" className="text-black-500 font-semibold">
            <input 
              type="text"
              name="name"
              placeholder="Jhon Doe"
              required
              className="input"
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
        </form>
      </div>
    </section>
  )
}

export default Contact