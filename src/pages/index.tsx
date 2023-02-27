import { useEffect } from 'react';

export default function Index() {
  useEffect(() => {
    window.location.href = '/docs/intro';
  });
  return null;
}
