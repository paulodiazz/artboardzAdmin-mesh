import dbConnect from "../../../utils/mongo";
import Collector from "../../../models/Collector";


export default async function handler(req, res) {
  const {
    method,
    query: { id },
    cookies
  } = req;
  const token = cookies.token

  dbConnect();

  if (method === "GET") {
    try {
      const collector = await Collector.findById(id);
      res.status(200).json(collector);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === "PUT") {
    try {
      const collector = await Collector.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.status(200).json(collector);
    } catch (err) {
      res.statu
    }
  }

  if (method === "DELETE") {
    try {
      await Collector.findByIdAndDelete(id);
      res.status(200).json("The collection has been deleted!");
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
