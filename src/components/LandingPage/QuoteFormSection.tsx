'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Button';
import type { Variants } from 'framer-motion';

const containerVariants:Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-white py-16 px-4 md:px-8 max-w-5xl mx-auto text-[#222222]"
    >
      <motion.h2
        variants={itemVariants}
        className="text-2xl md:text-3xl font-bold text-center text-[#222] mb-8"
      >
        REQUEST A QUOTE
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {[
          { label: 'Name', name: 'name', type: 'text' },
          { label: 'E-mail', name: 'email', type: 'email' },
          { label: 'Phone Number', name: 'phone', type: 'text' },
        ].map(({ label, name, type }) => (
          <motion.div key={name} variants={itemVariants}>
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input
              type={type}
              name={name}
              value={(formData as any)[name]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
          </motion.div>
        ))}

        {/* Select Dropdowns */}
        {[
          {
            label: 'Time Frame',
            name: 'timeFrame',
            options: ['', '1 Week', '1 Month', '3 Months'],
          },
          {
            label: 'Size',
            name: 'size',
            options: ['', 'Small', 'Medium', 'Large'],
          },
          {
            label: 'Quantity',
            name: 'quantity',
            options: ['', '10', '50', '100+'],
          },
        ].map(({ label, name, options }) => (
          <motion.div key={name} variants={itemVariants}>
            <label className="text-sm font-medium text-gray-700">
              {label} <span className="text-red-500">*</span>
            </label>
            <select
              name={name}
              value={(formData as any)[name]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            >
              {options.map((opt, idx) => (
                <option value={opt} key={idx} disabled={opt === ''}>
                  {opt === '' ? `Choose ${label}` : opt}
                </option>
              ))}
            </select>
            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name]}</p>}
          </motion.div>
        ))}

        {/* Description */}
        <motion.div className="md:col-span-2" variants={itemVariants}>
          <label className="text-sm font-medium text-gray-700">
            Please Describe Your Project <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
        </motion.div>

        {/* Submit */}
        <motion.div
          className="md:col-span-2 flex flex-col items-center gap-4"
          variants={itemVariants}
        >
          <AnimatePresence>
            {errorMsg && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-red-600 text-sm"
              >
                {errorMsg}
              </motion.p>
            )}
            {successMsg && (
              <motion.p
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-green-600 text-sm"
              >
                {successMsg}
              </motion.p>
            )}
          </AnimatePresence>

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

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button type="submit">Lorem Ipsum →</Button>
          </motion.div>
        </motion.div>
      </motion.form>
    </motion.section>
  );
};

export default QuoteFormSection;
