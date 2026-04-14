import { creaturesList, creaturesRetrieve } from "../open5e/sdk.gen";
import { Creature } from "../open5e/types.gen";

export async function getCreatureList(cr: number): Promise<Creature[] | Error> {
  const res = await creaturesList({
    query: {
      challenge_rating_decimal: cr,
    },
  });
  if (!res.response.ok || res.data?.results === undefined) {
    return Error("Failed to fetch creature list");
  }
  return res.data.results;
}

export async function getCreature(stub: string): Promise<Creature | Error> {
  const res = await creaturesRetrieve({
    path: {
      key: stub,
    },
  });
  if (!res.response.ok || res.data === undefined) {
    return Error("Creature not found");
  }
  return res.data;
}
