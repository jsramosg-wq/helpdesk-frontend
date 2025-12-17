let tickets = [];

const getTickets = (req, res) => {
  res.json(tickets);
};

const createTicket = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  const newTicket = {
    id: Date.now(),
    title,
    description,
    status: "Abierto"
  };

  tickets.push(newTicket);
  res.status(201).json(newTicket);
};

module.exports = {
  getTickets,
  createTicket
};
