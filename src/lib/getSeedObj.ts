import clientPromise from "./mongodb";

export default async (seedId: String) => {
  let returnObj = {};

  try {
    const client = await clientPromise;
    const db = client.db("sagittarii");
    const collection = process.env.MONGODB_COLLECTION || '';
    const seedObj = await db.collection(collection).find({id: seedId}).toArray();

    if(seedObj[0].id == seedId) {
      // returnObj = seedObj[0];
      returnObj = { message: 'this seed does exit', status: 'ok' };
    }
  } catch (e) {
    returnObj = { message: 'this seed does not exit', status: 'error' };
  }

  return returnObj;
};