const ConstantContact = require("node-constantcontact");

export default async (req, res) => {
  const { email } = req.body;
  const cc = new ConstantContact({
    apiKey: process.env.CONSTANT_CONTACT_API_KEY,
    accessToken: process.env.CONSTANT_CONTACT_ACCESS_TOKEN,
  });

  let contacts = {
    lists: [{ id: "211717f2-2941-11ed-9bd5-fa163e5bf31a" }],
    email_addresses: [{ email_address: email }],
  };

  let result = cc.contacts.create(contacts, { action_by: "ACTION_BY_OWNER" });

  result
    .catch((err) => {
      console.log(err);
    })
    .then((result) => {});
  res.redirect(301, "/");
};
