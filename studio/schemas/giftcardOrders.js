export default {
  name: "giftcardOrders",
  title: "Giftcard Orders",
  type: "document",
  fields: [
    {
      name: "code",
      title: "Code",
      type: "string",
      readOnly: true,
    },
    {
      title: "Order Item",
      name: "orderItem",
      type: "reference",
      to: [{ type: "giftcard" }],
      options: {
        disableNew: true,
      },
    },
    {
      name: "giftcardValue",
      title: "Giftcard Value",
      type: "number",
    },
    {
      title: "Delivery Details",
      name: "deliveryDetails",
      type: "deliveryDetails",
    },
    {
      title: "Payment Result",
      name: "paymentResult",
      type: "paymentResult",
    },
    {
      title: "Is Paid",
      name: "isPaid",
      type: "boolean",
    },
    {
      title: "Paid Date",
      name: "paidAt",
      type: "datetime",
    },
  ],
};
