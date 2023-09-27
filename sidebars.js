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
      items: [{ type: 'doc', label: 'Release Flow', id: 'workflow' }],
    },
    {
      type: 'category',
      label: 'SDKs',
      collapsible: false,
      items: [
        { type: 'doc', label: 'React', id: 'react' },
        { type: 'doc', label: 'Vue', id: 'vue' },
        { type: 'doc', label: 'Node (server)', id: 'node' },
        { type: 'doc', label: 'Node (serverless)', id: 'serverless' },
        { type: 'doc', label: 'Vanilla JS (browser)', id: 'js' },
      ],
    },
    {
      type: 'category',
      label: 'Other',
      collapsible: false,
      items: [
        { type: 'doc', label: 'Code generation', id: 'code-generation' },
        { type: 'doc', label: 'VS Code extension', id: 'vscode' },
      ],
    },
  ],
};

module.exports = sidebars;
