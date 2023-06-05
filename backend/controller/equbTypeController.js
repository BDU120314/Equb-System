import equbTypeRouter from "../Routes/equbTypeRoute";

const getAllEqubTypes = async (req, res) => {
  try {
    const { amount, members, type } = req.query;

    const query = {};

    if (amount) {
      query.amount_of_deposit = amount;
    }

    if (members) {
      query.number_of_members = members;
    }

    if (type) {
      query.equb_type_name = type;
    }

    const equbTypes = await EqubType.find(query);
    res.json(equbTypes);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve EqubTypes" });
  }
};
export default {getAllEqubTypes};