import React from 'react';

const Step1Form = ({ formData, setFormData }) => (
  <div className="space-y-4">
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Audit Round Name
      </label>
      <input
        type="text"
        required
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 box-border"
        value={formData.round_name}
        onChange={(e) => setFormData({...formData, round_name: e.target.value})}
      />
    </div>
    
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Site Location
      </label>
      <input
        type="text"
        required
        className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 box-border"
        value={formData.site_name}
        onChange={(e) => setFormData({...formData, site_name: e.target.value})}
      />
    </div>
  </div>
);

export default Step1Form;