export type dogsType = {
  message: string[];
  status: string;
};

export default async function getDogs(breed: string): Promise<dogsType> {
  try {
    const response = await fetch(
      `https://dog.ceo/api/breed/${breed}/images/random/4`
    );

    const data: dogsType = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch dog pics");
  }
}
