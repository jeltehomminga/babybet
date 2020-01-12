import { useEffect, useState } from "react";
import { babybets } from "../stitch/mongodb";

const useBabyBets = userId => {
  const [babyBetsState, setBabyBetsState] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const loadBabyBets = async () => {
      setErrorMessage(null);
      try {
        const babyBetsData = await babybets.find({}, { limit: 1000 }).asArray();
        setBabyBetsState(babyBetsData);
      } catch (error) {
        setErrorMessage(error.errorMessage);
      }
    };

    loadBabyBets();
  }, []);

  const addBabyBet = async babyBetsData => {
    setErrorMessage(null);
    const babybet = { ...babyBetsData, owner_id: userId };
    try {
      await babybets.insertOne(babybet);
      setBabyBetsState(babyBetsState => [...babyBetsState, babybet]);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  const removeBaby = async babyId => {
    setErrorMessage(null);
    try {
      await babybets.deleteOne({ _id: babyId });
      const newBabyBetsState = babyBetsState.filter(baby => baby.id !== babyId);
      setBabyBetsState(newBabyBetsState);
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  };

  return {
    babyBetsState,
    addBabyBet,
    removeBaby,
    errorMessage
  };
};

export default useBabyBets;
