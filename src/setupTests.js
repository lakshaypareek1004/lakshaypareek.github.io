import '@testing-library/jest-dom';

jest.mock('framer-motion', () => {
  const React = require('react');
  const motion = new Proxy(
    {},
    {
      get: () => (props) => React.createElement('div', props, props && props.children),
    }
  );
  const AnimatePresence = ({ children }) => React.createElement(React.Fragment, null, children);
  return { motion, AnimatePresence };
});

jest.mock('react-scroll', () => ({
  Link: ({ children }) => children,
  Element: ({ children }) => children,
}));

// Mock IntersectionObserver for the jsdom test environment
// Some hooks/components rely on IntersectionObserver; jsdom does not implement it.
global.IntersectionObserver = class IntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
  }
  observe(target) {
    // Immediately invoke callback with an entry that is intersecting
    this.callback([{ isIntersecting: true, target }]);
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
  takeRecords() {
    return [];
  }
};