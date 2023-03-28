/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    { type: 'doc', label: 'Introduction', id: 'intro' },
    {
      type: 'category',
      label: 'Configuration',
      collapsible: false,
      items: [{ type: 'doc', label: 'Workflow', id: 'workflow' }],
    },
    {
      type: 'category',
      label: 'SDKs',
      collapsible: false,
      items: [{ type: 'doc', label: 'React', id: 'react-sdk' }],
    },
  ],
};

module.exports = sidebars;
