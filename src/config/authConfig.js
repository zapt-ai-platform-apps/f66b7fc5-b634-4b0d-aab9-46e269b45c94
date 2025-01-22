export const appearance = {
  variables: {
    colors: {
      brand: '#2563eb',
      brandAccent: '#1d4ed8',
      inputText: '#1f2937',
      inputBackground: 'white',
      inputBorder: '#d1d5db',
      inputBorderHover: '#9ca3af',
      inputBorderFocus: '#3b82f6',
      messageText: '#dc2626',
      messageBackground: '#fef2f2'
    },
    space: {
      buttonPadding: '1rem 2rem',
      inputPadding: '0.875rem 1.25rem',
    },
    radii: {
      borderRadiusButton: '12px',
      inputBorderRadius: '8px',
    },
    fontSizes: {
      baseBodySize: '0.875rem',
    }
  },
  className: {
    anchor: 'text-blue-600 hover:text-blue-800 text-sm font-medium',
    button: 'w-full transition-all hover:scale-[0.98] shadow-sm',
    container: 'space-y-6',
    input: 'w-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 box-border',
    label: 'text-sm font-medium text-gray-700 mb-2 block',
    message: 'text-red-600 text-sm mt-2 px-3 py-2 bg-red-50 rounded-md',
    divider: 'bg-gray-200',
    socialButton: 'bg-white border-gray-300 hover:bg-gray-50 text-gray-700'
  }
};

export const localization = {
  variables: {
    sign_in: {
      email_label: 'Work Email',
      password_label: 'Password',
      button_label: 'Continue',
    },
    social_provider_text: 'Continue with {{provider}}',
  }
};