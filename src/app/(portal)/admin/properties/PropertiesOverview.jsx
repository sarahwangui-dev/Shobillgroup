import PropertyProvider from '@/app/_providers/PropertyContext';
import PropertyTable from '@/common/components/Properties/PropertyTable';
import React from 'react';

export default function PropertiesOverview() {
  return (
    <PropertyProvider>
      <PropertyTable />
    </PropertyProvider>
  );
}
