import InventoryTable from "./InventoryTable";
import { InventorySkeleton } from "./InventorySkeleton";
import { Suspense } from 'react';

// this will be the 
export default async function AdminInventory() {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {/* <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <div> */}

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Employee Dashboard</h1>
          <p className="mt-2 text-gray-600">View and manage inventory</p>
        </div>
        
        {/* Inventory Table */}
        <div>
          <Suspense fallback={<InventorySkeleton />}>
            <InventoryTable />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

