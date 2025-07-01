'use client';

import { useState } from 'react';
import Button from '../Button';

const QuoteFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    timeFrame: '',
    size: '',
    quantity: '',
    description: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.timeFrame) newErrors.timeFrame = 'Time Frame is required';
    if (!formData.size) newErrors.size = 'Size is required';
    if (!formData.quantity) newErrors.quantity = 'Quantity is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccessMsg('');
      setErrorMsg('Please correct the errors above.');
      return;
    }

    // Simulate submission
    setSuccessMsg('Your quote request has been submitted successfully!');
    setErrorMsg('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      timeFrame: '',
      size: '',
      quantity: '',
      description: '',
    });
  };

  return (
    <section className="bg-white py-16 px-4 md:px-8 max-w-5xl mx-auto text-[#222222]">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#222] mb-8">
        REQUEST A QUOTE
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Phone Number */}
        <div>
          <label className="text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>

        {/* Time Frame */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Time Frame <span className="text-red-500">*</span>
          </label>
          <select
            name="timeFrame"
            value={formData.timeFrame}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          >
            <option value="">Choose Time Frame</option>
            <option value="1 Week">1 Week</option>
            <option value="1 Month">1 Month</option>
            <option value="3 Months">3 Months</option>
          </select>
          {errors.timeFrame && <p className="text-red-500 text-sm mt-1">{errors.timeFrame}</p>}
        </div>

        {/* Size */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Size <span className="text-red-500">*</span>
          </label>
          <select
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          >
            <option value="">Choose Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
          {errors.size && <p className="text-red-500 text-sm mt-1">{errors.size}</p>}
        </div>

        {/* Quantity */}
        <div>
          <label className="text-sm font-medium text-gray-700">
            Quantity <span className="text-red-500">*</span>
          </label>
          <select
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          >
            <option value="">Choose Quantity</option>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100+">100+</option>
          </select>
          {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>}
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="text-sm font-medium text-gray-700">
            Please Describe Your Project <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Choose a project type"
            rows={5}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex flex-col items-center gap-4">
          {errorMsg && <p className="text-red-600">{errorMsg}</p>}
          {successMsg && <p className="text-green-600">{successMsg}</p>}
          <p className="text-xs text-gray-600 text-center">
            By submitting this form you agree to our{' '}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
            .
          </p>
          <Button type="submit">Lorem Ipsum →</Button>
          
        </div>
      </form>
    </section>
  );
};

export default QuoteFormSection;
