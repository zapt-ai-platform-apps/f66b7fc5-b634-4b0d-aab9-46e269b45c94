import React from 'react';

const Step2Form = ({ formData, setFormData }) => (
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Audit Template
      </label>
      <select
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 box-border"
        value={formData.template}
        onChange={(e) => setFormData({...formData, template: e.target.value})}
      >
        <option value="standard">Standard Safety Audit</option>
        <option value="kitchen">Kitchen Hygiene Audit</option>
        <option value="fire">Fire Safety Audit</option>
      </select>
    </div>
  </div>
);

export default Step2Form;