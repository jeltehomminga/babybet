import { useEffect, useState } from 'react'
import { babies } from '../stitch/mongodb'

const useBabies = userId => {
    const [babiesState, setBabiesState] = useState(null);

    useEffect(() => {
        const loadBabies = async () => {
            const babiesData = await babies.find({}, { limit: 1000 }).asArray();
            setBabiesState(babiesData)
          };

        loadBabies();
      }, []);

    const addBaby = async babyData => {
        const baby = { babyData, owner_id: userId}
        const result = await babies.insertOne(baby)
        setBabiesState(babiesState => ([...babiesState, result]))
    } 

    const removeBaby = async babyId => {
        await babies.deleteOne({ _id: babyId });
        const newBabiesState = babiesState.filter(baby => baby.id !== babyId);
        setBabiesState(newBabiesState)
      };

    return {
        babiesState,
        addBaby,
        removeBaby,
    }
} 

export default useBabies;