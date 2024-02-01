import { defineStore } from 'pinia'
import { collection, addDoc} from 'firebase/firestore'
import { db } from '../js/firebase'

const querriesCollectionRef = collection(db, 'querries')

export const useStoreQuerries = defineStore('storeQuerries', {
	state: () => {
        return {
            querries: []
        }
	},
	actions: {
		async addMessage(newMessage, personalData, selected, pick, dateVal, phoneNumber, conditions){

			await addDoc(querriesCollectionRef, {
				content: newMessage,
                personalData,
				selected,
				pick,
				dateValue: dateVal,
				phoneNumber,
				conditionsAccepted: conditions
			  });
        }

	}
})