import { useState, useRef } from 'react'
import Modal from './modal'
import { uuid } from '@/utils'

const def = {
  id: uuid(),
  name: 'Logo redesign',
  desc: 'New logo and digital asset playbook.',
  hours: 20.0,
  rate: 100.00,
}

export default function Table() {
  const modal = useRef<any>(null)

  const [revenues, setRevenues] = useState([def])

  function __onChange(data: typeof def) {
    setRevenues([...revenues, data])
  }

  const subtotal = revenues.reduce((pre, cur) => {
    return pre + cur.hours * cur.rate
  }, 0)

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Invoice</h1>
          <p className="mt-2 text-sm text-gray-700">
            For work completed from <time dateTime="2022-08-01">August 1, 2022</time> to{' '}
            <time dateTime="2022-08-31">August 31, 2022</time>.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button className='primary' onClick={() => modal.current.show()}>Add</button>
        </div>
      </div>
      <Modal ref={modal} onChange={__onChange} />

      <div className="-mx-4 mt-8 flow-root sm:mx-0">
        <table className="min-w-full">
          <colgroup>
            <col className="w-full sm:w-1/2" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
            <col className="sm:w-1/6" />
          </colgroup>
          <thead className="border-b border-gray-300 text-gray-900">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                Project
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Hours
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-right text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Rate
              </th>
              <th scope="col" className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {revenues.map((project) => (
              <tr key={project.id} className="border-b border-gray-200">
                <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="font-medium text-gray-900">{project.name}</div>
                  <div className="mt-1 truncate text-gray-500">{project.desc}</div>
                </td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">{project.hours}</td>
                <td className="hidden px-3 py-5 text-right text-sm text-gray-500 sm:table-cell">${project.rate}</td>
                <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">${project.hours * project.rate}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden sm:table-cell pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:pl-0"
              >
                Subtotal
              </th>
              <th scope="row" className="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">
                Subtotal
              </th>
              <td className="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-0">${subtotal}</td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
              >
                Tax
              </th>
              <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden">
                Tax
              </th>
              <td className="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-0">$1760.00</td>
            </tr>
            <tr>
              <th
                scope="row"
                colSpan={3}
                className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
              >
                Total
              </th>
              <th scope="row" className="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">
                Total
              </th>
              <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">${subtotal - 1760}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
