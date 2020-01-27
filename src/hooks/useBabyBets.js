import { useEffect, useState } from "react";
import { babybets, users } from "../stitch/mongodb";

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
      const { insertedId } = await babybets.insertOne(babybet);
      const userUpdate = {
        "$push": {
          "bets": {
            "babyId": babyBetsData.babyId,
            "babyBetId": insertedId
          }
        }
      }
      const updateUserResult = await users.findOneAndUpdate({owner_id: userId}, userUpdate)
      console.log('updateUserResult', updateUserResult)
      debugger
      console.log('result babybet', insertedId)
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
