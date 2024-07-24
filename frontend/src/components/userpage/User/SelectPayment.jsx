import React from 'react';

export default function SelectPayment() {
  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
      <form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Payment Information</p>
            <p className="text-xs">Please enter your payment details below.</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="cardNumber" className="text-sm">Card Number</label>
              <input id="cardNumber" type="text" placeholder="Card Number" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="cardType" className="text-sm">Card Type</label>
              <select id="cardType" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300">
                <option value="">Select Card Type</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="amex">American Express</option>
                <option value="discover">Discover</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="cvv" className="text-sm">CVV</label>
              <input id="cvv" type="text" placeholder="CVV" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="cardHolderName" className="text-sm">Card Holder Name</label>
              <input id="cardHolderName" type="text" placeholder="Card Holder Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
