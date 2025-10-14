export function InventorySkeleton() {
  return (
    <div className="bg-white shadow rounded-lg">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-medium text-gray-900">Inventory</h2>
          {/*<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            + Add Item
          </button>*/}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price / unit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Weight / unit
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <InvTableRowSkeleton />
            <InvTableRowSkeleton />
            <InvTableRowSkeleton />
            <InvTableRowSkeleton />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function InvTableRowSkeleton() {
  return (
    <tr className="w-full border-b border-gray-100 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg">
      {/* Product Name, Category*/}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-6 w-24 rounded bg-gray-100"></div>
        <div className="h-6 w-12 rounded bg-gray-100"></div>
      </td>
      {/* Description */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-32 rounded bg-gray-100"></div>
      </td>
      {/* Price/Unit */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-100"></div>
      </td>
      {/* Weight/Unit */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-12 rounded bg-gray-100"></div>
      </td>
      {/* Stock */}
      <td className="whitespace-nowrap px-3 py-3">
        <div className="h-6 w-8 rounded bg-gray-100"></div>
      </td>
      {/* Actions */}
      <td className="whitespace-nowrap py-3 pl-6 pr-3">
        <div className="flex">
          <div className="h-6 w-8 rounded bg-gray-100"></div>
          <div className="h-6 w-12 rounded bg-gray-100"></div>
        </div>
      </td>
    </tr>
  );
}