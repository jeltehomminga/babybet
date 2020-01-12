import { useEffect, useState } from 'react'
import { babybets } from '../stitch/mongodb'

const useBabyBets = userId => {
    const [babyBetsState, setBabyBetsState] = useState(null);

    useEffect(() => {
        const loadBabyBets = async () => {
            const babyBetsData = await babybets.find({}, { limit: 1000 }).asArray();
            setBabyBetsState(babyBetsData)
          };

        loadBabyBets();
      }, []);

    const addBabyBet = async babyBetsData => {
        debugger
        const babybet = { ...babyBetsData, owner_id: userId}
        const result = await babybets.insertOne(babybet)
        setBabyBetsState(babyBetsState => ([...babyBetsState, result]))
        debugger
    } 

    const removeBaby = async babyId => {
        await babybets.deleteOne({ _id: babyId });
        const newBabyBetsState = babyBetsState.filter(baby => baby.id !== babyId);
        setBabyBetsState(newBabyBetsState)
      };

    return {
        babyBetsState,
        addBabyBet,
        removeBaby,
    }
} 

export default useBabyBets;