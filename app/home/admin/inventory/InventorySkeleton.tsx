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
          {/*
          <tbody className="bg-white divide-y divide-gray-200">
            {productClients.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {product.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {product.category}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${product.pricePerUnit}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {product.weightPerUnit} lb
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={clsx('inline-flex px-2 py-1 text-xs font-semibold rounded-full',
                    {
                      'bg-green-100 text-green-800': product.quantityOnHand > GREEN_MIN_THRESHOLD,
                      'bg-orange-100 text-orange-800': product.quantityOnHand > ORANGE_MIN_THRESHOLD && product.quantityOnHand < GREEN_MIN_THRESHOLD,
                      'bg-red-100 text-red-800': product.quantityOnHand < ORANGE_MIN_THRESHOLD
                    }
                  )}>
                    {product.quantityOnHand}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                  <button className="text-blue-600 hover:text-blue-900 transition-colors">
                    Edit
                  </button>
                  <button className="text-green-600 hover:text-green-900 transition-colors">
                    Track
                  </button>
                  <button className="text-red-600 hover:text-red-900 transition-colors">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          */}
        </table>
      </div>
    </div>
  );
}